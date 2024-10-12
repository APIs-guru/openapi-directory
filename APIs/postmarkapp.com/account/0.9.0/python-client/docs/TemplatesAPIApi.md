# openapi_client.TemplatesAPIApi

All URIs are relative to *http://api.postmarkapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**push_templates**](TemplatesAPIApi.md#push_templates) | **PUT** /templates/push | Push templates from one server to another


# **push_templates**
> TemplatesPushResponse push_templates(x_postmark_account_token, body)

Push templates from one server to another

### Example


```python
import openapi_client
from openapi_client.models.templates_push_model import TemplatesPushModel
from openapi_client.models.templates_push_response import TemplatesPushResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesAPIApi(api_client)
    x_postmark_account_token = 'x_postmark_account_token_example' # str | The token associated with the Account on which this request will operate.
    body = openapi_client.TemplatesPushModel() # TemplatesPushModel | 

    try:
        # Push templates from one server to another
        api_response = api_instance.push_templates(x_postmark_account_token, body)
        print("The response of TemplatesAPIApi->push_templates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesAPIApi->push_templates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_account_token** | **str**| The token associated with the Account on which this request will operate. | 
 **body** | [**TemplatesPushModel**](TemplatesPushModel.md)|  | 

### Return type

[**TemplatesPushResponse**](TemplatesPushResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.DialogApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dialog_open**](DialogApi.md#dialog_open) | **GET** /dialog.open | 


# **dialog_open**
> DialogOpenSchema dialog_open(token, dialog, trigger_id)



Open a dialog with a user

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.dialog_open_schema import DialogOpenSchema
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DialogApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `none`
    dialog = 'dialog_example' # str | The dialog definition. This must be a JSON-encoded string.
    trigger_id = 'trigger_id_example' # str | Exchange a trigger to post to the user.

    try:
        api_response = api_instance.dialog_open(token, dialog, trigger_id)
        print("The response of DialogApi->dialog_open:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DialogApi->dialog_open: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;none&#x60; | 
 **dialog** | **str**| The dialog definition. This must be a JSON-encoded string. | 
 **trigger_id** | **str**| Exchange a trigger to post to the user. | 

### Return type

[**DialogOpenSchema**](DialogOpenSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response is quite minimal. |  -  |
**0** | Typical error response, before getting to any possible validation errors. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


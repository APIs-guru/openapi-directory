# openapi_client.EmailsApi

All URIs are relative to *https://api.ideal-postcodes.co.uk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**email_validation**](EmailsApi.md#email_validation) | **GET** /emails | Email Validation


# **email_validation**
> EmailResponse email_validation(api_key, query)

Email Validation

Query for and validate email addresses. 

### Example


```python
import openapi_client
from openapi_client.models.email_response import EmailResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ideal-postcodes.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ideal-postcodes.co.uk/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EmailsApi(api_client)
    api_key = 'api_key_example' # str | 
    query = 'query_example' # str | Specifies the email address to validate

    try:
        # Email Validation
        api_response = api_instance.email_validation(api_key, query)
        print("The response of EmailsApi->email_validation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailsApi->email_validation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **query** | **str**| Specifies the email address to validate | 

### Return type

[**EmailResponse**](EmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


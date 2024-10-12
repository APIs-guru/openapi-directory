# openapi_client.DefaultApi

All URIs are relative to *https://api.nexmo.com/v1/redact*

Method | HTTP request | Description
------------- | ------------- | -------------
[**redact_message**](DefaultApi.md#redact_message) | **POST** /transaction | Redact a specific message


# **redact_message**
> redact_message(redact_transaction)

Redact a specific message



### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.redact_transaction import RedactTransaction
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/v1/redact
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/v1/redact"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    redact_transaction = openapi_client.RedactTransaction() # RedactTransaction | 

    try:
        # Redact a specific message
        api_instance.redact_message(redact_transaction)
    except Exception as e:
        print("Exception when calling DefaultApi->redact_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redact_transaction** | [**RedactTransaction**](RedactTransaction.md)|  | 

### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**401** | Authentication failure |  -  |
**403** | Authorisation denied |  -  |
**404** | No such record |  -  |
**422** | Invalid JSON body |  -  |
**429** | Rate Limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


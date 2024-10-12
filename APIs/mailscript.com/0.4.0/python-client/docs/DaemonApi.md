# openapi_client.DaemonApi

All URIs are relative to *https://api.mailscript.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_daemon_token**](DaemonApi.md#get_daemon_token) | **GET** /daemons/{daemon}/token | Get a token for opening a daemon connection


# **get_daemon_token**
> GetDaemonToken200Response get_daemon_token(daemon)

Get a token for opening a daemon connection

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.get_daemon_token200_response import GetDaemonToken200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mailscript.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mailscript.com/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DaemonApi(api_client)
    daemon = 'daemon_example' # str | name of Daemon

    try:
        # Get a token for opening a daemon connection
        api_response = api_instance.get_daemon_token(daemon)
        print("The response of DaemonApi->get_daemon_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DaemonApi->get_daemon_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **daemon** | **str**| name of Daemon | 

### Return type

[**GetDaemonToken200Response**](GetDaemonToken200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful get operation |  -  |
**400** | Failure |  -  |
**403** | Bad credentials |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


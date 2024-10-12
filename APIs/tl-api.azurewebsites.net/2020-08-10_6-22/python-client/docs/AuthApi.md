# openapi_client.AuthApi

All URIs are relative to *https://tl-api.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**auth_login**](AuthApi.md#auth_login) | **POST** /api/Auth/login | Authenticate and provide token for autherizations.             


# **auth_login**
> bytearray auth_login(login_dto)

Authenticate and provide token for autherizations.             

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.models.login_dto import LoginDTO
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://tl-api.azurewebsites.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://tl-api.azurewebsites.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthApi(api_client)
    login_dto = openapi_client.LoginDTO() # LoginDTO | Login Credentials

    try:
        # Authenticate and provide token for autherizations.             
        api_response = api_instance.auth_login(login_dto)
        print("The response of AuthApi->auth_login:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->auth_login: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login_dto** | [**LoginDTO**](LoginDTO.md)| Login Credentials | 

### Return type

**bytearray**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Authorizized with a new token or unauthorized request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


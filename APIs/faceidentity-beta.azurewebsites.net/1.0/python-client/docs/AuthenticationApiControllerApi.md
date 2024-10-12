# openapi_client.AuthenticationApiControllerApi

All URIs are relative to *http://faceidentity-beta.azurewebsites.net/api/v1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticate_user**](AuthenticationApiControllerApi.md#authenticate_user) | **POST** /authentication/customer/token | Get Token
[**register**](AuthenticationApiControllerApi.md#register) | **POST** /authentication/customer/registration | Customer Registration


# **authenticate_user**
> JwtResponse authenticate_user(login_user)

Get Token

### Example


```python
import openapi_client
from openapi_client.models.jwt_response import JwtResponse
from openapi_client.models.login_user import LoginUser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://faceidentity-beta.azurewebsites.net/api/v1.0.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://faceidentity-beta.azurewebsites.net/api/v1.0.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationApiControllerApi(api_client)
    login_user = openapi_client.LoginUser() # LoginUser | The LoginUser definition used to returns the token for authentication

    try:
        # Get Token
        api_response = api_instance.authenticate_user(login_user)
        print("The response of AuthenticationApiControllerApi->authenticate_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationApiControllerApi->authenticate_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login_user** | [**LoginUser**](LoginUser.md)| The LoginUser definition used to returns the token for authentication | 

### Return type

[**JwtResponse**](JwtResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**400** | Unexpected error |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **register**
> ResponseStatus register(register)

Customer Registration

### Example


```python
import openapi_client
from openapi_client.models.customer import Customer
from openapi_client.models.response_status import ResponseStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://faceidentity-beta.azurewebsites.net/api/v1.0.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://faceidentity-beta.azurewebsites.net/api/v1.0.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationApiControllerApi(api_client)
    register = openapi_client.Customer() # Customer | The RegistrationForm definition is used to register the customer

    try:
        # Customer Registration
        api_response = api_instance.register(register)
        print("The response of AuthenticationApiControllerApi->register:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationApiControllerApi->register: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **register** | [**Customer**](Customer.md)| The RegistrationForm definition is used to register the customer | 

### Return type

[**ResponseStatus**](ResponseStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**400** | Unexpected error |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


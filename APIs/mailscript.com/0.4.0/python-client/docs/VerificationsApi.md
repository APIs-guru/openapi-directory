# openapi_client.VerificationsApi

All URIs are relative to *https://api.mailscript.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_verification**](VerificationsApi.md#add_verification) | **POST** /verifications | Start verification process for external email address or sms number
[**get_all_verifications**](VerificationsApi.md#get_all_verifications) | **GET** /verifications | Get all verificats for the user
[**verify**](VerificationsApi.md#verify) | **POST** /verifications/{verification}/verify | Verify an email address or sms number with a code


# **add_verification**
> AddVerificationResponse add_verification(add_verification_request)

Start verification process for external email address or sms number

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.add_verification_request import AddVerificationRequest
from openapi_client.models.add_verification_response import AddVerificationResponse
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
    api_instance = openapi_client.VerificationsApi(api_client)
    add_verification_request = openapi_client.AddVerificationRequest() # AddVerificationRequest | Key body

    try:
        # Start verification process for external email address or sms number
        api_response = api_instance.add_verification(add_verification_request)
        print("The response of VerificationsApi->add_verification:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VerificationsApi->add_verification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **add_verification_request** | [**AddVerificationRequest**](AddVerificationRequest.md)| Key body | 

### Return type

[**AddVerificationResponse**](AddVerificationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |
**400** | Failure |  -  |
**403** | Bad credentials |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_verifications**
> GetAllVerificationsResponse get_all_verifications()

Get all verificats for the user

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.get_all_verifications_response import GetAllVerificationsResponse
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
    api_instance = openapi_client.VerificationsApi(api_client)

    try:
        # Get all verificats for the user
        api_response = api_instance.get_all_verifications()
        print("The response of VerificationsApi->get_all_verifications:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VerificationsApi->get_all_verifications: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetAllVerificationsResponse**](GetAllVerificationsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**403** | Bad credentials |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verify**
> verify(verification, verify_request)

Verify an email address or sms number with a code

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.verify_request import VerifyRequest
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
    api_instance = openapi_client.VerificationsApi(api_client)
    verification = 'verification_example' # str | ID of the verification entry
    verify_request = openapi_client.VerifyRequest() # VerifyRequest | Verify action body

    try:
        # Verify an email address or sms number with a code
        api_instance.verify(verification, verify_request)
    except Exception as e:
        print("Exception when calling VerificationsApi->verify: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verification** | **str**| ID of the verification entry | 
 **verify_request** | [**VerifyRequest**](VerifyRequest.md)| Verify action body | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Failure |  -  |
**403** | Not authorized or bad code |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


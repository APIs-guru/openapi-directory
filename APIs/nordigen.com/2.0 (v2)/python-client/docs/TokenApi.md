# openapi_client.TokenApi

All URIs are relative to *https://ob.nordigen.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**j_wt_obtain**](TokenApi.md#j_wt_obtain) | **POST** /api/v2/token/new/ | 
[**j_wt_refresh**](TokenApi.md#j_wt_refresh) | **POST** /api/v2/token/refresh/ | 


# **j_wt_obtain**
> SpectacularJWTObtain j_wt_obtain(jwt_obtain_pair_request)



Obtain JWT pair

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.models.jwt_obtain_pair_request import JWTObtainPairRequest
from openapi_client.models.spectacular_jwt_obtain import SpectacularJWTObtain
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ob.nordigen.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ob.nordigen.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): jwtAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TokenApi(api_client)
    jwt_obtain_pair_request = openapi_client.JWTObtainPairRequest() # JWTObtainPairRequest | 

    try:
        api_response = api_instance.j_wt_obtain(jwt_obtain_pair_request)
        print("The response of TokenApi->j_wt_obtain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokenApi->j_wt_obtain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt_obtain_pair_request** | [**JWTObtainPairRequest**](JWTObtainPairRequest.md)|  | 

### Return type

[**SpectacularJWTObtain**](SpectacularJWTObtain.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Obtain JWT response. |  -  |
**401** | Authentication failed |  -  |
**403** | IP Access denied |  -  |
**429** | Nordigen rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **j_wt_refresh**
> SpectacularJWTRefresh j_wt_refresh(jwt_refresh_request)



Refresh access token

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.models.jwt_refresh_request import JWTRefreshRequest
from openapi_client.models.spectacular_jwt_refresh import SpectacularJWTRefresh
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ob.nordigen.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ob.nordigen.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): jwtAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TokenApi(api_client)
    jwt_refresh_request = openapi_client.JWTRefreshRequest() # JWTRefreshRequest | 

    try:
        api_response = api_instance.j_wt_refresh(jwt_refresh_request)
        print("The response of TokenApi->j_wt_refresh:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokenApi->j_wt_refresh: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt_refresh_request** | [**JWTRefreshRequest**](JWTRefreshRequest.md)|  | 

### Return type

[**SpectacularJWTRefresh**](SpectacularJWTRefresh.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Refresh access token. |  -  |
**401** | Invalid token |  -  |
**403** | IP Access denied |  -  |
**429** | Nordigen rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.PaymentMethodsApi

All URIs are relative to *https://api.jumpseller.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payment_methods_id_json_get**](PaymentMethodsApi.md#payment_methods_id_json_get) | **GET** /payment_methods/{id}.json | Retrieve a single Payment Method.
[**payment_methods_json_get**](PaymentMethodsApi.md#payment_methods_json_get) | **GET** /payment_methods.json | Retrieve all Store&#39;s Payment Methods.


# **payment_methods_id_json_get**
> PaymentMethod payment_methods_id_json_get(login, authtoken, id)

Retrieve a single Payment Method.

### Example


```python
import openapi_client
from openapi_client.models.payment_method import PaymentMethod
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentMethodsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Payment Method

    try:
        # Retrieve a single Payment Method.
        api_response = api_instance.payment_methods_id_json_get(login, authtoken, id)
        print("The response of PaymentMethodsApi->payment_methods_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentMethodsApi->payment_methods_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Payment Method | 

### Return type

[**PaymentMethod**](PaymentMethod.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | PaymentMethod Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payment_methods_json_get**
> List[PaymentMethod] payment_methods_json_get(login, authtoken)

Retrieve all Store's Payment Methods.

### Example


```python
import openapi_client
from openapi_client.models.payment_method import PaymentMethod
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentMethodsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.

    try:
        # Retrieve all Store's Payment Methods.
        api_response = api_instance.payment_methods_json_get(login, authtoken)
        print("The response of PaymentMethodsApi->payment_methods_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentMethodsApi->payment_methods_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 

### Return type

[**List[PaymentMethod]**](PaymentMethod.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of Payment Methods |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


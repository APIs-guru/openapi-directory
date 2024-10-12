# openapi_client.PaymentMethodApi

All URIs are relative to *https://go.netlicensing.io/core/v2/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_payment_method**](PaymentMethodApi.md#get_payment_method) | **GET** /paymentmethod/{paymentMethodNumber} | Get Payment Method
[**list_payment_methods**](PaymentMethodApi.md#list_payment_methods) | **GET** /paymentmethod | List Payment Methods
[**update_payment_method**](PaymentMethodApi.md#update_payment_method) | **POST** /paymentmethod/{paymentMethodNumber} | Update Payment Method


# **get_payment_method**
> Netlicensing get_payment_method(payment_method_number)

Get Payment Method

Return a Payment Method info by 'paymentMethodNumber'

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.netlicensing import Netlicensing
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://go.netlicensing.io/core/v2/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://go.netlicensing.io/core/v2/rest"
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
    api_instance = openapi_client.PaymentMethodApi(api_client)
    payment_method_number = 'payment_method_number_example' # str | Payment method number

    try:
        # Get Payment Method
        api_response = api_instance.get_payment_method(payment_method_number)
        print("The response of PaymentMethodApi->get_payment_method:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentMethodApi->get_payment_method: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment_method_number** | **str**| Payment method number | 

### Return type

[**Netlicensing**](Netlicensing.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request |  -  |
**400** | Malformed or illegal request |  -  |
**403** | Access is denied |  -  |
**404** | Resource not found |  -  |
**500** | Internal service error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_payment_methods**
> List[Netlicensing] list_payment_methods()

List Payment Methods

Return a list of all Payment Methods for the current Vendor

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.netlicensing import Netlicensing
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://go.netlicensing.io/core/v2/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://go.netlicensing.io/core/v2/rest"
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
    api_instance = openapi_client.PaymentMethodApi(api_client)

    try:
        # List Payment Methods
        api_response = api_instance.list_payment_methods()
        print("The response of PaymentMethodApi->list_payment_methods:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentMethodApi->list_payment_methods: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Netlicensing]**](Netlicensing.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request |  -  |
**400** | Malformed or illegal request |  -  |
**403** | Access is denied |  -  |
**404** | Resource not found |  -  |
**500** | Internal service error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_payment_method**
> Netlicensing update_payment_method(payment_method_number, active=active, paypal_subject=paypal_subject)

Update Payment Method

Sets the provided properties to a Payment Method. Return an updated Payment Method

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.netlicensing import Netlicensing
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://go.netlicensing.io/core/v2/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://go.netlicensing.io/core/v2/rest"
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
    api_instance = openapi_client.PaymentMethodApi(api_client)
    payment_method_number = 'payment_method_number_example' # str | Payment method number
    active = True # bool | If set to 'false', the Payment Method is disabled. (optional)
    paypal_subject = 'paypal_subject_example' # str | The e-mail address of the PayPal account for which you are making the API calls. (optional)

    try:
        # Update Payment Method
        api_response = api_instance.update_payment_method(payment_method_number, active=active, paypal_subject=paypal_subject)
        print("The response of PaymentMethodApi->update_payment_method:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentMethodApi->update_payment_method: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment_method_number** | **str**| Payment method number | 
 **active** | **bool**| If set to &#39;false&#39;, the Payment Method is disabled. | [optional] 
 **paypal_subject** | **str**| The e-mail address of the PayPal account for which you are making the API calls. | [optional] 

### Return type

[**Netlicensing**](Netlicensing.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request |  -  |
**400** | Malformed or illegal request |  -  |
**403** | Access is denied |  -  |
**404** | Resource not found |  -  |
**500** | Internal service error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


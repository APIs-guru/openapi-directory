# openapi_client.PaymentsApi

All URIs are relative to *https://api.clever-cloud.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_organisations_id_payments_billings_bid_1**](PaymentsApi.md#delete_organisations_id_payments_billings_bid_1) | **DELETE** /organisations/{id}/payments/billings/{bid} | 
[**delete_organisations_id_payments_recurring_1**](PaymentsApi.md#delete_organisations_id_payments_recurring_1) | **DELETE** /organisations/{id}/payments/recurring | 
[**delete_self_payments_billings_bid_0**](PaymentsApi.md#delete_self_payments_billings_bid_0) | **DELETE** /self/payments/billings/{bid} | 
[**delete_self_payments_methods_mid_0**](PaymentsApi.md#delete_self_payments_methods_mid_0) | **DELETE** /self/payments/methods/{mId} | 
[**delete_self_payments_recurring_0**](PaymentsApi.md#delete_self_payments_recurring_0) | **DELETE** /self/payments/recurring | 
[**get_organisations_id_payments_billings_1**](PaymentsApi.md#get_organisations_id_payments_billings_1) | **GET** /organisations/{id}/payments/billings | 
[**get_organisations_id_payments_billings_bid_1**](PaymentsApi.md#get_organisations_id_payments_billings_bid_1) | **GET** /organisations/{id}/payments/billings/{bid} | 
[**get_organisations_id_payments_billings_bid_pdf_1**](PaymentsApi.md#get_organisations_id_payments_billings_bid_pdf_1) | **GET** /organisations/{id}/payments/billings/{bid}.pdf | 
[**get_organisations_id_payments_full_price_price_1**](PaymentsApi.md#get_organisations_id_payments_full_price_price_1) | **GET** /organisations/{id}/payments/fullprice/{price} | 
[**get_payments_coupons_name_0**](PaymentsApi.md#get_payments_coupons_name_0) | **GET** /payments/coupons/{name} | 
[**get_payments_providers_0**](PaymentsApi.md#get_payments_providers_0) | **GET** /payments/providers | 
[**get_payments_tokens_stripe_0**](PaymentsApi.md#get_payments_tokens_stripe_0) | **GET** /payments/tokens/stripe | 
[**get_self_payments_billings_0**](PaymentsApi.md#get_self_payments_billings_0) | **GET** /self/payments/billings | 
[**get_self_payments_billings_bid_0**](PaymentsApi.md#get_self_payments_billings_bid_0) | **GET** /self/payments/billings/{bid} | 
[**get_self_payments_billings_bid_pdf_0**](PaymentsApi.md#get_self_payments_billings_bid_pdf_0) | **GET** /self/payments/billings/{bid}.pdf | 
[**get_self_payments_fullprice_price_0**](PaymentsApi.md#get_self_payments_fullprice_price_0) | **GET** /self/payments/fullprice/{price} | 
[**get_self_payments_methods_0**](PaymentsApi.md#get_self_payments_methods_0) | **GET** /self/payments/methods | 
[**organisations_id_payments_billings_unpaid_get_1**](PaymentsApi.md#organisations_id_payments_billings_unpaid_get_1) | **GET** /organisations/{id}/payments/billings/unpaid | 
[**organisations_id_payments_methods_default_get_1**](PaymentsApi.md#organisations_id_payments_methods_default_get_1) | **GET** /organisations/{id}/payments/methods/default | 
[**organisations_id_payments_methods_default_put_1**](PaymentsApi.md#organisations_id_payments_methods_default_put_1) | **PUT** /organisations/{id}/payments/methods/default | 
[**organisations_id_payments_methods_get_1**](PaymentsApi.md#organisations_id_payments_methods_get_1) | **GET** /organisations/{id}/payments/methods | 
[**organisations_id_payments_methods_mid_delete_1**](PaymentsApi.md#organisations_id_payments_methods_mid_delete_1) | **DELETE** /organisations/{id}/payments/methods/{mId} | 
[**organisations_id_payments_methods_post_1**](PaymentsApi.md#organisations_id_payments_methods_post_1) | **POST** /organisations/{id}/payments/methods | 
[**organisations_id_payments_monthlyinvoice_get_1**](PaymentsApi.md#organisations_id_payments_monthlyinvoice_get_1) | **GET** /organisations/{id}/payments/monthlyinvoice | 
[**organisations_id_payments_monthlyinvoice_maxcredit_put_1**](PaymentsApi.md#organisations_id_payments_monthlyinvoice_maxcredit_put_1) | **PUT** /organisations/{id}/payments/monthlyinvoice/maxcredit | 
[**organisations_id_payments_recurring_get_1**](PaymentsApi.md#organisations_id_payments_recurring_get_1) | **GET** /organisations/{id}/payments/recurring | 
[**payments_assets_pay_button_token_button_png_get_0**](PaymentsApi.md#payments_assets_pay_button_token_button_png_get_0) | **GET** /payments/assets/pay_button/{token}/button.png | 
[**payments_bid_end_stripe_post_0**](PaymentsApi.md#payments_bid_end_stripe_post_0) | **POST** /payments/{bid}/end/stripe | 
[**post_organisations_id_payments_billings_1**](PaymentsApi.md#post_organisations_id_payments_billings_1) | **POST** /organisations/{id}/payments/billings | 
[**post_self_payments_billings_0**](PaymentsApi.md#post_self_payments_billings_0) | **POST** /self/payments/billings | 
[**post_self_payments_methods_0**](PaymentsApi.md#post_self_payments_methods_0) | **POST** /self/payments/methods | 
[**put_organisations_id_payments_billings_bid_1**](PaymentsApi.md#put_organisations_id_payments_billings_bid_1) | **PUT** /organisations/{id}/payments/billings/{bid} | 
[**put_self_payments_billings_bid_0**](PaymentsApi.md#put_self_payments_billings_bid_0) | **PUT** /self/payments/billings/{bid} | 
[**self_payments_methods_default_get_0**](PaymentsApi.md#self_payments_methods_default_get_0) | **GET** /self/payments/methods/default | 
[**self_payments_methods_default_put_0**](PaymentsApi.md#self_payments_methods_default_put_0) | **PUT** /self/payments/methods/default | 
[**self_payments_monthlyinvoice_get_0**](PaymentsApi.md#self_payments_monthlyinvoice_get_0) | **GET** /self/payments/monthlyinvoice | 
[**self_payments_monthlyinvoice_maxcredit_put_0**](PaymentsApi.md#self_payments_monthlyinvoice_maxcredit_put_0) | **PUT** /self/payments/monthlyinvoice/maxcredit | 
[**self_payments_recurring_get_0**](PaymentsApi.md#self_payments_recurring_get_0) | **GET** /self/payments/recurring | 
[**self_payments_tokens_stripe_get_0**](PaymentsApi.md#self_payments_tokens_stripe_get_0) | **GET** /self/payments/tokens/stripe | 


# **delete_organisations_id_payments_billings_bid_1**
> delete_organisations_id_payments_billings_bid_1(id, bid)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    id = 'id_example' # str | 
    bid = 'bid_example' # str | 

    try:
        api_instance.delete_organisations_id_payments_billings_bid_1(id, bid)
    except Exception as e:
        print("Exception when calling PaymentsApi->delete_organisations_id_payments_billings_bid_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **bid** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deletePurchaseOrder |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organisations_id_payments_recurring_1**
> delete_organisations_id_payments_recurring_1(id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.delete_organisations_id_payments_recurring_1(id)
    except Exception as e:
        print("Exception when calling PaymentsApi->delete_organisations_id_payments_recurring_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deleteRecurrentPayment |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self_payments_billings_bid_0**
> delete_self_payments_billings_bid_0(bid)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    bid = 'bid_example' # str | 

    try:
        api_instance.delete_self_payments_billings_bid_0(bid)
    except Exception as e:
        print("Exception when calling PaymentsApi->delete_self_payments_billings_bid_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bid** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deletePurchaseOrder |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self_payments_methods_mid_0**
> delete_self_payments_methods_mid_0(m_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    m_id = 'm_id_example' # str | 

    try:
        api_instance.delete_self_payments_methods_mid_0(m_id)
    except Exception as e:
        print("Exception when calling PaymentsApi->delete_self_payments_methods_mid_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **m_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deleteUserCard |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self_payments_recurring_0**
> delete_self_payments_recurring_0()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)

    try:
        api_instance.delete_self_payments_recurring_0()
    except Exception as e:
        print("Exception when calling PaymentsApi->delete_self_payments_recurring_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deleteRecurrentPayment |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_payments_billings_1**
> get_organisations_id_payments_billings_1(id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.get_organisations_id_payments_billings_1(id)
    except Exception as e:
        print("Exception when calling PaymentsApi->get_organisations_id_payments_billings_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getInvoices |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_payments_billings_bid_1**
> get_organisations_id_payments_billings_bid_1(id, bid)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    id = 'id_example' # str | 
    bid = 'bid_example' # str | 

    try:
        api_instance.get_organisations_id_payments_billings_bid_1(id, bid)
    except Exception as e:
        print("Exception when calling PaymentsApi->get_organisations_id_payments_billings_bid_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **bid** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getInvoice |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_payments_billings_bid_pdf_1**
> get_organisations_id_payments_billings_bid_pdf_1(id, bid, token=token)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    id = 'id_example' # str | 
    bid = 'bid_example' # str | 
    token = 'token_example' # str |  (optional)

    try:
        api_instance.get_organisations_id_payments_billings_bid_pdf_1(id, bid, token=token)
    except Exception as e:
        print("Exception when calling PaymentsApi->get_organisations_id_payments_billings_bid_pdf_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **bid** | **str**|  | 
 **token** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getPdfInvoice |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_payments_full_price_price_1**
> get_organisations_id_payments_full_price_price_1(id, price)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    id = 'id_example' # str | 
    price = 'price_example' # str | 

    try:
        api_instance.get_organisations_id_payments_full_price_price_1(id, price)
    except Exception as e:
        print("Exception when calling PaymentsApi->get_organisations_id_payments_full_price_price_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **price** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | priceWithTax |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_payments_coupons_name_0**
> get_payments_coupons_name_0(name)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    name = 'name_example' # str | 

    try:
        api_instance.get_payments_coupons_name_0(name)
    except Exception as e:
        print("Exception when calling PaymentsApi->get_payments_coupons_name_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getCoupon |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_payments_providers_0**
> List[PaymentProvider] get_payments_providers_0()



### Example


```python
import openapi_client
from openapi_client.models.payment_provider import PaymentProvider
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)

    try:
        api_response = api_instance.get_payments_providers_0()
        print("The response of PaymentsApi->get_payments_providers_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->get_payments_providers_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[PaymentProvider]**](PaymentProvider.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAvailablePaymentProviders |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_payments_tokens_stripe_0**
> get_payments_tokens_stripe_0()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)

    try:
        api_instance.get_payments_tokens_stripe_0()
    except Exception as e:
        print("Exception when calling PaymentsApi->get_payments_tokens_stripe_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getStripeToken |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_payments_billings_0**
> get_self_payments_billings_0()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)

    try:
        api_instance.get_self_payments_billings_0()
    except Exception as e:
        print("Exception when calling PaymentsApi->get_self_payments_billings_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getInvoices |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_payments_billings_bid_0**
> get_self_payments_billings_bid_0(bid)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    bid = 'bid_example' # str | 

    try:
        api_instance.get_self_payments_billings_bid_0(bid)
    except Exception as e:
        print("Exception when calling PaymentsApi->get_self_payments_billings_bid_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bid** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getInvoice |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_payments_billings_bid_pdf_0**
> get_self_payments_billings_bid_pdf_0(bid, token=token)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    bid = 'bid_example' # str | 
    token = 'token_example' # str |  (optional)

    try:
        api_instance.get_self_payments_billings_bid_pdf_0(bid, token=token)
    except Exception as e:
        print("Exception when calling PaymentsApi->get_self_payments_billings_bid_pdf_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bid** | **str**|  | 
 **token** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getPdfInvoice |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_payments_fullprice_price_0**
> get_self_payments_fullprice_price_0(price)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    price = 'price_example' # str | 

    try:
        api_instance.get_self_payments_fullprice_price_0(price)
    except Exception as e:
        print("Exception when calling PaymentsApi->get_self_payments_fullprice_price_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **price** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | priceWithTax |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_payments_methods_0**
> get_self_payments_methods_0()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)

    try:
        api_instance.get_self_payments_methods_0()
    except Exception as e:
        print("Exception when calling PaymentsApi->get_self_payments_methods_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getUserPaymentMethods |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_payments_billings_unpaid_get_1**
> organisations_id_payments_billings_unpaid_get_1(id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_payments_billings_unpaid_get_1(id)
    except Exception as e:
        print("Exception when calling PaymentsApi->organisations_id_payments_billings_unpaid_get_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_payments_methods_default_get_1**
> organisations_id_payments_methods_default_get_1(id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_payments_methods_default_get_1(id)
    except Exception as e:
        print("Exception when calling PaymentsApi->organisations_id_payments_methods_default_get_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_payments_methods_default_put_1**
> organisations_id_payments_methods_default_put_1(id, payment_data)



### Example


```python
import openapi_client
from openapi_client.models.payment_data import PaymentData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    id = 'id_example' # str | 
    payment_data = openapi_client.PaymentData() # PaymentData | 

    try:
        api_instance.organisations_id_payments_methods_default_put_1(id, payment_data)
    except Exception as e:
        print("Exception when calling PaymentsApi->organisations_id_payments_methods_default_put_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **payment_data** | [**PaymentData**](PaymentData.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_payments_methods_get_1**
> organisations_id_payments_methods_get_1(id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_payments_methods_get_1(id)
    except Exception as e:
        print("Exception when calling PaymentsApi->organisations_id_payments_methods_get_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_payments_methods_mid_delete_1**
> organisations_id_payments_methods_mid_delete_1(m_id, id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    m_id = 'm_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_payments_methods_mid_delete_1(m_id, id)
    except Exception as e:
        print("Exception when calling PaymentsApi->organisations_id_payments_methods_mid_delete_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **m_id** | **str**|  | 
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_payments_methods_post_1**
> organisations_id_payments_methods_post_1(id, body)



### Example


```python
import openapi_client
from openapi_client.models.body import Body
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    id = 'id_example' # str | 
    body = openapi_client.Body() # Body | 

    try:
        api_instance.organisations_id_payments_methods_post_1(id, body)
    except Exception as e:
        print("Exception when calling PaymentsApi->organisations_id_payments_methods_post_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **body** | [**Body**](Body.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_payments_monthlyinvoice_get_1**
> organisations_id_payments_monthlyinvoice_get_1(id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_payments_monthlyinvoice_get_1(id)
    except Exception as e:
        print("Exception when calling PaymentsApi->organisations_id_payments_monthlyinvoice_get_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_payments_monthlyinvoice_maxcredit_put_1**
> organisations_id_payments_monthlyinvoice_maxcredit_put_1(id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_payments_monthlyinvoice_maxcredit_put_1(id)
    except Exception as e:
        print("Exception when calling PaymentsApi->organisations_id_payments_monthlyinvoice_maxcredit_put_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_payments_recurring_get_1**
> organisations_id_payments_recurring_get_1(id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_payments_recurring_get_1(id)
    except Exception as e:
        print("Exception when calling PaymentsApi->organisations_id_payments_recurring_get_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payments_assets_pay_button_token_button_png_get_0**
> payments_assets_pay_button_token_button_png_get_0(token)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    token = 'token_example' # str | 

    try:
        api_instance.payments_assets_pay_button_token_button_png_get_0(token)
    except Exception as e:
        print("Exception when calling PaymentsApi->payments_assets_pay_button_token_button_png_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payments_bid_end_stripe_post_0**
> payments_bid_end_stripe_post_0(bid)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    bid = 'bid_example' # str | 

    try:
        api_instance.payments_bid_end_stripe_post_0(bid)
    except Exception as e:
        print("Exception when calling PaymentsApi->payments_bid_end_stripe_post_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bid** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | endPaymentWithStripe |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_organisations_id_payments_billings_1**
> post_organisations_id_payments_billings_1(id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.post_organisations_id_payments_billings_1(id)
    except Exception as e:
        print("Exception when calling PaymentsApi->post_organisations_id_payments_billings_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | buyDrops |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_self_payments_billings_0**
> post_self_payments_billings_0()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)

    try:
        api_instance.post_self_payments_billings_0()
    except Exception as e:
        print("Exception when calling PaymentsApi->post_self_payments_billings_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | buyDrops |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_self_payments_methods_0**
> post_self_payments_methods_0()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)

    try:
        api_instance.post_self_payments_methods_0()
    except Exception as e:
        print("Exception when calling PaymentsApi->post_self_payments_methods_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | addUserMethod |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_organisations_id_payments_billings_bid_1**
> put_organisations_id_payments_billings_bid_1(id, bid)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    id = 'id_example' # str | 
    bid = 'bid_example' # str | 

    try:
        api_instance.put_organisations_id_payments_billings_bid_1(id, bid)
    except Exception as e:
        print("Exception when calling PaymentsApi->put_organisations_id_payments_billings_bid_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **bid** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | choosePaymentProvider |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_self_payments_billings_bid_0**
> put_self_payments_billings_bid_0(bid)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    bid = 'bid_example' # str | 

    try:
        api_instance.put_self_payments_billings_bid_0(bid)
    except Exception as e:
        print("Exception when calling PaymentsApi->put_self_payments_billings_bid_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bid** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | choosePaymentProvider |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_payments_methods_default_get_0**
> self_payments_methods_default_get_0()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)

    try:
        api_instance.self_payments_methods_default_get_0()
    except Exception as e:
        print("Exception when calling PaymentsApi->self_payments_methods_default_get_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_payments_methods_default_put_0**
> self_payments_methods_default_put_0()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)

    try:
        api_instance.self_payments_methods_default_put_0()
    except Exception as e:
        print("Exception when calling PaymentsApi->self_payments_methods_default_put_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_payments_monthlyinvoice_get_0**
> self_payments_monthlyinvoice_get_0()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)

    try:
        api_instance.self_payments_monthlyinvoice_get_0()
    except Exception as e:
        print("Exception when calling PaymentsApi->self_payments_monthlyinvoice_get_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_payments_monthlyinvoice_maxcredit_put_0**
> self_payments_monthlyinvoice_maxcredit_put_0()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)

    try:
        api_instance.self_payments_monthlyinvoice_maxcredit_put_0()
    except Exception as e:
        print("Exception when calling PaymentsApi->self_payments_monthlyinvoice_maxcredit_put_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_payments_recurring_get_0**
> self_payments_recurring_get_0()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)

    try:
        api_instance.self_payments_recurring_get_0()
    except Exception as e:
        print("Exception when calling PaymentsApi->self_payments_recurring_get_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_payments_tokens_stripe_get_0**
> self_payments_tokens_stripe_get_0()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)

    try:
        api_instance.self_payments_tokens_stripe_get_0()
    except Exception as e:
        print("Exception when calling PaymentsApi->self_payments_tokens_stripe_get_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


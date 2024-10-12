# openapi_client.PaymentMethodsApi

All URIs are relative to *https://api.openfintech.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payment_methods_get**](PaymentMethodsApi.md#payment_methods_get) | **GET** /payment-methods | List of payment methods
[**payment_methods_id_get**](PaymentMethodsApi.md#payment_methods_id_get) | **GET** /payment-methods/{id} | Payment method by ID


# **payment_methods_get**
> PaymentMethodsResponse payment_methods_get(page_number=page_number, page_size=page_size, filter_search=filter_search, filter_name=filter_name, filter_code=filter_code, filter_processor_name=filter_processor_name, filter_category=filter_category, sort=sort)

List of payment methods

Returns list of payment methods. Each object contains information about payment method such as name and category, also related link to payment method issuer (which processing it). 

### Example


```python
import openapi_client
from openapi_client.models.payment_methods_response import PaymentMethodsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.openfintech.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.openfintech.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentMethodsApi(api_client)
    page_number = 56 # int | Current page number. (optional)
    page_size = 56 # int | Page size.<br>*Default value: 100*  (optional)
    filter_search = 'filter_search_example' # str | Full text search with id, name, code, category. (optional)
    filter_name = 'filter_name_example' # str | Filtering by name. (optional)
    filter_code = 'filter_code_example' # str | Filtering by code. (optional)
    filter_processor_name = 'filter_processor_name_example' # str | Filtering by processor_name. (optional)
    filter_category = ['filter_category_example'] # List[str] | Filtering by category. (optional)
    sort = ['sort_example'] # List[str] | Sort params:<br>  | ASC | DESC | |-----|------| | name | -name | | code | -code | | processor_name | -processor_name | | category | -category |  (optional)

    try:
        # List of payment methods
        api_response = api_instance.payment_methods_get(page_number=page_number, page_size=page_size, filter_search=filter_search, filter_name=filter_name, filter_code=filter_code, filter_processor_name=filter_processor_name, filter_category=filter_category, sort=sort)
        print("The response of PaymentMethodsApi->payment_methods_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentMethodsApi->payment_methods_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_number** | **int**| Current page number. | [optional] 
 **page_size** | **int**| Page size.&lt;br&gt;*Default value: 100*  | [optional] 
 **filter_search** | **str**| Full text search with id, name, code, category. | [optional] 
 **filter_name** | **str**| Filtering by name. | [optional] 
 **filter_code** | **str**| Filtering by code. | [optional] 
 **filter_processor_name** | **str**| Filtering by processor_name. | [optional] 
 **filter_category** | [**List[str]**](str.md)| Filtering by category. | [optional] 
 **sort** | [**List[str]**](str.md)| Sort params:&lt;br&gt;  | ASC | DESC | |-----|------| | name | -name | | code | -code | | processor_name | -processor_name | | category | -category |  | [optional] 

### Return type

[**PaymentMethodsResponse**](PaymentMethodsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of payment methods. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payment_methods_id_get**
> PaymentMethodResponse payment_methods_id_get(id)

Payment method by ID

Returns payment method with specific ID. 

### Example


```python
import openapi_client
from openapi_client.models.payment_method_response import PaymentMethodResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.openfintech.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.openfintech.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentMethodsApi(api_client)
    id = 'id_example' # str | Unique ID.

    try:
        # Payment method by ID
        api_response = api_instance.payment_methods_id_get(id)
        print("The response of PaymentMethodsApi->payment_methods_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentMethodsApi->payment_methods_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Unique ID. | 

### Return type

[**PaymentMethodResponse**](PaymentMethodResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment method information. |  -  |
**404** | Payment method ID is not valid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


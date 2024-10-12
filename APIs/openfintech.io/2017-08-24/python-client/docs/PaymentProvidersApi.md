# openapi_client.PaymentProvidersApi

All URIs are relative to *https://api.openfintech.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payment_providers_get**](PaymentProvidersApi.md#payment_providers_get) | **GET** /payment-providers | List of payment providers
[**payment_providers_id_get**](PaymentProvidersApi.md#payment_providers_id_get) | **GET** /payment-providers/{id} | Payment provider by ID


# **payment_providers_get**
> PaymentProvidersResponse payment_providers_get(page_number=page_number, page_size=page_size, filter_search=filter_search, filter_name=filter_name, filter_code=filter_code, filter_types=filter_types, filter_sales_channels=filter_sales_channels, filter_features=filter_features, sort=sort)

List of payment providers

A payment service provider (PSP) offers shops online services for accepting electronic payments by a variety of payment methods.<br> Endpoint returns list of PSPs. Each object contains: name, type, supported features and sales channels, also related link to available payment methods and main organization. 

### Example


```python
import openapi_client
from openapi_client.models.payment_providers_response import PaymentProvidersResponse
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
    api_instance = openapi_client.PaymentProvidersApi(api_client)
    page_number = 56 # int | Current page number. (optional)
    page_size = 56 # int | Page size.<br>*Default value: 100*  (optional)
    filter_search = 'filter_search_example' # str | Full text search with id, code, name. (optional)
    filter_name = 'filter_name_example' # str | Filtering by name. (optional)
    filter_code = 'filter_code_example' # str | Filtering by code. (optional)
    filter_types = ['filter_types_example'] # List[str] | Filtering by types. (optional)
    filter_sales_channels = ['filter_sales_channels_example'] # List[str] | Filtering by sales channels. (optional)
    filter_features = ['filter_features_example'] # List[str] | Filtering by features. (optional)
    sort = ['sort_example'] # List[str] | Sort params:<br>  | ASC | DESC | |-----|------| | name | -name | | code | -code |  (optional)

    try:
        # List of payment providers
        api_response = api_instance.payment_providers_get(page_number=page_number, page_size=page_size, filter_search=filter_search, filter_name=filter_name, filter_code=filter_code, filter_types=filter_types, filter_sales_channels=filter_sales_channels, filter_features=filter_features, sort=sort)
        print("The response of PaymentProvidersApi->payment_providers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentProvidersApi->payment_providers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_number** | **int**| Current page number. | [optional] 
 **page_size** | **int**| Page size.&lt;br&gt;*Default value: 100*  | [optional] 
 **filter_search** | **str**| Full text search with id, code, name. | [optional] 
 **filter_name** | **str**| Filtering by name. | [optional] 
 **filter_code** | **str**| Filtering by code. | [optional] 
 **filter_types** | [**List[str]**](str.md)| Filtering by types. | [optional] 
 **filter_sales_channels** | [**List[str]**](str.md)| Filtering by sales channels. | [optional] 
 **filter_features** | [**List[str]**](str.md)| Filtering by features. | [optional] 
 **sort** | [**List[str]**](str.md)| Sort params:&lt;br&gt;  | ASC | DESC | |-----|------| | name | -name | | code | -code |  | [optional] 

### Return type

[**PaymentProvidersResponse**](PaymentProvidersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of Payment providers. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payment_providers_id_get**
> PaymentProviderResponse payment_providers_id_get(id)

Payment provider by ID

Returns payment provider with specific ID. 

### Example


```python
import openapi_client
from openapi_client.models.payment_provider_response import PaymentProviderResponse
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
    api_instance = openapi_client.PaymentProvidersApi(api_client)
    id = 'id_example' # str | Unique ID.

    try:
        # Payment provider by ID
        api_response = api_instance.payment_providers_id_get(id)
        print("The response of PaymentProvidersApi->payment_providers_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentProvidersApi->payment_providers_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Unique ID. | 

### Return type

[**PaymentProviderResponse**](PaymentProviderResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment provider. |  -  |
**404** | Payment provider ID is not valid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


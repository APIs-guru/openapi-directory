# openapi_client.CurrenciesApi

All URIs are relative to *https://api.openfintech.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**currencies_get**](CurrenciesApi.md#currencies_get) | **GET** /currencies | List of currencies
[**currencies_id_get**](CurrenciesApi.md#currencies_id_get) | **GET** /currencies/{id} | Currency by ID


# **currencies_get**
> CurrenciesResponse currencies_get(page_number=page_number, page_size=page_size, filter_search=filter_search, filter_code_iso_alpha3=filter_code_iso_alpha3, filter_code_iso_numeric3=filter_code_iso_numeric3, filter_code_estandards_alpha=filter_code_estandards_alpha, filter_currency_type=filter_currency_type, filter_category=filter_category, sort=sort)

List of currencies

Returns all available currencies. 

### Example


```python
import openapi_client
from openapi_client.models.currencies_response import CurrenciesResponse
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
    api_instance = openapi_client.CurrenciesApi(api_client)
    page_number = 56 # int | Current page number. (optional)
    page_size = 56 # int | Page size.<br>*Default value: 100*  (optional)
    filter_search = 'filter_search_example' # str | Full text search with name, code, type, code_iso_alpha3, code_jsons_alpha, code_estandards_alpha, category. (optional)
    filter_code_iso_alpha3 = 'filter_code_iso_alpha3_example' # str | Filtering by ISO code. (optional)
    filter_code_iso_numeric3 = 56 # int | Filtering by ISO number. (optional)
    filter_code_estandards_alpha = 'filter_code_estandards_alpha_example' # str | Filtering by estandards code. (optional)
    filter_currency_type = ['filter_currency_type_example'] # List[str] | Filtration by currency type. (optional)
    filter_category = ['filter_category_example'] # List[str] | Filtration by category. (optional)
    sort = ['sort_example'] # List[str] | Sort params:<br>  | ASC | DESC | |-----|------| | name | -name | | type | -type | | category | -category | | code | -code | | code_iso_alpha3 | -code_iso_alpha3 | | code_iso_numeric3 | -code_iso_numeric3 | | code_estandards_alpha | -code_estandards_alpha |  (optional)

    try:
        # List of currencies
        api_response = api_instance.currencies_get(page_number=page_number, page_size=page_size, filter_search=filter_search, filter_code_iso_alpha3=filter_code_iso_alpha3, filter_code_iso_numeric3=filter_code_iso_numeric3, filter_code_estandards_alpha=filter_code_estandards_alpha, filter_currency_type=filter_currency_type, filter_category=filter_category, sort=sort)
        print("The response of CurrenciesApi->currencies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CurrenciesApi->currencies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_number** | **int**| Current page number. | [optional] 
 **page_size** | **int**| Page size.&lt;br&gt;*Default value: 100*  | [optional] 
 **filter_search** | **str**| Full text search with name, code, type, code_iso_alpha3, code_jsons_alpha, code_estandards_alpha, category. | [optional] 
 **filter_code_iso_alpha3** | **str**| Filtering by ISO code. | [optional] 
 **filter_code_iso_numeric3** | **int**| Filtering by ISO number. | [optional] 
 **filter_code_estandards_alpha** | **str**| Filtering by estandards code. | [optional] 
 **filter_currency_type** | [**List[str]**](str.md)| Filtration by currency type. | [optional] 
 **filter_category** | [**List[str]**](str.md)| Filtration by category. | [optional] 
 **sort** | [**List[str]**](str.md)| Sort params:&lt;br&gt;  | ASC | DESC | |-----|------| | name | -name | | type | -type | | category | -category | | code | -code | | code_iso_alpha3 | -code_iso_alpha3 | | code_iso_numeric3 | -code_iso_numeric3 | | code_estandards_alpha | -code_estandards_alpha |  | [optional] 

### Return type

[**CurrenciesResponse**](CurrenciesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of currencies. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **currencies_id_get**
> CurrencyResponse currencies_id_get(id)

Currency by ID

Returns currency with specific ID. 

### Example


```python
import openapi_client
from openapi_client.models.currency_response import CurrencyResponse
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
    api_instance = openapi_client.CurrenciesApi(api_client)
    id = 'id_example' # str | Unique ID.

    try:
        # Currency by ID
        api_response = api_instance.currencies_id_get(id)
        print("The response of CurrenciesApi->currencies_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CurrenciesApi->currencies_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Unique ID. | 

### Return type

[**CurrencyResponse**](CurrencyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Currency information. |  -  |
**404** | Currency ID is not valid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


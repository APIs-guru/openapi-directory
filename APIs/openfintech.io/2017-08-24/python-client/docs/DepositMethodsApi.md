# openapi_client.DepositMethodsApi

All URIs are relative to *https://api.openfintech.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deposit_methods_get**](DepositMethodsApi.md#deposit_methods_get) | **GET** /deposit-methods | List of deposit methods
[**deposit_methods_id_get**](DepositMethodsApi.md#deposit_methods_id_get) | **GET** /deposit-methods/{id} | Deposit method by ID


# **deposit_methods_get**
> DepositMethodsResponse deposit_methods_get(page_number=page_number, page_size=page_size, filter_search=filter_search, filter_name=filter_name, filter_code=filter_code, filter_processor_name=filter_processor_name, filter_category=filter_category, sort=sort)

List of deposit methods

Returns list of deposit methods. Each object contains information about deposit method such as name and category, also related link to deposit method issuer (which processing it). 

### Example


```python
import openapi_client
from openapi_client.models.deposit_methods_response import DepositMethodsResponse
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
    api_instance = openapi_client.DepositMethodsApi(api_client)
    page_number = 56 # int | Current page number. (optional)
    page_size = 56 # int | Page size.<br>*Default value: 100*  (optional)
    filter_search = 'filter_search_example' # str | Full text search with id, name, code, category. (optional)
    filter_name = 'filter_name_example' # str | Filtering by name. (optional)
    filter_code = 'filter_code_example' # str | Filtering by code. (optional)
    filter_processor_name = 'filter_processor_name_example' # str | Filtering by processor_name. (optional)
    filter_category = ['filter_category_example'] # List[str] | Filtering by category. (optional)
    sort = ['sort_example'] # List[str] | Sort params:<br>  | ASC | DESC | |-----|------| | name | -name | | code | -code | | processor_name | -processor_name | | category | -category |  (optional)

    try:
        # List of deposit methods
        api_response = api_instance.deposit_methods_get(page_number=page_number, page_size=page_size, filter_search=filter_search, filter_name=filter_name, filter_code=filter_code, filter_processor_name=filter_processor_name, filter_category=filter_category, sort=sort)
        print("The response of DepositMethodsApi->deposit_methods_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DepositMethodsApi->deposit_methods_get: %s\n" % e)
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

[**DepositMethodsResponse**](DepositMethodsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of deposit methods. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deposit_methods_id_get**
> DepositMethodResponse deposit_methods_id_get(id)

Deposit method by ID

Returns deposit method with specific ID. 

### Example


```python
import openapi_client
from openapi_client.models.deposit_method_response import DepositMethodResponse
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
    api_instance = openapi_client.DepositMethodsApi(api_client)
    id = 'id_example' # str | Unique ID.

    try:
        # Deposit method by ID
        api_response = api_instance.deposit_methods_id_get(id)
        print("The response of DepositMethodsApi->deposit_methods_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DepositMethodsApi->deposit_methods_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Unique ID. | 

### Return type

[**DepositMethodResponse**](DepositMethodResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Deposit method information. |  -  |
**404** | deposit method ID is not valid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


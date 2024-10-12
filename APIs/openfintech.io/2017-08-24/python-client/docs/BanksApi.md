# openapi_client.BanksApi

All URIs are relative to *https://api.openfintech.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**banks_get**](BanksApi.md#banks_get) | **GET** /banks | List of banks
[**banks_id_get**](BanksApi.md#banks_id_get) | **GET** /banks/{id} | Bank by ID


# **banks_get**
> BanksResponse banks_get(page_number=page_number, page_size=page_size, filter_sort_code=filter_sort_code, filter_code=filter_code, filter_status=filter_status, sort=sort)

List of banks

Returns list of banks. Each object contains general information about bank such as name and status, also information about bank details and related link to main organization. 

### Example


```python
import openapi_client
from openapi_client.models.banks_response import BanksResponse
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
    api_instance = openapi_client.BanksApi(api_client)
    page_number = 56 # int | Current page number. (optional)
    page_size = 56 # int | Page size.<br>*Default value: 100*  (optional)
    filter_sort_code = 'filter_sort_code_example' # str | Filtering by banks code. (optional)
    filter_code = 'filter_code_example' # str | Filtering by code. (optional)
    filter_status = ['filter_status_example'] # List[str] | Filtration by status. (optional)
    sort = ['sort_example'] # List[str] | Sort params:<br>  | ASC | DESC | |-----|------| | name | -name | | code | -code | | status | -status | | sort_code | -sort_code |  (optional)

    try:
        # List of banks
        api_response = api_instance.banks_get(page_number=page_number, page_size=page_size, filter_sort_code=filter_sort_code, filter_code=filter_code, filter_status=filter_status, sort=sort)
        print("The response of BanksApi->banks_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BanksApi->banks_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_number** | **int**| Current page number. | [optional] 
 **page_size** | **int**| Page size.&lt;br&gt;*Default value: 100*  | [optional] 
 **filter_sort_code** | **str**| Filtering by banks code. | [optional] 
 **filter_code** | **str**| Filtering by code. | [optional] 
 **filter_status** | [**List[str]**](str.md)| Filtration by status. | [optional] 
 **sort** | [**List[str]**](str.md)| Sort params:&lt;br&gt;  | ASC | DESC | |-----|------| | name | -name | | code | -code | | status | -status | | sort_code | -sort_code |  | [optional] 

### Return type

[**BanksResponse**](BanksResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of banks. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **banks_id_get**
> BankResponse banks_id_get(id)

Bank by ID

Returns bank with specific ID. 

### Example


```python
import openapi_client
from openapi_client.models.bank_response import BankResponse
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
    api_instance = openapi_client.BanksApi(api_client)
    id = 'id_example' # str | Unique ID.

    try:
        # Bank by ID
        api_response = api_instance.banks_id_get(id)
        print("The response of BanksApi->banks_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BanksApi->banks_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Unique ID. | 

### Return type

[**BankResponse**](BankResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Bank information. |  -  |
**404** | Bank ID is not valid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


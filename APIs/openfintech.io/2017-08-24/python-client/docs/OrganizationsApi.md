# openapi_client.OrganizationsApi

All URIs are relative to *https://api.openfintech.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organizations_get**](OrganizationsApi.md#organizations_get) | **GET** /organizations | List of organizations
[**organizations_id_get**](OrganizationsApi.md#organizations_id_get) | **GET** /organizations/{id} | Organization by ID


# **organizations_get**
> OrganizationsResponse organizations_get(page_number=page_number, page_size=page_size, filter_search=filter_search, filter_name=filter_name, filter_code=filter_code, filter_status=filter_status, filter_industries=filter_industries, sort=sort)

List of organizations

This endpoint retrievs the list of organizations present in the system. The data displays general, public information, without reference to the type of activity (for example - name, address, contacts, etc.). 

### Example


```python
import openapi_client
from openapi_client.models.organizations_response import OrganizationsResponse
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
    api_instance = openapi_client.OrganizationsApi(api_client)
    page_number = 56 # int | Current page number. (optional)
    page_size = 56 # int | Page size.<br>*Default value: 100*  (optional)
    filter_search = 'filter_search_example' # str | Full text search with id, name, code. (optional)
    filter_name = 'filter_name_example' # str | Filtering by name. (optional)
    filter_code = 'filter_code_example' # str | Filtering by code. (optional)
    filter_status = ['filter_status_example'] # List[str] | Filtration by status. (optional)
    filter_industries = 'filter_industries_example' # str | Filtering by industries. (optional)
    sort = ['sort_example'] # List[str] | Sort params:<br>  | ASC | DESC | |-----|------| | name | -name | | code | -code | | status | -status | | description | -description |  (optional)

    try:
        # List of organizations
        api_response = api_instance.organizations_get(page_number=page_number, page_size=page_size, filter_search=filter_search, filter_name=filter_name, filter_code=filter_code, filter_status=filter_status, filter_industries=filter_industries, sort=sort)
        print("The response of OrganizationsApi->organizations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->organizations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_number** | **int**| Current page number. | [optional] 
 **page_size** | **int**| Page size.&lt;br&gt;*Default value: 100*  | [optional] 
 **filter_search** | **str**| Full text search with id, name, code. | [optional] 
 **filter_name** | **str**| Filtering by name. | [optional] 
 **filter_code** | **str**| Filtering by code. | [optional] 
 **filter_status** | [**List[str]**](str.md)| Filtration by status. | [optional] 
 **filter_industries** | **str**| Filtering by industries. | [optional] 
 **sort** | [**List[str]**](str.md)| Sort params:&lt;br&gt;  | ASC | DESC | |-----|------| | name | -name | | code | -code | | status | -status | | description | -description |  | [optional] 

### Return type

[**OrganizationsResponse**](OrganizationsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of Organizations. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organizations_id_get**
> OrganizationResponse organizations_id_get(id)

Organization by ID

Returns organization with specific ID. 

### Example


```python
import openapi_client
from openapi_client.models.organization_response import OrganizationResponse
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
    api_instance = openapi_client.OrganizationsApi(api_client)
    id = 'id_example' # str | Unique ID.

    try:
        # Organization by ID
        api_response = api_instance.organizations_id_get(id)
        print("The response of OrganizationsApi->organizations_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->organizations_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Unique ID. | 

### Return type

[**OrganizationResponse**](OrganizationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Organization information. |  -  |
**404** | Organization ID is not valid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


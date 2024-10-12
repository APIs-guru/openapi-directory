# openapi_client.PlatformApi

All URIs are relative to *https://api-2445581398133.apicast.io:443/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_platform_collection**](PlatformApi.md#get_platform_collection) | **GET** /platform/list | GET for platform
[**get_platform_entity**](PlatformApi.md#get_platform_entity) | **GET** /platform/{type} | GET for platform


# **get_platform_collection**
> List[PlatformEntity] get_platform_collection(x_api2_crm_user_key, page_size=page_size, page=page, fields=fields, sort=sort)

GET for platform

Returns all platforms from the system

### Example


```python
import openapi_client
from openapi_client.models.platform_entity import PlatformEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-2445581398133.apicast.io:443/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-2445581398133.apicast.io:443/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PlatformApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | API2CRM user key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    page_size = 56 # int | Amount of results (default: 25) (optional)
    page = 56 # int | Page to show (default: 1) (optional)
    fields = 'fields_example' # str | Comma-separated list of fields to include in the response (optional)
    sort = 'sort_example' # str | Specifies ascending or descending sort on existing fields (optional)

    try:
        # GET for platform
        api_response = api_instance.get_platform_collection(x_api2_crm_user_key, page_size=page_size, page=page, fields=fields, sort=sort)
        print("The response of PlatformApi->get_platform_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformApi->get_platform_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| API2CRM user key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **page_size** | **int**| Amount of results (default: 25) | [optional] 
 **page** | **int**| Page to show (default: 1) | [optional] 
 **fields** | **str**| Comma-separated list of fields to include in the response | [optional] 
 **sort** | **str**| Specifies ascending or descending sort on existing fields | [optional] 

### Return type

[**List[PlatformEntity]**](PlatformEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_platform_entity**
> PlatformEntity get_platform_entity(x_api2_crm_user_key, type, fields=fields)

GET for platform

Return platform information

### Example


```python
import openapi_client
from openapi_client.models.platform_entity import PlatformEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-2445581398133.apicast.io:443/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-2445581398133.apicast.io:443/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PlatformApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | API2CRM user key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    type = 'type_example' # str | Platform type
    fields = 'fields_example' # str | Comma-separated list of fields to include in the response (optional)

    try:
        # GET for platform
        api_response = api_instance.get_platform_entity(x_api2_crm_user_key, type, fields=fields)
        print("The response of PlatformApi->get_platform_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformApi->get_platform_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| API2CRM user key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **type** | **str**| Platform type | 
 **fields** | **str**| Comma-separated list of fields to include in the response | [optional] 

### Return type

[**PlatformEntity**](PlatformEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


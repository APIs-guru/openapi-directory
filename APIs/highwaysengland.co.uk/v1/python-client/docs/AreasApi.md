# openapi_client.AreasApi

All URIs are relative to *https://webtris.highwaysengland.co.uk/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**areas_get**](AreasApi.md#areas_get) | **GET** /v{version}/areas | Returns list of areas
[**vversion_areas_area_ids_get**](AreasApi.md#vversion_areas_area_ids_get) | **GET** /v{version}/areas/{area_Ids} | Returns details of selected area


# **areas_get**
> AreaResponse areas_get(version)

Returns list of areas

### Example


```python
import openapi_client
from openapi_client.models.area_response import AreaResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://webtris.highwaysengland.co.uk/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://webtris.highwaysengland.co.uk/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AreasApi(api_client)
    version = 'version_example' # str | 

    try:
        # Returns list of areas
        api_response = api_instance.areas_get(version)
        print("The response of AreasApi->areas_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AreasApi->areas_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **str**|  | 

### Return type

[**AreaResponse**](AreaResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Bad request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vversion_areas_area_ids_get**
> AreaResponse vversion_areas_area_ids_get(area_ids, version)

Returns details of selected area

### Example


```python
import openapi_client
from openapi_client.models.area_response import AreaResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://webtris.highwaysengland.co.uk/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://webtris.highwaysengland.co.uk/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AreasApi(api_client)
    area_ids = 'area_ids_example' # str | 
    version = 'version_example' # str | 

    try:
        # Returns details of selected area
        api_response = api_instance.vversion_areas_area_ids_get(area_ids, version)
        print("The response of AreasApi->vversion_areas_area_ids_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AreasApi->vversion_areas_area_ids_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **area_ids** | **str**|  | 
 **version** | **str**|  | 

### Return type

[**AreaResponse**](AreaResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Bad request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


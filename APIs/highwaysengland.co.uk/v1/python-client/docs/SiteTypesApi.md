# openapi_client.SiteTypesApi

All URIs are relative to *https://webtris.highwaysengland.co.uk/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**site_types_get_sites_for_public_facing_api**](SiteTypesApi.md#site_types_get_sites_for_public_facing_api) | **GET** /v{version}/sitetypes/{siteType_Id}/sites | Returns the layer metadata for the LayerId specified.
[**site_types_index**](SiteTypesApi.md#site_types_index) | **GET** /v{version}/sitetypes | Return list of site types


# **site_types_get_sites_for_public_facing_api**
> SiteTypeLayer site_types_get_sites_for_public_facing_api(site_type_id, version)

Returns the layer metadata for the LayerId specified.

### Example


```python
import openapi_client
from openapi_client.models.site_type_layer import SiteTypeLayer
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
    api_instance = openapi_client.SiteTypesApi(api_client)
    site_type_id = 56 # int | 1 = MIDAS, 2 = TAME, 3 = TMU, 4 = TRADS Legacy
    version = 'version_example' # str | 

    try:
        # Returns the layer metadata for the LayerId specified.
        api_response = api_instance.site_types_get_sites_for_public_facing_api(site_type_id, version)
        print("The response of SiteTypesApi->site_types_get_sites_for_public_facing_api:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SiteTypesApi->site_types_get_sites_for_public_facing_api: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **site_type_id** | **int**| 1 &#x3D; MIDAS, 2 &#x3D; TAME, 3 &#x3D; TMU, 4 &#x3D; TRADS Legacy | 
 **version** | **str**|  | 

### Return type

[**SiteTypeLayer**](SiteTypeLayer.md)

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
**404** | Layer not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **site_types_index**
> SiteTypeResponse site_types_index(version)

Return list of site types

### Example


```python
import openapi_client
from openapi_client.models.site_type_response import SiteTypeResponse
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
    api_instance = openapi_client.SiteTypesApi(api_client)
    version = 'version_example' # str | 

    try:
        # Return list of site types
        api_response = api_instance.site_types_index(version)
        print("The response of SiteTypesApi->site_types_index:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SiteTypesApi->site_types_index: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **str**|  | 

### Return type

[**SiteTypeResponse**](SiteTypeResponse.md)

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


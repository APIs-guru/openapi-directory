# openapi_client.SitesApi

All URIs are relative to *https://webtris.highwaysengland.co.uk/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sites_index**](SitesApi.md#sites_index) | **GET** /v{version}/sites | Get a list of sites
[**vversion_sites_site_ids_get**](SitesApi.md#vversion_sites_site_ids_get) | **GET** /v{version}/sites/{site_Ids} | Get selected sites


# **sites_index**
> SiteResponse sites_index(version)

Get a list of sites

### Example


```python
import openapi_client
from openapi_client.models.site_response import SiteResponse
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
    api_instance = openapi_client.SitesApi(api_client)
    version = 'version_example' # str | 

    try:
        # Get a list of sites
        api_response = api_instance.sites_index(version)
        print("The response of SitesApi->sites_index:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_index: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **str**|  | 

### Return type

[**SiteResponse**](SiteResponse.md)

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

# **vversion_sites_site_ids_get**
> SiteResponse vversion_sites_site_ids_get(site_ids, version)

Get selected sites

### Example


```python
import openapi_client
from openapi_client.models.site_response import SiteResponse
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
    api_instance = openapi_client.SitesApi(api_client)
    site_ids = 'site_ids_example' # str | site id
    version = 'version_example' # str | 

    try:
        # Get selected sites
        api_response = api_instance.vversion_sites_site_ids_get(site_ids, version)
        print("The response of SitesApi->vversion_sites_site_ids_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->vversion_sites_site_ids_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **site_ids** | **str**| site id | 
 **version** | **str**|  | 

### Return type

[**SiteResponse**](SiteResponse.md)

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


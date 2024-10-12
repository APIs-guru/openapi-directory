# openapi_client.InfoApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_api_info_item**](InfoApi.md#get_api_info_item) | **GET** /info/api | 
[**get_statistics_collection**](InfoApi.md#get_statistics_collection) | **GET** /info/stat/ | Returns overall stagtistics
[**get_statistics_item**](InfoApi.md#get_statistics_item) | **GET** /info/stat/{zone} | Returns statistics for specific zone
[**info_tld_get**](InfoApi.md#info_tld_get) | **GET** /info/tld/ | Returns overall Tld info
[**info_tld_zone_get**](InfoApi.md#info_tld_zone_get) | **GET** /info/tld/{zone} | Returns statistics for specific zone


# **get_api_info_item**
> APIKeyInfo get_api_info_item(api_key=api_key)



### Example


```python
import openapi_client
from openapi_client.models.api_key_info import APIKeyInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InfoApi(api_client)
    api_key = 'api_key_example' # str | API key (optional)

    try:
        api_response = api_instance.get_api_info_item(api_key=api_key)
        print("The response of InfoApi->get_api_info_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfoApi->get_api_info_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| API key | [optional] 

### Return type

[**APIKeyInfo**](APIKeyInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_statistics_collection**
> List[ZoneStats] get_statistics_collection(page=page, limit=limit)

Returns overall stagtistics

### Example


```python
import openapi_client
from openapi_client.models.zone_stats import ZoneStats
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InfoApi(api_client)
    page = 'page_example' # str | Search page to request (optional)
    limit = 50 # int | Results per page (optional) (default to 50)

    try:
        # Returns overall stagtistics
        api_response = api_instance.get_statistics_collection(page=page, limit=limit)
        print("The response of InfoApi->get_statistics_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfoApi->get_statistics_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **str**| Search page to request | [optional] 
 **limit** | **int**| Results per page | [optional] [default to 50]

### Return type

[**List[ZoneStats]**](ZoneStats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_statistics_item**
> ZoneStats get_statistics_item(zone, page=page, limit=limit)

Returns statistics for specific zone

### Example


```python
import openapi_client
from openapi_client.models.zone_stats import ZoneStats
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InfoApi(api_client)
    zone = 'zone_example' # str | 
    page = 'page_example' # str | Search page to request (optional)
    limit = 50 # int | Results per page (optional) (default to 50)

    try:
        # Returns statistics for specific zone
        api_response = api_instance.get_statistics_item(zone, page=page, limit=limit)
        print("The response of InfoApi->get_statistics_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfoApi->get_statistics_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zone** | **str**|  | 
 **page** | **str**| Search page to request | [optional] 
 **limit** | **int**| Results per page | [optional] [default to 50]

### Return type

[**ZoneStats**](ZoneStats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Zone not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **info_tld_get**
> List[ZoneInfo] info_tld_get()

Returns overall Tld info

### Example


```python
import openapi_client
from openapi_client.models.zone_info import ZoneInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InfoApi(api_client)

    try:
        # Returns overall Tld info
        api_response = api_instance.info_tld_get()
        print("The response of InfoApi->info_tld_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfoApi->info_tld_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[ZoneInfo]**](ZoneInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **info_tld_zone_get**
> ZoneInfo info_tld_zone_get(zone, page=page, limit=limit)

Returns statistics for specific zone

### Example


```python
import openapi_client
from openapi_client.models.zone_info import ZoneInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InfoApi(api_client)
    zone = 'zone_example' # str | 
    page = 'page_example' # str | Search page to request (optional)
    limit = 50 # int | Results per page (optional) (default to 50)

    try:
        # Returns statistics for specific zone
        api_response = api_instance.info_tld_zone_get(zone, page=page, limit=limit)
        print("The response of InfoApi->info_tld_zone_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfoApi->info_tld_zone_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zone** | **str**|  | 
 **page** | **str**| Search page to request | [optional] 
 **limit** | **int**| Results per page | [optional] [default to 50]

### Return type

[**ZoneInfo**](ZoneInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Zone not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


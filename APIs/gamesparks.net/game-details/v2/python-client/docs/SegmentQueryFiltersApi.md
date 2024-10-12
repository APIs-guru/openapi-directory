# openapi_client.SegmentQueryFiltersApi

All URIs are relative to *http://config2.gamesparks.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_segment_query_filters_config_using_get**](SegmentQueryFiltersApi.md#get_segment_query_filters_config_using_get) | **GET** /restv2/game/{apiKey}/admin/segmentQueryFilters/config | getSegmentQueryFiltersConfig
[**get_segment_query_filters_using_get**](SegmentQueryFiltersApi.md#get_segment_query_filters_using_get) | **GET** /restv2/game/{apiKey}/admin/segmentQueryFilters | getSegmentQueryFilters
[**get_segment_query_standard_filters_using_get**](SegmentQueryFiltersApi.md#get_segment_query_standard_filters_using_get) | **GET** /restv2/game/{apiKey}/admin/segmentQueryFilters/standardFilters | getSegmentQueryStandardFilters
[**update_segment_query_filters_config_using_put**](SegmentQueryFiltersApi.md#update_segment_query_filters_config_using_put) | **PUT** /restv2/game/{apiKey}/admin/segmentQueryFilters/config | updateSegmentQueryFiltersConfig


# **get_segment_query_filters_config_using_get**
> SegmentQueryFilterConfigModel get_segment_query_filters_config_using_get(api_key)

getSegmentQueryFiltersConfig

### Example


```python
import openapi_client
from openapi_client.models.segment_query_filter_config_model import SegmentQueryFilterConfigModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SegmentQueryFiltersApi(api_client)
    api_key = 'api_key_example' # str | apiKey

    try:
        # getSegmentQueryFiltersConfig
        api_response = api_instance.get_segment_query_filters_config_using_get(api_key)
        print("The response of SegmentQueryFiltersApi->get_segment_query_filters_config_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SegmentQueryFiltersApi->get_segment_query_filters_config_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 

### Return type

[**SegmentQueryFilterConfigModel**](SegmentQueryFilterConfigModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_segment_query_filters_using_get**
> SegmentQueryFilterListModel get_segment_query_filters_using_get(api_key)

getSegmentQueryFilters

### Example


```python
import openapi_client
from openapi_client.models.segment_query_filter_list_model import SegmentQueryFilterListModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SegmentQueryFiltersApi(api_client)
    api_key = 'api_key_example' # str | apiKey

    try:
        # getSegmentQueryFilters
        api_response = api_instance.get_segment_query_filters_using_get(api_key)
        print("The response of SegmentQueryFiltersApi->get_segment_query_filters_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SegmentQueryFiltersApi->get_segment_query_filters_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 

### Return type

[**SegmentQueryFilterListModel**](SegmentQueryFilterListModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_segment_query_standard_filters_using_get**
> SegmentQueryFilterListModel get_segment_query_standard_filters_using_get(api_key)

getSegmentQueryStandardFilters

### Example


```python
import openapi_client
from openapi_client.models.segment_query_filter_list_model import SegmentQueryFilterListModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SegmentQueryFiltersApi(api_client)
    api_key = 'api_key_example' # str | apiKey

    try:
        # getSegmentQueryStandardFilters
        api_response = api_instance.get_segment_query_standard_filters_using_get(api_key)
        print("The response of SegmentQueryFiltersApi->get_segment_query_standard_filters_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SegmentQueryFiltersApi->get_segment_query_standard_filters_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 

### Return type

[**SegmentQueryFilterListModel**](SegmentQueryFilterListModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_segment_query_filters_config_using_put**
> SegmentQueryFilterConfigModel update_segment_query_filters_config_using_put(api_key, segment_query_filter_config_model)

updateSegmentQueryFiltersConfig

### Example


```python
import openapi_client
from openapi_client.models.segment_query_filter_config_model import SegmentQueryFilterConfigModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SegmentQueryFiltersApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    segment_query_filter_config_model = openapi_client.SegmentQueryFilterConfigModel() # SegmentQueryFilterConfigModel | segmentQueryConfig

    try:
        # updateSegmentQueryFiltersConfig
        api_response = api_instance.update_segment_query_filters_config_using_put(api_key, segment_query_filter_config_model)
        print("The response of SegmentQueryFiltersApi->update_segment_query_filters_config_using_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SegmentQueryFiltersApi->update_segment_query_filters_config_using_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **segment_query_filter_config_model** | [**SegmentQueryFilterConfigModel**](SegmentQueryFilterConfigModel.md)| segmentQueryConfig | 

### Return type

[**SegmentQueryFilterConfigModel**](SegmentQueryFilterConfigModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


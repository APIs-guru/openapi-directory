# openapi_client.RankingsApi

All URIs are relative to *https://api.schooldigger.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rankings_get_rank_district**](RankingsApi.md#rankings_get_rank_district) | **GET** /v2.0/rankings/districts/{st} | Returns a SchoolDigger district ranking list
[**rankings_get_school_rank2**](RankingsApi.md#rankings_get_school_rank2) | **GET** /v2.0/rankings/schools/{st} | Returns a SchoolDigger school ranking list


# **rankings_get_rank_district**
> APIDistrictListRank2 rankings_get_rank_district(st, app_id, app_key, year=year, page=page, per_page=per_page)

Returns a SchoolDigger district ranking list

### Example


```python
import openapi_client
from openapi_client.models.api_district_list_rank2 import APIDistrictListRank2
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.schooldigger.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.schooldigger.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RankingsApi(api_client)
    st = 'st_example' # str | Two character state (e.g. 'CA')
    app_id = 'app_id_example' # str | Your API app id
    app_key = 'app_key_example' # str | Your API app key
    year = 56 # int | The ranking year (leave blank for most recent year) (optional)
    page = 56 # int | Page number to retrieve (optional, default: 1) (optional)
    per_page = 56 # int | Number of districts to retrieve on a page (50 max) (optional, default: 10) (optional)

    try:
        # Returns a SchoolDigger district ranking list
        api_response = api_instance.rankings_get_rank_district(st, app_id, app_key, year=year, page=page, per_page=per_page)
        print("The response of RankingsApi->rankings_get_rank_district:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RankingsApi->rankings_get_rank_district: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **st** | **str**| Two character state (e.g. &#39;CA&#39;) | 
 **app_id** | **str**| Your API app id | 
 **app_key** | **str**| Your API app key | 
 **year** | **int**| The ranking year (leave blank for most recent year) | [optional] 
 **page** | **int**| Page number to retrieve (optional, default: 1) | [optional] 
 **per_page** | **int**| Number of districts to retrieve on a page (50 max) (optional, default: 10) | [optional] 

### Return type

[**APIDistrictListRank2**](APIDistrictListRank2.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rankings_get_school_rank2**
> APISchoolListRank2 rankings_get_school_rank2(st, app_id, app_key, year=year, level=level, page=page, per_page=per_page)

Returns a SchoolDigger school ranking list

### Example


```python
import openapi_client
from openapi_client.models.api_school_list_rank2 import APISchoolListRank2
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.schooldigger.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.schooldigger.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RankingsApi(api_client)
    st = 'st_example' # str | Two character state (e.g. 'CA')
    app_id = 'app_id_example' # str | Your API app id
    app_key = 'app_key_example' # str | Your API app key
    year = 56 # int | The ranking year (leave blank for most recent year) (optional)
    level = 'level_example' # str | Level of ranking: 'Elementary', 'Middle', or 'High' (optional)
    page = 56 # int | Page number to retrieve (optional, default: 1) (optional)
    per_page = 56 # int | Number of schools to retrieve on a page (50 max) (optional, default: 10) (optional)

    try:
        # Returns a SchoolDigger school ranking list
        api_response = api_instance.rankings_get_school_rank2(st, app_id, app_key, year=year, level=level, page=page, per_page=per_page)
        print("The response of RankingsApi->rankings_get_school_rank2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RankingsApi->rankings_get_school_rank2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **st** | **str**| Two character state (e.g. &#39;CA&#39;) | 
 **app_id** | **str**| Your API app id | 
 **app_key** | **str**| Your API app key | 
 **year** | **int**| The ranking year (leave blank for most recent year) | [optional] 
 **level** | **str**| Level of ranking: &#39;Elementary&#39;, &#39;Middle&#39;, or &#39;High&#39; | [optional] 
 **page** | **int**| Page number to retrieve (optional, default: 1) | [optional] 
 **per_page** | **int**| Number of schools to retrieve on a page (50 max) (optional, default: 10) | [optional] 

### Return type

[**APISchoolListRank2**](APISchoolListRank2.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.AutocompleteApi

All URIs are relative to *https://api.schooldigger.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**autocomplete_get_schools**](AutocompleteApi.md#autocomplete_get_schools) | **GET** /v2.0/autocomplete/schools | Returns a simple and quick list of schools for use in a client-typed autocomplete


# **autocomplete_get_schools**
> APIAutocompleteSchoolResult autocomplete_get_schools(app_id, app_key, q=q, q_search_city_state_name=q_search_city_state_name, st=st, level=level, box_latitude_nw=box_latitude_nw, box_longitude_nw=box_longitude_nw, box_latitude_se=box_latitude_se, box_longitude_se=box_longitude_se, return_count=return_count)

Returns a simple and quick list of schools for use in a client-typed autocomplete

### Example


```python
import openapi_client
from openapi_client.models.api_autocomplete_school_result import APIAutocompleteSchoolResult
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
    api_instance = openapi_client.AutocompleteApi(api_client)
    app_id = 'app_id_example' # str | Your API app id
    app_key = 'app_key_example' # str | Your API app key
    q = 'q_example' # str | Search term for autocomplete (e.g. 'Lincol') (required) (optional)
    q_search_city_state_name = True # bool | Extend the search term to include city and state (e.g. 'Lincoln el paso' matches Lincoln Middle School in El Paso) (optional) (optional)
    st = 'st_example' # str | Two character state (e.g. 'CA') (optional -- leave blank to search entire U.S.) (optional)
    level = 'level_example' # str | Search for schools at this level only. Valid values: 'Elementary', 'Middle', 'High', 'Alt', 'Private' (optional - leave blank to search for all schools) (optional)
    box_latitude_nw = 3.4 # float | Search within a 'box' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional. Pro, Enterprise API levels only.) (optional)
    box_longitude_nw = 3.4 # float | Search within a 'box' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional. Pro, Enterprise API levels only.) (optional)
    box_latitude_se = 3.4 # float | Search within a 'box' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional. Pro, Enterprise API levels only.) (optional)
    box_longitude_se = 3.4 # float | Search within a 'box' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional. Pro, Enterprise API levels only.) (optional)
    return_count = 56 # int | Number of schools to return. Valid values: 1-20. (default: 10) (optional)

    try:
        # Returns a simple and quick list of schools for use in a client-typed autocomplete
        api_response = api_instance.autocomplete_get_schools(app_id, app_key, q=q, q_search_city_state_name=q_search_city_state_name, st=st, level=level, box_latitude_nw=box_latitude_nw, box_longitude_nw=box_longitude_nw, box_latitude_se=box_latitude_se, box_longitude_se=box_longitude_se, return_count=return_count)
        print("The response of AutocompleteApi->autocomplete_get_schools:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutocompleteApi->autocomplete_get_schools: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Your API app id | 
 **app_key** | **str**| Your API app key | 
 **q** | **str**| Search term for autocomplete (e.g. &#39;Lincol&#39;) (required) | [optional] 
 **q_search_city_state_name** | **bool**| Extend the search term to include city and state (e.g. &#39;Lincoln el paso&#39; matches Lincoln Middle School in El Paso) (optional) | [optional] 
 **st** | **str**| Two character state (e.g. &#39;CA&#39;) (optional -- leave blank to search entire U.S.) | [optional] 
 **level** | **str**| Search for schools at this level only. Valid values: &#39;Elementary&#39;, &#39;Middle&#39;, &#39;High&#39;, &#39;Alt&#39;, &#39;Private&#39; (optional - leave blank to search for all schools) | [optional] 
 **box_latitude_nw** | **float**| Search within a &#39;box&#39; defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional. Pro, Enterprise API levels only.) | [optional] 
 **box_longitude_nw** | **float**| Search within a &#39;box&#39; defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional. Pro, Enterprise API levels only.) | [optional] 
 **box_latitude_se** | **float**| Search within a &#39;box&#39; defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional. Pro, Enterprise API levels only.) | [optional] 
 **box_longitude_se** | **float**| Search within a &#39;box&#39; defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional. Pro, Enterprise API levels only.) | [optional] 
 **return_count** | **int**| Number of schools to return. Valid values: 1-20. (default: 10) | [optional] 

### Return type

[**APIAutocompleteSchoolResult**](APIAutocompleteSchoolResult.md)

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


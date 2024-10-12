# openapi_client.SearchApi

All URIs are relative to *http://platform-api.opentargets.io/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_search_0**](SearchApi.md#get_search_0) | **GET** /platform/public/search | Search for a disease or a target


# **get_search_0**
> get_search_0(q, size=size, var_from=var_from, filter=filter)

Search for a disease or a target

This method allows you to look for gene or diseases of interest using a free text search, replicating the functionality of the search box on our homepage. It should be used to identify the best match for a disease or target of interest, rather than gathering a specific set of evidence. 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://platform-api.opentargets.io/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://platform-api.opentargets.io/v3"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SearchApi(api_client)
    q = 'q_example' # str | A full text query.
    size = 'size_example' # str | Maximum amount of results to return. Defaults to 10, max is 10000. (optional)
    var_from = 'var_from_example' # str | How many initial results should be skipped. Defaults to 0. (optional)
    filter = 'filter_example' # str | Restrict the search to the type requested. Eg. `target` or `disease`. (optional)

    try:
        # Search for a disease or a target
        api_instance.get_search_0(q, size=size, var_from=var_from, filter=filter)
    except Exception as e:
        print("Exception when calling SearchApi->get_search_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| A full text query. | 
 **size** | **str**| Maximum amount of results to return. Defaults to 10, max is 10000. | [optional] 
 **var_from** | **str**| How many initial results should be skipped. Defaults to 0. | [optional] 
 **filter** | **str**| Restrict the search to the type requested. Eg. &#x60;target&#x60; or &#x60;disease&#x60;. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


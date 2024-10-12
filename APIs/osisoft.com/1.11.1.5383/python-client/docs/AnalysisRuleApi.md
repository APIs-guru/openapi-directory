# openapi_client.AnalysisRuleApi

All URIs are relative to *https://devdata.osisoft.com/piwebapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analysis_rule_create_analysis_rule**](AnalysisRuleApi.md#analysis_rule_create_analysis_rule) | **POST** /analysisrules/{webId}/analysisrules | Create a new Analysis Rule as a child of an existing Analysis Rule.
[**analysis_rule_delete**](AnalysisRuleApi.md#analysis_rule_delete) | **DELETE** /analysisrules/{webId} | Delete an Analysis Rule.
[**analysis_rule_get**](AnalysisRuleApi.md#analysis_rule_get) | **GET** /analysisrules/{webId} | Retrieve an Analysis Rule.
[**analysis_rule_get_analysis_rules**](AnalysisRuleApi.md#analysis_rule_get_analysis_rules) | **GET** /analysisrules/{webId}/analysisrules | Get the child Analysis Rules of the Analysis Rule.
[**analysis_rule_get_by_path**](AnalysisRuleApi.md#analysis_rule_get_by_path) | **GET** /analysisrules | Retrieve an Analysis Rule by path.
[**analysis_rule_update**](AnalysisRuleApi.md#analysis_rule_update) | **PATCH** /analysisrules/{webId} | Update an Analysis Rule by replacing items in its definition.


# **analysis_rule_create_analysis_rule**
> analysis_rule_create_analysis_rule(web_id, analysis_rule, web_id_type=web_id_type)

Create a new Analysis Rule as a child of an existing Analysis Rule.

### Example


```python
import openapi_client
from openapi_client.models.analysis_rule import AnalysisRule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisRuleApi(api_client)
    web_id = 'web_id_example' # str | The ID of the parent Analysis Rule, on which to create the child Analysis Rule.
    analysis_rule = openapi_client.AnalysisRule() # AnalysisRule | The definition of the new Analysis Rule.
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Create a new Analysis Rule as a child of an existing Analysis Rule.
        api_instance.analysis_rule_create_analysis_rule(web_id, analysis_rule, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling AnalysisRuleApi->analysis_rule_create_analysis_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the parent Analysis Rule, on which to create the child Analysis Rule. | 
 **analysis_rule** | [**AnalysisRule**](AnalysisRule.md)| The definition of the new Analysis Rule. | 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The Analysis Rule was created. The response&#39;s Location header is a link to the created Analysis Rule. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analysis_rule_delete**
> analysis_rule_delete(web_id)

Delete an Analysis Rule.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisRuleApi(api_client)
    web_id = 'web_id_example' # str | The ID of the Analysis Rule.

    try:
        # Delete an Analysis Rule.
        api_instance.analysis_rule_delete(web_id)
    except Exception as e:
        print("Exception when calling AnalysisRuleApi->analysis_rule_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the Analysis Rule. | 

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
**204** | The Analysis Rule was deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analysis_rule_get**
> AnalysisRule analysis_rule_get(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve an Analysis Rule.

### Example


```python
import openapi_client
from openapi_client.models.analysis_rule import AnalysisRule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisRuleApi(api_client)
    web_id = 'web_id_example' # str | The ID of the Analysis Rule.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve an Analysis Rule.
        api_response = api_instance.analysis_rule_get(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AnalysisRuleApi->analysis_rule_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisRuleApi->analysis_rule_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the Analysis Rule. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**AnalysisRule**](AnalysisRule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested Analysis Rule. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analysis_rule_get_analysis_rules**
> ItemsAnalysisRule analysis_rule_get_analysis_rules(web_id, max_count=max_count, name_filter=name_filter, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, start_index=start_index, web_id_type=web_id_type)

Get the child Analysis Rules of the Analysis Rule.

### Example


```python
import openapi_client
from openapi_client.models.items_analysis_rule import ItemsAnalysisRule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisRuleApi(api_client)
    web_id = 'web_id_example' # str | The ID of the parent Analysis Rule.
    max_count = 56 # int | The maximum number of objects to be returned per call (page size). The default is 1000. (optional)
    name_filter = 'name_filter_example' # str | The name query string used for finding Analysis Rules. The default is no filter. (optional)
    search_full_hierarchy = True # bool | Specifies if the search should include Analysis Rules nested further than the immediate children of the searchRoot. The default is 'false'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    sort_field = 'sort_field_example' # str | The field or property of the object used to sort the returned collection. The default is 'Name'. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending'. (optional)
    start_index = 56 # int | The starting index (zero based) of the items to be returned. The default is 0. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Get the child Analysis Rules of the Analysis Rule.
        api_response = api_instance.analysis_rule_get_analysis_rules(web_id, max_count=max_count, name_filter=name_filter, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, start_index=start_index, web_id_type=web_id_type)
        print("The response of AnalysisRuleApi->analysis_rule_get_analysis_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisRuleApi->analysis_rule_get_analysis_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the parent Analysis Rule. | 
 **max_count** | **int**| The maximum number of objects to be returned per call (page size). The default is 1000. | [optional] 
 **name_filter** | **str**| The name query string used for finding Analysis Rules. The default is no filter. | [optional] 
 **search_full_hierarchy** | **bool**| Specifies if the search should include Analysis Rules nested further than the immediate children of the searchRoot. The default is &#39;false&#39;. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **sort_field** | **str**| The field or property of the object used to sort the returned collection. The default is &#39;Name&#39;. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39;. | [optional] 
 **start_index** | **int**| The starting index (zero based) of the items to be returned. The default is 0. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsAnalysisRule**](ItemsAnalysisRule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of child Analysis Rules. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analysis_rule_get_by_path**
> AnalysisRule analysis_rule_get_by_path(path, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve an Analysis Rule by path.

This method returns an Analysis Rule based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.

### Example


```python
import openapi_client
from openapi_client.models.analysis_rule import AnalysisRule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisRuleApi(api_client)
    path = 'path_example' # str | The path to the Analysis Rule.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve an Analysis Rule by path.
        api_response = api_instance.analysis_rule_get_by_path(path, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AnalysisRuleApi->analysis_rule_get_by_path:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisRuleApi->analysis_rule_get_by_path: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| The path to the Analysis Rule. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**AnalysisRule**](AnalysisRule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested Analysis Rule. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analysis_rule_update**
> analysis_rule_update(web_id, analysis_rule)

Update an Analysis Rule by replacing items in its definition.

### Example


```python
import openapi_client
from openapi_client.models.analysis_rule import AnalysisRule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisRuleApi(api_client)
    web_id = 'web_id_example' # str | The ID of the Analysis Rule.
    analysis_rule = openapi_client.AnalysisRule() # AnalysisRule | A partial Analysis Rule containing the desired changes.

    try:
        # Update an Analysis Rule by replacing items in its definition.
        api_instance.analysis_rule_update(web_id, analysis_rule)
    except Exception as e:
        print("Exception when calling AnalysisRuleApi->analysis_rule_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the Analysis Rule. | 
 **analysis_rule** | [**AnalysisRule**](AnalysisRule.md)| A partial Analysis Rule containing the desired changes. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The Analysis Rule was updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


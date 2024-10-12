# openapi_client.AnalysisRulePlugInApi

All URIs are relative to *https://devdata.osisoft.com/piwebapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analysis_rule_plug_in_get**](AnalysisRulePlugInApi.md#analysis_rule_plug_in_get) | **GET** /analysisruleplugins/{webId} | Retrieve an Analysis Rule Plug-in.
[**analysis_rule_plug_in_get_by_path**](AnalysisRulePlugInApi.md#analysis_rule_plug_in_get_by_path) | **GET** /analysisruleplugins | Retrieve an Analysis Rule Plug-in by path.


# **analysis_rule_plug_in_get**
> AnalysisRulePlugIn analysis_rule_plug_in_get(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve an Analysis Rule Plug-in.

### Example


```python
import openapi_client
from openapi_client.models.analysis_rule_plug_in import AnalysisRulePlugIn
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
    api_instance = openapi_client.AnalysisRulePlugInApi(api_client)
    web_id = 'web_id_example' # str | The ID of the Analysis Rule Plug-in.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve an Analysis Rule Plug-in.
        api_response = api_instance.analysis_rule_plug_in_get(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AnalysisRulePlugInApi->analysis_rule_plug_in_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisRulePlugInApi->analysis_rule_plug_in_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the Analysis Rule Plug-in. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**AnalysisRulePlugIn**](AnalysisRulePlugIn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specified Analysis Rule Plug-in. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analysis_rule_plug_in_get_by_path**
> AnalysisRulePlugIn analysis_rule_plug_in_get_by_path(path, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve an Analysis Rule Plug-in by path.

This method returns an Analysis Rule Plug-in based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.

### Example


```python
import openapi_client
from openapi_client.models.analysis_rule_plug_in import AnalysisRulePlugIn
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
    api_instance = openapi_client.AnalysisRulePlugInApi(api_client)
    path = 'path_example' # str | The path to the Analysis Rule Plug-in.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve an Analysis Rule Plug-in by path.
        api_response = api_instance.analysis_rule_plug_in_get_by_path(path, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AnalysisRulePlugInApi->analysis_rule_plug_in_get_by_path:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisRulePlugInApi->analysis_rule_plug_in_get_by_path: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| The path to the Analysis Rule Plug-in. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**AnalysisRulePlugIn**](AnalysisRulePlugIn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specified Analysis Rule Plug-in. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


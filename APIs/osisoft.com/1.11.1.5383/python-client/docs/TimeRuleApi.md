# openapi_client.TimeRuleApi

All URIs are relative to *https://devdata.osisoft.com/piwebapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**time_rule_delete**](TimeRuleApi.md#time_rule_delete) | **DELETE** /timerules/{webId} | Delete a Time Rule.
[**time_rule_get**](TimeRuleApi.md#time_rule_get) | **GET** /timerules/{webId} | Retrieve a Time Rule.
[**time_rule_get_by_path**](TimeRuleApi.md#time_rule_get_by_path) | **GET** /timerules | Retrieve a Time Rule by path.
[**time_rule_update**](TimeRuleApi.md#time_rule_update) | **PATCH** /timerules/{webId} | Update a Time Rule by replacing items in its definition.


# **time_rule_delete**
> time_rule_delete(web_id)

Delete a Time Rule.

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
    api_instance = openapi_client.TimeRuleApi(api_client)
    web_id = 'web_id_example' # str | The ID of the Time Rule.

    try:
        # Delete a Time Rule.
        api_instance.time_rule_delete(web_id)
    except Exception as e:
        print("Exception when calling TimeRuleApi->time_rule_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the Time Rule. | 

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
**204** | The Time Rule was deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **time_rule_get**
> TimeRule time_rule_get(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve a Time Rule.

### Example


```python
import openapi_client
from openapi_client.models.time_rule import TimeRule
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
    api_instance = openapi_client.TimeRuleApi(api_client)
    web_id = 'web_id_example' # str | The ID of the Time Rule.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve a Time Rule.
        api_response = api_instance.time_rule_get(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of TimeRuleApi->time_rule_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TimeRuleApi->time_rule_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the Time Rule. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**TimeRule**](TimeRule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested Time Rule. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **time_rule_get_by_path**
> TimeRule time_rule_get_by_path(path, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve a Time Rule by path.

This method returns a Time Rule based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.

### Example


```python
import openapi_client
from openapi_client.models.time_rule import TimeRule
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
    api_instance = openapi_client.TimeRuleApi(api_client)
    path = 'path_example' # str | The path to the Time Rule.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve a Time Rule by path.
        api_response = api_instance.time_rule_get_by_path(path, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of TimeRuleApi->time_rule_get_by_path:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TimeRuleApi->time_rule_get_by_path: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| The path to the Time Rule. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**TimeRule**](TimeRule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested Time Rule. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **time_rule_update**
> time_rule_update(web_id, time_rule)

Update a Time Rule by replacing items in its definition.

### Example


```python
import openapi_client
from openapi_client.models.time_rule import TimeRule
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
    api_instance = openapi_client.TimeRuleApi(api_client)
    web_id = 'web_id_example' # str | The ID of the Time Rule.
    time_rule = openapi_client.TimeRule() # TimeRule | A partial Time Rule containing the desired changes.

    try:
        # Update a Time Rule by replacing items in its definition.
        api_instance.time_rule_update(web_id, time_rule)
    except Exception as e:
        print("Exception when calling TimeRuleApi->time_rule_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the Time Rule. | 
 **time_rule** | [**TimeRule**](TimeRule.md)| A partial Time Rule containing the desired changes. | 

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
**204** | The Time Rule was updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


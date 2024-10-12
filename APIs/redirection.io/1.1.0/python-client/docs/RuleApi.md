# openapi_client.RuleApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**agent_legacy_complex_rule_collection**](RuleApi.md#agent_legacy_complex_rule_collection) | **GET** /agent-rule-complexes | Retrieves the collection of Rule resources.
[**agent_legacy_straight_rule_collection**](RuleApi.md#agent_legacy_straight_rule_collection) | **GET** /agent-rule-straights | Retrieves the collection of Rule resources.
[**agent_rule_collection**](RuleApi.md#agent_rule_collection) | **GET** /agent-rules | Retrieves the collection of Rule resources.
[**export_rule_collection**](RuleApi.md#export_rule_collection) | **GET** /export-rules | Retrieves the collection of Rule resources.
[**get_rule_collection**](RuleApi.md#get_rule_collection) | **GET** /rules | Retrieves the collection of Rule resources.
[**get_rule_item**](RuleApi.md#get_rule_item) | **GET** /rules/{id} | Retrieves a Rule resource.


# **agent_legacy_complex_rule_collection**
> List[RuleRead] agent_legacy_complex_rule_collection(project_id)

Retrieves the collection of Rule resources.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.rule_read import RuleRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RuleApi(api_client)
    project_id = 'project_id_example' # str | 

    try:
        # Retrieves the collection of Rule resources.
        api_response = api_instance.agent_legacy_complex_rule_collection(project_id)
        print("The response of RuleApi->agent_legacy_complex_rule_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleApi->agent_legacy_complex_rule_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**|  | 

### Return type

[**List[RuleRead]**](RuleRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Rule collection response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **agent_legacy_straight_rule_collection**
> List[RuleRead] agent_legacy_straight_rule_collection(project_id)

Retrieves the collection of Rule resources.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.rule_read import RuleRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RuleApi(api_client)
    project_id = 'project_id_example' # str | 

    try:
        # Retrieves the collection of Rule resources.
        api_response = api_instance.agent_legacy_straight_rule_collection(project_id)
        print("The response of RuleApi->agent_legacy_straight_rule_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleApi->agent_legacy_straight_rule_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**|  | 

### Return type

[**List[RuleRead]**](RuleRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Rule collection response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **agent_rule_collection**
> List[RuleRead] agent_rule_collection(project_id)

Retrieves the collection of Rule resources.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.rule_read import RuleRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RuleApi(api_client)
    project_id = 'project_id_example' # str | 

    try:
        # Retrieves the collection of Rule resources.
        api_response = api_instance.agent_rule_collection(project_id)
        print("The response of RuleApi->agent_rule_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleApi->agent_rule_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**|  | 

### Return type

[**List[RuleRead]**](RuleRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Rule collection response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_rule_collection**
> List[RuleRead] export_rule_collection(project_id, sort_id=sort_id, sort_view_count=sort_view_count)

Retrieves the collection of Rule resources.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.rule_read import RuleRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RuleApi(api_client)
    project_id = 'project_id_example' # str | 
    sort_id = 'sort_id_example' # str |  (optional)
    sort_view_count = 'sort_view_count_example' # str |  (optional)

    try:
        # Retrieves the collection of Rule resources.
        api_response = api_instance.export_rule_collection(project_id, sort_id=sort_id, sort_view_count=sort_view_count)
        print("The response of RuleApi->export_rule_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleApi->export_rule_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**|  | 
 **sort_id** | **str**|  | [optional] 
 **sort_view_count** | **str**|  | [optional] 

### Return type

[**List[RuleRead]**](RuleRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Rule collection response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_rule_collection**
> List[RuleRead] get_rule_collection(project_id, sort_id=sort_id, sort_view_count=sort_view_count, page=page)

Retrieves the collection of Rule resources.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.rule_read import RuleRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RuleApi(api_client)
    project_id = 'project_id_example' # str | 
    sort_id = 'sort_id_example' # str |  (optional)
    sort_view_count = 'sort_view_count_example' # str |  (optional)
    page = 56 # int | The collection page number (optional)

    try:
        # Retrieves the collection of Rule resources.
        api_response = api_instance.get_rule_collection(project_id, sort_id=sort_id, sort_view_count=sort_view_count, page=page)
        print("The response of RuleApi->get_rule_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleApi->get_rule_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**|  | 
 **sort_id** | **str**|  | [optional] 
 **sort_view_count** | **str**|  | [optional] 
 **page** | **int**| The collection page number | [optional] 

### Return type

[**List[RuleRead]**](RuleRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Rule collection response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_rule_item**
> RuleRead get_rule_item(id)

Retrieves a Rule resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.rule_read import RuleRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RuleApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieves a Rule resource.
        api_response = api_instance.get_rule_item(id)
        print("The response of RuleApi->get_rule_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleApi->get_rule_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**RuleRead**](RuleRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Rule resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


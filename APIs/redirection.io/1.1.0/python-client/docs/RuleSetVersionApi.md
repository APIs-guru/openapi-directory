# openapi_client.RuleSetVersionApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clear_rule_set_version_item**](RuleSetVersionApi.md#clear_rule_set_version_item) | **POST** /rule-set-versions/{id}/clear | Clear a version
[**get_rule_set_version_collection**](RuleSetVersionApi.md#get_rule_set_version_collection) | **GET** /rule-set-versions | Retrieves the collection of RuleSetVersion resources.
[**get_rule_set_version_item**](RuleSetVersionApi.md#get_rule_set_version_item) | **GET** /rule-set-versions/{id} | Retrieves a RuleSetVersion resource.
[**publish_rule_set_version_item**](RuleSetVersionApi.md#publish_rule_set_version_item) | **POST** /rule-set-versions/{id}/publish | Publish a version


# **clear_rule_set_version_item**
> RuleSetVersionRead clear_rule_set_version_item(id, rule_set_version)

Clear a version

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.rule_set_version import RuleSetVersion
from openapi_client.models.rule_set_version_read import RuleSetVersionRead
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
    api_instance = openapi_client.RuleSetVersionApi(api_client)
    id = 'id_example' # str | The id of the version
    rule_set_version = openapi_client.RuleSetVersion() # RuleSetVersion | The new RuleSetVersion resource

    try:
        # Clear a version
        api_response = api_instance.clear_rule_set_version_item(id, rule_set_version)
        print("The response of RuleSetVersionApi->clear_rule_set_version_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleSetVersionApi->clear_rule_set_version_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the version | 
 **rule_set_version** | [**RuleSetVersion**](RuleSetVersion.md)| The new RuleSetVersion resource | 

### Return type

[**RuleSetVersionRead**](RuleSetVersionRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | RuleSetVersion resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_rule_set_version_collection**
> List[RuleSetVersionRead] get_rule_set_version_collection(project_id, sort_created_at=sort_created_at, page=page)

Retrieves the collection of RuleSetVersion resources.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.rule_set_version_read import RuleSetVersionRead
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
    api_instance = openapi_client.RuleSetVersionApi(api_client)
    project_id = 'project_id_example' # str | 
    sort_created_at = 'sort_created_at_example' # str |  (optional)
    page = 56 # int | The collection page number (optional)

    try:
        # Retrieves the collection of RuleSetVersion resources.
        api_response = api_instance.get_rule_set_version_collection(project_id, sort_created_at=sort_created_at, page=page)
        print("The response of RuleSetVersionApi->get_rule_set_version_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleSetVersionApi->get_rule_set_version_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**|  | 
 **sort_created_at** | **str**|  | [optional] 
 **page** | **int**| The collection page number | [optional] 

### Return type

[**List[RuleSetVersionRead]**](RuleSetVersionRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RuleSetVersion collection response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_rule_set_version_item**
> RuleSetVersionRead get_rule_set_version_item(id)

Retrieves a RuleSetVersion resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.rule_set_version_read import RuleSetVersionRead
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
    api_instance = openapi_client.RuleSetVersionApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieves a RuleSetVersion resource.
        api_response = api_instance.get_rule_set_version_item(id)
        print("The response of RuleSetVersionApi->get_rule_set_version_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleSetVersionApi->get_rule_set_version_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**RuleSetVersionRead**](RuleSetVersionRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RuleSetVersion resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **publish_rule_set_version_item**
> RuleSetVersionRead publish_rule_set_version_item(id, rule_set_version)

Publish a version

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.rule_set_version import RuleSetVersion
from openapi_client.models.rule_set_version_read import RuleSetVersionRead
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
    api_instance = openapi_client.RuleSetVersionApi(api_client)
    id = 'id_example' # str | The id of the version
    rule_set_version = openapi_client.RuleSetVersion() # RuleSetVersion | The new RuleSetVersion resource

    try:
        # Publish a version
        api_response = api_instance.publish_rule_set_version_item(id, rule_set_version)
        print("The response of RuleSetVersionApi->publish_rule_set_version_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleSetVersionApi->publish_rule_set_version_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the version | 
 **rule_set_version** | [**RuleSetVersion**](RuleSetVersion.md)| The new RuleSetVersion resource | 

### Return type

[**RuleSetVersionRead**](RuleSetVersionRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | RuleSetVersion resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


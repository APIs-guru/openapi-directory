# openapi_client.RuleChangeApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_rule_change_item**](RuleChangeApi.md#delete_rule_change_item) | **DELETE** /rule-changes/{id} | Removes the RuleChange resource.
[**get_rule_change_collection**](RuleChangeApi.md#get_rule_change_collection) | **GET** /rule-changes | Retrieves the collection of RuleChange resources.
[**get_rule_change_item**](RuleChangeApi.md#get_rule_change_item) | **GET** /rule-changes/{id} | Retrieves a RuleChange resource.
[**post_rule_change_collection**](RuleChangeApi.md#post_rule_change_collection) | **POST** /rule-changes | Creates a RuleChange resource.


# **delete_rule_change_item**
> delete_rule_change_item(id)

Removes the RuleChange resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
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
    api_instance = openapi_client.RuleChangeApi(api_client)
    id = 'id_example' # str | 

    try:
        # Removes the RuleChange resource.
        api_instance.delete_rule_change_item(id)
    except Exception as e:
        print("Exception when calling RuleChangeApi->delete_rule_change_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | RuleChange resource deleted |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_rule_change_collection**
> List[RuleChangeRead] get_rule_change_collection(version_id, page=page)

Retrieves the collection of RuleChange resources.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.rule_change_read import RuleChangeRead
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
    api_instance = openapi_client.RuleChangeApi(api_client)
    version_id = 'version_id_example' # str | 
    page = 56 # int | The collection page number (optional)

    try:
        # Retrieves the collection of RuleChange resources.
        api_response = api_instance.get_rule_change_collection(version_id, page=page)
        print("The response of RuleChangeApi->get_rule_change_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleChangeApi->get_rule_change_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version_id** | **str**|  | 
 **page** | **int**| The collection page number | [optional] 

### Return type

[**List[RuleChangeRead]**](RuleChangeRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RuleChange collection response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_rule_change_item**
> RuleChangeRead get_rule_change_item(id)

Retrieves a RuleChange resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.rule_change_read import RuleChangeRead
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
    api_instance = openapi_client.RuleChangeApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieves a RuleChange resource.
        api_response = api_instance.get_rule_change_item(id)
        print("The response of RuleChangeApi->get_rule_change_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleChangeApi->get_rule_change_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**RuleChangeRead**](RuleChangeRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RuleChange resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_rule_change_collection**
> RuleChangeRead post_rule_change_collection(rule_change=rule_change)

Creates a RuleChange resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.rule_change_read import RuleChangeRead
from openapi_client.models.rule_change_write import RuleChangeWrite
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
    api_instance = openapi_client.RuleChangeApi(api_client)
    rule_change = openapi_client.RuleChangeWrite() # RuleChangeWrite | The new RuleChange resource (optional)

    try:
        # Creates a RuleChange resource.
        api_response = api_instance.post_rule_change_collection(rule_change=rule_change)
        print("The response of RuleChangeApi->post_rule_change_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleChangeApi->post_rule_change_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule_change** | [**RuleChangeWrite**](RuleChangeWrite.md)| The new RuleChange resource | [optional] 

### Return type

[**RuleChangeRead**](RuleChangeRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | RuleChange resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


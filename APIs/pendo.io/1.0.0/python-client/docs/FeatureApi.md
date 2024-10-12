# openapi_client.FeatureApi

All URIs are relative to *https://api.feedback.eu.pendo.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**features_get**](FeatureApi.md#features_get) | **GET** /features | Query features
[**features_id_get**](FeatureApi.md#features_id_get) | **GET** /features/{id} | Get a Feature by ID
[**features_id_tags_delete**](FeatureApi.md#features_id_tags_delete) | **DELETE** /features/{id}/tags | Delete custom Feature tags
[**features_id_tags_get**](FeatureApi.md#features_id_tags_get) | **GET** /features/{id}/tags | Get custom Feature tags
[**features_id_tags_post**](FeatureApi.md#features_id_tags_post) | **POST** /features/{id}/tags | Overwrite current custom Feature tags with the given tags
[**search_get**](FeatureApi.md#search_get) | **GET** /search | Search features


# **features_get**
> List[Feature] features_get(limit=limit, start=start, order_dir=order_dir, is_private=is_private, wanted_by=wanted_by, order_by=order_by, tags=tags, products=products)

Query features

### Example

* Api Key Authentication (userApiKey (request header)):
* Api Key Authentication (userApiKey (query parameter)):

```python
import openapi_client
from openapi_client.models.feature import Feature
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.feedback.eu.pendo.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.feedback.eu.pendo.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: userApiKey (request header)
configuration.api_key['userApiKey (request header)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (request header)'] = 'Bearer'

# Configure API key authorization: userApiKey (query parameter)
configuration.api_key['userApiKey (query parameter)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (query parameter)'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FeatureApi(api_client)
    limit = 3.4 # float | Limit the number of records returned (optional)
    start = 3.4 # float | Offset to start at (optional)
    order_dir = 'order_dir_example' # str | The sort direction (optional)
    is_private = True # bool | Filter by whether the features are shown/hidden from customer, if supplied. (optional)
    wanted_by = 56 # int | Filter by User ID, if supplied. (optional)
    order_by = 'order_by_example' # str | The field to use for sort (optional)
    tags = 'tags_example' # str | Tags to limit results by. Multiple tags can be provided via comma delimeted string. Tags with contexts can be used. E.g. \"....&tags=TagExample,Multi:TagThis,Multi:TagThat\". (optional)
    products = 'products_example' # str | Products to limit results by. Comma delimeted string of either ids or names. E.g. \"...&products=1,2,3\" or \"...products=Product1,Product2\". (optional)

    try:
        # Query features
        api_response = api_instance.features_get(limit=limit, start=start, order_dir=order_dir, is_private=is_private, wanted_by=wanted_by, order_by=order_by, tags=tags, products=products)
        print("The response of FeatureApi->features_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeatureApi->features_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **float**| Limit the number of records returned | [optional] 
 **start** | **float**| Offset to start at | [optional] 
 **order_dir** | **str**| The sort direction | [optional] 
 **is_private** | **bool**| Filter by whether the features are shown/hidden from customer, if supplied. | [optional] 
 **wanted_by** | **int**| Filter by User ID, if supplied. | [optional] 
 **order_by** | **str**| The field to use for sort | [optional] 
 **tags** | **str**| Tags to limit results by. Multiple tags can be provided via comma delimeted string. Tags with contexts can be used. E.g. \&quot;....&amp;tags&#x3D;TagExample,Multi:TagThis,Multi:TagThat\&quot;. | [optional] 
 **products** | **str**| Products to limit results by. Comma delimeted string of either ids or names. E.g. \&quot;...&amp;products&#x3D;1,2,3\&quot; or \&quot;...products&#x3D;Product1,Product2\&quot;. | [optional] 

### Return type

[**List[Feature]**](Feature.md)

### Authorization

[userApiKey (request header)](../README.md#userApiKey (request header)), [userApiKey (query parameter)](../README.md#userApiKey (query parameter))

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_id_get**
> Feature features_id_get(id)

Get a Feature by ID

### Example

* Api Key Authentication (userApiKey (request header)):
* Api Key Authentication (userApiKey (query parameter)):

```python
import openapi_client
from openapi_client.models.feature import Feature
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.feedback.eu.pendo.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.feedback.eu.pendo.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: userApiKey (request header)
configuration.api_key['userApiKey (request header)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (request header)'] = 'Bearer'

# Configure API key authorization: userApiKey (query parameter)
configuration.api_key['userApiKey (query parameter)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (query parameter)'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FeatureApi(api_client)
    id = 56 # int | ID of the feature

    try:
        # Get a Feature by ID
        api_response = api_instance.features_id_get(id)
        print("The response of FeatureApi->features_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeatureApi->features_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID of the feature | 

### Return type

[**Feature**](Feature.md)

### Authorization

[userApiKey (request header)](../README.md#userApiKey (request header)), [userApiKey (query parameter)](../README.md#userApiKey (query parameter))

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_id_tags_delete**
> features_id_tags_delete(id)

Delete custom Feature tags

Removes all custom tags associated with the Feature

### Example

* Api Key Authentication (userApiKey (request header)):
* Api Key Authentication (userApiKey (query parameter)):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.feedback.eu.pendo.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.feedback.eu.pendo.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: userApiKey (request header)
configuration.api_key['userApiKey (request header)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (request header)'] = 'Bearer'

# Configure API key authorization: userApiKey (query parameter)
configuration.api_key['userApiKey (query parameter)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (query parameter)'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FeatureApi(api_client)
    id = 3.4 # float | Feedback's Feature ID

    try:
        # Delete custom Feature tags
        api_instance.features_id_tags_delete(id)
    except Exception as e:
        print("Exception when calling FeatureApi->features_id_tags_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**| Feedback&#39;s Feature ID | 

### Return type

void (empty response body)

### Authorization

[userApiKey (request header)](../README.md#userApiKey (request header)), [userApiKey (query parameter)](../README.md#userApiKey (query parameter))

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_id_tags_get**
> features_id_tags_get(id)

Get custom Feature tags

### Example

* Api Key Authentication (userApiKey (request header)):
* Api Key Authentication (userApiKey (query parameter)):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.feedback.eu.pendo.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.feedback.eu.pendo.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: userApiKey (request header)
configuration.api_key['userApiKey (request header)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (request header)'] = 'Bearer'

# Configure API key authorization: userApiKey (query parameter)
configuration.api_key['userApiKey (query parameter)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (query parameter)'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FeatureApi(api_client)
    id = 3.4 # float | Account ID (generated by Feedback)

    try:
        # Get custom Feature tags
        api_instance.features_id_tags_get(id)
    except Exception as e:
        print("Exception when calling FeatureApi->features_id_tags_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**| Account ID (generated by Feedback) | 

### Return type

void (empty response body)

### Authorization

[userApiKey (request header)](../README.md#userApiKey (request header)), [userApiKey (query parameter)](../README.md#userApiKey (query parameter))

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an array of maps specifying tags under each tag group, for example:  [  {&#39;impacts&#39; &#x3D;&gt; [&#39;sales&#39;]},  {&#39;resources&#39; &#x3D;&gt; [&#39;dev&#39;, &#39;test&#39;, &#39;support&#39;]}  ] |  -  |
**404** | Feature not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_id_tags_post**
> features_id_tags_post(id, tags)

Overwrite current custom Feature tags with the given tags

### Example

* Api Key Authentication (userApiKey (request header)):
* Api Key Authentication (userApiKey (query parameter)):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.feedback.eu.pendo.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.feedback.eu.pendo.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: userApiKey (request header)
configuration.api_key['userApiKey (request header)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (request header)'] = 'Bearer'

# Configure API key authorization: userApiKey (query parameter)
configuration.api_key['userApiKey (query parameter)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (query parameter)'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FeatureApi(api_client)
    id = 3.4 # float | Feedback's Feature ID
    tags = None # object | 

    try:
        # Overwrite current custom Feature tags with the given tags
        api_instance.features_id_tags_post(id, tags)
    except Exception as e:
        print("Exception when calling FeatureApi->features_id_tags_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**| Feedback&#39;s Feature ID | 
 **tags** | **object**|  | 

### Return type

void (empty response body)

### Authorization

[userApiKey (request header)](../README.md#userApiKey (request header)), [userApiKey (query parameter)](../README.md#userApiKey (query parameter))

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated Feature tags |  -  |
**404** | Feature not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_get**
> List[Feature] search_get(scope, q, status=status, tags=tags, products=products)

Search features

### Example

* Api Key Authentication (userApiKey (request header)):
* Api Key Authentication (userApiKey (query parameter)):

```python
import openapi_client
from openapi_client.models.feature import Feature
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.feedback.eu.pendo.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.feedback.eu.pendo.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: userApiKey (request header)
configuration.api_key['userApiKey (request header)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (request header)'] = 'Bearer'

# Configure API key authorization: userApiKey (query parameter)
configuration.api_key['userApiKey (query parameter)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (query parameter)'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FeatureApi(api_client)
    scope = 'scope_example' # str | Specifies the type of entity being searched for. Must be set to 'feature'
    q = 'q_example' # str | The search term.
    status = 'status_example' # str | A comma seperated list of status values to filter by, if required. Valid values: 'new', 'waiting', 'planned', 'developing', 'released', 'declined'. (optional)
    tags = 'tags_example' # str | Tags to limit results by - only applies when scope is 'case' or 'feature'. Multiple tags can be provided via comma delimeted string. Tags with contexts can be used. E.g. \"....&tags=TagExample,Multi:TagThis,Multi:TagThat\". (optional)
    products = 'products_example' # str | Products to limit results by. Comma delimeted string of either ids or names. E.g. \"...&products=1,2,3\" or \"...products=Product1,Product2\". (optional)

    try:
        # Search features
        api_response = api_instance.search_get(scope, q, status=status, tags=tags, products=products)
        print("The response of FeatureApi->search_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeatureApi->search_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| Specifies the type of entity being searched for. Must be set to &#39;feature&#39; | 
 **q** | **str**| The search term. | 
 **status** | **str**| A comma seperated list of status values to filter by, if required. Valid values: &#39;new&#39;, &#39;waiting&#39;, &#39;planned&#39;, &#39;developing&#39;, &#39;released&#39;, &#39;declined&#39;. | [optional] 
 **tags** | **str**| Tags to limit results by - only applies when scope is &#39;case&#39; or &#39;feature&#39;. Multiple tags can be provided via comma delimeted string. Tags with contexts can be used. E.g. \&quot;....&amp;tags&#x3D;TagExample,Multi:TagThis,Multi:TagThat\&quot;. | [optional] 
 **products** | **str**| Products to limit results by. Comma delimeted string of either ids or names. E.g. \&quot;...&amp;products&#x3D;1,2,3\&quot; or \&quot;...products&#x3D;Product1,Product2\&quot;. | [optional] 

### Return type

[**List[Feature]**](Feature.md)

### Authorization

[userApiKey (request header)](../README.md#userApiKey (request header)), [userApiKey (query parameter)](../README.md#userApiKey (query parameter))

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


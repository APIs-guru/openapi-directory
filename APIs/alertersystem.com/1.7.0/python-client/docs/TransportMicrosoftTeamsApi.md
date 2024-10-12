# openapi_client.TransportMicrosoftTeamsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_transport_microsoft_teams_get_collection**](TransportMicrosoftTeamsApi.md#api_transport_microsoft_teams_get_collection) | **GET** /api/transport-microsoft-teams | Retrieves the collection of TransportMicrosoftTeams resources.
[**api_transport_microsoft_teams_id_delete**](TransportMicrosoftTeamsApi.md#api_transport_microsoft_teams_id_delete) | **DELETE** /api/transport-microsoft-teams/{id} | Removes the TransportMicrosoftTeams resource.
[**api_transport_microsoft_teams_id_get**](TransportMicrosoftTeamsApi.md#api_transport_microsoft_teams_id_get) | **GET** /api/transport-microsoft-teams/{id} | Retrieves a TransportMicrosoftTeams resource.
[**api_transport_microsoft_teams_id_patch**](TransportMicrosoftTeamsApi.md#api_transport_microsoft_teams_id_patch) | **PATCH** /api/transport-microsoft-teams/{id} | Updates the TransportMicrosoftTeams resource.
[**api_transport_microsoft_teams_id_put**](TransportMicrosoftTeamsApi.md#api_transport_microsoft_teams_id_put) | **PUT** /api/transport-microsoft-teams/{id} | Replaces the TransportMicrosoftTeams resource.
[**api_transport_microsoft_teams_post**](TransportMicrosoftTeamsApi.md#api_transport_microsoft_teams_post) | **POST** /api/transport-microsoft-teams | Creates a TransportMicrosoftTeams resource.


# **api_transport_microsoft_teams_get_collection**
> List[TransportMicrosoftTeamsGet] api_transport_microsoft_teams_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of TransportMicrosoftTeams resources.

Retrieves the collection of TransportMicrosoftTeams resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_microsoft_teams_get import TransportMicrosoftTeamsGet
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransportMicrosoftTeamsApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TransportMicrosoftTeams resources.
        api_response = api_instance.api_transport_microsoft_teams_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of TransportMicrosoftTeamsApi->api_transport_microsoft_teams_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMicrosoftTeamsApi->api_transport_microsoft_teams_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| The collection page number | [optional] [default to 1]
 **data_segment_code** | **str**|  | [optional] 
 **data_segment_code2** | [**List[str]**](str.md)|  | [optional] 
 **partition** | **str**|  | [optional] 
 **partition2** | [**List[str]**](str.md)|  | [optional] 
 **properties** | [**List[str]**](str.md)| Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]&#x3D;{propertyName}&amp;properties[]&#x3D;{anotherPropertyName}&amp;properties[{nestedPropertyParent}][]&#x3D;{nestedProperty} | [optional] 

### Return type

[**List[TransportMicrosoftTeamsGet]**](TransportMicrosoftTeamsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportMicrosoftTeams collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_microsoft_teams_id_delete**
> api_transport_microsoft_teams_id_delete(id)

Removes the TransportMicrosoftTeams resource.

Removes the TransportMicrosoftTeams resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransportMicrosoftTeamsApi(api_client)
    id = 'id_example' # str | TransportMicrosoftTeams identifier

    try:
        # Removes the TransportMicrosoftTeams resource.
        api_instance.api_transport_microsoft_teams_id_delete(id)
    except Exception as e:
        print("Exception when calling TransportMicrosoftTeamsApi->api_transport_microsoft_teams_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportMicrosoftTeams identifier | 

### Return type

void (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | TransportMicrosoftTeams resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_microsoft_teams_id_get**
> TransportMicrosoftTeamsGet api_transport_microsoft_teams_id_get(id)

Retrieves a TransportMicrosoftTeams resource.

Retrieves a TransportMicrosoftTeams resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_microsoft_teams_get import TransportMicrosoftTeamsGet
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransportMicrosoftTeamsApi(api_client)
    id = 'id_example' # str | TransportMicrosoftTeams identifier

    try:
        # Retrieves a TransportMicrosoftTeams resource.
        api_response = api_instance.api_transport_microsoft_teams_id_get(id)
        print("The response of TransportMicrosoftTeamsApi->api_transport_microsoft_teams_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMicrosoftTeamsApi->api_transport_microsoft_teams_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportMicrosoftTeams identifier | 

### Return type

[**TransportMicrosoftTeamsGet**](TransportMicrosoftTeamsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportMicrosoftTeams resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_microsoft_teams_id_patch**
> TransportMicrosoftTeamsGet api_transport_microsoft_teams_id_patch(id, transport_microsoft_teams_patch)

Updates the TransportMicrosoftTeams resource.

Updates the TransportMicrosoftTeams resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_microsoft_teams_get import TransportMicrosoftTeamsGet
from openapi_client.models.transport_microsoft_teams_patch import TransportMicrosoftTeamsPatch
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransportMicrosoftTeamsApi(api_client)
    id = 'id_example' # str | TransportMicrosoftTeams identifier
    transport_microsoft_teams_patch = openapi_client.TransportMicrosoftTeamsPatch() # TransportMicrosoftTeamsPatch | The updated TransportMicrosoftTeams resource

    try:
        # Updates the TransportMicrosoftTeams resource.
        api_response = api_instance.api_transport_microsoft_teams_id_patch(id, transport_microsoft_teams_patch)
        print("The response of TransportMicrosoftTeamsApi->api_transport_microsoft_teams_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMicrosoftTeamsApi->api_transport_microsoft_teams_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportMicrosoftTeams identifier | 
 **transport_microsoft_teams_patch** | [**TransportMicrosoftTeamsPatch**](TransportMicrosoftTeamsPatch.md)| The updated TransportMicrosoftTeams resource | 

### Return type

[**TransportMicrosoftTeamsGet**](TransportMicrosoftTeamsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportMicrosoftTeams resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_microsoft_teams_id_put**
> TransportMicrosoftTeamsGet api_transport_microsoft_teams_id_put(id, transport_microsoft_teams_put)

Replaces the TransportMicrosoftTeams resource.

Replaces the TransportMicrosoftTeams resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_microsoft_teams_get import TransportMicrosoftTeamsGet
from openapi_client.models.transport_microsoft_teams_put import TransportMicrosoftTeamsPut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransportMicrosoftTeamsApi(api_client)
    id = 'id_example' # str | TransportMicrosoftTeams identifier
    transport_microsoft_teams_put = openapi_client.TransportMicrosoftTeamsPut() # TransportMicrosoftTeamsPut | The updated TransportMicrosoftTeams resource

    try:
        # Replaces the TransportMicrosoftTeams resource.
        api_response = api_instance.api_transport_microsoft_teams_id_put(id, transport_microsoft_teams_put)
        print("The response of TransportMicrosoftTeamsApi->api_transport_microsoft_teams_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMicrosoftTeamsApi->api_transport_microsoft_teams_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TransportMicrosoftTeams identifier | 
 **transport_microsoft_teams_put** | [**TransportMicrosoftTeamsPut**](TransportMicrosoftTeamsPut.md)| The updated TransportMicrosoftTeams resource | 

### Return type

[**TransportMicrosoftTeamsGet**](TransportMicrosoftTeamsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TransportMicrosoftTeams resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_transport_microsoft_teams_post**
> TransportMicrosoftTeamsGet api_transport_microsoft_teams_post(transport_microsoft_teams_post)

Creates a TransportMicrosoftTeams resource.

Creates a TransportMicrosoftTeams resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.transport_microsoft_teams_get import TransportMicrosoftTeamsGet
from openapi_client.models.transport_microsoft_teams_post import TransportMicrosoftTeamsPost
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransportMicrosoftTeamsApi(api_client)
    transport_microsoft_teams_post = openapi_client.TransportMicrosoftTeamsPost() # TransportMicrosoftTeamsPost | The new TransportMicrosoftTeams resource

    try:
        # Creates a TransportMicrosoftTeams resource.
        api_response = api_instance.api_transport_microsoft_teams_post(transport_microsoft_teams_post)
        print("The response of TransportMicrosoftTeamsApi->api_transport_microsoft_teams_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransportMicrosoftTeamsApi->api_transport_microsoft_teams_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transport_microsoft_teams_post** | [**TransportMicrosoftTeamsPost**](TransportMicrosoftTeamsPost.md)| The new TransportMicrosoftTeams resource | 

### Return type

[**TransportMicrosoftTeamsGet**](TransportMicrosoftTeamsGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TransportMicrosoftTeams resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


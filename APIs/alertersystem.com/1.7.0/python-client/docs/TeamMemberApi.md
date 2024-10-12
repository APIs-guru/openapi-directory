# openapi_client.TeamMemberApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_team_member_get_collection**](TeamMemberApi.md#api_team_member_get_collection) | **GET** /api/team-member | Retrieves the collection of TeamMember resources.
[**api_team_member_id_delete**](TeamMemberApi.md#api_team_member_id_delete) | **DELETE** /api/team-member/{id} | Removes the TeamMember resource.
[**api_team_member_id_get**](TeamMemberApi.md#api_team_member_id_get) | **GET** /api/team-member/{id} | Retrieves a TeamMember resource.
[**api_team_member_id_patch**](TeamMemberApi.md#api_team_member_id_patch) | **PATCH** /api/team-member/{id} | Updates the TeamMember resource.
[**api_team_member_id_put**](TeamMemberApi.md#api_team_member_id_put) | **PUT** /api/team-member/{id} | Replaces the TeamMember resource.


# **api_team_member_get_collection**
> List[TeamMemberGet] api_team_member_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, user_account=user_account, user_account2=user_account2, properties=properties)

Retrieves the collection of TeamMember resources.

Retrieves the collection of TeamMember resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.team_member_get import TeamMemberGet
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
    api_instance = openapi_client.TeamMemberApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    user_account = 'user_account_example' # str |  (optional)
    user_account2 = ['user_account_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TeamMember resources.
        api_response = api_instance.api_team_member_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, user_account=user_account, user_account2=user_account2, properties=properties)
        print("The response of TeamMemberApi->api_team_member_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamMemberApi->api_team_member_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| The collection page number | [optional] [default to 1]
 **data_segment_code** | **str**|  | [optional] 
 **data_segment_code2** | [**List[str]**](str.md)|  | [optional] 
 **partition** | **str**|  | [optional] 
 **partition2** | [**List[str]**](str.md)|  | [optional] 
 **user_account** | **str**|  | [optional] 
 **user_account2** | [**List[str]**](str.md)|  | [optional] 
 **properties** | [**List[str]**](str.md)| Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]&#x3D;{propertyName}&amp;properties[]&#x3D;{anotherPropertyName}&amp;properties[{nestedPropertyParent}][]&#x3D;{nestedProperty} | [optional] 

### Return type

[**List[TeamMemberGet]**](TeamMemberGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TeamMember collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_team_member_id_delete**
> api_team_member_id_delete(id)

Removes the TeamMember resource.

Removes the TeamMember resource.

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
    api_instance = openapi_client.TeamMemberApi(api_client)
    id = 'id_example' # str | TeamMember identifier

    try:
        # Removes the TeamMember resource.
        api_instance.api_team_member_id_delete(id)
    except Exception as e:
        print("Exception when calling TeamMemberApi->api_team_member_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TeamMember identifier | 

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
**204** | TeamMember resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_team_member_id_get**
> TeamMemberGet api_team_member_id_get(id)

Retrieves a TeamMember resource.

Retrieves a TeamMember resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.team_member_get import TeamMemberGet
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
    api_instance = openapi_client.TeamMemberApi(api_client)
    id = 'id_example' # str | TeamMember identifier

    try:
        # Retrieves a TeamMember resource.
        api_response = api_instance.api_team_member_id_get(id)
        print("The response of TeamMemberApi->api_team_member_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamMemberApi->api_team_member_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TeamMember identifier | 

### Return type

[**TeamMemberGet**](TeamMemberGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TeamMember resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_team_member_id_patch**
> TeamMemberGet api_team_member_id_patch(id, team_member_patch)

Updates the TeamMember resource.

Updates the TeamMember resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.team_member_get import TeamMemberGet
from openapi_client.models.team_member_patch import TeamMemberPatch
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
    api_instance = openapi_client.TeamMemberApi(api_client)
    id = 'id_example' # str | TeamMember identifier
    team_member_patch = openapi_client.TeamMemberPatch() # TeamMemberPatch | The updated TeamMember resource

    try:
        # Updates the TeamMember resource.
        api_response = api_instance.api_team_member_id_patch(id, team_member_patch)
        print("The response of TeamMemberApi->api_team_member_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamMemberApi->api_team_member_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TeamMember identifier | 
 **team_member_patch** | [**TeamMemberPatch**](TeamMemberPatch.md)| The updated TeamMember resource | 

### Return type

[**TeamMemberGet**](TeamMemberGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TeamMember resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_team_member_id_put**
> TeamMemberGet api_team_member_id_put(id, team_member_put)

Replaces the TeamMember resource.

Replaces the TeamMember resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.team_member_get import TeamMemberGet
from openapi_client.models.team_member_put import TeamMemberPut
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
    api_instance = openapi_client.TeamMemberApi(api_client)
    id = 'id_example' # str | TeamMember identifier
    team_member_put = openapi_client.TeamMemberPut() # TeamMemberPut | The updated TeamMember resource

    try:
        # Replaces the TeamMember resource.
        api_response = api_instance.api_team_member_id_put(id, team_member_put)
        print("The response of TeamMemberApi->api_team_member_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamMemberApi->api_team_member_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TeamMember identifier | 
 **team_member_put** | [**TeamMemberPut**](TeamMemberPut.md)| The updated TeamMember resource | 

### Return type

[**TeamMemberGet**](TeamMemberGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TeamMember resource updated |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


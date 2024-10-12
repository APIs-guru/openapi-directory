# openapi_client.TeamInvitationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_team_invitation_get_collection**](TeamInvitationApi.md#api_team_invitation_get_collection) | **GET** /api/team-invitation | Retrieves the collection of TeamInvitation resources.
[**api_team_invitation_id_delete**](TeamInvitationApi.md#api_team_invitation_id_delete) | **DELETE** /api/team-invitation/{id} | Removes the TeamInvitation resource.
[**api_team_invitation_id_get**](TeamInvitationApi.md#api_team_invitation_id_get) | **GET** /api/team-invitation/{id} | Retrieves a TeamInvitation resource.
[**api_team_invitation_post**](TeamInvitationApi.md#api_team_invitation_post) | **POST** /api/team-invitation | Creates a TeamInvitation resource.


# **api_team_invitation_get_collection**
> List[TeamInvitationGet] api_team_invitation_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, invitee_email=invitee_email, invitee_email2=invitee_email2, properties=properties)

Retrieves the collection of TeamInvitation resources.

Retrieves the collection of TeamInvitation resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.team_invitation_get import TeamInvitationGet
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
    api_instance = openapi_client.TeamInvitationApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    invitee_email = 'invitee_email_example' # str |  (optional)
    invitee_email2 = ['invitee_email_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TeamInvitation resources.
        api_response = api_instance.api_team_invitation_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, partition=partition, partition2=partition2, invitee_email=invitee_email, invitee_email2=invitee_email2, properties=properties)
        print("The response of TeamInvitationApi->api_team_invitation_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamInvitationApi->api_team_invitation_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| The collection page number | [optional] [default to 1]
 **data_segment_code** | **str**|  | [optional] 
 **data_segment_code2** | [**List[str]**](str.md)|  | [optional] 
 **partition** | **str**|  | [optional] 
 **partition2** | [**List[str]**](str.md)|  | [optional] 
 **invitee_email** | **str**|  | [optional] 
 **invitee_email2** | [**List[str]**](str.md)|  | [optional] 
 **properties** | [**List[str]**](str.md)| Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]&#x3D;{propertyName}&amp;properties[]&#x3D;{anotherPropertyName}&amp;properties[{nestedPropertyParent}][]&#x3D;{nestedProperty} | [optional] 

### Return type

[**List[TeamInvitationGet]**](TeamInvitationGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TeamInvitation collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_team_invitation_id_delete**
> api_team_invitation_id_delete(id)

Removes the TeamInvitation resource.

Removes the TeamInvitation resource.

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
    api_instance = openapi_client.TeamInvitationApi(api_client)
    id = 'id_example' # str | TeamInvitation identifier

    try:
        # Removes the TeamInvitation resource.
        api_instance.api_team_invitation_id_delete(id)
    except Exception as e:
        print("Exception when calling TeamInvitationApi->api_team_invitation_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TeamInvitation identifier | 

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
**204** | TeamInvitation resource deleted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_team_invitation_id_get**
> TeamInvitationGet api_team_invitation_id_get(id)

Retrieves a TeamInvitation resource.

Retrieves a TeamInvitation resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.team_invitation_get import TeamInvitationGet
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
    api_instance = openapi_client.TeamInvitationApi(api_client)
    id = 'id_example' # str | TeamInvitation identifier

    try:
        # Retrieves a TeamInvitation resource.
        api_response = api_instance.api_team_invitation_id_get(id)
        print("The response of TeamInvitationApi->api_team_invitation_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamInvitationApi->api_team_invitation_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TeamInvitation identifier | 

### Return type

[**TeamInvitationGet**](TeamInvitationGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TeamInvitation resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_team_invitation_post**
> TeamInvitationGet api_team_invitation_post(team_invitation_post)

Creates a TeamInvitation resource.

Creates a TeamInvitation resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.team_invitation_get import TeamInvitationGet
from openapi_client.models.team_invitation_post import TeamInvitationPost
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
    api_instance = openapi_client.TeamInvitationApi(api_client)
    team_invitation_post = openapi_client.TeamInvitationPost() # TeamInvitationPost | The new TeamInvitation resource

    try:
        # Creates a TeamInvitation resource.
        api_response = api_instance.api_team_invitation_post(team_invitation_post)
        print("The response of TeamInvitationApi->api_team_invitation_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamInvitationApi->api_team_invitation_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_invitation_post** | [**TeamInvitationPost**](TeamInvitationPost.md)| The new TeamInvitation resource | 

### Return type

[**TeamInvitationGet**](TeamInvitationGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TeamInvitation resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


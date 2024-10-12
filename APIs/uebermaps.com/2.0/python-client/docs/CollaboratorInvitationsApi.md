# openapi_client.CollaboratorInvitationsApi

All URIs are relative to *http://uebermaps.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**collaborator_invitations_get**](CollaboratorInvitationsApi.md#collaborator_invitations_get) | **GET** /collaborator_invitations | List your collaborator invitations
[**collaborator_invitations_id_delete**](CollaboratorInvitationsApi.md#collaborator_invitations_id_delete) | **DELETE** /collaborator_invitations/{id} | Delete collaborator invitation
[**collaborator_invitations_id_get**](CollaboratorInvitationsApi.md#collaborator_invitations_id_get) | **GET** /collaborator_invitations/{id} | Show collaborator invitation
[**collaborator_invitations_id_patch**](CollaboratorInvitationsApi.md#collaborator_invitations_id_patch) | **PATCH** /collaborator_invitations/{id} | Accept collaborator invitation.
[**collaborator_invitations_post**](CollaboratorInvitationsApi.md#collaborator_invitations_post) | **POST** /collaborator_invitations | Invite user to collaborate on map


# **collaborator_invitations_get**
> List[CollaboratorInvitation] collaborator_invitations_get()

List your collaborator invitations

List your collaborator invitations.

### Example


```python
import openapi_client
from openapi_client.models.collaborator_invitation import CollaboratorInvitation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CollaboratorInvitationsApi(api_client)

    try:
        # List your collaborator invitations
        api_response = api_instance.collaborator_invitations_get()
        print("The response of CollaboratorInvitationsApi->collaborator_invitations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollaboratorInvitationsApi->collaborator_invitations_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[CollaboratorInvitation]**](CollaboratorInvitation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains list of collaborator invitations. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collaborator_invitations_id_delete**
> CollaboratorInvitation collaborator_invitations_id_delete(id)

Delete collaborator invitation

Delete collaborator invitation.

### Example


```python
import openapi_client
from openapi_client.models.collaborator_invitation import CollaboratorInvitation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CollaboratorInvitationsApi(api_client)
    id = 56 # int | Collaborator invitation id

    try:
        # Delete collaborator invitation
        api_response = api_instance.collaborator_invitations_id_delete(id)
        print("The response of CollaboratorInvitationsApi->collaborator_invitations_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollaboratorInvitationsApi->collaborator_invitations_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Collaborator invitation id | 

### Return type

[**CollaboratorInvitation**](CollaboratorInvitation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains deleted collaborator invitation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collaborator_invitations_id_get**
> CollaboratorInvitation collaborator_invitations_id_get(id)

Show collaborator invitation

Show collaborator invitation

### Example


```python
import openapi_client
from openapi_client.models.collaborator_invitation import CollaboratorInvitation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CollaboratorInvitationsApi(api_client)
    id = 56 # int | Collaborator invitation id

    try:
        # Show collaborator invitation
        api_response = api_instance.collaborator_invitations_id_get(id)
        print("The response of CollaboratorInvitationsApi->collaborator_invitations_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollaboratorInvitationsApi->collaborator_invitations_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Collaborator invitation id | 

### Return type

[**CollaboratorInvitation**](CollaboratorInvitation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains collaborator invitation data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collaborator_invitations_id_patch**
> CollaboratorInvitation collaborator_invitations_id_patch(id)

Accept collaborator invitation.

Accept collaborator invitation.

### Example


```python
import openapi_client
from openapi_client.models.collaborator_invitation import CollaboratorInvitation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CollaboratorInvitationsApi(api_client)
    id = 56 # int | Collaborator invitation id

    try:
        # Accept collaborator invitation.
        api_response = api_instance.collaborator_invitations_id_patch(id)
        print("The response of CollaboratorInvitationsApi->collaborator_invitations_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollaboratorInvitationsApi->collaborator_invitations_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Collaborator invitation id | 

### Return type

[**CollaboratorInvitation**](CollaboratorInvitation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains collaborator invitation data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collaborator_invitations_post**
> CollaboratorInvitation collaborator_invitations_post(body=body)

Invite user to collaborate on map

Invite user to collaborate on map.

### Example


```python
import openapi_client
from openapi_client.models.collaborator_invitation import CollaboratorInvitation
from openapi_client.models.collaborator_invitation_create import CollaboratorInvitationCreate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CollaboratorInvitationsApi(api_client)
    body = openapi_client.CollaboratorInvitationCreate() # CollaboratorInvitationCreate | Supply map_id and either a comma separated list of user_ids or emails. Optionally you can provide a 'is_admin' parameter with 'true' or 'false' to give the invited users admin privileges. (optional)

    try:
        # Invite user to collaborate on map
        api_response = api_instance.collaborator_invitations_post(body=body)
        print("The response of CollaboratorInvitationsApi->collaborator_invitations_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollaboratorInvitationsApi->collaborator_invitations_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CollaboratorInvitationCreate**](CollaboratorInvitationCreate.md)| Supply map_id and either a comma separated list of user_ids or emails. Optionally you can provide a &#39;is_admin&#39; parameter with &#39;true&#39; or &#39;false&#39; to give the invited users admin privileges. | [optional] 

### Return type

[**CollaboratorInvitation**](CollaboratorInvitation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains collaborator invitation data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


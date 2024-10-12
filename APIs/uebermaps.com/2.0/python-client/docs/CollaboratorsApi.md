# openapi_client.CollaboratorsApi

All URIs are relative to *http://uebermaps.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**maps_id_collaborators_get**](CollaboratorsApi.md#maps_id_collaborators_get) | **GET** /maps/{id}/collaborators/ | List collaborators of a map
[**maps_id_collaborators_user_id_delete**](CollaboratorsApi.md#maps_id_collaborators_user_id_delete) | **DELETE** /maps/{id}/collaborators/{user_id} | Delete collaboration
[**maps_id_collaborators_user_id_patch**](CollaboratorsApi.md#maps_id_collaborators_user_id_patch) | **PATCH** /maps/{id}/collaborators/{user_id} | Update collaborator


# **maps_id_collaborators_get**
> List[Collaborator] maps_id_collaborators_get(id)

List collaborators of a map

List collaborators of a map.

### Example


```python
import openapi_client
from openapi_client.models.collaborator import Collaborator
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
    api_instance = openapi_client.CollaboratorsApi(api_client)
    id = 56 # int | Map id

    try:
        # List collaborators of a map
        api_response = api_instance.maps_id_collaborators_get(id)
        print("The response of CollaboratorsApi->maps_id_collaborators_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollaboratorsApi->maps_id_collaborators_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Map id | 

### Return type

[**List[Collaborator]**](Collaborator.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains list of collaborators. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **maps_id_collaborators_user_id_delete**
> Collaborator maps_id_collaborators_user_id_delete(id, user_id)

Delete collaboration

Delete collaboration.

### Example


```python
import openapi_client
from openapi_client.models.collaborator import Collaborator
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
    api_instance = openapi_client.CollaboratorsApi(api_client)
    id = 56 # int | map id
    user_id = 56 # int | user id

    try:
        # Delete collaboration
        api_response = api_instance.maps_id_collaborators_user_id_delete(id, user_id)
        print("The response of CollaboratorsApi->maps_id_collaborators_user_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollaboratorsApi->maps_id_collaborators_user_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| map id | 
 **user_id** | **int**| user id | 

### Return type

[**Collaborator**](Collaborator.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains deleted collaborator. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **maps_id_collaborators_user_id_patch**
> Collaborator maps_id_collaborators_user_id_patch(id, user_id, collaborator=collaborator)

Update collaborator

Update collaborator. Wrap collaborator parameters in [collaborator]

### Example


```python
import openapi_client
from openapi_client.models.collaborator import Collaborator
from openapi_client.models.collaborator_editable import CollaboratorEditable
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
    api_instance = openapi_client.CollaboratorsApi(api_client)
    id = 56 # int | map id
    user_id = 56 # int | user id
    collaborator = openapi_client.CollaboratorEditable() # CollaboratorEditable | collaborator attributes (optional)

    try:
        # Update collaborator
        api_response = api_instance.maps_id_collaborators_user_id_patch(id, user_id, collaborator=collaborator)
        print("The response of CollaboratorsApi->maps_id_collaborators_user_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollaboratorsApi->maps_id_collaborators_user_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| map id | 
 **user_id** | **int**| user id | 
 **collaborator** | [**CollaboratorEditable**](CollaboratorEditable.md)| collaborator attributes | [optional] 

### Return type

[**Collaborator**](Collaborator.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains collaborator data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


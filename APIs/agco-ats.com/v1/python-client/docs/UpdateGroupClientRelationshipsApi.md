# openapi_client.UpdateGroupClientRelationshipsApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**update_group_client_relationships_get_subscription**](UpdateGroupClientRelationshipsApi.md#update_group_client_relationships_get_subscription) | **GET** /api/v2/UpdateGroupClientRelationships/{RelationshipID} | Get a subscription by RelationshipID
[**update_group_client_relationships_get_subscriptions**](UpdateGroupClientRelationshipsApi.md#update_group_client_relationships_get_subscriptions) | **GET** /api/v2/UpdateGroupClientRelationships | Get a list of current Client Subscriptions.
[**update_group_client_relationships_post_subscription**](UpdateGroupClientRelationshipsApi.md#update_group_client_relationships_post_subscription) | **POST** /api/v2/UpdateGroupClientRelationships | Add a subscription
[**update_group_client_relationships_put_subscription**](UpdateGroupClientRelationshipsApi.md#update_group_client_relationships_put_subscription) | **PUT** /api/v2/UpdateGroupClientRelationships/{RelationshipID} | Updates a Subscription
[**update_group_client_relationships_put_subscription_by_client_id_update_group_id**](UpdateGroupClientRelationshipsApi.md#update_group_client_relationships_put_subscription_by_client_id_update_group_id) | **PUT** /api/v2/UpdateGroupClientRelationships | DEPRECATED. Set client subscription status for an update group.


# **update_group_client_relationships_get_subscription**
> UpdateSystemModelsUpdateGroupClientRelationship update_group_client_relationships_get_subscription(relationship_id)

Get a subscription by RelationshipID

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_update_group_client_relationship import UpdateSystemModelsUpdateGroupClientRelationship
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UpdateGroupClientRelationshipsApi(api_client)
    relationship_id = 'relationship_id_example' # str | The RelationshipID.

    try:
        # Get a subscription by RelationshipID
        api_response = api_instance.update_group_client_relationships_get_subscription(relationship_id)
        print("The response of UpdateGroupClientRelationshipsApi->update_group_client_relationships_get_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UpdateGroupClientRelationshipsApi->update_group_client_relationships_get_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship_id** | **str**| The RelationshipID. | 

### Return type

[**UpdateSystemModelsUpdateGroupClientRelationship**](UpdateSystemModelsUpdateGroupClientRelationship.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_group_client_relationships_get_subscriptions**
> APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship update_group_client_relationships_get_subscriptions(client_id=client_id, update_group_id=update_group_id, limit=limit, offset=offset, active=active)

Get a list of current Client Subscriptions.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_update_system_models_update_group_client_relationship import APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UpdateGroupClientRelationshipsApi(api_client)
    client_id = 'client_id_example' # str | Optional. Filter by Client ID (optional)
    update_group_id = 'update_group_id_example' # str | Optional. Filter by Update Group ID (optional)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)
    active = True # bool | Optional. Filter by Active (optional)

    try:
        # Get a list of current Client Subscriptions.
        api_response = api_instance.update_group_client_relationships_get_subscriptions(client_id=client_id, update_group_id=update_group_id, limit=limit, offset=offset, active=active)
        print("The response of UpdateGroupClientRelationshipsApi->update_group_client_relationships_get_subscriptions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UpdateGroupClientRelationshipsApi->update_group_client_relationships_get_subscriptions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **str**| Optional. Filter by Client ID | [optional] 
 **update_group_id** | **str**| Optional. Filter by Update Group ID | [optional] 
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 
 **active** | **bool**| Optional. Filter by Active | [optional] 

### Return type

[**APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship**](APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_group_client_relationships_post_subscription**
> str update_group_client_relationships_post_subscription(update_system_models_update_group_client_relationship)

Add a subscription

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_update_group_client_relationship import UpdateSystemModelsUpdateGroupClientRelationship
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UpdateGroupClientRelationshipsApi(api_client)
    update_system_models_update_group_client_relationship = openapi_client.UpdateSystemModelsUpdateGroupClientRelationship() # UpdateSystemModelsUpdateGroupClientRelationship | The UpdateGroupClientRelationship to add.

    try:
        # Add a subscription
        api_response = api_instance.update_group_client_relationships_post_subscription(update_system_models_update_group_client_relationship)
        print("The response of UpdateGroupClientRelationshipsApi->update_group_client_relationships_post_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UpdateGroupClientRelationshipsApi->update_group_client_relationships_post_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_system_models_update_group_client_relationship** | [**UpdateSystemModelsUpdateGroupClientRelationship**](UpdateSystemModelsUpdateGroupClientRelationship.md)| The UpdateGroupClientRelationship to add. | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_group_client_relationships_put_subscription**
> update_group_client_relationships_put_subscription(relationship_id, update_system_models_update_group_client_relationship)

Updates a Subscription

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_update_group_client_relationship import UpdateSystemModelsUpdateGroupClientRelationship
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UpdateGroupClientRelationshipsApi(api_client)
    relationship_id = 'relationship_id_example' # str | The relationship id of the UpdateGroupClientRelationship
    update_system_models_update_group_client_relationship = openapi_client.UpdateSystemModelsUpdateGroupClientRelationship() # UpdateSystemModelsUpdateGroupClientRelationship | The updated UpdateGroupClientRelationship

    try:
        # Updates a Subscription
        api_instance.update_group_client_relationships_put_subscription(relationship_id, update_system_models_update_group_client_relationship)
    except Exception as e:
        print("Exception when calling UpdateGroupClientRelationshipsApi->update_group_client_relationships_put_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship_id** | **str**| The relationship id of the UpdateGroupClientRelationship | 
 **update_system_models_update_group_client_relationship** | [**UpdateSystemModelsUpdateGroupClientRelationship**](UpdateSystemModelsUpdateGroupClientRelationship.md)| The updated UpdateGroupClientRelationship | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_group_client_relationships_put_subscription_by_client_id_update_group_id**
> update_group_client_relationships_put_subscription_by_client_id_update_group_id(client_id, update_group_id, active)

DEPRECATED. Set client subscription status for an update group.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UpdateGroupClientRelationshipsApi(api_client)
    client_id = 'client_id_example' # str | The Client ID.  This can be a client ID that has not been registered yet.
    update_group_id = 'update_group_id_example' # str | The Update Group ID
    active = True # bool | Subscribe the client to the Update Group.

    try:
        # DEPRECATED. Set client subscription status for an update group.
        api_instance.update_group_client_relationships_put_subscription_by_client_id_update_group_id(client_id, update_group_id, active)
    except Exception as e:
        print("Exception when calling UpdateGroupClientRelationshipsApi->update_group_client_relationships_put_subscription_by_client_id_update_group_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **str**| The Client ID.  This can be a client ID that has not been registered yet. | 
 **update_group_id** | **str**| The Update Group ID | 
 **active** | **bool**| Subscribe the client to the Update Group. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


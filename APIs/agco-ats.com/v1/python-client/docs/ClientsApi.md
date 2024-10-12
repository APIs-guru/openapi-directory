# openapi_client.ClientsApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v2_clients_id_get**](ClientsApi.md#api_v2_clients_id_get) | **GET** /api/v2/Clients/{ID} | Get a Client in the Update System.
[**clients_get**](ClientsApi.md#clients_get) | **GET** /api/v2/Clients | Get a List of Clients in the Update System.
[**clients_get_available_subscriptions**](ClientsApi.md#clients_get_available_subscriptions) | **GET** /api/v2/Clients/{ID}/AvailableUpdateGroupSubscriptions | Get a Client&#39;s Available Update Group Subscriptions
[**clients_get_subscriptions**](ClientsApi.md#clients_get_subscriptions) | **GET** /api/v2/Clients/{ID}/UpdateGroupSubscriptions | Get a Client&#39;s Current Update Group Subscriptions
[**clients_put**](ClientsApi.md#clients_put) | **PUT** /api/v2/Clients/{ID} | Update a Client.


# **api_v2_clients_id_get**
> UpdateSystemModelsClient api_v2_clients_id_get(id)

Get a Client in the Update System.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_client import UpdateSystemModelsClient
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
    api_instance = openapi_client.ClientsApi(api_client)
    id = 'id_example' # str | The Client ID

    try:
        # Get a Client in the Update System.
        api_response = api_instance.api_v2_clients_id_get(id)
        print("The response of ClientsApi->api_v2_clients_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClientsApi->api_v2_clients_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The Client ID | 

### Return type

[**UpdateSystemModelsClient**](UpdateSystemModelsClient.md)

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

# **clients_get**
> APIPagedResponseUpdateSystemModelsClient clients_get(tag=tag, limit=limit, offset=offset)

Get a List of Clients in the Update System.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_update_system_models_client import APIPagedResponseUpdateSystemModelsClient
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
    api_instance = openapi_client.ClientsApi(api_client)
    tag = 'tag_example' # str | Optional. Filter clients by Tag. Wildcards are supported (*). (optional)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)

    try:
        # Get a List of Clients in the Update System.
        api_response = api_instance.clients_get(tag=tag, limit=limit, offset=offset)
        print("The response of ClientsApi->clients_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClientsApi->clients_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **str**| Optional. Filter clients by Tag. Wildcards are supported (*). | [optional] 
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIPagedResponseUpdateSystemModelsClient**](APIPagedResponseUpdateSystemModelsClient.md)

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

# **clients_get_available_subscriptions**
> APIPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription clients_get_available_subscriptions(id, update_group_id=update_group_id, limit=limit, offset=offset)

Get a Client's Available Update Group Subscriptions

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_update_system_models_available_update_group_subscription import APIPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription
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
    api_instance = openapi_client.ClientsApi(api_client)
    id = 'id_example' # str | The Client ID
    update_group_id = 'update_group_id_example' # str | Optional. Filter by Update Group. (optional)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)

    try:
        # Get a Client's Available Update Group Subscriptions
        api_response = api_instance.clients_get_available_subscriptions(id, update_group_id=update_group_id, limit=limit, offset=offset)
        print("The response of ClientsApi->clients_get_available_subscriptions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClientsApi->clients_get_available_subscriptions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The Client ID | 
 **update_group_id** | **str**| Optional. Filter by Update Group. | [optional] 
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription**](APIPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription.md)

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

# **clients_get_subscriptions**
> APIPagedResponseUpdateSystemModelsUpdateGroupSubscription clients_get_subscriptions(id, update_group_id=update_group_id, limit=limit, offset=offset)

Get a Client's Current Update Group Subscriptions

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_update_system_models_update_group_subscription import APIPagedResponseUpdateSystemModelsUpdateGroupSubscription
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
    api_instance = openapi_client.ClientsApi(api_client)
    id = 'id_example' # str | The Client ID
    update_group_id = 'update_group_id_example' # str | Optional. Filter by Update Group. (optional)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)

    try:
        # Get a Client's Current Update Group Subscriptions
        api_response = api_instance.clients_get_subscriptions(id, update_group_id=update_group_id, limit=limit, offset=offset)
        print("The response of ClientsApi->clients_get_subscriptions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClientsApi->clients_get_subscriptions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The Client ID | 
 **update_group_id** | **str**| Optional. Filter by Update Group. | [optional] 
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIPagedResponseUpdateSystemModelsUpdateGroupSubscription**](APIPagedResponseUpdateSystemModelsUpdateGroupSubscription.md)

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

# **clients_put**
> clients_put(id, update_system_models_client)

Update a Client.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_client import UpdateSystemModelsClient
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
    api_instance = openapi_client.ClientsApi(api_client)
    id = 'id_example' # str | The Client ID
    update_system_models_client = openapi_client.UpdateSystemModelsClient() # UpdateSystemModelsClient | Updated Client Object.

    try:
        # Update a Client.
        api_instance.clients_put(id, update_system_models_client)
    except Exception as e:
        print("Exception when calling ClientsApi->clients_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The Client ID | 
 **update_system_models_client** | [**UpdateSystemModelsClient**](UpdateSystemModelsClient.md)| Updated Client Object. | 

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


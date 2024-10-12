# openapi_client.UpdateGroupSubscriptionsApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**update_group_subscriptions_delete_update_group_subscription**](UpdateGroupSubscriptionsApi.md#update_group_subscriptions_delete_update_group_subscription) | **DELETE** /api/v2/UpdateGroupSubscriptions/{UpdateGroupSubscriptionID} | Delete an Update Group Subscription
[**update_group_subscriptions_get_update_group_subscription**](UpdateGroupSubscriptionsApi.md#update_group_subscriptions_get_update_group_subscription) | **GET** /api/v2/UpdateGroupSubscriptions/{UpdateGroupSubscriptionID} | Get an Update Group Subscription
[**update_group_subscriptions_get_update_group_subscriptions**](UpdateGroupSubscriptionsApi.md#update_group_subscriptions_get_update_group_subscriptions) | **GET** /api/v2/UpdateGroupSubscriptions | Get Update Group Subscriptions
[**update_group_subscriptions_post_update_group_subscription**](UpdateGroupSubscriptionsApi.md#update_group_subscriptions_post_update_group_subscription) | **POST** /api/v2/UpdateGroupSubscriptions | Add an Update Group Subscription
[**update_group_subscriptions_post_update_group_subscriptions**](UpdateGroupSubscriptionsApi.md#update_group_subscriptions_post_update_group_subscriptions) | **POST** /api/v2/UpdateGroupSubscriptions/Batch | No Documentation Found.
[**update_group_subscriptions_put_update_group_subscription**](UpdateGroupSubscriptionsApi.md#update_group_subscriptions_put_update_group_subscription) | **PUT** /api/v2/UpdateGroupSubscriptions/{UpdateGroupSubscriptionID} | Update an Update Group Subscription
[**update_group_subscriptions_put_update_group_subscriptions**](UpdateGroupSubscriptionsApi.md#update_group_subscriptions_put_update_group_subscriptions) | **PUT** /api/v2/UpdateGroupSubscriptions/Batch | No Documentation Found.


# **update_group_subscriptions_delete_update_group_subscription**
> update_group_subscriptions_delete_update_group_subscription(update_group_subscription_id)

Delete an Update Group Subscription

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
    api_instance = openapi_client.UpdateGroupSubscriptionsApi(api_client)
    update_group_subscription_id = 56 # int | The Update Group Subscription ID to delete

    try:
        # Delete an Update Group Subscription
        api_instance.update_group_subscriptions_delete_update_group_subscription(update_group_subscription_id)
    except Exception as e:
        print("Exception when calling UpdateGroupSubscriptionsApi->update_group_subscriptions_delete_update_group_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_group_subscription_id** | **int**| The Update Group Subscription ID to delete | 

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

# **update_group_subscriptions_get_update_group_subscription**
> UpdateSystemModelsUpdateGroupSubscription update_group_subscriptions_get_update_group_subscription(update_group_subscription_id)

Get an Update Group Subscription

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_update_group_subscription import UpdateSystemModelsUpdateGroupSubscription
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
    api_instance = openapi_client.UpdateGroupSubscriptionsApi(api_client)
    update_group_subscription_id = 56 # int | The Update Group Subscription ID

    try:
        # Get an Update Group Subscription
        api_response = api_instance.update_group_subscriptions_get_update_group_subscription(update_group_subscription_id)
        print("The response of UpdateGroupSubscriptionsApi->update_group_subscriptions_get_update_group_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UpdateGroupSubscriptionsApi->update_group_subscriptions_get_update_group_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_group_subscription_id** | **int**| The Update Group Subscription ID | 

### Return type

[**UpdateSystemModelsUpdateGroupSubscription**](UpdateSystemModelsUpdateGroupSubscription.md)

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

# **update_group_subscriptions_get_update_group_subscriptions**
> APIPagedResponseUpdateSystemModelsUpdateGroupSubscription update_group_subscriptions_get_update_group_subscriptions(update_group_id=update_group_id, package_type_id=package_type_id, client_id=client_id, limit=limit, offset=offset)

Get Update Group Subscriptions

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
    api_instance = openapi_client.UpdateGroupSubscriptionsApi(api_client)
    update_group_id = 'update_group_id_example' # str | Optional. Filter by Update Group ID. (optional)
    package_type_id = 'package_type_id_example' # str | Optional. Filter by Package Type ID. (optional)
    client_id = 'client_id_example' # str | Optional. Filter by Client ID. (optional)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)

    try:
        # Get Update Group Subscriptions
        api_response = api_instance.update_group_subscriptions_get_update_group_subscriptions(update_group_id=update_group_id, package_type_id=package_type_id, client_id=client_id, limit=limit, offset=offset)
        print("The response of UpdateGroupSubscriptionsApi->update_group_subscriptions_get_update_group_subscriptions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UpdateGroupSubscriptionsApi->update_group_subscriptions_get_update_group_subscriptions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_group_id** | **str**| Optional. Filter by Update Group ID. | [optional] 
 **package_type_id** | **str**| Optional. Filter by Package Type ID. | [optional] 
 **client_id** | **str**| Optional. Filter by Client ID. | [optional] 
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

# **update_group_subscriptions_post_update_group_subscription**
> int update_group_subscriptions_post_update_group_subscription(update_system_models_update_group_subscription)

Add an Update Group Subscription

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_update_group_subscription import UpdateSystemModelsUpdateGroupSubscription
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
    api_instance = openapi_client.UpdateGroupSubscriptionsApi(api_client)
    update_system_models_update_group_subscription = openapi_client.UpdateSystemModelsUpdateGroupSubscription() # UpdateSystemModelsUpdateGroupSubscription | The Update Group Subscription to add

    try:
        # Add an Update Group Subscription
        api_response = api_instance.update_group_subscriptions_post_update_group_subscription(update_system_models_update_group_subscription)
        print("The response of UpdateGroupSubscriptionsApi->update_group_subscriptions_post_update_group_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UpdateGroupSubscriptionsApi->update_group_subscriptions_post_update_group_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_system_models_update_group_subscription** | [**UpdateSystemModelsUpdateGroupSubscription**](UpdateSystemModelsUpdateGroupSubscription.md)| The Update Group Subscription to add | 

### Return type

**int**

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

# **update_group_subscriptions_post_update_group_subscriptions**
> update_group_subscriptions_post_update_group_subscriptions(update_system_models_update_group_subscription)

No Documentation Found.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_update_group_subscription import UpdateSystemModelsUpdateGroupSubscription
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
    api_instance = openapi_client.UpdateGroupSubscriptionsApi(api_client)
    update_system_models_update_group_subscription = [openapi_client.UpdateSystemModelsUpdateGroupSubscription()] # List[UpdateSystemModelsUpdateGroupSubscription] | 

    try:
        # No Documentation Found.
        api_instance.update_group_subscriptions_post_update_group_subscriptions(update_system_models_update_group_subscription)
    except Exception as e:
        print("Exception when calling UpdateGroupSubscriptionsApi->update_group_subscriptions_post_update_group_subscriptions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_system_models_update_group_subscription** | [**List[UpdateSystemModelsUpdateGroupSubscription]**](UpdateSystemModelsUpdateGroupSubscription.md)|  | 

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

# **update_group_subscriptions_put_update_group_subscription**
> update_group_subscriptions_put_update_group_subscription(update_group_subscription_id, update_system_models_update_group_subscription)

Update an Update Group Subscription

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_update_group_subscription import UpdateSystemModelsUpdateGroupSubscription
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
    api_instance = openapi_client.UpdateGroupSubscriptionsApi(api_client)
    update_group_subscription_id = 56 # int | The Update Group Subscription ID
    update_system_models_update_group_subscription = openapi_client.UpdateSystemModelsUpdateGroupSubscription() # UpdateSystemModelsUpdateGroupSubscription | The updated Update Group Subscription

    try:
        # Update an Update Group Subscription
        api_instance.update_group_subscriptions_put_update_group_subscription(update_group_subscription_id, update_system_models_update_group_subscription)
    except Exception as e:
        print("Exception when calling UpdateGroupSubscriptionsApi->update_group_subscriptions_put_update_group_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_group_subscription_id** | **int**| The Update Group Subscription ID | 
 **update_system_models_update_group_subscription** | [**UpdateSystemModelsUpdateGroupSubscription**](UpdateSystemModelsUpdateGroupSubscription.md)| The updated Update Group Subscription | 

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

# **update_group_subscriptions_put_update_group_subscriptions**
> update_group_subscriptions_put_update_group_subscriptions(update_system_models_update_group_subscription)

No Documentation Found.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_update_group_subscription import UpdateSystemModelsUpdateGroupSubscription
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
    api_instance = openapi_client.UpdateGroupSubscriptionsApi(api_client)
    update_system_models_update_group_subscription = [openapi_client.UpdateSystemModelsUpdateGroupSubscription()] # List[UpdateSystemModelsUpdateGroupSubscription] | 

    try:
        # No Documentation Found.
        api_instance.update_group_subscriptions_put_update_group_subscriptions(update_system_models_update_group_subscription)
    except Exception as e:
        print("Exception when calling UpdateGroupSubscriptionsApi->update_group_subscriptions_put_update_group_subscriptions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_system_models_update_group_subscription** | [**List[UpdateSystemModelsUpdateGroupSubscription]**](UpdateSystemModelsUpdateGroupSubscription.md)|  | 

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


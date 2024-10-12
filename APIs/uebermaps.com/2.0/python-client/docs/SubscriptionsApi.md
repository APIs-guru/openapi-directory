# openapi_client.SubscriptionsApi

All URIs are relative to *http://uebermaps.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**maps_id_subscriptions_delete**](SubscriptionsApi.md#maps_id_subscriptions_delete) | **DELETE** /maps/{id}/subscriptions | Unsubscribe from map
[**maps_id_subscriptions_get**](SubscriptionsApi.md#maps_id_subscriptions_get) | **GET** /maps/{id}/subscriptions | List subscriptions for a given map
[**subscriptions_get**](SubscriptionsApi.md#subscriptions_get) | **GET** /subscriptions | List subscriptions. Pass no parameters to get own subscriptions
[**subscriptions_post**](SubscriptionsApi.md#subscriptions_post) | **POST** /subscriptions | Create map subscription


# **maps_id_subscriptions_delete**
> Subscription maps_id_subscriptions_delete(id)

Unsubscribe from map

Unsubscribe from map.

### Example


```python
import openapi_client
from openapi_client.models.subscription import Subscription
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
    api_instance = openapi_client.SubscriptionsApi(api_client)
    id = 56 # int | map id

    try:
        # Unsubscribe from map
        api_response = api_instance.maps_id_subscriptions_delete(id)
        print("The response of SubscriptionsApi->maps_id_subscriptions_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->maps_id_subscriptions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| map id | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains deleted subscription. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **maps_id_subscriptions_get**
> List[Subscription] maps_id_subscriptions_get(id)

List subscriptions for a given map

List subscriptions for a given map.

### Example


```python
import openapi_client
from openapi_client.models.subscription import Subscription
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
    api_instance = openapi_client.SubscriptionsApi(api_client)
    id = 56 # int | Id of map

    try:
        # List subscriptions for a given map
        api_response = api_instance.maps_id_subscriptions_get(id)
        print("The response of SubscriptionsApi->maps_id_subscriptions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->maps_id_subscriptions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Id of map | 

### Return type

[**List[Subscription]**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains list of subscriptions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscriptions_get**
> List[Subscription] subscriptions_get(user_id=user_id, map_id=map_id)

List subscriptions. Pass no parameters to get own subscriptions

List subscriptions.

### Example


```python
import openapi_client
from openapi_client.models.subscription import Subscription
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
    api_instance = openapi_client.SubscriptionsApi(api_client)
    user_id = 56 # int | Id of user (optional)
    map_id = 56 # int | Id of map (optional)

    try:
        # List subscriptions. Pass no parameters to get own subscriptions
        api_response = api_instance.subscriptions_get(user_id=user_id, map_id=map_id)
        print("The response of SubscriptionsApi->subscriptions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->subscriptions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**| Id of user | [optional] 
 **map_id** | **int**| Id of map | [optional] 

### Return type

[**List[Subscription]**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains list of subscriptions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscriptions_post**
> Subscription subscriptions_post(map_id)

Create map subscription

Create map subscription.

### Example


```python
import openapi_client
from openapi_client.models.subscription import Subscription
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
    api_instance = openapi_client.SubscriptionsApi(api_client)
    map_id = 3.4 # float | map id

    try:
        # Create map subscription
        api_response = api_instance.subscriptions_post(map_id)
        print("The response of SubscriptionsApi->subscriptions_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->subscriptions_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **map_id** | **float**| map id | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains subscription data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


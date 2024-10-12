# openapi_client.NotificationRuleSubscriberApi

All URIs are relative to *https://devdata.osisoft.com/piwebapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**notification_rule_subscriber_delete**](NotificationRuleSubscriberApi.md#notification_rule_subscriber_delete) | **DELETE** /notificationrulesubscribers/{webId} | Delete a notification rule subscriber.
[**notification_rule_subscriber_get**](NotificationRuleSubscriberApi.md#notification_rule_subscriber_get) | **GET** /notificationrulesubscribers/{webId} | Retrieve a notification rule subscriber.
[**notification_rule_subscriber_get_by_path**](NotificationRuleSubscriberApi.md#notification_rule_subscriber_get_by_path) | **GET** /notificationrulesubscribers | Retrieve a notification rule subscriber by path.
[**notification_rule_subscriber_get_notification_rule_subscribers**](NotificationRuleSubscriberApi.md#notification_rule_subscriber_get_notification_rule_subscribers) | **GET** /notificationrulesubscribers/{webId}/notificationrulesubscribers | Retrieve notification rule subscriber subscribers.
[**notification_rule_subscriber_update**](NotificationRuleSubscriberApi.md#notification_rule_subscriber_update) | **PATCH** /notificationrulesubscribers/{webId} | Update a notification rule subscriber.


# **notification_rule_subscriber_delete**
> notification_rule_subscriber_delete(web_id)

Delete a notification rule subscriber.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationRuleSubscriberApi(api_client)
    web_id = 'web_id_example' # str | The ID of the notification rule subscriber.

    try:
        # Delete a notification rule subscriber.
        api_instance.notification_rule_subscriber_delete(web_id)
    except Exception as e:
        print("Exception when calling NotificationRuleSubscriberApi->notification_rule_subscriber_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the notification rule subscriber. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The notification rule subscriber was deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notification_rule_subscriber_get**
> NotificationRuleSubscriber notification_rule_subscriber_get(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve a notification rule subscriber.

### Example


```python
import openapi_client
from openapi_client.models.notification_rule_subscriber import NotificationRuleSubscriber
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationRuleSubscriberApi(api_client)
    web_id = 'web_id_example' # str | The ID of the resource to use as the root of the search.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve a notification rule subscriber.
        api_response = api_instance.notification_rule_subscriber_get(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of NotificationRuleSubscriberApi->notification_rule_subscriber_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationRuleSubscriberApi->notification_rule_subscriber_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the resource to use as the root of the search. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**NotificationRuleSubscriber**](NotificationRuleSubscriber.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A notification rule subscriber |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notification_rule_subscriber_get_by_path**
> NotificationRuleSubscriber notification_rule_subscriber_get_by_path(path, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve a notification rule subscriber by path.

This method returns a Notification Rule Subscriber based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.

### Example


```python
import openapi_client
from openapi_client.models.notification_rule_subscriber import NotificationRuleSubscriber
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationRuleSubscriberApi(api_client)
    path = 'path_example' # str | The path to the notification rule subscriber.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve a notification rule subscriber by path.
        api_response = api_instance.notification_rule_subscriber_get_by_path(path, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of NotificationRuleSubscriberApi->notification_rule_subscriber_get_by_path:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationRuleSubscriberApi->notification_rule_subscriber_get_by_path: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| The path to the notification rule subscriber. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**NotificationRuleSubscriber**](NotificationRuleSubscriber.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specified notification rule subscriber. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notification_rule_subscriber_get_notification_rule_subscribers**
> ItemsNotificationRuleSubscriber notification_rule_subscriber_get_notification_rule_subscribers(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve notification rule subscriber subscribers.

### Example


```python
import openapi_client
from openapi_client.models.items_notification_rule_subscriber import ItemsNotificationRuleSubscriber
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationRuleSubscriberApi(api_client)
    web_id = 'web_id_example' # str | The ID of the resource to use as the root of the search.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve notification rule subscriber subscribers.
        api_response = api_instance.notification_rule_subscriber_get_notification_rule_subscribers(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of NotificationRuleSubscriberApi->notification_rule_subscriber_get_notification_rule_subscribers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationRuleSubscriberApi->notification_rule_subscriber_get_notification_rule_subscribers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the resource to use as the root of the search. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsNotificationRuleSubscriber**](ItemsNotificationRuleSubscriber.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of notification rules subscribers. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notification_rule_subscriber_update**
> notification_rule_subscriber_update(web_id, notification_rule_subscriber)

Update a notification rule subscriber.

### Example


```python
import openapi_client
from openapi_client.models.notification_rule_subscriber import NotificationRuleSubscriber
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationRuleSubscriberApi(api_client)
    web_id = 'web_id_example' # str | The ID of the notification rule subscriber.
    notification_rule_subscriber = openapi_client.NotificationRuleSubscriber() # NotificationRuleSubscriber | A partial notification rule subscriber containing the desired changes.

    try:
        # Update a notification rule subscriber.
        api_instance.notification_rule_subscriber_update(web_id, notification_rule_subscriber)
    except Exception as e:
        print("Exception when calling NotificationRuleSubscriberApi->notification_rule_subscriber_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the notification rule subscriber. | 
 **notification_rule_subscriber** | [**NotificationRuleSubscriber**](NotificationRuleSubscriber.md)| A partial notification rule subscriber containing the desired changes. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The notification rule subscriber was updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


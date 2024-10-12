# openapi_client.NotificationRulesApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_notification_rule**](NotificationRulesApi.md#create_notification_rule) | **POST** /notificationRules | Add a notification rule
[**delete_notification_rules_id**](NotificationRulesApi.md#delete_notification_rules_id) | **DELETE** /notificationRules/{ruleID} | Delete a notification rule
[**delete_notification_rules_id_labels_id**](NotificationRulesApi.md#delete_notification_rules_id_labels_id) | **DELETE** /notificationRules/{ruleID}/labels/{labelID} | Delete label from a notification rule
[**get_notification_rules**](NotificationRulesApi.md#get_notification_rules) | **GET** /notificationRules | List all notification rules
[**get_notification_rules_id**](NotificationRulesApi.md#get_notification_rules_id) | **GET** /notificationRules/{ruleID} | Retrieve a notification rule
[**get_notification_rules_id_labels**](NotificationRulesApi.md#get_notification_rules_id_labels) | **GET** /notificationRules/{ruleID}/labels | List all labels for a notification rule
[**patch_notification_rules_id**](NotificationRulesApi.md#patch_notification_rules_id) | **PATCH** /notificationRules/{ruleID} | Update a notification rule
[**post_notification_rule_id_labels**](NotificationRulesApi.md#post_notification_rule_id_labels) | **POST** /notificationRules/{ruleID}/labels | Add a label to a notification rule
[**put_notification_rules_id**](NotificationRulesApi.md#put_notification_rules_id) | **PUT** /notificationRules/{ruleID} | Update a notification rule


# **create_notification_rule**
> NotificationRule create_notification_rule(post_notification_rule)

Add a notification rule

### Example


```python
import openapi_client
from openapi_client.models.notification_rule import NotificationRule
from openapi_client.models.post_notification_rule import PostNotificationRule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationRulesApi(api_client)
    post_notification_rule = openapi_client.PostNotificationRule() # PostNotificationRule | Notification rule to create

    try:
        # Add a notification rule
        api_response = api_instance.create_notification_rule(post_notification_rule)
        print("The response of NotificationRulesApi->create_notification_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationRulesApi->create_notification_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_notification_rule** | [**PostNotificationRule**](PostNotificationRule.md)| Notification rule to create | 

### Return type

[**NotificationRule**](NotificationRule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Notification rule created |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_notification_rules_id**
> delete_notification_rules_id(rule_id, zap_trace_span=zap_trace_span)

Delete a notification rule

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationRulesApi(api_client)
    rule_id = 'rule_id_example' # str | The notification rule ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete a notification rule
        api_instance.delete_notification_rules_id(rule_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling NotificationRulesApi->delete_notification_rules_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule_id** | **str**| The notification rule ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Delete has been accepted |  -  |
**404** | The check was not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_notification_rules_id_labels_id**
> delete_notification_rules_id_labels_id(rule_id, label_id, zap_trace_span=zap_trace_span)

Delete label from a notification rule

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationRulesApi(api_client)
    rule_id = 'rule_id_example' # str | The notification rule ID.
    label_id = 'label_id_example' # str | The ID of the label to delete.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete label from a notification rule
        api_instance.delete_notification_rules_id_labels_id(rule_id, label_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling NotificationRulesApi->delete_notification_rules_id_labels_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule_id** | **str**| The notification rule ID. | 
 **label_id** | **str**| The ID of the label to delete. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Delete has been accepted |  -  |
**404** | Rule or label not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_notification_rules**
> NotificationRules get_notification_rules(org_id, zap_trace_span=zap_trace_span, offset=offset, limit=limit, check_id=check_id, tag=tag)

List all notification rules

### Example


```python
import openapi_client
from openapi_client.models.notification_rules import NotificationRules
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationRulesApi(api_client)
    org_id = 'org_id_example' # str | Only show notification rules that belong to a specific organization ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    offset = 56 # int |  (optional)
    limit = 20 # int |  (optional) (default to 20)
    check_id = 'check_id_example' # str | Only show notifications that belong to the specific check ID. (optional)
    tag = 'env:prod' # str | Only return notification rules that \"would match\" statuses which contain the tag key value pairs provided. (optional)

    try:
        # List all notification rules
        api_response = api_instance.get_notification_rules(org_id, zap_trace_span=zap_trace_span, offset=offset, limit=limit, check_id=check_id, tag=tag)
        print("The response of NotificationRulesApi->get_notification_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationRulesApi->get_notification_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| Only show notification rules that belong to a specific organization ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **offset** | **int**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 20]
 **check_id** | **str**| Only show notifications that belong to the specific check ID. | [optional] 
 **tag** | **str**| Only return notification rules that \&quot;would match\&quot; statuses which contain the tag key value pairs provided. | [optional] 

### Return type

[**NotificationRules**](NotificationRules.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of notification rules |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_notification_rules_id**
> NotificationRule get_notification_rules_id(rule_id, zap_trace_span=zap_trace_span)

Retrieve a notification rule

### Example


```python
import openapi_client
from openapi_client.models.notification_rule import NotificationRule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationRulesApi(api_client)
    rule_id = 'rule_id_example' # str | The notification rule ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Retrieve a notification rule
        api_response = api_instance.get_notification_rules_id(rule_id, zap_trace_span=zap_trace_span)
        print("The response of NotificationRulesApi->get_notification_rules_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationRulesApi->get_notification_rules_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule_id** | **str**| The notification rule ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**NotificationRule**](NotificationRule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The notification rule requested |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_notification_rules_id_labels**
> LabelsResponse get_notification_rules_id_labels(rule_id, zap_trace_span=zap_trace_span)

List all labels for a notification rule

### Example


```python
import openapi_client
from openapi_client.models.labels_response import LabelsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationRulesApi(api_client)
    rule_id = 'rule_id_example' # str | The notification rule ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # List all labels for a notification rule
        api_response = api_instance.get_notification_rules_id_labels(rule_id, zap_trace_span=zap_trace_span)
        print("The response of NotificationRulesApi->get_notification_rules_id_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationRulesApi->get_notification_rules_id_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule_id** | **str**| The notification rule ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**LabelsResponse**](LabelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of all labels for a notification rule |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_notification_rules_id**
> NotificationRule patch_notification_rules_id(rule_id, notification_rule_update, zap_trace_span=zap_trace_span)

Update a notification rule

### Example


```python
import openapi_client
from openapi_client.models.notification_rule import NotificationRule
from openapi_client.models.notification_rule_update import NotificationRuleUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationRulesApi(api_client)
    rule_id = 'rule_id_example' # str | The notification rule ID.
    notification_rule_update = openapi_client.NotificationRuleUpdate() # NotificationRuleUpdate | Notification rule update to apply
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update a notification rule
        api_response = api_instance.patch_notification_rules_id(rule_id, notification_rule_update, zap_trace_span=zap_trace_span)
        print("The response of NotificationRulesApi->patch_notification_rules_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationRulesApi->patch_notification_rules_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule_id** | **str**| The notification rule ID. | 
 **notification_rule_update** | [**NotificationRuleUpdate**](NotificationRuleUpdate.md)| Notification rule update to apply | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**NotificationRule**](NotificationRule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An updated notification rule |  -  |
**404** | The notification rule was not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_notification_rule_id_labels**
> LabelResponse post_notification_rule_id_labels(rule_id, label_mapping, zap_trace_span=zap_trace_span)

Add a label to a notification rule

### Example


```python
import openapi_client
from openapi_client.models.label_mapping import LabelMapping
from openapi_client.models.label_response import LabelResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationRulesApi(api_client)
    rule_id = 'rule_id_example' # str | The notification rule ID.
    label_mapping = openapi_client.LabelMapping() # LabelMapping | Label to add
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Add a label to a notification rule
        api_response = api_instance.post_notification_rule_id_labels(rule_id, label_mapping, zap_trace_span=zap_trace_span)
        print("The response of NotificationRulesApi->post_notification_rule_id_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationRulesApi->post_notification_rule_id_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule_id** | **str**| The notification rule ID. | 
 **label_mapping** | [**LabelMapping**](LabelMapping.md)| Label to add | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**LabelResponse**](LabelResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The label was added to the notification rule |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_notification_rules_id**
> NotificationRule put_notification_rules_id(rule_id, notification_rule, zap_trace_span=zap_trace_span)

Update a notification rule

### Example


```python
import openapi_client
from openapi_client.models.notification_rule import NotificationRule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationRulesApi(api_client)
    rule_id = 'rule_id_example' # str | The notification rule ID.
    notification_rule = openapi_client.NotificationRule() # NotificationRule | Notification rule update to apply
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update a notification rule
        api_response = api_instance.put_notification_rules_id(rule_id, notification_rule, zap_trace_span=zap_trace_span)
        print("The response of NotificationRulesApi->put_notification_rules_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationRulesApi->put_notification_rules_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule_id** | **str**| The notification rule ID. | 
 **notification_rule** | [**NotificationRule**](NotificationRule.md)| Notification rule update to apply | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**NotificationRule**](NotificationRule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An updated notification rule |  -  |
**404** | The notification rule was not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


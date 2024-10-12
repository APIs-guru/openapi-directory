# openapi_client.AlertsApi

All URIs are relative to *https://connect.signl4.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alerts_acknowledge_all_post**](AlertsApi.md#alerts_acknowledge_all_post) | **POST** /alerts/acknowledgeAll | Confirms all visible alerts
[**alerts_acknowledge_multiple_post**](AlertsApi.md#alerts_acknowledge_multiple_post) | **POST** /alerts/acknowledgeMultiple | Acknowlegde multiple alerts
[**alerts_alert_id_acknowledge_post**](AlertsApi.md#alerts_alert_id_acknowledge_post) | **POST** /alerts/{alertId}/acknowledge | Acknowledge an alert
[**alerts_alert_id_annotate_post**](AlertsApi.md#alerts_alert_id_annotate_post) | **POST** /alerts/{alertId}/annotate | Annotate Alert
[**alerts_alert_id_annotations_get**](AlertsApi.md#alerts_alert_id_annotations_get) | **GET** /alerts/{alertId}/annotations | Get annotations of an alert
[**alerts_alert_id_attachments_attachment_id_get**](AlertsApi.md#alerts_alert_id_attachments_attachment_id_get) | **GET** /alerts/{alertId}/attachments/{attachmentId} | Gets a specified attachment of a specified alert.
[**alerts_alert_id_attachments_get**](AlertsApi.md#alerts_alert_id_attachments_get) | **GET** /alerts/{alertId}/attachments | Get attachments of an alert
[**alerts_alert_id_close_post**](AlertsApi.md#alerts_alert_id_close_post) | **POST** /alerts/{alertId}/close | Close an alert
[**alerts_alert_id_get**](AlertsApi.md#alerts_alert_id_get) | **GET** /alerts/{alertId} | Get Alert
[**alerts_alert_id_notifications_get**](AlertsApi.md#alerts_alert_id_notifications_get) | **GET** /alerts/{alertId}/notifications | Get alert notifications
[**alerts_alert_id_overview_get**](AlertsApi.md#alerts_alert_id_overview_get) | **GET** /alerts/{alertId}/overview | Get an overview alert.
[**alerts_alert_id_undo_acknowledge_post**](AlertsApi.md#alerts_alert_id_undo_acknowledge_post) | **POST** /alerts/{alertId}/undoAcknowledge | Undo the acknowledgement of an alert.
[**alerts_alert_id_undo_close_post**](AlertsApi.md#alerts_alert_id_undo_close_post) | **POST** /alerts/{alertId}/undoClose | Undo the closure of an alert.
[**alerts_close_all_post**](AlertsApi.md#alerts_close_all_post) | **POST** /alerts/closeAll | Close all acknowledged alerts.
[**alerts_close_multiple_post**](AlertsApi.md#alerts_close_multiple_post) | **POST** /alerts/closeMultiple | Close multiple alerts
[**alerts_paged_post**](AlertsApi.md#alerts_paged_post) | **POST** /alerts/paged | Gets alerts paged
[**alerts_post**](AlertsApi.md#alerts_post) | **POST** /alerts | Trigger Alert
[**alerts_report_get**](AlertsApi.md#alerts_report_get) | **GET** /alerts/report | Get Alert Report
[**alerts_undo_acknowledge_multiple_post**](AlertsApi.md#alerts_undo_acknowledge_multiple_post) | **POST** /alerts/undoAcknowledgeMultiple | Queue undo of multiple acknowledgments.
[**alerts_undo_close_multiple_post**](AlertsApi.md#alerts_undo_close_multiple_post) | **POST** /alerts/undoCloseMultiple | Withdraw closure of multiple alerts


# **alerts_acknowledge_all_post**
> alerts_acknowledge_all_post(user_id=user_id, change_alert_status_filter_info=change_alert_status_filter_info)

Confirms all visible alerts

This method confirms all unhandled alerts your team currently has by a specific user.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.change_alert_status_filter_info import ChangeAlertStatusFilterInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertsApi(api_client)
    user_id = 'user_id_example' # str | User ID of the user to be used to acknowledge the alarms. (optional)
    change_alert_status_filter_info = openapi_client.ChangeAlertStatusFilterInfo() # ChangeAlertStatusFilterInfo |  (optional)

    try:
        # Confirms all visible alerts
        api_instance.alerts_acknowledge_all_post(user_id=user_id, change_alert_status_filter_info=change_alert_status_filter_info)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_acknowledge_all_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| User ID of the user to be used to acknowledge the alarms. | [optional] 
 **change_alert_status_filter_info** | [**ChangeAlertStatusFilterInfo**](ChangeAlertStatusFilterInfo.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**404** | Required entities could not be found in the database. |  -  |
**500** | Internal general error occured. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_acknowledge_multiple_post**
> alerts_acknowledge_multiple_post(change_alert_status_multiple_info=change_alert_status_multiple_info)

Acknowlegde multiple alerts

This method confirms all alerts provided.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.change_alert_status_multiple_info import ChangeAlertStatusMultipleInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertsApi(api_client)
    change_alert_status_multiple_info = openapi_client.ChangeAlertStatusMultipleInfo() # ChangeAlertStatusMultipleInfo |  (optional)

    try:
        # Acknowlegde multiple alerts
        api_instance.alerts_acknowledge_multiple_post(change_alert_status_multiple_info=change_alert_status_multiple_info)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_acknowledge_multiple_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **change_alert_status_multiple_info** | [**ChangeAlertStatusMultipleInfo**](ChangeAlertStatusMultipleInfo.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**404** | Not Found |  -  |
**500** | Internal general error occured. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_alert_id_acknowledge_post**
> AlertInfo alerts_alert_id_acknowledge_post(alert_id, change_alert_status_info=change_alert_status_info)

Acknowledge an alert

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.alert_info import AlertInfo
from openapi_client.models.change_alert_status_info import ChangeAlertStatusInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertsApi(api_client)
    alert_id = 'alert_id_example' # str | Id to acknowledge an alert.
    change_alert_status_info = openapi_client.ChangeAlertStatusInfo() # ChangeAlertStatusInfo |  (optional)

    try:
        # Acknowledge an alert
        api_response = api_instance.alerts_alert_id_acknowledge_post(alert_id, change_alert_status_info=change_alert_status_info)
        print("The response of AlertsApi->alerts_alert_id_acknowledge_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_alert_id_acknowledge_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alert_id** | **str**| Id to acknowledge an alert. | 
 **change_alert_status_info** | [**ChangeAlertStatusInfo**](ChangeAlertStatusInfo.md)|  | [optional] 

### Return type

[**AlertInfo**](AlertInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**404** | No alert with id was found. |  -  |
**409** | Alert can&#39;t be acknowledged because it is against the defined alert lifecycle. |  -  |
**500** | Internal general error occured. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_alert_id_annotate_post**
> AlertAnnotationInfo alerts_alert_id_annotate_post(alert_id, alert_annotation_info=alert_annotation_info)

Annotate Alert

Annotates an alert by given Annotation Info.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.alert_annotation_info import AlertAnnotationInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertsApi(api_client)
    alert_id = 'alert_id_example' # str | Id of the alert to annotate.
    alert_annotation_info = openapi_client.AlertAnnotationInfo() # AlertAnnotationInfo | Annotation Information. (optional)

    try:
        # Annotate Alert
        api_response = api_instance.alerts_alert_id_annotate_post(alert_id, alert_annotation_info=alert_annotation_info)
        print("The response of AlertsApi->alerts_alert_id_annotate_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_alert_id_annotate_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alert_id** | **str**| Id of the alert to annotate. | 
 **alert_annotation_info** | [**AlertAnnotationInfo**](AlertAnnotationInfo.md)| Annotation Information. | [optional] 

### Return type

[**AlertAnnotationInfo**](AlertAnnotationInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**404** | Required entities could not be found in the database. |  -  |
**500** | Internal general error occured. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_alert_id_annotations_get**
> List[AlertAnnotationInfo] alerts_alert_id_annotations_get(alert_id)

Get annotations of an alert

Get annotations of an alert by id.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.alert_annotation_info import AlertAnnotationInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertsApi(api_client)
    alert_id = 'alert_id_example' # str | Id of the requested Alert.

    try:
        # Get annotations of an alert
        api_response = api_instance.alerts_alert_id_annotations_get(alert_id)
        print("The response of AlertsApi->alerts_alert_id_annotations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_alert_id_annotations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alert_id** | **str**| Id of the requested Alert. | 

### Return type

[**List[AlertAnnotationInfo]**](AlertAnnotationInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**204** | No annotations were found for the alert. |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_alert_id_attachments_attachment_id_get**
> bytearray alerts_alert_id_attachments_attachment_id_get(alert_id, attachment_id, width=width, height=height, scale=scale)

Gets a specified attachment of a specified alert.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertsApi(api_client)
    alert_id = 'alert_id_example' # str | Id of the alert that contains the wanted attachment.
    attachment_id = 'attachment_id_example' # str | Id of the attachment, that you want to retrieve.
    width = 56 # int | Optional parameter defining the wanted width of the picture that is retrieved. (optional)
    height = 56 # int | Optional parameter defining the wanted height of the picture that is retrieved. (optional)
    scale = True # bool | Optional parameter defining whether it's wanted to scale the retrieved image. Default is set to  true. (optional) (default to True)

    try:
        # Gets a specified attachment of a specified alert.
        api_response = api_instance.alerts_alert_id_attachments_attachment_id_get(alert_id, attachment_id, width=width, height=height, scale=scale)
        print("The response of AlertsApi->alerts_alert_id_attachments_attachment_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_alert_id_attachments_attachment_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alert_id** | **str**| Id of the alert that contains the wanted attachment. | 
 **attachment_id** | **str**| Id of the attachment, that you want to retrieve. | 
 **width** | **int**| Optional parameter defining the wanted width of the picture that is retrieved. | [optional] 
 **height** | **int**| Optional parameter defining the wanted height of the picture that is retrieved. | [optional] 
 **scale** | **bool**| Optional parameter defining whether it&#39;s wanted to scale the retrieved image. Default is set to  true. | [optional] [default to True]

### Return type

**bytearray**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the attachment image with additional meta information. |  -  |
**204** | The image of the attachment was not uploaded yet. |  -  |
**400** | A passed parameter was either empty or invalid. |  -  |
**403** | Authorization failed. |  -  |
**404** | The attachment image was not found. |  -  |
**500** | Internal general error occured. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_alert_id_attachments_get**
> List[AlertAttachmentInfo] alerts_alert_id_attachments_get(alert_id)

Get attachments of an alert

Get attachments of an alert by id.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.alert_attachment_info import AlertAttachmentInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertsApi(api_client)
    alert_id = 'alert_id_example' # str | Id of the requested Alert.

    try:
        # Get attachments of an alert
        api_response = api_instance.alerts_alert_id_attachments_get(alert_id)
        print("The response of AlertsApi->alerts_alert_id_attachments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_alert_id_attachments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alert_id** | **str**| Id of the requested Alert. | 

### Return type

[**List[AlertAttachmentInfo]**](AlertAttachmentInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**404** | Required entities could not be found in the database. |  -  |
**500** | Internal general error occured. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_alert_id_close_post**
> AlertInfo alerts_alert_id_close_post(alert_id, change_alert_status_info=change_alert_status_info)

Close an alert

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.alert_info import AlertInfo
from openapi_client.models.change_alert_status_info import ChangeAlertStatusInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertsApi(api_client)
    alert_id = 'alert_id_example' # str | Id to acknowledge an alert.
    change_alert_status_info = openapi_client.ChangeAlertStatusInfo() # ChangeAlertStatusInfo |  (optional)

    try:
        # Close an alert
        api_response = api_instance.alerts_alert_id_close_post(alert_id, change_alert_status_info=change_alert_status_info)
        print("The response of AlertsApi->alerts_alert_id_close_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_alert_id_close_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alert_id** | **str**| Id to acknowledge an alert. | 
 **change_alert_status_info** | [**ChangeAlertStatusInfo**](ChangeAlertStatusInfo.md)|  | [optional] 

### Return type

[**AlertInfo**](AlertInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**404** | No alert with id was found. |  -  |
**409** | Alert can&#39;t be closed because it is against the defined alert lifecycle. |  -  |
**500** | Internal general error occured. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_alert_id_get**
> AlertInfo alerts_alert_id_get(alert_id)

Get Alert

Gets an alert by id.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.alert_info import AlertInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertsApi(api_client)
    alert_id = 'alert_id_example' # str | Id of the requested Alert.

    try:
        # Get Alert
        api_response = api_instance.alerts_alert_id_get(alert_id)
        print("The response of AlertsApi->alerts_alert_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_alert_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alert_id** | **str**| Id of the requested Alert. | 

### Return type

[**AlertInfo**](AlertInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**404** | Required entities could not be found in the database. |  -  |
**500** | Internal general error occured. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_alert_id_notifications_get**
> List[AlertNotificationInfo] alerts_alert_id_notifications_get(alert_id)

Get alert notifications

Get notifications of all users by alert id.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.alert_notification_info import AlertNotificationInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertsApi(api_client)
    alert_id = 'alert_id_example' # str | Id of the requested Alert.

    try:
        # Get alert notifications
        api_response = api_instance.alerts_alert_id_notifications_get(alert_id)
        print("The response of AlertsApi->alerts_alert_id_notifications_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_alert_id_notifications_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alert_id** | **str**| Id of the requested Alert. | 

### Return type

[**List[AlertNotificationInfo]**](AlertNotificationInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**404** | Required entities could not be found in the database. |  -  |
**500** | Internal general error occured. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_alert_id_overview_get**
> OverviewAlert alerts_alert_id_overview_get(alert_id)

Get an overview alert.

Get overview alert by id.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.overview_alert import OverviewAlert
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertsApi(api_client)
    alert_id = 'alert_id_example' # str | Id of the requested Alert.

    try:
        # Get an overview alert.
        api_response = api_instance.alerts_alert_id_overview_get(alert_id)
        print("The response of AlertsApi->alerts_alert_id_overview_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_alert_id_overview_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alert_id** | **str**| Id of the requested Alert. | 

### Return type

[**OverviewAlert**](OverviewAlert.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns alert with all information attached. |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**404** | Required entities could not be found in the database. |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_alert_id_undo_acknowledge_post**
> OverviewAlert alerts_alert_id_undo_acknowledge_post(alert_id, change_alert_status_info=change_alert_status_info)

Undo the acknowledgement of an alert.

This method tries to undo an alert acknowledgement.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.change_alert_status_info import ChangeAlertStatusInfo
from openapi_client.models.overview_alert import OverviewAlert
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertsApi(api_client)
    alert_id = 'alert_id_example' # str | 
    change_alert_status_info = openapi_client.ChangeAlertStatusInfo() # ChangeAlertStatusInfo |  (optional)

    try:
        # Undo the acknowledgement of an alert.
        api_response = api_instance.alerts_alert_id_undo_acknowledge_post(alert_id, change_alert_status_info=change_alert_status_info)
        print("The response of AlertsApi->alerts_alert_id_undo_acknowledge_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_alert_id_undo_acknowledge_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alert_id** | **str**|  | 
 **change_alert_status_info** | [**ChangeAlertStatusInfo**](ChangeAlertStatusInfo.md)|  | [optional] 

### Return type

[**OverviewAlert**](OverviewAlert.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns updated alert. |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**403** | User is not allowed to undo the acknowledgement. |  -  |
**500** | Internal general error occured. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_alert_id_undo_close_post**
> OverviewAlert alerts_alert_id_undo_close_post(alert_id, change_alert_status_info=change_alert_status_info)

Undo the closure of an alert.

This method tries to undo an alert close.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.change_alert_status_info import ChangeAlertStatusInfo
from openapi_client.models.overview_alert import OverviewAlert
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertsApi(api_client)
    alert_id = 'alert_id_example' # str | 
    change_alert_status_info = openapi_client.ChangeAlertStatusInfo() # ChangeAlertStatusInfo |  (optional)

    try:
        # Undo the closure of an alert.
        api_response = api_instance.alerts_alert_id_undo_close_post(alert_id, change_alert_status_info=change_alert_status_info)
        print("The response of AlertsApi->alerts_alert_id_undo_close_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_alert_id_undo_close_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alert_id** | **str**|  | 
 **change_alert_status_info** | [**ChangeAlertStatusInfo**](ChangeAlertStatusInfo.md)|  | [optional] 

### Return type

[**OverviewAlert**](OverviewAlert.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**403** | User is not allowed to undo the close. |  -  |
**500** | Internal general error occured. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_close_all_post**
> alerts_close_all_post(user_id=user_id, change_alert_status_filter_info=change_alert_status_filter_info)

Close all acknowledged alerts.

This method closes all acknowledged alerts your team currently has.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.change_alert_status_filter_info import ChangeAlertStatusFilterInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertsApi(api_client)
    user_id = 'user_id_example' # str | User ID of the user to be used to close the alarms. (optional)
    change_alert_status_filter_info = openapi_client.ChangeAlertStatusFilterInfo() # ChangeAlertStatusFilterInfo |  (optional)

    try:
        # Close all acknowledged alerts.
        api_instance.alerts_close_all_post(user_id=user_id, change_alert_status_filter_info=change_alert_status_filter_info)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_close_all_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| User ID of the user to be used to close the alarms. | [optional] 
 **change_alert_status_filter_info** | [**ChangeAlertStatusFilterInfo**](ChangeAlertStatusFilterInfo.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**404** | Required entities could not be found in the database. |  -  |
**500** | Internal general error occured. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_close_multiple_post**
> alerts_close_multiple_post(change_alert_status_multiple_info=change_alert_status_multiple_info)

Close multiple alerts

This method closes all alerts provided.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.change_alert_status_multiple_info import ChangeAlertStatusMultipleInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertsApi(api_client)
    change_alert_status_multiple_info = openapi_client.ChangeAlertStatusMultipleInfo() # ChangeAlertStatusMultipleInfo |  (optional)

    try:
        # Close multiple alerts
        api_instance.alerts_close_multiple_post(change_alert_status_multiple_info=change_alert_status_multiple_info)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_close_multiple_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **change_alert_status_multiple_info** | [**ChangeAlertStatusMultipleInfo**](ChangeAlertStatusMultipleInfo.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**404** | Not Found |  -  |
**500** | Internal general error occured. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_paged_post**
> OverviewAlertPagedResultsPublic alerts_paged_post(max_results=max_results, user_id=user_id, alert_filter_public=alert_filter_public)

Gets alerts paged

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.alert_filter_public import AlertFilterPublic
from openapi_client.models.overview_alert_paged_results_public import OverviewAlertPagedResultsPublic
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertsApi(api_client)
    max_results = 56 # int | Defines the limit of retrieved alert details per request. 1 to 100 are allowed per request.                  Number of alerts could be less if filtered but at least 1. (optional)
    user_id = 'user_id_example' # str | User ID of the user you want to get alerts for. (optional)
    alert_filter_public = openapi_client.AlertFilterPublic() # AlertFilterPublic | The filter defines which alerts are supposed to be retrieved. (optional)

    try:
        # Gets alerts paged
        api_response = api_instance.alerts_paged_post(max_results=max_results, user_id=user_id, alert_filter_public=alert_filter_public)
        print("The response of AlertsApi->alerts_paged_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_paged_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **max_results** | **int**| Defines the limit of retrieved alert details per request. 1 to 100 are allowed per request.                  Number of alerts could be less if filtered but at least 1. | [optional] 
 **user_id** | **str**| User ID of the user you want to get alerts for. | [optional] 
 **alert_filter_public** | [**AlertFilterPublic**](AlertFilterPublic.md)| The filter defines which alerts are supposed to be retrieved. | [optional] 

### Return type

[**OverviewAlertPagedResultsPublic**](OverviewAlertPagedResultsPublic.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a paged result with found alerts and continuation token if more alerts are in the database. |  -  |
**204** | There were no alerts found for the specified filter. |  -  |
**400** | Required parameters could not be found in the request/claims. |  -  |
**403** | Authorization failed |  -  |
**404** | Not Found |  -  |
**500** | Internal general error occured. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_post**
> AlertInfo alerts_post(raise_alert_info=raise_alert_info)

Trigger Alert

Triggers a new alert for your team. All team members on duty will receive alert notifications.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.alert_info import AlertInfo
from openapi_client.models.raise_alert_info import RaiseAlertInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertsApi(api_client)
    raise_alert_info = openapi_client.RaiseAlertInfo() # RaiseAlertInfo | Alert to raise. (optional)

    try:
        # Trigger Alert
        api_response = api_instance.alerts_post(raise_alert_info=raise_alert_info)
        print("The response of AlertsApi->alerts_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raise_alert_info** | [**RaiseAlertInfo**](RaiseAlertInfo.md)| Alert to raise. | [optional] 

### Return type

[**AlertInfo**](AlertInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**404** | Required entities could not be found in the database. |  -  |
**500** | Internal general error occured. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_report_get**
> AlertReport alerts_report_get(user_id=user_id)

Get Alert Report

Returns information about the occurred alert volume in different time periods as well as information about the  response behaviour (amount of confirmed and unhandled alerts) of your team members.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.alert_report import AlertReport
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertsApi(api_client)
    user_id = 'user_id_example' # str | User ID of the user for whom you want a report. (optional)

    try:
        # Get Alert Report
        api_response = api_instance.alerts_report_get(user_id=user_id)
        print("The response of AlertsApi->alerts_report_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_report_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| User ID of the user for whom you want a report. | [optional] 

### Return type

[**AlertReport**](AlertReport.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**404** | Required entities could not be found in the database. |  -  |
**500** | Internal general error occured. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_undo_acknowledge_multiple_post**
> alerts_undo_acknowledge_multiple_post(change_alert_status_multiple_info=change_alert_status_multiple_info)

Queue undo of multiple acknowledgments.

This method tries to undo the acknowledgement of multiple alerts via a queue. The operation is handled in the background.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.change_alert_status_multiple_info import ChangeAlertStatusMultipleInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertsApi(api_client)
    change_alert_status_multiple_info = openapi_client.ChangeAlertStatusMultipleInfo() # ChangeAlertStatusMultipleInfo | Configure which user should be undone for which alerts. (optional)

    try:
        # Queue undo of multiple acknowledgments.
        api_instance.alerts_undo_acknowledge_multiple_post(change_alert_status_multiple_info=change_alert_status_multiple_info)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_undo_acknowledge_multiple_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **change_alert_status_multiple_info** | [**ChangeAlertStatusMultipleInfo**](ChangeAlertStatusMultipleInfo.md)| Configure which user should be undone for which alerts. | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**403** | Forbidden |  -  |
**500** | Internal general error occured. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_undo_close_multiple_post**
> alerts_undo_close_multiple_post(change_alert_status_multiple_info=change_alert_status_multiple_info)

Withdraw closure of multiple alerts

This method tries to undo multiple alert closes. The operation is handled in the background.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.change_alert_status_multiple_info import ChangeAlertStatusMultipleInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertsApi(api_client)
    change_alert_status_multiple_info = openapi_client.ChangeAlertStatusMultipleInfo() # ChangeAlertStatusMultipleInfo |  (optional)

    try:
        # Withdraw closure of multiple alerts
        api_instance.alerts_undo_close_multiple_post(change_alert_status_multiple_info=change_alert_status_multiple_info)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_undo_close_multiple_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **change_alert_status_multiple_info** | [**ChangeAlertStatusMultipleInfo**](ChangeAlertStatusMultipleInfo.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**404** | Not Found |  -  |
**500** | Internal general error occured. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


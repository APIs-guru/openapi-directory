# openapi_client.NotificationsApi

All URIs are relative to *https://accountname.exavault.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_notification**](NotificationsApi.md#add_notification) | **POST** /notifications | Create a new notification
[**delete_notification_by_id**](NotificationsApi.md#delete_notification_by_id) | **DELETE** /notifications/{id} | Delete a notification
[**get_notification_by_id**](NotificationsApi.md#get_notification_by_id) | **GET** /notifications/{id} | Get notification details
[**list_notifications**](NotificationsApi.md#list_notifications) | **GET** /notifications | Get a list of notifications
[**update_notification_by_id**](NotificationsApi.md#update_notification_by_id) | **PATCH** /notifications/{id} | Update a notification


# **add_notification**
> NotificationResponse add_notification(ev_api_key, ev_access_token, add_notification_request_body=add_notification_request_body)

Create a new notification

Create a new notification for a [resource](#section/Identifying-Resources) in your account. Notifications can be sent via email or webhook;  - To enable email, pass an array of email addresses to the `recipients` parameter of this call.  - To enable webhooks, setup the webhook callback URL in your account settings via [PATCH /account](#operation/updateAccount).   **Notes:**   - Authenticated user should have [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) 

### Example


```python
import openapi_client
from openapi_client.models.add_notification_request_body import AddNotificationRequestBody
from openapi_client.models.notification_response import NotificationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationsApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API Key required to make API call. 
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    add_notification_request_body = {"action":"upload","message":"hello world","recipients":["myemail@example.com"],"resource":"examplefile.txt","sendEmail":true,"type":"file","usernames":["exavault","exavalut2"]} # AddNotificationRequestBody |  (optional)

    try:
        # Create a new notification
        api_response = api_instance.add_notification(ev_api_key, ev_access_token, add_notification_request_body=add_notification_request_body)
        print("The response of NotificationsApi->add_notification:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationsApi->add_notification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make API call.  | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **add_notification_request_body** | [**AddNotificationRequestBody**](AddNotificationRequestBody.md)|  | [optional] 

### Return type

[**NotificationResponse**](NotificationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_notification_by_id**
> EmptyResponse delete_notification_by_id(ev_api_key, ev_access_token, id)

Delete a notification

Deletes a notification. Note that deleting a notification _only_ deletes the notification &ndash; it does not delete any underlying files or folders.  **Notes:**  - You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to update a notification. - You can only delete notifications owned by your user account.

### Example


```python
import openapi_client
from openapi_client.models.empty_response import EmptyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationsApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    id = 3 # int | ID of the notification. Use [GET /notifications](#operation/listNotifications) if you need to lookup an ID.

    try:
        # Delete a notification
        api_response = api_instance.delete_notification_by_id(ev_api_key, ev_access_token, id)
        print("The response of NotificationsApi->delete_notification_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationsApi->delete_notification_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **id** | **int**| ID of the notification. Use [GET /notifications](#operation/listNotifications) if you need to lookup an ID. | 

### Return type

[**EmptyResponse**](EmptyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_notification_by_id**
> NotificationResponse get_notification_by_id(ev_api_key, ev_access_token, id, include=include)

Get notification details

Get the details for a notification with a specific ID number. You'll be able to review its path, triggers and who's getting the notification.   **Notes**  - You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to view the detail for a notification. - You can only retrieve notifications owned by your user account.

### Example


```python
import openapi_client
from openapi_client.models.notification_response import NotificationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationsApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    id = 3 # int | ID of the notification. Use [GET /notifications](#operation/listNotifications) if you need to lookup an ID.
    include = 'resource,share' # str | Related record types to include in the response. You can include multiple types by separating them with commas. Valid options are **ownerUser**, **resource**, and **share**. (optional)

    try:
        # Get notification details
        api_response = api_instance.get_notification_by_id(ev_api_key, ev_access_token, id, include=include)
        print("The response of NotificationsApi->get_notification_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationsApi->get_notification_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **id** | **int**| ID of the notification. Use [GET /notifications](#operation/listNotifications) if you need to lookup an ID. | 
 **include** | **str**| Related record types to include in the response. You can include multiple types by separating them with commas. Valid options are **ownerUser**, **resource**, and **share**. | [optional] 

### Return type

[**NotificationResponse**](NotificationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_notifications**
> NotificationCollectionResponse list_notifications(ev_api_key, ev_access_token, type=type, offset=offset, sort=sort, limit=limit, include=include, action=action)

Get a list of notifications

Get a list of all the [notifications](/docs/account/06-notifications) you have access to. You can use sorting and filtering to limit the returned list.  **Notes:**   - Authenticated user should have [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions)

### Example


```python
import openapi_client
from openapi_client.models.notification_collection_response import NotificationCollectionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationsApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API Key required to make the API call. 
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    type = 'file' # str | Type of notification include in the list. Valid options are **file**, **folder**, **send_receipt**, **share_receipt**, **file_drop**  If this parameter is not used, only **file** and **folder** type notifications are included in the list. (optional)
    offset = 0 # int | Starting notification record in the result set. Can be used for pagination. (optional) (default to 0)
    sort = 'date' # str | What order the list of matches should be in. Valid sort fields are **resourcename**, **date**, **action** and **type**. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending.  You can chose multiple options for the sort by separating them with commmas, such as \"type,-date\" to sort by type, then most recent. (optional)
    limit = 25 # int | Number of notification records to return. Can be used for pagination. (optional) (default to 25)
    include = 'resource,share,user' # str | Related records to include in the response. Valid options are **ownerUser**, **resource**, **share** (optional)
    action = 'all' # str | The kind of action which triggers the notification. Valid choices are **connect** (only for delivery receipts), **download**, **upload**, **delete**, or **all**   **Note** The **all** action matches notifications set to \"all\", not all notifications. For example, notifications set to trigger only on delete are not included if you filter for action=all (optional)

    try:
        # Get a list of notifications
        api_response = api_instance.list_notifications(ev_api_key, ev_access_token, type=type, offset=offset, sort=sort, limit=limit, include=include, action=action)
        print("The response of NotificationsApi->list_notifications:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationsApi->list_notifications: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call.  | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **type** | **str**| Type of notification include in the list. Valid options are **file**, **folder**, **send_receipt**, **share_receipt**, **file_drop**  If this parameter is not used, only **file** and **folder** type notifications are included in the list. | [optional] 
 **offset** | **int**| Starting notification record in the result set. Can be used for pagination. | [optional] [default to 0]
 **sort** | **str**| What order the list of matches should be in. Valid sort fields are **resourcename**, **date**, **action** and **type**. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending.  You can chose multiple options for the sort by separating them with commmas, such as \&quot;type,-date\&quot; to sort by type, then most recent. | [optional] 
 **limit** | **int**| Number of notification records to return. Can be used for pagination. | [optional] [default to 25]
 **include** | **str**| Related records to include in the response. Valid options are **ownerUser**, **resource**, **share** | [optional] 
 **action** | **str**| The kind of action which triggers the notification. Valid choices are **connect** (only for delivery receipts), **download**, **upload**, **delete**, or **all**   **Note** The **all** action matches notifications set to \&quot;all\&quot;, not all notifications. For example, notifications set to trigger only on delete are not included if you filter for action&#x3D;all | [optional] 

### Return type

[**NotificationCollectionResponse**](NotificationCollectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_notification_by_id**
> NotificationResponse update_notification_by_id(ev_api_key, ev_access_token, id, update_notification_by_id_request_body=update_notification_by_id_request_body)

Update a notification

Update an existing notification. You can add additional emails or change the action or users that cause a notification to trigger.   When updating recipient emails, make sure your `recipients` parameter contains the full list of people who should be included on the notification. If you resend the list without an existing recipient, they will be deleted from the notification emails.   **Notes:**  - You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to update a notification. - You can only change notifications owned by your user account.

### Example


```python
import openapi_client
from openapi_client.models.notification_response import NotificationResponse
from openapi_client.models.update_notification_by_id_request_body import UpdateNotificationByIdRequestBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationsApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    id = 3 # int | ID of the notification. Use [GET /notifications](#operation/listNotifications) if you need to lookup an ID.
    update_notification_by_id_request_body = {"action":"upload","emails":["exavault@example.com","exavault+1@example.com"],"sendEmail":"true","usernames":["notice_user_all_recipients"]} # UpdateNotificationByIdRequestBody |  (optional)

    try:
        # Update a notification
        api_response = api_instance.update_notification_by_id(ev_api_key, ev_access_token, id, update_notification_by_id_request_body=update_notification_by_id_request_body)
        print("The response of NotificationsApi->update_notification_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationsApi->update_notification_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **id** | **int**| ID of the notification. Use [GET /notifications](#operation/listNotifications) if you need to lookup an ID. | 
 **update_notification_by_id_request_body** | [**UpdateNotificationByIdRequestBody**](UpdateNotificationByIdRequestBody.md)|  | [optional] 

### Return type

[**NotificationResponse**](NotificationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


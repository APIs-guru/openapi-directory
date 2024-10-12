# openapi_client.ActivityApi

All URIs are relative to *https://accountname.exavault.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_session_logs**](ActivityApi.md#get_session_logs) | **GET** /activity/session | Get activity logs
[**get_webhook_logs**](ActivityApi.md#get_webhook_logs) | **GET** /activity/webhooks | Get webhook logs


# **get_session_logs**
> SessionActivityResponse get_session_logs(ev_api_key, ev_access_token, start_date=start_date, end_date=end_date, ip_address=ip_address, username=username, path=path, type=type, offset=offset, limit=limit, sort=sort)

Get activity logs

Returns the detailed activity logs for your account. Optional query paramaters will filter the returned results based on a number of options including usernames, activity types, or date ranges.   **NOTE:** Total Results will always return as 0 to avoid quering data you're not using and stay as performant as possible.     **Operation Types** Session activity is logged with an operation type that is different from what is visible through the [activity log interface in the web file manager](/docs/account/10-activity-logs/00-activity-logs). Consult the table below to compare the two:  | File Manager Value | API Value | Notes | |-----|----|---| | Connect | PASS | | | Disconnect | EXIT | | | Upload | STOR | | | Download | RETR | | | Delete | DELE | | | Create Folder | MKD | | | Rename | RNTO | | | Move | MOVE | | | Copy | COPY | | | Compress | COMPR | | | Extract | EXTRACT | | | Shared Folders | SHARE | | | Send Files | SEND | | | Receive Files | RECV | | | _N/A_ | EDIT\\_SEND | Update send. Not shown in file manager | | Update Share | EDIT\\_SHARE| |  | Update Receive | EDIT\\_RECV | | | Delete Send | DELE\\_SEND | | | Delete Receive | DELE\\_RECV | | | Delete Share | DELE\\_SHARE | | | Create Notification | NOTIFY | | | Update Notification | EDIT\\_NTFY| | | Delete Notification | DELE\\_NTFY | | | Create User | USER | | | Update User | EDIT\\_USER | | | Delete User | DELE\\_USER | | | _N/A_ | DFA | Create direct link. Not shown in file manager | | _N/A_ | EDIT\\_DFA | Update direct link options. Not shown in file manager | | _N/A_ | DELE\\_DFA | Deactivate direct link. Not shown in file manager| 

### Example


```python
import openapi_client
from openapi_client.models.session_activity_response import SessionActivityResponse
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
    api_instance = openapi_client.ActivityApi(api_client)
    ev_api_key = 'exampleaccount-zwSuWUZ8S38h33qPS8v0s' # str | API Key
    ev_access_token = '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1' # str | Access Token
    start_date = '2019-10-18T06:48:40Z' # datetime | Start date of the filter data range (optional)
    end_date = '2019-10-18T06:48:40Z' # datetime | End date of the filter data range (optional)
    ip_address = '127.0.0.1' # str | Used to filter session logs by ip address. (optional)
    username = 'jdoe' # str | Username used for filtering a list (optional)
    path = '/folder*' # str | Path used to filter records (optional)
    type = 'EDIT_SHARE' # str | Filter session logs for operation type (see table above for acceptable values) (optional)
    offset = 100 # int | Offset of the records list (optional)
    limit = 10 # int | Limit of the records list (optional)
    sort = '-date' # str | Comma separated list sort params (optional)

    try:
        # Get activity logs
        api_response = api_instance.get_session_logs(ev_api_key, ev_access_token, start_date=start_date, end_date=end_date, ip_address=ip_address, username=username, path=path, type=type, offset=offset, limit=limit, sort=sort)
        print("The response of ActivityApi->get_session_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActivityApi->get_session_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key | 
 **ev_access_token** | **str**| Access Token | 
 **start_date** | **datetime**| Start date of the filter data range | [optional] 
 **end_date** | **datetime**| End date of the filter data range | [optional] 
 **ip_address** | **str**| Used to filter session logs by ip address. | [optional] 
 **username** | **str**| Username used for filtering a list | [optional] 
 **path** | **str**| Path used to filter records | [optional] 
 **type** | **str**| Filter session logs for operation type (see table above for acceptable values) | [optional] 
 **offset** | **int**| Offset of the records list | [optional] 
 **limit** | **int**| Limit of the records list | [optional] 
 **sort** | **str**| Comma separated list sort params | [optional] 

### Return type

[**SessionActivityResponse**](SessionActivityResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_webhook_logs**
> WebhookActivityResponse get_webhook_logs(ev_api_key, ev_access_token, start_date=start_date, end_date=end_date, endpoint_url=endpoint_url, event=event, status_code=status_code, var_resource_path=var_resource_path, username=username, offset=offset, limit=limit, sort=sort)

Get webhook logs

Returns the webhook logs for your account. Use the available query parameters to filter the listing of activity that is returned.  **NOTE:** Total Results will always return as 0 to avoid querying data you're not using and stay as performant as possible.   **Event Types**  Webhooks are triggered by enabled event types for your account, which are configured on the [developer settings page](/docs/account/09-settings/06-developer-settings). Not all event types may be allowed for your account type. These are the valid options for event types:  - resources.upload - resources.download - resources.delete - resources.createFolder - resources.rename - resources.move - resources.copy - resources.compress - resources.extract - shares.formSubmit 

### Example


```python
import openapi_client
from openapi_client.models.webhook_activity_response import WebhookActivityResponse
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
    api_instance = openapi_client.ActivityApi(api_client)
    ev_api_key = 'exampleaccount-zwSuWUZ8S38h33qPS8v0s' # str | API Key
    ev_access_token = '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1' # str | Access Token
    start_date = '2013-10-20T19:20:30+01:00' # datetime | Earliest date of entries to include in list (optional)
    end_date = '2013-10-20T19:20:30+01:00' # datetime | Latest date of entries to include in list (optional)
    endpoint_url = 'endpoint_url_example' # str | Webhook listener endpoint (optional)
    event = 'resources.upload' # str | Type of activity that triggered the webhook attempt (optional)
    status_code = 200 # int | Response code from the webhook endpoint (optional)
    var_resource_path = '/folder*' # str | Path of the resource that triggered the webhook attempt (optional)
    username = 'exampleuser' # str | Filter by triggering username. (optional)
    offset = 100 # int | Records to skip before returning results. (optional)
    limit = 10 # int | Limit of the records list (optional)
    sort = '-date,event' # str | Comma separated list sort params (optional)

    try:
        # Get webhook logs
        api_response = api_instance.get_webhook_logs(ev_api_key, ev_access_token, start_date=start_date, end_date=end_date, endpoint_url=endpoint_url, event=event, status_code=status_code, var_resource_path=var_resource_path, username=username, offset=offset, limit=limit, sort=sort)
        print("The response of ActivityApi->get_webhook_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActivityApi->get_webhook_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API Key | 
 **ev_access_token** | **str**| Access Token | 
 **start_date** | **datetime**| Earliest date of entries to include in list | [optional] 
 **end_date** | **datetime**| Latest date of entries to include in list | [optional] 
 **endpoint_url** | **str**| Webhook listener endpoint | [optional] 
 **event** | **str**| Type of activity that triggered the webhook attempt | [optional] 
 **status_code** | **int**| Response code from the webhook endpoint | [optional] 
 **var_resource_path** | **str**| Path of the resource that triggered the webhook attempt | [optional] 
 **username** | **str**| Filter by triggering username. | [optional] 
 **offset** | **int**| Records to skip before returning results. | [optional] 
 **limit** | **int**| Limit of the records list | [optional] 
 **sort** | **str**| Comma separated list sort params | [optional] 

### Return type

[**WebhookActivityResponse**](WebhookActivityResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


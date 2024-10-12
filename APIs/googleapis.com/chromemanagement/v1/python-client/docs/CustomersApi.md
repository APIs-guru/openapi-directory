# openapi_client.CustomersApi

All URIs are relative to *https://chromemanagement.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**chromemanagement_customers_apps_count_chrome_app_requests**](CustomersApi.md#chromemanagement_customers_apps_count_chrome_app_requests) | **GET** /v1/{customer}/apps:countChromeAppRequests | 
[**chromemanagement_customers_reports_count_chrome_browsers_needing_attention**](CustomersApi.md#chromemanagement_customers_reports_count_chrome_browsers_needing_attention) | **GET** /v1/{customer}/reports:countChromeBrowsersNeedingAttention | 
[**chromemanagement_customers_reports_count_chrome_devices_reaching_auto_expiration_date**](CustomersApi.md#chromemanagement_customers_reports_count_chrome_devices_reaching_auto_expiration_date) | **GET** /v1/{customer}/reports:countChromeDevicesReachingAutoExpirationDate | 
[**chromemanagement_customers_reports_count_chrome_devices_that_need_attention**](CustomersApi.md#chromemanagement_customers_reports_count_chrome_devices_that_need_attention) | **GET** /v1/{customer}/reports:countChromeDevicesThatNeedAttention | 
[**chromemanagement_customers_reports_count_chrome_hardware_fleet_devices**](CustomersApi.md#chromemanagement_customers_reports_count_chrome_hardware_fleet_devices) | **GET** /v1/{customer}/reports:countChromeHardwareFleetDevices | 
[**chromemanagement_customers_reports_count_chrome_versions**](CustomersApi.md#chromemanagement_customers_reports_count_chrome_versions) | **GET** /v1/{customer}/reports:countChromeVersions | 
[**chromemanagement_customers_reports_count_installed_apps**](CustomersApi.md#chromemanagement_customers_reports_count_installed_apps) | **GET** /v1/{customer}/reports:countInstalledApps | 
[**chromemanagement_customers_reports_count_print_jobs_by_printer**](CustomersApi.md#chromemanagement_customers_reports_count_print_jobs_by_printer) | **GET** /v1/{customer}/reports:countPrintJobsByPrinter | 
[**chromemanagement_customers_reports_count_print_jobs_by_user**](CustomersApi.md#chromemanagement_customers_reports_count_print_jobs_by_user) | **GET** /v1/{customer}/reports:countPrintJobsByUser | 
[**chromemanagement_customers_reports_enumerate_print_jobs**](CustomersApi.md#chromemanagement_customers_reports_enumerate_print_jobs) | **GET** /v1/{customer}/reports:enumeratePrintJobs | 
[**chromemanagement_customers_reports_find_installed_app_devices**](CustomersApi.md#chromemanagement_customers_reports_find_installed_app_devices) | **GET** /v1/{customer}/reports:findInstalledAppDevices | 
[**chromemanagement_customers_telemetry_devices_list**](CustomersApi.md#chromemanagement_customers_telemetry_devices_list) | **GET** /v1/{parent}/telemetry/devices | 
[**chromemanagement_customers_telemetry_events_list**](CustomersApi.md#chromemanagement_customers_telemetry_events_list) | **GET** /v1/{parent}/telemetry/events | 
[**chromemanagement_customers_telemetry_notification_configs_create**](CustomersApi.md#chromemanagement_customers_telemetry_notification_configs_create) | **POST** /v1/{parent}/telemetry/notificationConfigs | 
[**chromemanagement_customers_telemetry_notification_configs_delete**](CustomersApi.md#chromemanagement_customers_telemetry_notification_configs_delete) | **DELETE** /v1/{name} | 
[**chromemanagement_customers_telemetry_notification_configs_list**](CustomersApi.md#chromemanagement_customers_telemetry_notification_configs_list) | **GET** /v1/{parent}/telemetry/notificationConfigs | 
[**chromemanagement_customers_telemetry_users_get**](CustomersApi.md#chromemanagement_customers_telemetry_users_get) | **GET** /v1/{name} | 
[**chromemanagement_customers_telemetry_users_list**](CustomersApi.md#chromemanagement_customers_telemetry_users_list) | **GET** /v1/{parent}/telemetry/users | 


# **chromemanagement_customers_apps_count_chrome_app_requests**
> GoogleChromeManagementV1CountChromeAppRequestsResponse chromemanagement_customers_apps_count_chrome_app_requests(customer, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, order_by=order_by, org_unit_id=org_unit_id, page_size=page_size, page_token=page_token)



Generate summary of app installation requests.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_chrome_management_v1_count_chrome_app_requests_response import GoogleChromeManagementV1CountChromeAppRequestsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chromemanagement.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chromemanagement.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    customer = 'customer_example' # str | Required. Customer id or \"my_customer\" to use the customer associated to the account making the request.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    order_by = 'order_by_example' # str | Field used to order results. Supported fields: * request_count * latest_request_time (optional)
    org_unit_id = 'org_unit_id_example' # str | The ID of the organizational unit. (optional)
    page_size = 56 # int | Maximum number of results to return. Maximum and default are 50, anything above will be coerced to 50. (optional)
    page_token = 'page_token_example' # str | Token to specify the page of the request to be returned. (optional)

    try:
        api_response = api_instance.chromemanagement_customers_apps_count_chrome_app_requests(customer, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, order_by=order_by, org_unit_id=org_unit_id, page_size=page_size, page_token=page_token)
        print("The response of CustomersApi->chromemanagement_customers_apps_count_chrome_app_requests:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->chromemanagement_customers_apps_count_chrome_app_requests: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **str**| Required. Customer id or \&quot;my_customer\&quot; to use the customer associated to the account making the request. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **order_by** | **str**| Field used to order results. Supported fields: * request_count * latest_request_time | [optional] 
 **org_unit_id** | **str**| The ID of the organizational unit. | [optional] 
 **page_size** | **int**| Maximum number of results to return. Maximum and default are 50, anything above will be coerced to 50. | [optional] 
 **page_token** | **str**| Token to specify the page of the request to be returned. | [optional] 

### Return type

[**GoogleChromeManagementV1CountChromeAppRequestsResponse**](GoogleChromeManagementV1CountChromeAppRequestsResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chromemanagement_customers_reports_count_chrome_browsers_needing_attention**
> GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse chromemanagement_customers_reports_count_chrome_browsers_needing_attention(customer, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, org_unit_id=org_unit_id)



Count of Chrome Browsers that have been recently enrolled, have new policy to be synced, or have no recent activity.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_chrome_management_v1_count_chrome_browsers_needing_attention_response import GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chromemanagement.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chromemanagement.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    customer = 'customer_example' # str | Required. The customer ID or \"my_customer\" prefixed with \"customers/\".
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    org_unit_id = 'org_unit_id_example' # str | Optional. The ID of the organizational unit. If omitted, all data will be returned. (optional)

    try:
        api_response = api_instance.chromemanagement_customers_reports_count_chrome_browsers_needing_attention(customer, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, org_unit_id=org_unit_id)
        print("The response of CustomersApi->chromemanagement_customers_reports_count_chrome_browsers_needing_attention:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->chromemanagement_customers_reports_count_chrome_browsers_needing_attention: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **str**| Required. The customer ID or \&quot;my_customer\&quot; prefixed with \&quot;customers/\&quot;. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **org_unit_id** | **str**| Optional. The ID of the organizational unit. If omitted, all data will be returned. | [optional] 

### Return type

[**GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse**](GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chromemanagement_customers_reports_count_chrome_devices_reaching_auto_expiration_date**
> GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse chromemanagement_customers_reports_count_chrome_devices_reaching_auto_expiration_date(customer, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, max_aue_date=max_aue_date, min_aue_date=min_aue_date, org_unit_id=org_unit_id)



Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_chrome_management_v1_count_chrome_devices_reaching_auto_expiration_date_response import GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chromemanagement.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chromemanagement.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    customer = 'customer_example' # str | Required. The customer ID or \"my_customer\" prefixed with \"customers/\".
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    max_aue_date = 'max_aue_date_example' # str | Optional. Maximum expiration date in format yyyy-mm-dd in UTC timezone. If included returns all devices that have already expired and devices with auto expiration date equal to or earlier than the maximum date. (optional)
    min_aue_date = 'min_aue_date_example' # str | Optional. Maximum expiration date in format yyyy-mm-dd in UTC timezone. If included returns all devices that have already expired and devices with auto expiration date equal to or later than the minimum date. (optional)
    org_unit_id = 'org_unit_id_example' # str | Optional. The organizational unit ID, if omitted, will return data for all organizational units. (optional)

    try:
        api_response = api_instance.chromemanagement_customers_reports_count_chrome_devices_reaching_auto_expiration_date(customer, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, max_aue_date=max_aue_date, min_aue_date=min_aue_date, org_unit_id=org_unit_id)
        print("The response of CustomersApi->chromemanagement_customers_reports_count_chrome_devices_reaching_auto_expiration_date:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->chromemanagement_customers_reports_count_chrome_devices_reaching_auto_expiration_date: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **str**| Required. The customer ID or \&quot;my_customer\&quot; prefixed with \&quot;customers/\&quot;. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **max_aue_date** | **str**| Optional. Maximum expiration date in format yyyy-mm-dd in UTC timezone. If included returns all devices that have already expired and devices with auto expiration date equal to or earlier than the maximum date. | [optional] 
 **min_aue_date** | **str**| Optional. Maximum expiration date in format yyyy-mm-dd in UTC timezone. If included returns all devices that have already expired and devices with auto expiration date equal to or later than the minimum date. | [optional] 
 **org_unit_id** | **str**| Optional. The organizational unit ID, if omitted, will return data for all organizational units. | [optional] 

### Return type

[**GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse**](GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chromemanagement_customers_reports_count_chrome_devices_that_need_attention**
> GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse chromemanagement_customers_reports_count_chrome_devices_that_need_attention(customer, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, org_unit_id=org_unit_id, read_mask=read_mask)



Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_chrome_management_v1_count_chrome_devices_that_need_attention_response import GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chromemanagement.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chromemanagement.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    customer = 'customer_example' # str | Required. The customer ID or \"my_customer\" prefixed with \"customers/\".
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    org_unit_id = 'org_unit_id_example' # str | Optional. The ID of the organizational unit. If omitted, all data will be returned. (optional)
    read_mask = 'read_mask_example' # str | Required. Mask of the fields that should be populated in the returned report. (optional)

    try:
        api_response = api_instance.chromemanagement_customers_reports_count_chrome_devices_that_need_attention(customer, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, org_unit_id=org_unit_id, read_mask=read_mask)
        print("The response of CustomersApi->chromemanagement_customers_reports_count_chrome_devices_that_need_attention:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->chromemanagement_customers_reports_count_chrome_devices_that_need_attention: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **str**| Required. The customer ID or \&quot;my_customer\&quot; prefixed with \&quot;customers/\&quot;. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **org_unit_id** | **str**| Optional. The ID of the organizational unit. If omitted, all data will be returned. | [optional] 
 **read_mask** | **str**| Required. Mask of the fields that should be populated in the returned report. | [optional] 

### Return type

[**GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse**](GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chromemanagement_customers_reports_count_chrome_hardware_fleet_devices**
> GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse chromemanagement_customers_reports_count_chrome_hardware_fleet_devices(customer, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, org_unit_id=org_unit_id, read_mask=read_mask)



Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_chrome_management_v1_count_chrome_hardware_fleet_devices_response import GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chromemanagement.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chromemanagement.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    customer = 'customer_example' # str | Required. The customer ID or \"my_customer\".
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    org_unit_id = 'org_unit_id_example' # str | Optional. The ID of the organizational unit. If omitted, all data will be returned. (optional)
    read_mask = 'read_mask_example' # str | Required. Mask of the fields that should be populated in the returned report. (optional)

    try:
        api_response = api_instance.chromemanagement_customers_reports_count_chrome_hardware_fleet_devices(customer, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, org_unit_id=org_unit_id, read_mask=read_mask)
        print("The response of CustomersApi->chromemanagement_customers_reports_count_chrome_hardware_fleet_devices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->chromemanagement_customers_reports_count_chrome_hardware_fleet_devices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **str**| Required. The customer ID or \&quot;my_customer\&quot;. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **org_unit_id** | **str**| Optional. The ID of the organizational unit. If omitted, all data will be returned. | [optional] 
 **read_mask** | **str**| Required. Mask of the fields that should be populated in the returned report. | [optional] 

### Return type

[**GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse**](GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chromemanagement_customers_reports_count_chrome_versions**
> GoogleChromeManagementV1CountChromeVersionsResponse chromemanagement_customers_reports_count_chrome_versions(customer, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, org_unit_id=org_unit_id, page_size=page_size, page_token=page_token)



Generate report of installed Chrome versions.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_chrome_management_v1_count_chrome_versions_response import GoogleChromeManagementV1CountChromeVersionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chromemanagement.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chromemanagement.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    customer = 'customer_example' # str | Required. Customer id or \"my_customer\" to use the customer associated to the account making the request.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    filter = 'filter_example' # str | Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date (optional)
    org_unit_id = 'org_unit_id_example' # str | The ID of the organizational unit. (optional)
    page_size = 56 # int | Maximum number of results to return. Maximum and default are 100. (optional)
    page_token = 'page_token_example' # str | Token to specify the page of the request to be returned. (optional)

    try:
        api_response = api_instance.chromemanagement_customers_reports_count_chrome_versions(customer, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, org_unit_id=org_unit_id, page_size=page_size, page_token=page_token)
        print("The response of CustomersApi->chromemanagement_customers_reports_count_chrome_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->chromemanagement_customers_reports_count_chrome_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **str**| Required. Customer id or \&quot;my_customer\&quot; to use the customer associated to the account making the request. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **filter** | **str**| Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date | [optional] 
 **org_unit_id** | **str**| The ID of the organizational unit. | [optional] 
 **page_size** | **int**| Maximum number of results to return. Maximum and default are 100. | [optional] 
 **page_token** | **str**| Token to specify the page of the request to be returned. | [optional] 

### Return type

[**GoogleChromeManagementV1CountChromeVersionsResponse**](GoogleChromeManagementV1CountChromeVersionsResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chromemanagement_customers_reports_count_installed_apps**
> GoogleChromeManagementV1CountInstalledAppsResponse chromemanagement_customers_reports_count_installed_apps(customer, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, org_unit_id=org_unit_id, page_size=page_size, page_token=page_token)



Generate report of app installations.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_chrome_management_v1_count_installed_apps_response import GoogleChromeManagementV1CountInstalledAppsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chromemanagement.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chromemanagement.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    customer = 'customer_example' # str | Required. Customer id or \"my_customer\" to use the customer associated to the account making the request.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    filter = 'filter_example' # str | Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * latest_profile_active_date * permission_name * app_id (optional)
    order_by = 'order_by_example' # str | Field used to order results. Supported order by fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * app_id (optional)
    org_unit_id = 'org_unit_id_example' # str | The ID of the organizational unit. (optional)
    page_size = 56 # int | Maximum number of results to return. Maximum and default are 100. (optional)
    page_token = 'page_token_example' # str | Token to specify the page of the request to be returned. (optional)

    try:
        api_response = api_instance.chromemanagement_customers_reports_count_installed_apps(customer, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, org_unit_id=org_unit_id, page_size=page_size, page_token=page_token)
        print("The response of CustomersApi->chromemanagement_customers_reports_count_installed_apps:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->chromemanagement_customers_reports_count_installed_apps: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **str**| Required. Customer id or \&quot;my_customer\&quot; to use the customer associated to the account making the request. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **filter** | **str**| Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * latest_profile_active_date * permission_name * app_id | [optional] 
 **order_by** | **str**| Field used to order results. Supported order by fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * app_id | [optional] 
 **org_unit_id** | **str**| The ID of the organizational unit. | [optional] 
 **page_size** | **int**| Maximum number of results to return. Maximum and default are 100. | [optional] 
 **page_token** | **str**| Token to specify the page of the request to be returned. | [optional] 

### Return type

[**GoogleChromeManagementV1CountInstalledAppsResponse**](GoogleChromeManagementV1CountInstalledAppsResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chromemanagement_customers_reports_count_print_jobs_by_printer**
> GoogleChromeManagementV1CountPrintJobsByPrinterResponse chromemanagement_customers_reports_count_print_jobs_by_printer(customer, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, printer_org_unit_id=printer_org_unit_id)



Get a summary of printing done by each printer.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_chrome_management_v1_count_print_jobs_by_printer_response import GoogleChromeManagementV1CountPrintJobsByPrinterResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chromemanagement.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chromemanagement.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    customer = 'customer_example' # str | Required. Customer ID prefixed with \"customers/\" or \"customers/my_customer\" to use the customer associated to the account making the request.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    filter = 'filter_example' # str | Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only >= and <= comparators are supported in this filter. Supported filter fields: * complete_time (optional)
    order_by = 'order_by_example' # str | Field used to order results. If omitted, results will be ordered in ascending order of the 'printer' field. Supported order_by fields: * printer * job_count * device_count * user_count (optional)
    page_size = 56 # int | Maximum number of results to return. Maximum and default are 100. (optional)
    page_token = 'page_token_example' # str | Token to specify the page of the response to be returned. (optional)
    printer_org_unit_id = 'printer_org_unit_id_example' # str | The ID of the organizational unit for printers. If specified, only data for printers from the specified organizational unit will be returned. If omitted, data for printers from all organizational units will be returned. (optional)

    try:
        api_response = api_instance.chromemanagement_customers_reports_count_print_jobs_by_printer(customer, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, printer_org_unit_id=printer_org_unit_id)
        print("The response of CustomersApi->chromemanagement_customers_reports_count_print_jobs_by_printer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->chromemanagement_customers_reports_count_print_jobs_by_printer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **str**| Required. Customer ID prefixed with \&quot;customers/\&quot; or \&quot;customers/my_customer\&quot; to use the customer associated to the account making the request. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **filter** | **str**| Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only &gt;&#x3D; and &lt;&#x3D; comparators are supported in this filter. Supported filter fields: * complete_time | [optional] 
 **order_by** | **str**| Field used to order results. If omitted, results will be ordered in ascending order of the &#39;printer&#39; field. Supported order_by fields: * printer * job_count * device_count * user_count | [optional] 
 **page_size** | **int**| Maximum number of results to return. Maximum and default are 100. | [optional] 
 **page_token** | **str**| Token to specify the page of the response to be returned. | [optional] 
 **printer_org_unit_id** | **str**| The ID of the organizational unit for printers. If specified, only data for printers from the specified organizational unit will be returned. If omitted, data for printers from all organizational units will be returned. | [optional] 

### Return type

[**GoogleChromeManagementV1CountPrintJobsByPrinterResponse**](GoogleChromeManagementV1CountPrintJobsByPrinterResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chromemanagement_customers_reports_count_print_jobs_by_user**
> GoogleChromeManagementV1CountPrintJobsByUserResponse chromemanagement_customers_reports_count_print_jobs_by_user(customer, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, printer_org_unit_id=printer_org_unit_id)



Get a summary of printing done by each user.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_chrome_management_v1_count_print_jobs_by_user_response import GoogleChromeManagementV1CountPrintJobsByUserResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chromemanagement.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chromemanagement.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    customer = 'customer_example' # str | Required. Customer ID prefixed with \"customers/\" or \"customers/my_customer\" to use the customer associated to the account making the request.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    filter = 'filter_example' # str | Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only >= and <= comparators are supported in this filter. Supported filter fields: * complete_time (optional)
    order_by = 'order_by_example' # str | Field used to order results. If omitted, results will be ordered in ascending order of the 'user_email' field. Supported order_by fields: * user_email * job_count * printer_count * device_count (optional)
    page_size = 56 # int | Maximum number of results to return. Maximum and default are 100. (optional)
    page_token = 'page_token_example' # str | Token to specify the page of the response to be returned. (optional)
    printer_org_unit_id = 'printer_org_unit_id_example' # str | The ID of the organizational unit for printers. If specified, only print jobs initiated with printers from the specified organizational unit will be counted. If omitted, all print jobs will be counted. (optional)

    try:
        api_response = api_instance.chromemanagement_customers_reports_count_print_jobs_by_user(customer, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, printer_org_unit_id=printer_org_unit_id)
        print("The response of CustomersApi->chromemanagement_customers_reports_count_print_jobs_by_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->chromemanagement_customers_reports_count_print_jobs_by_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **str**| Required. Customer ID prefixed with \&quot;customers/\&quot; or \&quot;customers/my_customer\&quot; to use the customer associated to the account making the request. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **filter** | **str**| Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only &gt;&#x3D; and &lt;&#x3D; comparators are supported in this filter. Supported filter fields: * complete_time | [optional] 
 **order_by** | **str**| Field used to order results. If omitted, results will be ordered in ascending order of the &#39;user_email&#39; field. Supported order_by fields: * user_email * job_count * printer_count * device_count | [optional] 
 **page_size** | **int**| Maximum number of results to return. Maximum and default are 100. | [optional] 
 **page_token** | **str**| Token to specify the page of the response to be returned. | [optional] 
 **printer_org_unit_id** | **str**| The ID of the organizational unit for printers. If specified, only print jobs initiated with printers from the specified organizational unit will be counted. If omitted, all print jobs will be counted. | [optional] 

### Return type

[**GoogleChromeManagementV1CountPrintJobsByUserResponse**](GoogleChromeManagementV1CountPrintJobsByUserResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chromemanagement_customers_reports_enumerate_print_jobs**
> GoogleChromeManagementV1EnumeratePrintJobsResponse chromemanagement_customers_reports_enumerate_print_jobs(customer, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, printer_org_unit_id=printer_org_unit_id)



Get a list of print jobs.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_chrome_management_v1_enumerate_print_jobs_response import GoogleChromeManagementV1EnumeratePrintJobsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chromemanagement.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chromemanagement.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    customer = 'customer_example' # str | Required. Customer ID prefixed with \"customers/\" or \"customers/my_customer\" to use the customer associated to the account making the request.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    filter = 'filter_example' # str | Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only >= and <= comparators are supported for `complete_time`. Note: Only = comparator supported for `user_id` and `printer_id`. Supported filter fields: * complete_time * printer_id * user_id (optional)
    order_by = 'order_by_example' # str | Field used to order results. If not specified, results will be ordered in descending order of the `complete_time` field. Supported order by fields: * title * state * create_time * complete_time * document_page_count * color_mode * duplex_mode * printer * user_email (optional)
    page_size = 56 # int | The number of print jobs in the page from 0 to 100 inclusive, if page_size is not specified or zero, the size will be 50. (optional)
    page_token = 'page_token_example' # str | A page token received from a previous `EnumeratePrintJobs` call. Provide this to retrieve the subsequent page. If omitted, the first page of results will be returned. When paginating, all other parameters provided to `EnumeratePrintJobs` must match the call that provided the page token. (optional)
    printer_org_unit_id = 'printer_org_unit_id_example' # str | The ID of the organizational unit for printers. If specified, only print jobs submitted to printers from the specified organizational unit will be returned. (optional)

    try:
        api_response = api_instance.chromemanagement_customers_reports_enumerate_print_jobs(customer, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, printer_org_unit_id=printer_org_unit_id)
        print("The response of CustomersApi->chromemanagement_customers_reports_enumerate_print_jobs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->chromemanagement_customers_reports_enumerate_print_jobs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **str**| Required. Customer ID prefixed with \&quot;customers/\&quot; or \&quot;customers/my_customer\&quot; to use the customer associated to the account making the request. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **filter** | **str**| Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only &gt;&#x3D; and &lt;&#x3D; comparators are supported for &#x60;complete_time&#x60;. Note: Only &#x3D; comparator supported for &#x60;user_id&#x60; and &#x60;printer_id&#x60;. Supported filter fields: * complete_time * printer_id * user_id | [optional] 
 **order_by** | **str**| Field used to order results. If not specified, results will be ordered in descending order of the &#x60;complete_time&#x60; field. Supported order by fields: * title * state * create_time * complete_time * document_page_count * color_mode * duplex_mode * printer * user_email | [optional] 
 **page_size** | **int**| The number of print jobs in the page from 0 to 100 inclusive, if page_size is not specified or zero, the size will be 50. | [optional] 
 **page_token** | **str**| A page token received from a previous &#x60;EnumeratePrintJobs&#x60; call. Provide this to retrieve the subsequent page. If omitted, the first page of results will be returned. When paginating, all other parameters provided to &#x60;EnumeratePrintJobs&#x60; must match the call that provided the page token. | [optional] 
 **printer_org_unit_id** | **str**| The ID of the organizational unit for printers. If specified, only print jobs submitted to printers from the specified organizational unit will be returned. | [optional] 

### Return type

[**GoogleChromeManagementV1EnumeratePrintJobsResponse**](GoogleChromeManagementV1EnumeratePrintJobsResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chromemanagement_customers_reports_find_installed_app_devices**
> GoogleChromeManagementV1FindInstalledAppDevicesResponse chromemanagement_customers_reports_find_installed_app_devices(customer, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, app_id=app_id, app_type=app_type, filter=filter, order_by=order_by, org_unit_id=org_unit_id, page_size=page_size, page_token=page_token)



Generate report of managed Chrome browser devices that have a specified app installed.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_chrome_management_v1_find_installed_app_devices_response import GoogleChromeManagementV1FindInstalledAppDevicesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chromemanagement.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chromemanagement.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    customer = 'customer_example' # str | Required. Customer id or \"my_customer\" to use the customer associated to the account making the request.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    app_id = 'app_id_example' # str | Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote). (optional)
    app_type = 'app_type_example' # str | Type of the app. (optional)
    filter = 'filter_example' # str | Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date (optional)
    order_by = 'order_by_example' # str | Field used to order results. Supported order by fields: * machine * device_id (optional)
    org_unit_id = 'org_unit_id_example' # str | The ID of the organizational unit. (optional)
    page_size = 56 # int | Maximum number of results to return. Maximum and default are 100. (optional)
    page_token = 'page_token_example' # str | Token to specify the page of the request to be returned. (optional)

    try:
        api_response = api_instance.chromemanagement_customers_reports_find_installed_app_devices(customer, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, app_id=app_id, app_type=app_type, filter=filter, order_by=order_by, org_unit_id=org_unit_id, page_size=page_size, page_token=page_token)
        print("The response of CustomersApi->chromemanagement_customers_reports_find_installed_app_devices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->chromemanagement_customers_reports_find_installed_app_devices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **str**| Required. Customer id or \&quot;my_customer\&quot; to use the customer associated to the account making the request. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **app_id** | **str**| Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote). | [optional] 
 **app_type** | **str**| Type of the app. | [optional] 
 **filter** | **str**| Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date | [optional] 
 **order_by** | **str**| Field used to order results. Supported order by fields: * machine * device_id | [optional] 
 **org_unit_id** | **str**| The ID of the organizational unit. | [optional] 
 **page_size** | **int**| Maximum number of results to return. Maximum and default are 100. | [optional] 
 **page_token** | **str**| Token to specify the page of the request to be returned. | [optional] 

### Return type

[**GoogleChromeManagementV1FindInstalledAppDevicesResponse**](GoogleChromeManagementV1FindInstalledAppDevicesResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chromemanagement_customers_telemetry_devices_list**
> GoogleChromeManagementV1ListTelemetryDevicesResponse chromemanagement_customers_telemetry_devices_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token, read_mask=read_mask)



List all telemetry devices.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_chrome_management_v1_list_telemetry_devices_response import GoogleChromeManagementV1ListTelemetryDevicesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chromemanagement.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chromemanagement.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    parent = 'parent_example' # str | Required. Customer id or \"my_customer\" to use the customer associated to the account making the request.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    filter = 'filter_example' # str | Optional. Only include resources that match the filter. Supported filter fields: - org_unit_id - serial_number - device_id - reports_timestamp The \"reports_timestamp\" filter accepts either the Unix Epoch milliseconds format or the RFC3339 UTC \"Zulu\" format with nanosecond resolution and up to nine fractional digits. Both formats should be surrounded by simple double quotes. Examples: \"2014-10-02T15:01:23Z\", \"2014-10-02T15:01:23.045123456Z\", \"1679283943823\". (optional)
    page_size = 56 # int | Maximum number of results to return. Default value is 100. Maximum value is 1000. (optional)
    page_token = 'page_token_example' # str | Token to specify next page in the list. (optional)
    read_mask = 'read_mask_example' # str | Required. Read mask to specify which fields to return. (optional)

    try:
        api_response = api_instance.chromemanagement_customers_telemetry_devices_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token, read_mask=read_mask)
        print("The response of CustomersApi->chromemanagement_customers_telemetry_devices_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->chromemanagement_customers_telemetry_devices_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. Customer id or \&quot;my_customer\&quot; to use the customer associated to the account making the request. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **filter** | **str**| Optional. Only include resources that match the filter. Supported filter fields: - org_unit_id - serial_number - device_id - reports_timestamp The \&quot;reports_timestamp\&quot; filter accepts either the Unix Epoch milliseconds format or the RFC3339 UTC \&quot;Zulu\&quot; format with nanosecond resolution and up to nine fractional digits. Both formats should be surrounded by simple double quotes. Examples: \&quot;2014-10-02T15:01:23Z\&quot;, \&quot;2014-10-02T15:01:23.045123456Z\&quot;, \&quot;1679283943823\&quot;. | [optional] 
 **page_size** | **int**| Maximum number of results to return. Default value is 100. Maximum value is 1000. | [optional] 
 **page_token** | **str**| Token to specify next page in the list. | [optional] 
 **read_mask** | **str**| Required. Read mask to specify which fields to return. | [optional] 

### Return type

[**GoogleChromeManagementV1ListTelemetryDevicesResponse**](GoogleChromeManagementV1ListTelemetryDevicesResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chromemanagement_customers_telemetry_events_list**
> GoogleChromeManagementV1ListTelemetryEventsResponse chromemanagement_customers_telemetry_events_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token, read_mask=read_mask)



List telemetry events.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_chrome_management_v1_list_telemetry_events_response import GoogleChromeManagementV1ListTelemetryEventsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chromemanagement.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chromemanagement.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    parent = 'parent_example' # str | Required. Customer id or \"my_customer\" to use the customer associated to the account making the request.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    filter = 'filter_example' # str | Optional. Only include resources that match the filter. Although this parameter is currently optional, this parameter will be required- please specify at least 1 event type. Supported filter fields: - device_id - user_id - device_org_unit_id - user_org_unit_id - timestamp - event_type The \"timestamp\" filter accepts either the Unix Epoch milliseconds format or the RFC3339 UTC \"Zulu\" format with nanosecond resolution and up to nine fractional digits. Both formats should be surrounded by simple double quotes. Examples: \"2014-10-02T15:01:23Z\", \"2014-10-02T15:01:23.045123456Z\", \"1679283943823\". (optional)
    page_size = 56 # int | Optional. Maximum number of results to return. Default value is 100. Maximum value is 1000. (optional)
    page_token = 'page_token_example' # str | Optional. Token to specify next page in the list. (optional)
    read_mask = 'read_mask_example' # str | Required. Read mask to specify which fields to return. Although currently required, this field will become optional, while the filter parameter with an event type will be come required. (optional)

    try:
        api_response = api_instance.chromemanagement_customers_telemetry_events_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token, read_mask=read_mask)
        print("The response of CustomersApi->chromemanagement_customers_telemetry_events_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->chromemanagement_customers_telemetry_events_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. Customer id or \&quot;my_customer\&quot; to use the customer associated to the account making the request. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **filter** | **str**| Optional. Only include resources that match the filter. Although this parameter is currently optional, this parameter will be required- please specify at least 1 event type. Supported filter fields: - device_id - user_id - device_org_unit_id - user_org_unit_id - timestamp - event_type The \&quot;timestamp\&quot; filter accepts either the Unix Epoch milliseconds format or the RFC3339 UTC \&quot;Zulu\&quot; format with nanosecond resolution and up to nine fractional digits. Both formats should be surrounded by simple double quotes. Examples: \&quot;2014-10-02T15:01:23Z\&quot;, \&quot;2014-10-02T15:01:23.045123456Z\&quot;, \&quot;1679283943823\&quot;. | [optional] 
 **page_size** | **int**| Optional. Maximum number of results to return. Default value is 100. Maximum value is 1000. | [optional] 
 **page_token** | **str**| Optional. Token to specify next page in the list. | [optional] 
 **read_mask** | **str**| Required. Read mask to specify which fields to return. Although currently required, this field will become optional, while the filter parameter with an event type will be come required. | [optional] 

### Return type

[**GoogleChromeManagementV1ListTelemetryEventsResponse**](GoogleChromeManagementV1ListTelemetryEventsResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chromemanagement_customers_telemetry_notification_configs_create**
> GoogleChromeManagementV1TelemetryNotificationConfig chromemanagement_customers_telemetry_notification_configs_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_chrome_management_v1_telemetry_notification_config=google_chrome_management_v1_telemetry_notification_config)



Create a telemetry notification config.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_chrome_management_v1_telemetry_notification_config import GoogleChromeManagementV1TelemetryNotificationConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chromemanagement.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chromemanagement.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    parent = 'parent_example' # str | Required. The parent resource where this notification config will be created. Format: `customers/{customer}`
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    google_chrome_management_v1_telemetry_notification_config = openapi_client.GoogleChromeManagementV1TelemetryNotificationConfig() # GoogleChromeManagementV1TelemetryNotificationConfig |  (optional)

    try:
        api_response = api_instance.chromemanagement_customers_telemetry_notification_configs_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_chrome_management_v1_telemetry_notification_config=google_chrome_management_v1_telemetry_notification_config)
        print("The response of CustomersApi->chromemanagement_customers_telemetry_notification_configs_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->chromemanagement_customers_telemetry_notification_configs_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent resource where this notification config will be created. Format: &#x60;customers/{customer}&#x60; | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **google_chrome_management_v1_telemetry_notification_config** | [**GoogleChromeManagementV1TelemetryNotificationConfig**](GoogleChromeManagementV1TelemetryNotificationConfig.md)|  | [optional] 

### Return type

[**GoogleChromeManagementV1TelemetryNotificationConfig**](GoogleChromeManagementV1TelemetryNotificationConfig.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chromemanagement_customers_telemetry_notification_configs_delete**
> object chromemanagement_customers_telemetry_notification_configs_delete(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Delete a telemetry notification config.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chromemanagement.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chromemanagement.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    name = 'name_example' # str | Required. The name of the notification config to delete. Format: `customers/{customer}/telemetry/notificationConfigs/{notification_config}`
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)

    try:
        api_response = api_instance.chromemanagement_customers_telemetry_notification_configs_delete(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of CustomersApi->chromemanagement_customers_telemetry_notification_configs_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->chromemanagement_customers_telemetry_notification_configs_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The name of the notification config to delete. Format: &#x60;customers/{customer}/telemetry/notificationConfigs/{notification_config}&#x60; | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 

### Return type

**object**

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chromemanagement_customers_telemetry_notification_configs_list**
> GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse chromemanagement_customers_telemetry_notification_configs_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



List all telemetry notification configs.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_chrome_management_v1_list_telemetry_notification_configs_response import GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chromemanagement.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chromemanagement.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    parent = 'parent_example' # str | Required. The parent which owns the notification configs.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    page_size = 56 # int | The maximum number of notification configs to return. The service may return fewer than this value. If unspecified, at most 100 notification configs will be returned. The maximum value is 100; values above 100 will be coerced to 100. (optional)
    page_token = 'page_token_example' # str | A page token, received from a previous `ListTelemetryNotificationConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTelemetryNotificationConfigs` must match the call that provided the page token. (optional)

    try:
        api_response = api_instance.chromemanagement_customers_telemetry_notification_configs_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of CustomersApi->chromemanagement_customers_telemetry_notification_configs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->chromemanagement_customers_telemetry_notification_configs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent which owns the notification configs. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **page_size** | **int**| The maximum number of notification configs to return. The service may return fewer than this value. If unspecified, at most 100 notification configs will be returned. The maximum value is 100; values above 100 will be coerced to 100. | [optional] 
 **page_token** | **str**| A page token, received from a previous &#x60;ListTelemetryNotificationConfigs&#x60; call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to &#x60;ListTelemetryNotificationConfigs&#x60; must match the call that provided the page token. | [optional] 

### Return type

[**GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse**](GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chromemanagement_customers_telemetry_users_get**
> GoogleChromeManagementV1TelemetryUser chromemanagement_customers_telemetry_users_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, read_mask=read_mask)



Get telemetry user.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_chrome_management_v1_telemetry_user import GoogleChromeManagementV1TelemetryUser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chromemanagement.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chromemanagement.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    name = 'name_example' # str | Required. Name of the `TelemetryUser` to return.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    read_mask = 'read_mask_example' # str | Read mask to specify which fields to return. (optional)

    try:
        api_response = api_instance.chromemanagement_customers_telemetry_users_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, read_mask=read_mask)
        print("The response of CustomersApi->chromemanagement_customers_telemetry_users_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->chromemanagement_customers_telemetry_users_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. Name of the &#x60;TelemetryUser&#x60; to return. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **read_mask** | **str**| Read mask to specify which fields to return. | [optional] 

### Return type

[**GoogleChromeManagementV1TelemetryUser**](GoogleChromeManagementV1TelemetryUser.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chromemanagement_customers_telemetry_users_list**
> GoogleChromeManagementV1ListTelemetryUsersResponse chromemanagement_customers_telemetry_users_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token, read_mask=read_mask)



List all telemetry users.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_chrome_management_v1_list_telemetry_users_response import GoogleChromeManagementV1ListTelemetryUsersResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chromemanagement.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chromemanagement.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    parent = 'parent_example' # str | Required. Customer id or \"my_customer\" to use the customer associated to the account making the request.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    filter = 'filter_example' # str | Only include resources that match the filter. Supported filter fields: - user_id - user_org_unit_id  (optional)
    page_size = 56 # int | Maximum number of results to return. Default value is 100. Maximum value is 1000. (optional)
    page_token = 'page_token_example' # str | Token to specify next page in the list. (optional)
    read_mask = 'read_mask_example' # str | Read mask to specify which fields to return. (optional)

    try:
        api_response = api_instance.chromemanagement_customers_telemetry_users_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token, read_mask=read_mask)
        print("The response of CustomersApi->chromemanagement_customers_telemetry_users_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->chromemanagement_customers_telemetry_users_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. Customer id or \&quot;my_customer\&quot; to use the customer associated to the account making the request. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **filter** | **str**| Only include resources that match the filter. Supported filter fields: - user_id - user_org_unit_id  | [optional] 
 **page_size** | **int**| Maximum number of results to return. Default value is 100. Maximum value is 1000. | [optional] 
 **page_token** | **str**| Token to specify next page in the list. | [optional] 
 **read_mask** | **str**| Read mask to specify which fields to return. | [optional] 

### Return type

[**GoogleChromeManagementV1ListTelemetryUsersResponse**](GoogleChromeManagementV1ListTelemetryUsersResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


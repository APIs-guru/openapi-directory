# openapi_client.ChromeosdevicesApi

All URIs are relative to *https://admin.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**directory_chromeosdevices_action**](ChromeosdevicesApi.md#directory_chromeosdevices_action) | **POST** /admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action | 
[**directory_chromeosdevices_get**](ChromeosdevicesApi.md#directory_chromeosdevices_get) | **GET** /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId} | 
[**directory_chromeosdevices_list**](ChromeosdevicesApi.md#directory_chromeosdevices_list) | **GET** /admin/directory/v1/customer/{customerId}/devices/chromeos | 
[**directory_chromeosdevices_move_devices_to_ou**](ChromeosdevicesApi.md#directory_chromeosdevices_move_devices_to_ou) | **POST** /admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu | 
[**directory_chromeosdevices_patch**](ChromeosdevicesApi.md#directory_chromeosdevices_patch) | **PATCH** /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId} | 
[**directory_chromeosdevices_update**](ChromeosdevicesApi.md#directory_chromeosdevices_update) | **PUT** /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId} | 


# **directory_chromeosdevices_action**
> directory_chromeosdevices_action(customer_id, resource_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, chrome_os_device_action=chrome_os_device_action)



Use [BatchChangeChromeOsDeviceStatus](/admin-sdk/directory/reference/rest/v1/customer.devices.chromeos/batchChangeStatus) instead. Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. *Warning:* * Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled. * Lost or stolen devices should use the disable action. * Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.chrome_os_device_action import ChromeOsDeviceAction
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://admin.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://admin.googleapis.com"
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
    api_instance = openapi_client.ChromeosdevicesApi(api_client)
    customer_id = 'customer_id_example' # str | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
    resource_id = 'resource_id_example' # str | The unique ID of the device. The `resourceId`s are returned in the response from the [chromeosdevices.list](/admin-sdk/directory/v1/reference/chromeosdevices/list) method.
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
    chrome_os_device_action = openapi_client.ChromeOsDeviceAction() # ChromeOsDeviceAction |  (optional)

    try:
        api_instance.directory_chromeosdevices_action(customer_id, resource_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, chrome_os_device_action=chrome_os_device_action)
    except Exception as e:
        print("Exception when calling ChromeosdevicesApi->directory_chromeosdevices_action: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**| The unique ID for the customer&#39;s Google Workspace account. As an account administrator, you can also use the &#x60;my_customer&#x60; alias to represent your account&#39;s &#x60;customerId&#x60;. The &#x60;customerId&#x60; is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users). | 
 **resource_id** | **str**| The unique ID of the device. The &#x60;resourceId&#x60;s are returned in the response from the [chromeosdevices.list](/admin-sdk/directory/v1/reference/chromeosdevices/list) method. | 
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
 **chrome_os_device_action** | [**ChromeOsDeviceAction**](ChromeOsDeviceAction.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **directory_chromeosdevices_get**
> ChromeOsDevice directory_chromeosdevices_get(customer_id, device_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, projection=projection)



Retrieves a Chrome OS device's properties.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.chrome_os_device import ChromeOsDevice
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://admin.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://admin.googleapis.com"
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
    api_instance = openapi_client.ChromeosdevicesApi(api_client)
    customer_id = 'customer_id_example' # str | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
    device_id = 'device_id_example' # str | The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](/admin-sdk/directory/v1/reference/chromeosdevices/list) method.
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
    projection = 'projection_example' # str | Determines whether the response contains the full list of properties or only a subset. (optional)

    try:
        api_response = api_instance.directory_chromeosdevices_get(customer_id, device_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, projection=projection)
        print("The response of ChromeosdevicesApi->directory_chromeosdevices_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChromeosdevicesApi->directory_chromeosdevices_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**| The unique ID for the customer&#39;s Google Workspace account. As an account administrator, you can also use the &#x60;my_customer&#x60; alias to represent your account&#39;s &#x60;customerId&#x60;. The &#x60;customerId&#x60; is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users). | 
 **device_id** | **str**| The unique ID of the device. The &#x60;deviceId&#x60;s are returned in the response from the [chromeosdevices.list](/admin-sdk/directory/v1/reference/chromeosdevices/list) method. | 
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
 **projection** | **str**| Determines whether the response contains the full list of properties or only a subset. | [optional] 

### Return type

[**ChromeOsDevice**](ChromeOsDevice.md)

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

# **directory_chromeosdevices_list**
> ChromeOsDevices directory_chromeosdevices_list(customer_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, include_child_orgunits=include_child_orgunits, max_results=max_results, order_by=order_by, org_unit_path=org_unit_path, page_token=page_token, projection=projection, query=query, sort_order=sort_order)



Retrieves a paginated list of Chrome OS devices within an account.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.chrome_os_devices import ChromeOsDevices
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://admin.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://admin.googleapis.com"
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
    api_instance = openapi_client.ChromeosdevicesApi(api_client)
    customer_id = 'customer_id_example' # str | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
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
    include_child_orgunits = True # bool | Return devices from all child orgunits, as well as the specified org unit. If this is set to true, 'orgUnitPath' must be provided. (optional)
    max_results = 56 # int | Maximum number of results to return. (optional)
    order_by = 'order_by_example' # str | Device property to use for sorting results. (optional)
    org_unit_path = 'org_unit_path_example' # str | The full path of the organizational unit (minus the leading `/`) or its unique ID. (optional)
    page_token = 'page_token_example' # str | The `pageToken` query parameter is used to request the next page of query results. The follow-on request's `pageToken` query parameter is the `nextPageToken` from your previous response. (optional)
    projection = 'projection_example' # str | Restrict information returned to a set of selected fields. (optional)
    query = 'query_example' # str | Search string in the format given at https://developers.google.com/admin-sdk/directory/v1/list-query-operators (optional)
    sort_order = 'sort_order_example' # str | Whether to return results in ascending or descending order. Must be used with the `orderBy` parameter. (optional)

    try:
        api_response = api_instance.directory_chromeosdevices_list(customer_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, include_child_orgunits=include_child_orgunits, max_results=max_results, order_by=order_by, org_unit_path=org_unit_path, page_token=page_token, projection=projection, query=query, sort_order=sort_order)
        print("The response of ChromeosdevicesApi->directory_chromeosdevices_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChromeosdevicesApi->directory_chromeosdevices_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**| The unique ID for the customer&#39;s Google Workspace account. As an account administrator, you can also use the &#x60;my_customer&#x60; alias to represent your account&#39;s &#x60;customerId&#x60;. The &#x60;customerId&#x60; is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users). | 
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
 **include_child_orgunits** | **bool**| Return devices from all child orgunits, as well as the specified org unit. If this is set to true, &#39;orgUnitPath&#39; must be provided. | [optional] 
 **max_results** | **int**| Maximum number of results to return. | [optional] 
 **order_by** | **str**| Device property to use for sorting results. | [optional] 
 **org_unit_path** | **str**| The full path of the organizational unit (minus the leading &#x60;/&#x60;) or its unique ID. | [optional] 
 **page_token** | **str**| The &#x60;pageToken&#x60; query parameter is used to request the next page of query results. The follow-on request&#39;s &#x60;pageToken&#x60; query parameter is the &#x60;nextPageToken&#x60; from your previous response. | [optional] 
 **projection** | **str**| Restrict information returned to a set of selected fields. | [optional] 
 **query** | **str**| Search string in the format given at https://developers.google.com/admin-sdk/directory/v1/list-query-operators | [optional] 
 **sort_order** | **str**| Whether to return results in ascending or descending order. Must be used with the &#x60;orderBy&#x60; parameter. | [optional] 

### Return type

[**ChromeOsDevices**](ChromeOsDevices.md)

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

# **directory_chromeosdevices_move_devices_to_ou**
> directory_chromeosdevices_move_devices_to_ou(customer_id, org_unit_path, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, chrome_os_move_devices_to_ou=chrome_os_move_devices_to_ou)



Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.chrome_os_move_devices_to_ou import ChromeOsMoveDevicesToOu
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://admin.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://admin.googleapis.com"
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
    api_instance = openapi_client.ChromeosdevicesApi(api_client)
    customer_id = 'customer_id_example' # str | Immutable. ID of the Google Workspace account
    org_unit_path = 'org_unit_path_example' # str | Full path of the target organizational unit or its ID
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
    chrome_os_move_devices_to_ou = openapi_client.ChromeOsMoveDevicesToOu() # ChromeOsMoveDevicesToOu |  (optional)

    try:
        api_instance.directory_chromeosdevices_move_devices_to_ou(customer_id, org_unit_path, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, chrome_os_move_devices_to_ou=chrome_os_move_devices_to_ou)
    except Exception as e:
        print("Exception when calling ChromeosdevicesApi->directory_chromeosdevices_move_devices_to_ou: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**| Immutable. ID of the Google Workspace account | 
 **org_unit_path** | **str**| Full path of the target organizational unit or its ID | 
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
 **chrome_os_move_devices_to_ou** | [**ChromeOsMoveDevicesToOu**](ChromeOsMoveDevicesToOu.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **directory_chromeosdevices_patch**
> ChromeOsDevice directory_chromeosdevices_patch(customer_id, device_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, projection=projection, chrome_os_device=chrome_os_device)



Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.chrome_os_device import ChromeOsDevice
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://admin.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://admin.googleapis.com"
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
    api_instance = openapi_client.ChromeosdevicesApi(api_client)
    customer_id = 'customer_id_example' # str | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
    device_id = 'device_id_example' # str | The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](/admin-sdk/v1/reference/chromeosdevices/list) method.
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
    projection = 'projection_example' # str | Restrict information returned to a set of selected fields. (optional)
    chrome_os_device = openapi_client.ChromeOsDevice() # ChromeOsDevice |  (optional)

    try:
        api_response = api_instance.directory_chromeosdevices_patch(customer_id, device_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, projection=projection, chrome_os_device=chrome_os_device)
        print("The response of ChromeosdevicesApi->directory_chromeosdevices_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChromeosdevicesApi->directory_chromeosdevices_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**| The unique ID for the customer&#39;s Google Workspace account. As an account administrator, you can also use the &#x60;my_customer&#x60; alias to represent your account&#39;s &#x60;customerId&#x60;. The &#x60;customerId&#x60; is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users). | 
 **device_id** | **str**| The unique ID of the device. The &#x60;deviceId&#x60;s are returned in the response from the [chromeosdevices.list](/admin-sdk/v1/reference/chromeosdevices/list) method. | 
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
 **projection** | **str**| Restrict information returned to a set of selected fields. | [optional] 
 **chrome_os_device** | [**ChromeOsDevice**](ChromeOsDevice.md)|  | [optional] 

### Return type

[**ChromeOsDevice**](ChromeOsDevice.md)

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

# **directory_chromeosdevices_update**
> ChromeOsDevice directory_chromeosdevices_update(customer_id, device_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, projection=projection, chrome_os_device=chrome_os_device)



Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.chrome_os_device import ChromeOsDevice
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://admin.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://admin.googleapis.com"
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
    api_instance = openapi_client.ChromeosdevicesApi(api_client)
    customer_id = 'customer_id_example' # str | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
    device_id = 'device_id_example' # str | The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](/admin-sdk/v1/reference/chromeosdevices/list) method.
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
    projection = 'projection_example' # str | Restrict information returned to a set of selected fields. (optional)
    chrome_os_device = openapi_client.ChromeOsDevice() # ChromeOsDevice |  (optional)

    try:
        api_response = api_instance.directory_chromeosdevices_update(customer_id, device_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, projection=projection, chrome_os_device=chrome_os_device)
        print("The response of ChromeosdevicesApi->directory_chromeosdevices_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChromeosdevicesApi->directory_chromeosdevices_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**| The unique ID for the customer&#39;s Google Workspace account. As an account administrator, you can also use the &#x60;my_customer&#x60; alias to represent your account&#39;s &#x60;customerId&#x60;. The &#x60;customerId&#x60; is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users). | 
 **device_id** | **str**| The unique ID of the device. The &#x60;deviceId&#x60;s are returned in the response from the [chromeosdevices.list](/admin-sdk/v1/reference/chromeosdevices/list) method. | 
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
 **projection** | **str**| Restrict information returned to a set of selected fields. | [optional] 
 **chrome_os_device** | [**ChromeOsDevice**](ChromeOsDevice.md)|  | [optional] 

### Return type

[**ChromeOsDevice**](ChromeOsDevice.md)

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


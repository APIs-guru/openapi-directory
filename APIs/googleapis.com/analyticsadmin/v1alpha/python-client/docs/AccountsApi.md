# openapi_client.AccountsApi

All URIs are relative to *https://analyticsadmin.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyticsadmin_accounts_list**](AccountsApi.md#analyticsadmin_accounts_list) | **GET** /v1alpha/accounts | 
[**analyticsadmin_accounts_provision_account_ticket**](AccountsApi.md#analyticsadmin_accounts_provision_account_ticket) | **POST** /v1alpha/accounts:provisionAccountTicket | 
[**analyticsadmin_accounts_search_change_history_events**](AccountsApi.md#analyticsadmin_accounts_search_change_history_events) | **POST** /v1alpha/{account}:searchChangeHistoryEvents | 


# **analyticsadmin_accounts_list**
> GoogleAnalyticsAdminV1alphaListAccountsResponse analyticsadmin_accounts_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token, show_deleted=show_deleted)



Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: \"trashed\") accounts are excluded by default. Returns an empty list if no relevant accounts are found.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_analytics_admin_v1alpha_list_accounts_response import GoogleAnalyticsAdminV1alphaListAccountsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analyticsadmin.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analyticsadmin.googleapis.com"
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
    api_instance = openapi_client.AccountsApi(api_client)
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
    page_size = 56 # int | The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) (optional)
    page_token = 'page_token_example' # str | A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token. (optional)
    show_deleted = True # bool | Whether to include soft-deleted (ie: \"trashed\") Accounts in the results. Accounts can be inspected to determine whether they are deleted or not. (optional)

    try:
        api_response = api_instance.analyticsadmin_accounts_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token, show_deleted=show_deleted)
        print("The response of AccountsApi->analyticsadmin_accounts_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->analyticsadmin_accounts_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
 **page_size** | **int**| The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) | [optional] 
 **page_token** | **str**| A page token, received from a previous &#x60;ListAccounts&#x60; call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to &#x60;ListAccounts&#x60; must match the call that provided the page token. | [optional] 
 **show_deleted** | **bool**| Whether to include soft-deleted (ie: \&quot;trashed\&quot;) Accounts in the results. Accounts can be inspected to determine whether they are deleted or not. | [optional] 

### Return type

[**GoogleAnalyticsAdminV1alphaListAccountsResponse**](GoogleAnalyticsAdminV1alphaListAccountsResponse.md)

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

# **analyticsadmin_accounts_provision_account_ticket**
> GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse analyticsadmin_accounts_provision_account_ticket(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_analytics_admin_v1alpha_provision_account_ticket_request=google_analytics_admin_v1alpha_provision_account_ticket_request)



Requests a ticket for creating an account.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_analytics_admin_v1alpha_provision_account_ticket_request import GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest
from openapi_client.models.google_analytics_admin_v1alpha_provision_account_ticket_response import GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analyticsadmin.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analyticsadmin.googleapis.com"
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
    api_instance = openapi_client.AccountsApi(api_client)
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
    google_analytics_admin_v1alpha_provision_account_ticket_request = openapi_client.GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest() # GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest |  (optional)

    try:
        api_response = api_instance.analyticsadmin_accounts_provision_account_ticket(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_analytics_admin_v1alpha_provision_account_ticket_request=google_analytics_admin_v1alpha_provision_account_ticket_request)
        print("The response of AccountsApi->analyticsadmin_accounts_provision_account_ticket:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->analyticsadmin_accounts_provision_account_ticket: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
 **google_analytics_admin_v1alpha_provision_account_ticket_request** | [**GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest**](GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest.md)|  | [optional] 

### Return type

[**GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse**](GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse.md)

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

# **analyticsadmin_accounts_search_change_history_events**
> GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse analyticsadmin_accounts_search_change_history_events(account, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_analytics_admin_v1alpha_search_change_history_events_request=google_analytics_admin_v1alpha_search_change_history_events_request)



Searches through all changes to an account or its children given the specified set of filters.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_analytics_admin_v1alpha_search_change_history_events_request import GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest
from openapi_client.models.google_analytics_admin_v1alpha_search_change_history_events_response import GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analyticsadmin.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analyticsadmin.googleapis.com"
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
    api_instance = openapi_client.AccountsApi(api_client)
    account = 'account_example' # str | Required. The account resource for which to return change history resources. Format: accounts/{account} Example: \"accounts/100\"
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
    google_analytics_admin_v1alpha_search_change_history_events_request = openapi_client.GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest() # GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest |  (optional)

    try:
        api_response = api_instance.analyticsadmin_accounts_search_change_history_events(account, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_analytics_admin_v1alpha_search_change_history_events_request=google_analytics_admin_v1alpha_search_change_history_events_request)
        print("The response of AccountsApi->analyticsadmin_accounts_search_change_history_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->analyticsadmin_accounts_search_change_history_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | **str**| Required. The account resource for which to return change history resources. Format: accounts/{account} Example: \&quot;accounts/100\&quot; | 
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
 **google_analytics_admin_v1alpha_search_change_history_events_request** | [**GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest**](GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest.md)|  | [optional] 

### Return type

[**GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse**](GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse.md)

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


# openapi_client.ActivitiesApi

All URIs are relative to *https://admin.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reports_activities_list**](ActivitiesApi.md#reports_activities_list) | **GET** /admin/reports/v1/activity/users/{userKey}/applications/{applicationName} | 
[**reports_activities_watch**](ActivitiesApi.md#reports_activities_watch) | **POST** /admin/reports/v1/activity/users/{userKey}/applications/{applicationName}/watch | 


# **reports_activities_list**
> Activities reports_activities_list(user_key, application_name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, actor_ip_address=actor_ip_address, customer_id=customer_id, end_time=end_time, event_name=event_name, filters=filters, group_id_filter=group_id_filter, max_results=max_results, org_unit_id=org_unit_id, page_token=page_token, start_time=start_time)



Retrieves a list of activities for a specific customer's account and application such as the Admin console application or the Google Drive application. For more information, see the guides for administrator and Google Drive activity reports. For more information about the activity report's parameters, see the activity parameters reference guides. 

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.activities import Activities
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
    api_instance = openapi_client.ActivitiesApi(api_client)
    user_key = 'user_key_example' # str | Represents the profile ID or the user email for which the data should be filtered. Can be `all` for all information, or `userKey` for a user's unique Google Workspace profile ID or their primary email address. Must not be a deleted user. For a deleted user, call `users.list` in Directory API with `showDeleted=true`, then use the returned `ID` as the `userKey`.
    application_name = 'application_name_example' # str | Application name for which the events are to be retrieved.
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
    actor_ip_address = 'actor_ip_address_example' # str | The Internet Protocol (IP) Address of host where the event was performed. This is an additional way to filter a report's summary using the IP address of the user whose activity is being reported. This IP address may or may not reflect the user's physical location. For example, the IP address can be the user's proxy server's address or a virtual private network (VPN) address. This parameter supports both IPv4 and IPv6 address versions. (optional)
    customer_id = 'customer_id_example' # str | The unique ID of the customer to retrieve data for. (optional)
    end_time = 'end_time_example' # str | Sets the end of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The default value is the approximate time of the API request. An API report has three basic time concepts: - *Date of the API's request for a report*: When the API created and retrieved the report. - *Report's start time*: The beginning of the timespan shown in the report. The `startTime` must be before the `endTime` (if specified) and the current time when the request is made, or the API returns an error. - *Report's end time*: The end of the timespan shown in the report. For example, the timespan of events summarized in a report can start in April and end in May. The report itself can be requested in August. If the `endTime` is not specified, the report returns all activities from the `startTime` until the current time or the most recent 180 days if the `startTime` is more than 180 days in the past. (optional)
    event_name = 'event_name_example' # str | The name of the event being queried by the API. Each `eventName` is related to a specific Google Workspace service or feature which the API organizes into types of events. An example is the Google Calendar events in the Admin console application's reports. The Calendar Settings `type` structure has all of the Calendar `eventName` activities reported by the API. When an administrator changes a Calendar setting, the API reports this activity in the Calendar Settings `type` and `eventName` parameters. For more information about `eventName` query strings and parameters, see the list of event names for various applications above in `applicationName`. (optional)
    filters = 'filters_example' # str | The `filters` query string is a comma-separated list composed of event parameters manipulated by relational operators. Event parameters are in the form `{parameter1 name}{relational operator}{parameter1 value},{parameter2 name}{relational operator}{parameter2 value},...` These event parameters are associated with a specific `eventName`. An empty report is returned if the request's parameter doesn't belong to the `eventName`. For more information about the available `eventName` fields for each application and their associated parameters, go to the [ApplicationName](#applicationname) table, then click through to the Activity Events page in the Appendix for the application you want. In the following Drive activity examples, the returned list consists of all `edit` events where the `doc_id` parameter value matches the conditions defined by the relational operator. In the first example, the request returns all edited documents with a `doc_id` value equal to `12345`. In the second example, the report returns any edited documents where the `doc_id` value is not equal to `98765`. The `<>` operator is URL-encoded in the request's query string (`%3C%3E`): ``` GET...&eventName=edit&filters=doc_id==12345 GET...&eventName=edit&filters=doc_id%3C%3E98765 ``` A `filters` query supports these relational operators: * `==`—'equal to'. * `<>`—'not equal to'. Must be URL-encoded (%3C%3E). * `<`—'less than'. Must be URL-encoded (%3C). * `<=`—'less than or equal to'. Must be URL-encoded (%3C=). * `>`—'greater than'. Must be URL-encoded (%3E). * `>=`—'greater than or equal to'. Must be URL-encoded (%3E=). **Note:** The API doesn't accept multiple values of the same parameter. If a parameter is supplied more than once in the API request, the API only accepts the last value of that parameter. In addition, if an invalid parameter is supplied in the API request, the API ignores that parameter and returns the response corresponding to the remaining valid parameters. If no parameters are requested, all parameters are returned. (optional)
    group_id_filter = 'group_id_filter_example' # str | Comma separated group ids (obfuscated) on which user activities are filtered, i.e. the response will contain activities for only those users that are a part of at least one of the group ids mentioned here. Format: \"id:abc123,id:xyz456\" (optional)
    max_results = 56 # int | Determines how many activity records are shown on each response page. For example, if the request sets `maxResults=1` and the report has two activities, the report has two pages. The response's `nextPageToken` property has the token to the second page. The `maxResults` query string is optional in the request. The default value is 1000. (optional)
    org_unit_id = 'org_unit_id_example' # str | ID of the organizational unit to report on. Activity records will be shown only for users who belong to the specified organizational unit. Data before Dec 17, 2018 doesn't appear in the filtered results. (optional)
    page_token = 'page_token_example' # str | The token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. In your follow-on request getting the next page of the report, enter the `nextPageToken` value in the `pageToken` query string. (optional)
    start_time = 'start_time_example' # str | Sets the beginning of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The report returns all activities from `startTime` until `endTime`. The `startTime` must be before the `endTime` (if specified) and the current time when the request is made, or the API returns an error. (optional)

    try:
        api_response = api_instance.reports_activities_list(user_key, application_name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, actor_ip_address=actor_ip_address, customer_id=customer_id, end_time=end_time, event_name=event_name, filters=filters, group_id_filter=group_id_filter, max_results=max_results, org_unit_id=org_unit_id, page_token=page_token, start_time=start_time)
        print("The response of ActivitiesApi->reports_activities_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActivitiesApi->reports_activities_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_key** | **str**| Represents the profile ID or the user email for which the data should be filtered. Can be &#x60;all&#x60; for all information, or &#x60;userKey&#x60; for a user&#39;s unique Google Workspace profile ID or their primary email address. Must not be a deleted user. For a deleted user, call &#x60;users.list&#x60; in Directory API with &#x60;showDeleted&#x3D;true&#x60;, then use the returned &#x60;ID&#x60; as the &#x60;userKey&#x60;. | 
 **application_name** | **str**| Application name for which the events are to be retrieved. | 
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
 **actor_ip_address** | **str**| The Internet Protocol (IP) Address of host where the event was performed. This is an additional way to filter a report&#39;s summary using the IP address of the user whose activity is being reported. This IP address may or may not reflect the user&#39;s physical location. For example, the IP address can be the user&#39;s proxy server&#39;s address or a virtual private network (VPN) address. This parameter supports both IPv4 and IPv6 address versions. | [optional] 
 **customer_id** | **str**| The unique ID of the customer to retrieve data for. | [optional] 
 **end_time** | **str**| Sets the end of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The default value is the approximate time of the API request. An API report has three basic time concepts: - *Date of the API&#39;s request for a report*: When the API created and retrieved the report. - *Report&#39;s start time*: The beginning of the timespan shown in the report. The &#x60;startTime&#x60; must be before the &#x60;endTime&#x60; (if specified) and the current time when the request is made, or the API returns an error. - *Report&#39;s end time*: The end of the timespan shown in the report. For example, the timespan of events summarized in a report can start in April and end in May. The report itself can be requested in August. If the &#x60;endTime&#x60; is not specified, the report returns all activities from the &#x60;startTime&#x60; until the current time or the most recent 180 days if the &#x60;startTime&#x60; is more than 180 days in the past. | [optional] 
 **event_name** | **str**| The name of the event being queried by the API. Each &#x60;eventName&#x60; is related to a specific Google Workspace service or feature which the API organizes into types of events. An example is the Google Calendar events in the Admin console application&#39;s reports. The Calendar Settings &#x60;type&#x60; structure has all of the Calendar &#x60;eventName&#x60; activities reported by the API. When an administrator changes a Calendar setting, the API reports this activity in the Calendar Settings &#x60;type&#x60; and &#x60;eventName&#x60; parameters. For more information about &#x60;eventName&#x60; query strings and parameters, see the list of event names for various applications above in &#x60;applicationName&#x60;. | [optional] 
 **filters** | **str**| The &#x60;filters&#x60; query string is a comma-separated list composed of event parameters manipulated by relational operators. Event parameters are in the form &#x60;{parameter1 name}{relational operator}{parameter1 value},{parameter2 name}{relational operator}{parameter2 value},...&#x60; These event parameters are associated with a specific &#x60;eventName&#x60;. An empty report is returned if the request&#39;s parameter doesn&#39;t belong to the &#x60;eventName&#x60;. For more information about the available &#x60;eventName&#x60; fields for each application and their associated parameters, go to the [ApplicationName](#applicationname) table, then click through to the Activity Events page in the Appendix for the application you want. In the following Drive activity examples, the returned list consists of all &#x60;edit&#x60; events where the &#x60;doc_id&#x60; parameter value matches the conditions defined by the relational operator. In the first example, the request returns all edited documents with a &#x60;doc_id&#x60; value equal to &#x60;12345&#x60;. In the second example, the report returns any edited documents where the &#x60;doc_id&#x60; value is not equal to &#x60;98765&#x60;. The &#x60;&lt;&gt;&#x60; operator is URL-encoded in the request&#39;s query string (&#x60;%3C%3E&#x60;): &#x60;&#x60;&#x60; GET...&amp;eventName&#x3D;edit&amp;filters&#x3D;doc_id&#x3D;&#x3D;12345 GET...&amp;eventName&#x3D;edit&amp;filters&#x3D;doc_id%3C%3E98765 &#x60;&#x60;&#x60; A &#x60;filters&#x60; query supports these relational operators: * &#x60;&#x3D;&#x3D;&#x60;—&#39;equal to&#39;. * &#x60;&lt;&gt;&#x60;—&#39;not equal to&#39;. Must be URL-encoded (%3C%3E). * &#x60;&lt;&#x60;—&#39;less than&#39;. Must be URL-encoded (%3C). * &#x60;&lt;&#x3D;&#x60;—&#39;less than or equal to&#39;. Must be URL-encoded (%3C&#x3D;). * &#x60;&gt;&#x60;—&#39;greater than&#39;. Must be URL-encoded (%3E). * &#x60;&gt;&#x3D;&#x60;—&#39;greater than or equal to&#39;. Must be URL-encoded (%3E&#x3D;). **Note:** The API doesn&#39;t accept multiple values of the same parameter. If a parameter is supplied more than once in the API request, the API only accepts the last value of that parameter. In addition, if an invalid parameter is supplied in the API request, the API ignores that parameter and returns the response corresponding to the remaining valid parameters. If no parameters are requested, all parameters are returned. | [optional] 
 **group_id_filter** | **str**| Comma separated group ids (obfuscated) on which user activities are filtered, i.e. the response will contain activities for only those users that are a part of at least one of the group ids mentioned here. Format: \&quot;id:abc123,id:xyz456\&quot; | [optional] 
 **max_results** | **int**| Determines how many activity records are shown on each response page. For example, if the request sets &#x60;maxResults&#x3D;1&#x60; and the report has two activities, the report has two pages. The response&#39;s &#x60;nextPageToken&#x60; property has the token to the second page. The &#x60;maxResults&#x60; query string is optional in the request. The default value is 1000. | [optional] 
 **org_unit_id** | **str**| ID of the organizational unit to report on. Activity records will be shown only for users who belong to the specified organizational unit. Data before Dec 17, 2018 doesn&#39;t appear in the filtered results. | [optional] 
 **page_token** | **str**| The token to specify next page. A report with multiple pages has a &#x60;nextPageToken&#x60; property in the response. In your follow-on request getting the next page of the report, enter the &#x60;nextPageToken&#x60; value in the &#x60;pageToken&#x60; query string. | [optional] 
 **start_time** | **str**| Sets the beginning of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The report returns all activities from &#x60;startTime&#x60; until &#x60;endTime&#x60;. The &#x60;startTime&#x60; must be before the &#x60;endTime&#x60; (if specified) and the current time when the request is made, or the API returns an error. | [optional] 

### Return type

[**Activities**](Activities.md)

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

# **reports_activities_watch**
> Channel reports_activities_watch(user_key, application_name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, actor_ip_address=actor_ip_address, customer_id=customer_id, end_time=end_time, event_name=event_name, filters=filters, group_id_filter=group_id_filter, max_results=max_results, org_unit_id=org_unit_id, page_token=page_token, start_time=start_time, channel=channel)



Start receiving notifications for account activities. For more information, see Receiving Push Notifications.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.channel import Channel
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
    api_instance = openapi_client.ActivitiesApi(api_client)
    user_key = 'user_key_example' # str | Represents the profile ID or the user email for which the data should be filtered. Can be `all` for all information, or `userKey` for a user's unique Google Workspace profile ID or their primary email address. Must not be a deleted user. For a deleted user, call `users.list` in Directory API with `showDeleted=true`, then use the returned `ID` as the `userKey`.
    application_name = 'application_name_example' # str | Application name for which the events are to be retrieved.
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
    actor_ip_address = 'actor_ip_address_example' # str | The Internet Protocol (IP) Address of host where the event was performed. This is an additional way to filter a report's summary using the IP address of the user whose activity is being reported. This IP address may or may not reflect the user's physical location. For example, the IP address can be the user's proxy server's address or a virtual private network (VPN) address. This parameter supports both IPv4 and IPv6 address versions. (optional)
    customer_id = 'customer_id_example' # str | The unique ID of the customer to retrieve data for. (optional)
    end_time = 'end_time_example' # str | Sets the end of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The default value is the approximate time of the API request. An API report has three basic time concepts: - *Date of the API's request for a report*: When the API created and retrieved the report. - *Report's start time*: The beginning of the timespan shown in the report. The `startTime` must be before the `endTime` (if specified) and the current time when the request is made, or the API returns an error. - *Report's end time*: The end of the timespan shown in the report. For example, the timespan of events summarized in a report can start in April and end in May. The report itself can be requested in August. If the `endTime` is not specified, the report returns all activities from the `startTime` until the current time or the most recent 180 days if the `startTime` is more than 180 days in the past. (optional)
    event_name = 'event_name_example' # str | The name of the event being queried by the API. Each `eventName` is related to a specific Google Workspace service or feature which the API organizes into types of events. An example is the Google Calendar events in the Admin console application's reports. The Calendar Settings `type` structure has all of the Calendar `eventName` activities reported by the API. When an administrator changes a Calendar setting, the API reports this activity in the Calendar Settings `type` and `eventName` parameters. For more information about `eventName` query strings and parameters, see the list of event names for various applications above in `applicationName`. (optional)
    filters = 'filters_example' # str | The `filters` query string is a comma-separated list composed of event parameters manipulated by relational operators. Event parameters are in the form `{parameter1 name}{relational operator}{parameter1 value},{parameter2 name}{relational operator}{parameter2 value},...` These event parameters are associated with a specific `eventName`. An empty report is returned if the request's parameter doesn't belong to the `eventName`. For more information about the available `eventName` fields for each application and their associated parameters, go to the [ApplicationName](#applicationname) table, then click through to the Activity Events page in the Appendix for the application you want. In the following Drive activity examples, the returned list consists of all `edit` events where the `doc_id` parameter value matches the conditions defined by the relational operator. In the first example, the request returns all edited documents with a `doc_id` value equal to `12345`. In the second example, the report returns any edited documents where the `doc_id` value is not equal to `98765`. The `<>` operator is URL-encoded in the request's query string (`%3C%3E`): ``` GET...&eventName=edit&filters=doc_id==12345 GET...&eventName=edit&filters=doc_id%3C%3E98765 ``` A `filters` query supports these relational operators: * `==`—'equal to'. * `<>`—'not equal to'. Must be URL-encoded (%3C%3E). * `<`—'less than'. Must be URL-encoded (%3C). * `<=`—'less than or equal to'. Must be URL-encoded (%3C=). * `>`—'greater than'. Must be URL-encoded (%3E). * `>=`—'greater than or equal to'. Must be URL-encoded (%3E=). **Note:** The API doesn't accept multiple values of the same parameter. If a parameter is supplied more than once in the API request, the API only accepts the last value of that parameter. In addition, if an invalid parameter is supplied in the API request, the API ignores that parameter and returns the response corresponding to the remaining valid parameters. If no parameters are requested, all parameters are returned. (optional)
    group_id_filter = 'group_id_filter_example' # str | Comma separated group ids (obfuscated) on which user activities are filtered, i.e. the response will contain activities for only those users that are a part of at least one of the group ids mentioned here. Format: \"id:abc123,id:xyz456\" (optional)
    max_results = 56 # int | Determines how many activity records are shown on each response page. For example, if the request sets `maxResults=1` and the report has two activities, the report has two pages. The response's `nextPageToken` property has the token to the second page. The `maxResults` query string is optional in the request. The default value is 1000. (optional)
    org_unit_id = 'org_unit_id_example' # str | `Deprecated`. This field is deprecated and is no longer supported. ID of the organizational unit to report on. Activity records will be shown only for users who belong to the specified organizational unit. Data before Dec 17, 2018 doesn't appear in the filtered results. (optional)
    page_token = 'page_token_example' # str | The token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. In your follow-on request getting the next page of the report, enter the `nextPageToken` value in the `pageToken` query string. (optional)
    start_time = 'start_time_example' # str | Sets the beginning of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The report returns all activities from `startTime` until `endTime`. The `startTime` must be before the `endTime` (if specified) and the current time when the request is made, or the API returns an error. (optional)
    channel = openapi_client.Channel() # Channel |  (optional)

    try:
        api_response = api_instance.reports_activities_watch(user_key, application_name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, actor_ip_address=actor_ip_address, customer_id=customer_id, end_time=end_time, event_name=event_name, filters=filters, group_id_filter=group_id_filter, max_results=max_results, org_unit_id=org_unit_id, page_token=page_token, start_time=start_time, channel=channel)
        print("The response of ActivitiesApi->reports_activities_watch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActivitiesApi->reports_activities_watch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_key** | **str**| Represents the profile ID or the user email for which the data should be filtered. Can be &#x60;all&#x60; for all information, or &#x60;userKey&#x60; for a user&#39;s unique Google Workspace profile ID or their primary email address. Must not be a deleted user. For a deleted user, call &#x60;users.list&#x60; in Directory API with &#x60;showDeleted&#x3D;true&#x60;, then use the returned &#x60;ID&#x60; as the &#x60;userKey&#x60;. | 
 **application_name** | **str**| Application name for which the events are to be retrieved. | 
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
 **actor_ip_address** | **str**| The Internet Protocol (IP) Address of host where the event was performed. This is an additional way to filter a report&#39;s summary using the IP address of the user whose activity is being reported. This IP address may or may not reflect the user&#39;s physical location. For example, the IP address can be the user&#39;s proxy server&#39;s address or a virtual private network (VPN) address. This parameter supports both IPv4 and IPv6 address versions. | [optional] 
 **customer_id** | **str**| The unique ID of the customer to retrieve data for. | [optional] 
 **end_time** | **str**| Sets the end of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The default value is the approximate time of the API request. An API report has three basic time concepts: - *Date of the API&#39;s request for a report*: When the API created and retrieved the report. - *Report&#39;s start time*: The beginning of the timespan shown in the report. The &#x60;startTime&#x60; must be before the &#x60;endTime&#x60; (if specified) and the current time when the request is made, or the API returns an error. - *Report&#39;s end time*: The end of the timespan shown in the report. For example, the timespan of events summarized in a report can start in April and end in May. The report itself can be requested in August. If the &#x60;endTime&#x60; is not specified, the report returns all activities from the &#x60;startTime&#x60; until the current time or the most recent 180 days if the &#x60;startTime&#x60; is more than 180 days in the past. | [optional] 
 **event_name** | **str**| The name of the event being queried by the API. Each &#x60;eventName&#x60; is related to a specific Google Workspace service or feature which the API organizes into types of events. An example is the Google Calendar events in the Admin console application&#39;s reports. The Calendar Settings &#x60;type&#x60; structure has all of the Calendar &#x60;eventName&#x60; activities reported by the API. When an administrator changes a Calendar setting, the API reports this activity in the Calendar Settings &#x60;type&#x60; and &#x60;eventName&#x60; parameters. For more information about &#x60;eventName&#x60; query strings and parameters, see the list of event names for various applications above in &#x60;applicationName&#x60;. | [optional] 
 **filters** | **str**| The &#x60;filters&#x60; query string is a comma-separated list composed of event parameters manipulated by relational operators. Event parameters are in the form &#x60;{parameter1 name}{relational operator}{parameter1 value},{parameter2 name}{relational operator}{parameter2 value},...&#x60; These event parameters are associated with a specific &#x60;eventName&#x60;. An empty report is returned if the request&#39;s parameter doesn&#39;t belong to the &#x60;eventName&#x60;. For more information about the available &#x60;eventName&#x60; fields for each application and their associated parameters, go to the [ApplicationName](#applicationname) table, then click through to the Activity Events page in the Appendix for the application you want. In the following Drive activity examples, the returned list consists of all &#x60;edit&#x60; events where the &#x60;doc_id&#x60; parameter value matches the conditions defined by the relational operator. In the first example, the request returns all edited documents with a &#x60;doc_id&#x60; value equal to &#x60;12345&#x60;. In the second example, the report returns any edited documents where the &#x60;doc_id&#x60; value is not equal to &#x60;98765&#x60;. The &#x60;&lt;&gt;&#x60; operator is URL-encoded in the request&#39;s query string (&#x60;%3C%3E&#x60;): &#x60;&#x60;&#x60; GET...&amp;eventName&#x3D;edit&amp;filters&#x3D;doc_id&#x3D;&#x3D;12345 GET...&amp;eventName&#x3D;edit&amp;filters&#x3D;doc_id%3C%3E98765 &#x60;&#x60;&#x60; A &#x60;filters&#x60; query supports these relational operators: * &#x60;&#x3D;&#x3D;&#x60;—&#39;equal to&#39;. * &#x60;&lt;&gt;&#x60;—&#39;not equal to&#39;. Must be URL-encoded (%3C%3E). * &#x60;&lt;&#x60;—&#39;less than&#39;. Must be URL-encoded (%3C). * &#x60;&lt;&#x3D;&#x60;—&#39;less than or equal to&#39;. Must be URL-encoded (%3C&#x3D;). * &#x60;&gt;&#x60;—&#39;greater than&#39;. Must be URL-encoded (%3E). * &#x60;&gt;&#x3D;&#x60;—&#39;greater than or equal to&#39;. Must be URL-encoded (%3E&#x3D;). **Note:** The API doesn&#39;t accept multiple values of the same parameter. If a parameter is supplied more than once in the API request, the API only accepts the last value of that parameter. In addition, if an invalid parameter is supplied in the API request, the API ignores that parameter and returns the response corresponding to the remaining valid parameters. If no parameters are requested, all parameters are returned. | [optional] 
 **group_id_filter** | **str**| Comma separated group ids (obfuscated) on which user activities are filtered, i.e. the response will contain activities for only those users that are a part of at least one of the group ids mentioned here. Format: \&quot;id:abc123,id:xyz456\&quot; | [optional] 
 **max_results** | **int**| Determines how many activity records are shown on each response page. For example, if the request sets &#x60;maxResults&#x3D;1&#x60; and the report has two activities, the report has two pages. The response&#39;s &#x60;nextPageToken&#x60; property has the token to the second page. The &#x60;maxResults&#x60; query string is optional in the request. The default value is 1000. | [optional] 
 **org_unit_id** | **str**| &#x60;Deprecated&#x60;. This field is deprecated and is no longer supported. ID of the organizational unit to report on. Activity records will be shown only for users who belong to the specified organizational unit. Data before Dec 17, 2018 doesn&#39;t appear in the filtered results. | [optional] 
 **page_token** | **str**| The token to specify next page. A report with multiple pages has a &#x60;nextPageToken&#x60; property in the response. In your follow-on request getting the next page of the report, enter the &#x60;nextPageToken&#x60; value in the &#x60;pageToken&#x60; query string. | [optional] 
 **start_time** | **str**| Sets the beginning of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The report returns all activities from &#x60;startTime&#x60; until &#x60;endTime&#x60;. The &#x60;startTime&#x60; must be before the &#x60;endTime&#x60; (if specified) and the current time when the request is made, or the API returns an error. | [optional] 
 **channel** | [**Channel**](Channel.md)|  | [optional] 

### Return type

[**Channel**](Channel.md)

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


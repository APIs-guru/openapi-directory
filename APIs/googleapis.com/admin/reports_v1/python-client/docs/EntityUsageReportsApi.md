# openapi_client.EntityUsageReportsApi

All URIs are relative to *https://admin.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reports_entity_usage_reports_get**](EntityUsageReportsApi.md#reports_entity_usage_reports_get) | **GET** /admin/reports/v1/usage/{entityType}/{entityKey}/dates/{date} | 


# **reports_entity_usage_reports_get**
> UsageReports reports_entity_usage_reports_get(entity_type, entity_key, var_date, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, customer_id=customer_id, filters=filters, max_results=max_results, page_token=page_token, parameters=parameters)



Retrieves a report which is a collection of properties and statistics for entities used by users within the account. For more information, see the Entities Usage Report guide. For more information about the entities report's parameters, see the Entities Usage parameters reference guides.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.usage_reports import UsageReports
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
    api_instance = openapi_client.EntityUsageReportsApi(api_client)
    entity_type = 'entity_type_example' # str | Represents the type of entity for the report.
    entity_key = 'entity_key_example' # str | Represents the key of the object to filter the data with. It is a string which can take the value `all` to get activity events for all users, or any other value for an app-specific entity. For details on how to obtain the `entityKey` for a particular `entityType`, see the Entities Usage parameters reference guides.
    var_date = 'var_date_example' # str | Represents the date the usage occurred, based on UTC-8:00 (Pacific Standard Time). The timestamp is in the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601), `yyyy-mm-dd`.
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
    customer_id = 'customer_id_example' # str | The unique ID of the customer to retrieve data for. (optional)
    filters = 'filters_example' # str | The `filters` query string is a comma-separated list of an application's event parameters where the parameter's value is manipulated by a relational operator. The `filters` query string includes the name of the application whose usage is returned in the report. The application values for the Entities usage report include `accounts`, `docs`, and `gmail`. Filters are in the form `[application name]:parameter name[parameter value],...`. In this example, the `<>` 'not equal to' operator is URL-encoded in the request's query string (%3C%3E): GET https://www.googleapis.com/admin/reports/v1/usage/gplus_communities/all/dates/2017-12-01 ?parameters=gplus:community_name,gplus:num_total_members &filters=gplus:num_total_members%3C%3E0 The relational operators include: - `==` - 'equal to'. - `<>` - 'not equal to'. It is URL-encoded (%3C%3E). - `<` - 'less than'. It is URL-encoded (%3C). - `<=` - 'less than or equal to'. It is URL-encoded (%3C=). - `>` - 'greater than'. It is URL-encoded (%3E). - `>=` - 'greater than or equal to'. It is URL-encoded (%3E=). Filters can only be applied to numeric parameters. (optional)
    max_results = 56 # int | Determines how many activity records are shown on each response page. For example, if the request sets `maxResults=1` and the report has two activities, the report has two pages. The response's `nextPageToken` property has the token to the second page. (optional)
    page_token = 'page_token_example' # str | Token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. In your follow-on request getting the next page of the report, enter the `nextPageToken` value in the `pageToken` query string. (optional)
    parameters = 'parameters_example' # str | The `parameters` query string is a comma-separated list of event parameters that refine a report's results. The parameter is associated with a specific application. The application values for the Entities usage report are only `gplus`. A `parameter` query string is in the CSV form of `[app_name1:param_name1], [app_name2:param_name2]...`. *Note:* The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters. An example of an invalid request parameter is one that does not belong to the application. If no parameters are requested, all parameters are returned.  (optional)

    try:
        api_response = api_instance.reports_entity_usage_reports_get(entity_type, entity_key, var_date, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, customer_id=customer_id, filters=filters, max_results=max_results, page_token=page_token, parameters=parameters)
        print("The response of EntityUsageReportsApi->reports_entity_usage_reports_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EntityUsageReportsApi->reports_entity_usage_reports_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity_type** | **str**| Represents the type of entity for the report. | 
 **entity_key** | **str**| Represents the key of the object to filter the data with. It is a string which can take the value &#x60;all&#x60; to get activity events for all users, or any other value for an app-specific entity. For details on how to obtain the &#x60;entityKey&#x60; for a particular &#x60;entityType&#x60;, see the Entities Usage parameters reference guides. | 
 **var_date** | **str**| Represents the date the usage occurred, based on UTC-8:00 (Pacific Standard Time). The timestamp is in the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601), &#x60;yyyy-mm-dd&#x60;. | 
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
 **customer_id** | **str**| The unique ID of the customer to retrieve data for. | [optional] 
 **filters** | **str**| The &#x60;filters&#x60; query string is a comma-separated list of an application&#39;s event parameters where the parameter&#39;s value is manipulated by a relational operator. The &#x60;filters&#x60; query string includes the name of the application whose usage is returned in the report. The application values for the Entities usage report include &#x60;accounts&#x60;, &#x60;docs&#x60;, and &#x60;gmail&#x60;. Filters are in the form &#x60;[application name]:parameter name[parameter value],...&#x60;. In this example, the &#x60;&lt;&gt;&#x60; &#39;not equal to&#39; operator is URL-encoded in the request&#39;s query string (%3C%3E): GET https://www.googleapis.com/admin/reports/v1/usage/gplus_communities/all/dates/2017-12-01 ?parameters&#x3D;gplus:community_name,gplus:num_total_members &amp;filters&#x3D;gplus:num_total_members%3C%3E0 The relational operators include: - &#x60;&#x3D;&#x3D;&#x60; - &#39;equal to&#39;. - &#x60;&lt;&gt;&#x60; - &#39;not equal to&#39;. It is URL-encoded (%3C%3E). - &#x60;&lt;&#x60; - &#39;less than&#39;. It is URL-encoded (%3C). - &#x60;&lt;&#x3D;&#x60; - &#39;less than or equal to&#39;. It is URL-encoded (%3C&#x3D;). - &#x60;&gt;&#x60; - &#39;greater than&#39;. It is URL-encoded (%3E). - &#x60;&gt;&#x3D;&#x60; - &#39;greater than or equal to&#39;. It is URL-encoded (%3E&#x3D;). Filters can only be applied to numeric parameters. | [optional] 
 **max_results** | **int**| Determines how many activity records are shown on each response page. For example, if the request sets &#x60;maxResults&#x3D;1&#x60; and the report has two activities, the report has two pages. The response&#39;s &#x60;nextPageToken&#x60; property has the token to the second page. | [optional] 
 **page_token** | **str**| Token to specify next page. A report with multiple pages has a &#x60;nextPageToken&#x60; property in the response. In your follow-on request getting the next page of the report, enter the &#x60;nextPageToken&#x60; value in the &#x60;pageToken&#x60; query string. | [optional] 
 **parameters** | **str**| The &#x60;parameters&#x60; query string is a comma-separated list of event parameters that refine a report&#39;s results. The parameter is associated with a specific application. The application values for the Entities usage report are only &#x60;gplus&#x60;. A &#x60;parameter&#x60; query string is in the CSV form of &#x60;[app_name1:param_name1], [app_name2:param_name2]...&#x60;. *Note:* The API doesn&#39;t accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters. An example of an invalid request parameter is one that does not belong to the application. If no parameters are requested, all parameters are returned.  | [optional] 

### Return type

[**UsageReports**](UsageReports.md)

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


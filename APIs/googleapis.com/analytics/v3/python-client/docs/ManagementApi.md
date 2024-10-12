# openapi_client.ManagementApi

All URIs are relative to *https://analytics.googleapis.com/analytics/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analytics_management_account_summaries_list**](ManagementApi.md#analytics_management_account_summaries_list) | **GET** /management/accountSummaries | 
[**analytics_management_account_user_links_delete**](ManagementApi.md#analytics_management_account_user_links_delete) | **DELETE** /management/accounts/{accountId}/entityUserLinks/{linkId} | 
[**analytics_management_account_user_links_insert**](ManagementApi.md#analytics_management_account_user_links_insert) | **POST** /management/accounts/{accountId}/entityUserLinks | 
[**analytics_management_account_user_links_list**](ManagementApi.md#analytics_management_account_user_links_list) | **GET** /management/accounts/{accountId}/entityUserLinks | 
[**analytics_management_account_user_links_update**](ManagementApi.md#analytics_management_account_user_links_update) | **PUT** /management/accounts/{accountId}/entityUserLinks/{linkId} | 
[**analytics_management_accounts_list**](ManagementApi.md#analytics_management_accounts_list) | **GET** /management/accounts | 
[**analytics_management_client_id_hash_client_id**](ManagementApi.md#analytics_management_client_id_hash_client_id) | **POST** /management/clientId:hashClientId | 
[**analytics_management_custom_data_sources_list**](ManagementApi.md#analytics_management_custom_data_sources_list) | **GET** /management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources | 
[**analytics_management_custom_dimensions_get**](ManagementApi.md#analytics_management_custom_dimensions_get) | **GET** /management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId} | 
[**analytics_management_custom_dimensions_insert**](ManagementApi.md#analytics_management_custom_dimensions_insert) | **POST** /management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions | 
[**analytics_management_custom_dimensions_list**](ManagementApi.md#analytics_management_custom_dimensions_list) | **GET** /management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions | 
[**analytics_management_custom_dimensions_patch**](ManagementApi.md#analytics_management_custom_dimensions_patch) | **PATCH** /management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId} | 
[**analytics_management_custom_dimensions_update**](ManagementApi.md#analytics_management_custom_dimensions_update) | **PUT** /management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId} | 
[**analytics_management_custom_metrics_get**](ManagementApi.md#analytics_management_custom_metrics_get) | **GET** /management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId} | 
[**analytics_management_custom_metrics_insert**](ManagementApi.md#analytics_management_custom_metrics_insert) | **POST** /management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics | 
[**analytics_management_custom_metrics_list**](ManagementApi.md#analytics_management_custom_metrics_list) | **GET** /management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics | 
[**analytics_management_custom_metrics_patch**](ManagementApi.md#analytics_management_custom_metrics_patch) | **PATCH** /management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId} | 
[**analytics_management_custom_metrics_update**](ManagementApi.md#analytics_management_custom_metrics_update) | **PUT** /management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId} | 
[**analytics_management_experiments_delete**](ManagementApi.md#analytics_management_experiments_delete) | **DELETE** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId} | 
[**analytics_management_experiments_get**](ManagementApi.md#analytics_management_experiments_get) | **GET** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId} | 
[**analytics_management_experiments_insert**](ManagementApi.md#analytics_management_experiments_insert) | **POST** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments | 
[**analytics_management_experiments_list**](ManagementApi.md#analytics_management_experiments_list) | **GET** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments | 
[**analytics_management_experiments_patch**](ManagementApi.md#analytics_management_experiments_patch) | **PATCH** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId} | 
[**analytics_management_experiments_update**](ManagementApi.md#analytics_management_experiments_update) | **PUT** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId} | 
[**analytics_management_filters_delete**](ManagementApi.md#analytics_management_filters_delete) | **DELETE** /management/accounts/{accountId}/filters/{filterId} | 
[**analytics_management_filters_get**](ManagementApi.md#analytics_management_filters_get) | **GET** /management/accounts/{accountId}/filters/{filterId} | 
[**analytics_management_filters_insert**](ManagementApi.md#analytics_management_filters_insert) | **POST** /management/accounts/{accountId}/filters | 
[**analytics_management_filters_list**](ManagementApi.md#analytics_management_filters_list) | **GET** /management/accounts/{accountId}/filters | 
[**analytics_management_filters_patch**](ManagementApi.md#analytics_management_filters_patch) | **PATCH** /management/accounts/{accountId}/filters/{filterId} | 
[**analytics_management_filters_update**](ManagementApi.md#analytics_management_filters_update) | **PUT** /management/accounts/{accountId}/filters/{filterId} | 
[**analytics_management_goals_get**](ManagementApi.md#analytics_management_goals_get) | **GET** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId} | 
[**analytics_management_goals_insert**](ManagementApi.md#analytics_management_goals_insert) | **POST** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals | 
[**analytics_management_goals_list**](ManagementApi.md#analytics_management_goals_list) | **GET** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals | 
[**analytics_management_goals_patch**](ManagementApi.md#analytics_management_goals_patch) | **PATCH** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId} | 
[**analytics_management_goals_update**](ManagementApi.md#analytics_management_goals_update) | **PUT** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId} | 
[**analytics_management_profile_filter_links_delete**](ManagementApi.md#analytics_management_profile_filter_links_delete) | **DELETE** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId} | 
[**analytics_management_profile_filter_links_get**](ManagementApi.md#analytics_management_profile_filter_links_get) | **GET** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId} | 
[**analytics_management_profile_filter_links_insert**](ManagementApi.md#analytics_management_profile_filter_links_insert) | **POST** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks | 
[**analytics_management_profile_filter_links_list**](ManagementApi.md#analytics_management_profile_filter_links_list) | **GET** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks | 
[**analytics_management_profile_filter_links_patch**](ManagementApi.md#analytics_management_profile_filter_links_patch) | **PATCH** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId} | 
[**analytics_management_profile_filter_links_update**](ManagementApi.md#analytics_management_profile_filter_links_update) | **PUT** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId} | 
[**analytics_management_profile_user_links_delete**](ManagementApi.md#analytics_management_profile_user_links_delete) | **DELETE** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId} | 
[**analytics_management_profile_user_links_insert**](ManagementApi.md#analytics_management_profile_user_links_insert) | **POST** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks | 
[**analytics_management_profile_user_links_list**](ManagementApi.md#analytics_management_profile_user_links_list) | **GET** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks | 
[**analytics_management_profile_user_links_update**](ManagementApi.md#analytics_management_profile_user_links_update) | **PUT** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId} | 
[**analytics_management_profiles_delete**](ManagementApi.md#analytics_management_profiles_delete) | **DELETE** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId} | 
[**analytics_management_profiles_get**](ManagementApi.md#analytics_management_profiles_get) | **GET** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId} | 
[**analytics_management_profiles_insert**](ManagementApi.md#analytics_management_profiles_insert) | **POST** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles | 
[**analytics_management_profiles_list**](ManagementApi.md#analytics_management_profiles_list) | **GET** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles | 
[**analytics_management_profiles_patch**](ManagementApi.md#analytics_management_profiles_patch) | **PATCH** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId} | 
[**analytics_management_profiles_update**](ManagementApi.md#analytics_management_profiles_update) | **PUT** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId} | 
[**analytics_management_remarketing_audience_delete**](ManagementApi.md#analytics_management_remarketing_audience_delete) | **DELETE** /management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId} | 
[**analytics_management_remarketing_audience_get**](ManagementApi.md#analytics_management_remarketing_audience_get) | **GET** /management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId} | 
[**analytics_management_remarketing_audience_insert**](ManagementApi.md#analytics_management_remarketing_audience_insert) | **POST** /management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences | 
[**analytics_management_remarketing_audience_list**](ManagementApi.md#analytics_management_remarketing_audience_list) | **GET** /management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences | 
[**analytics_management_remarketing_audience_patch**](ManagementApi.md#analytics_management_remarketing_audience_patch) | **PATCH** /management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId} | 
[**analytics_management_remarketing_audience_update**](ManagementApi.md#analytics_management_remarketing_audience_update) | **PUT** /management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId} | 
[**analytics_management_segments_list**](ManagementApi.md#analytics_management_segments_list) | **GET** /management/segments | 
[**analytics_management_unsampled_reports_delete**](ManagementApi.md#analytics_management_unsampled_reports_delete) | **DELETE** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId} | 
[**analytics_management_unsampled_reports_get**](ManagementApi.md#analytics_management_unsampled_reports_get) | **GET** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId} | 
[**analytics_management_unsampled_reports_insert**](ManagementApi.md#analytics_management_unsampled_reports_insert) | **POST** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports | 
[**analytics_management_unsampled_reports_list**](ManagementApi.md#analytics_management_unsampled_reports_list) | **GET** /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports | 
[**analytics_management_uploads_delete_upload_data**](ManagementApi.md#analytics_management_uploads_delete_upload_data) | **POST** /management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/deleteUploadData | 
[**analytics_management_uploads_get**](ManagementApi.md#analytics_management_uploads_get) | **GET** /management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads/{uploadId} | 
[**analytics_management_uploads_list**](ManagementApi.md#analytics_management_uploads_list) | **GET** /management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads | 
[**analytics_management_uploads_upload_data**](ManagementApi.md#analytics_management_uploads_upload_data) | **POST** /management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads | 
[**analytics_management_web_property_ad_words_links_delete**](ManagementApi.md#analytics_management_web_property_ad_words_links_delete) | **DELETE** /management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId} | 
[**analytics_management_web_property_ad_words_links_get**](ManagementApi.md#analytics_management_web_property_ad_words_links_get) | **GET** /management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId} | 
[**analytics_management_web_property_ad_words_links_insert**](ManagementApi.md#analytics_management_web_property_ad_words_links_insert) | **POST** /management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks | 
[**analytics_management_web_property_ad_words_links_list**](ManagementApi.md#analytics_management_web_property_ad_words_links_list) | **GET** /management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks | 
[**analytics_management_web_property_ad_words_links_patch**](ManagementApi.md#analytics_management_web_property_ad_words_links_patch) | **PATCH** /management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId} | 
[**analytics_management_web_property_ad_words_links_update**](ManagementApi.md#analytics_management_web_property_ad_words_links_update) | **PUT** /management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId} | 
[**analytics_management_webproperties_get**](ManagementApi.md#analytics_management_webproperties_get) | **GET** /management/accounts/{accountId}/webproperties/{webPropertyId} | 
[**analytics_management_webproperties_insert**](ManagementApi.md#analytics_management_webproperties_insert) | **POST** /management/accounts/{accountId}/webproperties | 
[**analytics_management_webproperties_list**](ManagementApi.md#analytics_management_webproperties_list) | **GET** /management/accounts/{accountId}/webproperties | 
[**analytics_management_webproperties_patch**](ManagementApi.md#analytics_management_webproperties_patch) | **PATCH** /management/accounts/{accountId}/webproperties/{webPropertyId} | 
[**analytics_management_webproperties_update**](ManagementApi.md#analytics_management_webproperties_update) | **PUT** /management/accounts/{accountId}/webproperties/{webPropertyId} | 
[**analytics_management_webproperty_user_links_delete**](ManagementApi.md#analytics_management_webproperty_user_links_delete) | **DELETE** /management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId} | 
[**analytics_management_webproperty_user_links_insert**](ManagementApi.md#analytics_management_webproperty_user_links_insert) | **POST** /management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks | 
[**analytics_management_webproperty_user_links_list**](ManagementApi.md#analytics_management_webproperty_user_links_list) | **GET** /management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks | 
[**analytics_management_webproperty_user_links_update**](ManagementApi.md#analytics_management_webproperty_user_links_update) | **PUT** /management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId} | 


# **analytics_management_account_summaries_list**
> AccountSummaries analytics_management_account_summaries_list(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)



Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.account_summaries import AccountSummaries
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    max_results = 56 # int | The maximum number of account summaries to include in this response, where the largest acceptable value is 1000. (optional)
    start_index = 56 # int | An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. (optional)

    try:
        api_response = api_instance.analytics_management_account_summaries_list(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)
        print("The response of ManagementApi->analytics_management_account_summaries_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_account_summaries_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **max_results** | **int**| The maximum number of account summaries to include in this response, where the largest acceptable value is 1000. | [optional] 
 **start_index** | **int**| An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. | [optional] 

### Return type

[**AccountSummaries**](AccountSummaries.md)

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

# **analytics_management_account_user_links_delete**
> analytics_management_account_user_links_delete(account_id, link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Removes a user from the given account.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to delete the user link for.
    link_id = 'link_id_example' # str | Link ID to delete the user link for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_instance.analytics_management_account_user_links_delete(account_id, link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_account_user_links_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to delete the user link for. | 
 **link_id** | **str**| Link ID to delete the user link for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

void (empty response body)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_management_account_user_links_insert**
> EntityUserLink analytics_management_account_user_links_insert(account_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, entity_user_link=entity_user_link)



Adds a new user to the given account.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.entity_user_link import EntityUserLink
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to create the user link for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    entity_user_link = openapi_client.EntityUserLink() # EntityUserLink |  (optional)

    try:
        api_response = api_instance.analytics_management_account_user_links_insert(account_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, entity_user_link=entity_user_link)
        print("The response of ManagementApi->analytics_management_account_user_links_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_account_user_links_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to create the user link for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **entity_user_link** | [**EntityUserLink**](EntityUserLink.md)|  | [optional] 

### Return type

[**EntityUserLink**](EntityUserLink.md)

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

# **analytics_management_account_user_links_list**
> EntityUserLinks analytics_management_account_user_links_list(account_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)



Lists account-user links for a given account.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.entity_user_links import EntityUserLinks
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to retrieve the user links for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    max_results = 56 # int | The maximum number of account-user links to include in this response. (optional)
    start_index = 56 # int | An index of the first account-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. (optional)

    try:
        api_response = api_instance.analytics_management_account_user_links_list(account_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)
        print("The response of ManagementApi->analytics_management_account_user_links_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_account_user_links_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to retrieve the user links for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **max_results** | **int**| The maximum number of account-user links to include in this response. | [optional] 
 **start_index** | **int**| An index of the first account-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. | [optional] 

### Return type

[**EntityUserLinks**](EntityUserLinks.md)

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

# **analytics_management_account_user_links_update**
> EntityUserLink analytics_management_account_user_links_update(account_id, link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, entity_user_link=entity_user_link)



Updates permissions for an existing user on the given account.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.entity_user_link import EntityUserLink
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to update the account-user link for.
    link_id = 'link_id_example' # str | Link ID to update the account-user link for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    entity_user_link = openapi_client.EntityUserLink() # EntityUserLink |  (optional)

    try:
        api_response = api_instance.analytics_management_account_user_links_update(account_id, link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, entity_user_link=entity_user_link)
        print("The response of ManagementApi->analytics_management_account_user_links_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_account_user_links_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to update the account-user link for. | 
 **link_id** | **str**| Link ID to update the account-user link for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **entity_user_link** | [**EntityUserLink**](EntityUserLink.md)|  | [optional] 

### Return type

[**EntityUserLink**](EntityUserLink.md)

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

# **analytics_management_accounts_list**
> Accounts analytics_management_accounts_list(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)



Lists all accounts to which the user has access.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.accounts import Accounts
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    max_results = 56 # int | The maximum number of accounts to include in this response. (optional)
    start_index = 56 # int | An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. (optional)

    try:
        api_response = api_instance.analytics_management_accounts_list(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)
        print("The response of ManagementApi->analytics_management_accounts_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_accounts_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **max_results** | **int**| The maximum number of accounts to include in this response. | [optional] 
 **start_index** | **int**| An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. | [optional] 

### Return type

[**Accounts**](Accounts.md)

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

# **analytics_management_client_id_hash_client_id**
> HashClientIdResponse analytics_management_client_id_hash_client_id(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, hash_client_id_request=hash_client_id_request)



Hashes the given Client ID.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.hash_client_id_request import HashClientIdRequest
from openapi_client.models.hash_client_id_response import HashClientIdResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    hash_client_id_request = openapi_client.HashClientIdRequest() # HashClientIdRequest |  (optional)

    try:
        api_response = api_instance.analytics_management_client_id_hash_client_id(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, hash_client_id_request=hash_client_id_request)
        print("The response of ManagementApi->analytics_management_client_id_hash_client_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_client_id_hash_client_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **hash_client_id_request** | [**HashClientIdRequest**](HashClientIdRequest.md)|  | [optional] 

### Return type

[**HashClientIdResponse**](HashClientIdResponse.md)

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

# **analytics_management_custom_data_sources_list**
> CustomDataSources analytics_management_custom_data_sources_list(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)



List custom data sources to which the user has access.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.custom_data_sources import CustomDataSources
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account Id for the custom data sources to retrieve.
    web_property_id = 'web_property_id_example' # str | Web property Id for the custom data sources to retrieve.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    max_results = 56 # int | The maximum number of custom data sources to include in this response. (optional)
    start_index = 56 # int | A 1-based index of the first custom data source to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. (optional)

    try:
        api_response = api_instance.analytics_management_custom_data_sources_list(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)
        print("The response of ManagementApi->analytics_management_custom_data_sources_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_custom_data_sources_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account Id for the custom data sources to retrieve. | 
 **web_property_id** | **str**| Web property Id for the custom data sources to retrieve. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **max_results** | **int**| The maximum number of custom data sources to include in this response. | [optional] 
 **start_index** | **int**| A 1-based index of the first custom data source to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. | [optional] 

### Return type

[**CustomDataSources**](CustomDataSources.md)

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

# **analytics_management_custom_dimensions_get**
> CustomDimension analytics_management_custom_dimensions_get(account_id, web_property_id, custom_dimension_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Get a custom dimension to which the user has access.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.custom_dimension import CustomDimension
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID for the custom dimension to retrieve.
    web_property_id = 'web_property_id_example' # str | Web property ID for the custom dimension to retrieve.
    custom_dimension_id = 'custom_dimension_id_example' # str | The ID of the custom dimension to retrieve.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.analytics_management_custom_dimensions_get(account_id, web_property_id, custom_dimension_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of ManagementApi->analytics_management_custom_dimensions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_custom_dimensions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID for the custom dimension to retrieve. | 
 **web_property_id** | **str**| Web property ID for the custom dimension to retrieve. | 
 **custom_dimension_id** | **str**| The ID of the custom dimension to retrieve. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**CustomDimension**](CustomDimension.md)

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

# **analytics_management_custom_dimensions_insert**
> CustomDimension analytics_management_custom_dimensions_insert(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, custom_dimension=custom_dimension)



Create a new custom dimension.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.custom_dimension import CustomDimension
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID for the custom dimension to create.
    web_property_id = 'web_property_id_example' # str | Web property ID for the custom dimension to create.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    custom_dimension = openapi_client.CustomDimension() # CustomDimension |  (optional)

    try:
        api_response = api_instance.analytics_management_custom_dimensions_insert(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, custom_dimension=custom_dimension)
        print("The response of ManagementApi->analytics_management_custom_dimensions_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_custom_dimensions_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID for the custom dimension to create. | 
 **web_property_id** | **str**| Web property ID for the custom dimension to create. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **custom_dimension** | [**CustomDimension**](CustomDimension.md)|  | [optional] 

### Return type

[**CustomDimension**](CustomDimension.md)

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

# **analytics_management_custom_dimensions_list**
> CustomDimensions analytics_management_custom_dimensions_list(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)



Lists custom dimensions to which the user has access.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.custom_dimensions import CustomDimensions
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID for the custom dimensions to retrieve.
    web_property_id = 'web_property_id_example' # str | Web property ID for the custom dimensions to retrieve.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    max_results = 56 # int | The maximum number of custom dimensions to include in this response. (optional)
    start_index = 56 # int | An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. (optional)

    try:
        api_response = api_instance.analytics_management_custom_dimensions_list(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)
        print("The response of ManagementApi->analytics_management_custom_dimensions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_custom_dimensions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID for the custom dimensions to retrieve. | 
 **web_property_id** | **str**| Web property ID for the custom dimensions to retrieve. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **max_results** | **int**| The maximum number of custom dimensions to include in this response. | [optional] 
 **start_index** | **int**| An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. | [optional] 

### Return type

[**CustomDimensions**](CustomDimensions.md)

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

# **analytics_management_custom_dimensions_patch**
> CustomDimension analytics_management_custom_dimensions_patch(account_id, web_property_id, custom_dimension_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, ignore_custom_data_source_links=ignore_custom_data_source_links, custom_dimension=custom_dimension)



Updates an existing custom dimension. This method supports patch semantics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.custom_dimension import CustomDimension
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID for the custom dimension to update.
    web_property_id = 'web_property_id_example' # str | Web property ID for the custom dimension to update.
    custom_dimension_id = 'custom_dimension_id_example' # str | Custom dimension ID for the custom dimension to update.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    ignore_custom_data_source_links = True # bool | Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set. (optional)
    custom_dimension = openapi_client.CustomDimension() # CustomDimension |  (optional)

    try:
        api_response = api_instance.analytics_management_custom_dimensions_patch(account_id, web_property_id, custom_dimension_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, ignore_custom_data_source_links=ignore_custom_data_source_links, custom_dimension=custom_dimension)
        print("The response of ManagementApi->analytics_management_custom_dimensions_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_custom_dimensions_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID for the custom dimension to update. | 
 **web_property_id** | **str**| Web property ID for the custom dimension to update. | 
 **custom_dimension_id** | **str**| Custom dimension ID for the custom dimension to update. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **ignore_custom_data_source_links** | **bool**| Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set. | [optional] 
 **custom_dimension** | [**CustomDimension**](CustomDimension.md)|  | [optional] 

### Return type

[**CustomDimension**](CustomDimension.md)

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

# **analytics_management_custom_dimensions_update**
> CustomDimension analytics_management_custom_dimensions_update(account_id, web_property_id, custom_dimension_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, ignore_custom_data_source_links=ignore_custom_data_source_links, custom_dimension=custom_dimension)



Updates an existing custom dimension.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.custom_dimension import CustomDimension
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID for the custom dimension to update.
    web_property_id = 'web_property_id_example' # str | Web property ID for the custom dimension to update.
    custom_dimension_id = 'custom_dimension_id_example' # str | Custom dimension ID for the custom dimension to update.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    ignore_custom_data_source_links = True # bool | Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set. (optional)
    custom_dimension = openapi_client.CustomDimension() # CustomDimension |  (optional)

    try:
        api_response = api_instance.analytics_management_custom_dimensions_update(account_id, web_property_id, custom_dimension_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, ignore_custom_data_source_links=ignore_custom_data_source_links, custom_dimension=custom_dimension)
        print("The response of ManagementApi->analytics_management_custom_dimensions_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_custom_dimensions_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID for the custom dimension to update. | 
 **web_property_id** | **str**| Web property ID for the custom dimension to update. | 
 **custom_dimension_id** | **str**| Custom dimension ID for the custom dimension to update. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **ignore_custom_data_source_links** | **bool**| Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set. | [optional] 
 **custom_dimension** | [**CustomDimension**](CustomDimension.md)|  | [optional] 

### Return type

[**CustomDimension**](CustomDimension.md)

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

# **analytics_management_custom_metrics_get**
> CustomMetric analytics_management_custom_metrics_get(account_id, web_property_id, custom_metric_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Get a custom metric to which the user has access.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.custom_metric import CustomMetric
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID for the custom metric to retrieve.
    web_property_id = 'web_property_id_example' # str | Web property ID for the custom metric to retrieve.
    custom_metric_id = 'custom_metric_id_example' # str | The ID of the custom metric to retrieve.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.analytics_management_custom_metrics_get(account_id, web_property_id, custom_metric_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of ManagementApi->analytics_management_custom_metrics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_custom_metrics_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID for the custom metric to retrieve. | 
 **web_property_id** | **str**| Web property ID for the custom metric to retrieve. | 
 **custom_metric_id** | **str**| The ID of the custom metric to retrieve. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**CustomMetric**](CustomMetric.md)

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

# **analytics_management_custom_metrics_insert**
> CustomMetric analytics_management_custom_metrics_insert(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, custom_metric=custom_metric)



Create a new custom metric.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.custom_metric import CustomMetric
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID for the custom metric to create.
    web_property_id = 'web_property_id_example' # str | Web property ID for the custom dimension to create.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    custom_metric = openapi_client.CustomMetric() # CustomMetric |  (optional)

    try:
        api_response = api_instance.analytics_management_custom_metrics_insert(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, custom_metric=custom_metric)
        print("The response of ManagementApi->analytics_management_custom_metrics_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_custom_metrics_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID for the custom metric to create. | 
 **web_property_id** | **str**| Web property ID for the custom dimension to create. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **custom_metric** | [**CustomMetric**](CustomMetric.md)|  | [optional] 

### Return type

[**CustomMetric**](CustomMetric.md)

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

# **analytics_management_custom_metrics_list**
> CustomMetrics analytics_management_custom_metrics_list(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)



Lists custom metrics to which the user has access.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.custom_metrics import CustomMetrics
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID for the custom metrics to retrieve.
    web_property_id = 'web_property_id_example' # str | Web property ID for the custom metrics to retrieve.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    max_results = 56 # int | The maximum number of custom metrics to include in this response. (optional)
    start_index = 56 # int | An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. (optional)

    try:
        api_response = api_instance.analytics_management_custom_metrics_list(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)
        print("The response of ManagementApi->analytics_management_custom_metrics_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_custom_metrics_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID for the custom metrics to retrieve. | 
 **web_property_id** | **str**| Web property ID for the custom metrics to retrieve. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **max_results** | **int**| The maximum number of custom metrics to include in this response. | [optional] 
 **start_index** | **int**| An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. | [optional] 

### Return type

[**CustomMetrics**](CustomMetrics.md)

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

# **analytics_management_custom_metrics_patch**
> CustomMetric analytics_management_custom_metrics_patch(account_id, web_property_id, custom_metric_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, ignore_custom_data_source_links=ignore_custom_data_source_links, custom_metric=custom_metric)



Updates an existing custom metric. This method supports patch semantics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.custom_metric import CustomMetric
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID for the custom metric to update.
    web_property_id = 'web_property_id_example' # str | Web property ID for the custom metric to update.
    custom_metric_id = 'custom_metric_id_example' # str | Custom metric ID for the custom metric to update.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    ignore_custom_data_source_links = True # bool | Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set. (optional)
    custom_metric = openapi_client.CustomMetric() # CustomMetric |  (optional)

    try:
        api_response = api_instance.analytics_management_custom_metrics_patch(account_id, web_property_id, custom_metric_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, ignore_custom_data_source_links=ignore_custom_data_source_links, custom_metric=custom_metric)
        print("The response of ManagementApi->analytics_management_custom_metrics_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_custom_metrics_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID for the custom metric to update. | 
 **web_property_id** | **str**| Web property ID for the custom metric to update. | 
 **custom_metric_id** | **str**| Custom metric ID for the custom metric to update. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **ignore_custom_data_source_links** | **bool**| Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set. | [optional] 
 **custom_metric** | [**CustomMetric**](CustomMetric.md)|  | [optional] 

### Return type

[**CustomMetric**](CustomMetric.md)

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

# **analytics_management_custom_metrics_update**
> CustomMetric analytics_management_custom_metrics_update(account_id, web_property_id, custom_metric_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, ignore_custom_data_source_links=ignore_custom_data_source_links, custom_metric=custom_metric)



Updates an existing custom metric.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.custom_metric import CustomMetric
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID for the custom metric to update.
    web_property_id = 'web_property_id_example' # str | Web property ID for the custom metric to update.
    custom_metric_id = 'custom_metric_id_example' # str | Custom metric ID for the custom metric to update.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    ignore_custom_data_source_links = True # bool | Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set. (optional)
    custom_metric = openapi_client.CustomMetric() # CustomMetric |  (optional)

    try:
        api_response = api_instance.analytics_management_custom_metrics_update(account_id, web_property_id, custom_metric_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, ignore_custom_data_source_links=ignore_custom_data_source_links, custom_metric=custom_metric)
        print("The response of ManagementApi->analytics_management_custom_metrics_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_custom_metrics_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID for the custom metric to update. | 
 **web_property_id** | **str**| Web property ID for the custom metric to update. | 
 **custom_metric_id** | **str**| Custom metric ID for the custom metric to update. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **ignore_custom_data_source_links** | **bool**| Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set. | [optional] 
 **custom_metric** | [**CustomMetric**](CustomMetric.md)|  | [optional] 

### Return type

[**CustomMetric**](CustomMetric.md)

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

# **analytics_management_experiments_delete**
> analytics_management_experiments_delete(account_id, web_property_id, profile_id, experiment_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Delete an experiment.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to which the experiment belongs
    web_property_id = 'web_property_id_example' # str | Web property ID to which the experiment belongs
    profile_id = 'profile_id_example' # str | View (Profile) ID to which the experiment belongs
    experiment_id = 'experiment_id_example' # str | ID of the experiment to delete
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_instance.analytics_management_experiments_delete(account_id, web_property_id, profile_id, experiment_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_experiments_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to which the experiment belongs | 
 **web_property_id** | **str**| Web property ID to which the experiment belongs | 
 **profile_id** | **str**| View (Profile) ID to which the experiment belongs | 
 **experiment_id** | **str**| ID of the experiment to delete | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

void (empty response body)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_management_experiments_get**
> Experiment analytics_management_experiments_get(account_id, web_property_id, profile_id, experiment_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Returns an experiment to which the user has access.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.experiment import Experiment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to retrieve the experiment for.
    web_property_id = 'web_property_id_example' # str | Web property ID to retrieve the experiment for.
    profile_id = 'profile_id_example' # str | View (Profile) ID to retrieve the experiment for.
    experiment_id = 'experiment_id_example' # str | Experiment ID to retrieve the experiment for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.analytics_management_experiments_get(account_id, web_property_id, profile_id, experiment_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of ManagementApi->analytics_management_experiments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_experiments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to retrieve the experiment for. | 
 **web_property_id** | **str**| Web property ID to retrieve the experiment for. | 
 **profile_id** | **str**| View (Profile) ID to retrieve the experiment for. | 
 **experiment_id** | **str**| Experiment ID to retrieve the experiment for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**Experiment**](Experiment.md)

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

# **analytics_management_experiments_insert**
> Experiment analytics_management_experiments_insert(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, experiment=experiment)



Create a new experiment.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.experiment import Experiment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to create the experiment for.
    web_property_id = 'web_property_id_example' # str | Web property ID to create the experiment for.
    profile_id = 'profile_id_example' # str | View (Profile) ID to create the experiment for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    experiment = openapi_client.Experiment() # Experiment |  (optional)

    try:
        api_response = api_instance.analytics_management_experiments_insert(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, experiment=experiment)
        print("The response of ManagementApi->analytics_management_experiments_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_experiments_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to create the experiment for. | 
 **web_property_id** | **str**| Web property ID to create the experiment for. | 
 **profile_id** | **str**| View (Profile) ID to create the experiment for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **experiment** | [**Experiment**](Experiment.md)|  | [optional] 

### Return type

[**Experiment**](Experiment.md)

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

# **analytics_management_experiments_list**
> Experiments analytics_management_experiments_list(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)



Lists experiments to which the user has access.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.experiments import Experiments
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to retrieve experiments for.
    web_property_id = 'web_property_id_example' # str | Web property ID to retrieve experiments for.
    profile_id = 'profile_id_example' # str | View (Profile) ID to retrieve experiments for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    max_results = 56 # int | The maximum number of experiments to include in this response. (optional)
    start_index = 56 # int | An index of the first experiment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. (optional)

    try:
        api_response = api_instance.analytics_management_experiments_list(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)
        print("The response of ManagementApi->analytics_management_experiments_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_experiments_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to retrieve experiments for. | 
 **web_property_id** | **str**| Web property ID to retrieve experiments for. | 
 **profile_id** | **str**| View (Profile) ID to retrieve experiments for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **max_results** | **int**| The maximum number of experiments to include in this response. | [optional] 
 **start_index** | **int**| An index of the first experiment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. | [optional] 

### Return type

[**Experiments**](Experiments.md)

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

# **analytics_management_experiments_patch**
> Experiment analytics_management_experiments_patch(account_id, web_property_id, profile_id, experiment_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, experiment=experiment)



Update an existing experiment. This method supports patch semantics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.experiment import Experiment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID of the experiment to update.
    web_property_id = 'web_property_id_example' # str | Web property ID of the experiment to update.
    profile_id = 'profile_id_example' # str | View (Profile) ID of the experiment to update.
    experiment_id = 'experiment_id_example' # str | Experiment ID of the experiment to update.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    experiment = openapi_client.Experiment() # Experiment |  (optional)

    try:
        api_response = api_instance.analytics_management_experiments_patch(account_id, web_property_id, profile_id, experiment_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, experiment=experiment)
        print("The response of ManagementApi->analytics_management_experiments_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_experiments_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID of the experiment to update. | 
 **web_property_id** | **str**| Web property ID of the experiment to update. | 
 **profile_id** | **str**| View (Profile) ID of the experiment to update. | 
 **experiment_id** | **str**| Experiment ID of the experiment to update. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **experiment** | [**Experiment**](Experiment.md)|  | [optional] 

### Return type

[**Experiment**](Experiment.md)

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

# **analytics_management_experiments_update**
> Experiment analytics_management_experiments_update(account_id, web_property_id, profile_id, experiment_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, experiment=experiment)



Update an existing experiment.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.experiment import Experiment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID of the experiment to update.
    web_property_id = 'web_property_id_example' # str | Web property ID of the experiment to update.
    profile_id = 'profile_id_example' # str | View (Profile) ID of the experiment to update.
    experiment_id = 'experiment_id_example' # str | Experiment ID of the experiment to update.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    experiment = openapi_client.Experiment() # Experiment |  (optional)

    try:
        api_response = api_instance.analytics_management_experiments_update(account_id, web_property_id, profile_id, experiment_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, experiment=experiment)
        print("The response of ManagementApi->analytics_management_experiments_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_experiments_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID of the experiment to update. | 
 **web_property_id** | **str**| Web property ID of the experiment to update. | 
 **profile_id** | **str**| View (Profile) ID of the experiment to update. | 
 **experiment_id** | **str**| Experiment ID of the experiment to update. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **experiment** | [**Experiment**](Experiment.md)|  | [optional] 

### Return type

[**Experiment**](Experiment.md)

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

# **analytics_management_filters_delete**
> Filter analytics_management_filters_delete(account_id, filter_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Delete a filter.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.filter import Filter
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to delete the filter for.
    filter_id = 'filter_id_example' # str | ID of the filter to be deleted.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.analytics_management_filters_delete(account_id, filter_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of ManagementApi->analytics_management_filters_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_filters_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to delete the filter for. | 
 **filter_id** | **str**| ID of the filter to be deleted. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**Filter**](Filter.md)

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

# **analytics_management_filters_get**
> Filter analytics_management_filters_get(account_id, filter_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Returns filters to which the user has access.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.filter import Filter
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to retrieve filters for.
    filter_id = 'filter_id_example' # str | Filter ID to retrieve filters for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.analytics_management_filters_get(account_id, filter_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of ManagementApi->analytics_management_filters_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_filters_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to retrieve filters for. | 
 **filter_id** | **str**| Filter ID to retrieve filters for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**Filter**](Filter.md)

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

# **analytics_management_filters_insert**
> Filter analytics_management_filters_insert(account_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, filter=filter)



Create a new filter.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.filter import Filter
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to create filter for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    filter = openapi_client.Filter() # Filter |  (optional)

    try:
        api_response = api_instance.analytics_management_filters_insert(account_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, filter=filter)
        print("The response of ManagementApi->analytics_management_filters_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_filters_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to create filter for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **filter** | [**Filter**](Filter.md)|  | [optional] 

### Return type

[**Filter**](Filter.md)

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

# **analytics_management_filters_list**
> Filters analytics_management_filters_list(account_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)



Lists all filters for an account

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.filters import Filters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to retrieve filters for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    max_results = 56 # int | The maximum number of filters to include in this response. (optional)
    start_index = 56 # int | An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. (optional)

    try:
        api_response = api_instance.analytics_management_filters_list(account_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)
        print("The response of ManagementApi->analytics_management_filters_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_filters_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to retrieve filters for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **max_results** | **int**| The maximum number of filters to include in this response. | [optional] 
 **start_index** | **int**| An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. | [optional] 

### Return type

[**Filters**](Filters.md)

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

# **analytics_management_filters_patch**
> Filter analytics_management_filters_patch(account_id, filter_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, filter=filter)



Updates an existing filter. This method supports patch semantics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.filter import Filter
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to which the filter belongs.
    filter_id = 'filter_id_example' # str | ID of the filter to be updated.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    filter = openapi_client.Filter() # Filter |  (optional)

    try:
        api_response = api_instance.analytics_management_filters_patch(account_id, filter_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, filter=filter)
        print("The response of ManagementApi->analytics_management_filters_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_filters_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to which the filter belongs. | 
 **filter_id** | **str**| ID of the filter to be updated. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **filter** | [**Filter**](Filter.md)|  | [optional] 

### Return type

[**Filter**](Filter.md)

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

# **analytics_management_filters_update**
> Filter analytics_management_filters_update(account_id, filter_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, filter=filter)



Updates an existing filter.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.filter import Filter
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to which the filter belongs.
    filter_id = 'filter_id_example' # str | ID of the filter to be updated.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    filter = openapi_client.Filter() # Filter |  (optional)

    try:
        api_response = api_instance.analytics_management_filters_update(account_id, filter_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, filter=filter)
        print("The response of ManagementApi->analytics_management_filters_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_filters_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to which the filter belongs. | 
 **filter_id** | **str**| ID of the filter to be updated. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **filter** | [**Filter**](Filter.md)|  | [optional] 

### Return type

[**Filter**](Filter.md)

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

# **analytics_management_goals_get**
> Goal analytics_management_goals_get(account_id, web_property_id, profile_id, goal_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Gets a goal to which the user has access.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.goal import Goal
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to retrieve the goal for.
    web_property_id = 'web_property_id_example' # str | Web property ID to retrieve the goal for.
    profile_id = 'profile_id_example' # str | View (Profile) ID to retrieve the goal for.
    goal_id = 'goal_id_example' # str | Goal ID to retrieve the goal for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.analytics_management_goals_get(account_id, web_property_id, profile_id, goal_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of ManagementApi->analytics_management_goals_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_goals_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to retrieve the goal for. | 
 **web_property_id** | **str**| Web property ID to retrieve the goal for. | 
 **profile_id** | **str**| View (Profile) ID to retrieve the goal for. | 
 **goal_id** | **str**| Goal ID to retrieve the goal for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**Goal**](Goal.md)

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

# **analytics_management_goals_insert**
> Goal analytics_management_goals_insert(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, goal=goal)



Create a new goal.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.goal import Goal
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to create the goal for.
    web_property_id = 'web_property_id_example' # str | Web property ID to create the goal for.
    profile_id = 'profile_id_example' # str | View (Profile) ID to create the goal for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    goal = openapi_client.Goal() # Goal |  (optional)

    try:
        api_response = api_instance.analytics_management_goals_insert(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, goal=goal)
        print("The response of ManagementApi->analytics_management_goals_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_goals_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to create the goal for. | 
 **web_property_id** | **str**| Web property ID to create the goal for. | 
 **profile_id** | **str**| View (Profile) ID to create the goal for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **goal** | [**Goal**](Goal.md)|  | [optional] 

### Return type

[**Goal**](Goal.md)

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

# **analytics_management_goals_list**
> Goals analytics_management_goals_list(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)



Lists goals to which the user has access.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.goals import Goals
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
    web_property_id = 'web_property_id_example' # str | Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
    profile_id = 'profile_id_example' # str | View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    max_results = 56 # int | The maximum number of goals to include in this response. (optional)
    start_index = 56 # int | An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. (optional)

    try:
        api_response = api_instance.analytics_management_goals_list(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)
        print("The response of ManagementApi->analytics_management_goals_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_goals_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to retrieve goals for. Can either be a specific account ID or &#39;~all&#39;, which refers to all the accounts that user has access to. | 
 **web_property_id** | **str**| Web property ID to retrieve goals for. Can either be a specific web property ID or &#39;~all&#39;, which refers to all the web properties that user has access to. | 
 **profile_id** | **str**| View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or &#39;~all&#39;, which refers to all the views (profiles) that user has access to. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **max_results** | **int**| The maximum number of goals to include in this response. | [optional] 
 **start_index** | **int**| An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. | [optional] 

### Return type

[**Goals**](Goals.md)

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

# **analytics_management_goals_patch**
> Goal analytics_management_goals_patch(account_id, web_property_id, profile_id, goal_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, goal=goal)



Updates an existing goal. This method supports patch semantics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.goal import Goal
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to update the goal.
    web_property_id = 'web_property_id_example' # str | Web property ID to update the goal.
    profile_id = 'profile_id_example' # str | View (Profile) ID to update the goal.
    goal_id = 'goal_id_example' # str | Index of the goal to be updated.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    goal = openapi_client.Goal() # Goal |  (optional)

    try:
        api_response = api_instance.analytics_management_goals_patch(account_id, web_property_id, profile_id, goal_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, goal=goal)
        print("The response of ManagementApi->analytics_management_goals_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_goals_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to update the goal. | 
 **web_property_id** | **str**| Web property ID to update the goal. | 
 **profile_id** | **str**| View (Profile) ID to update the goal. | 
 **goal_id** | **str**| Index of the goal to be updated. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **goal** | [**Goal**](Goal.md)|  | [optional] 

### Return type

[**Goal**](Goal.md)

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

# **analytics_management_goals_update**
> Goal analytics_management_goals_update(account_id, web_property_id, profile_id, goal_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, goal=goal)



Updates an existing goal.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.goal import Goal
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to update the goal.
    web_property_id = 'web_property_id_example' # str | Web property ID to update the goal.
    profile_id = 'profile_id_example' # str | View (Profile) ID to update the goal.
    goal_id = 'goal_id_example' # str | Index of the goal to be updated.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    goal = openapi_client.Goal() # Goal |  (optional)

    try:
        api_response = api_instance.analytics_management_goals_update(account_id, web_property_id, profile_id, goal_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, goal=goal)
        print("The response of ManagementApi->analytics_management_goals_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_goals_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to update the goal. | 
 **web_property_id** | **str**| Web property ID to update the goal. | 
 **profile_id** | **str**| View (Profile) ID to update the goal. | 
 **goal_id** | **str**| Index of the goal to be updated. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **goal** | [**Goal**](Goal.md)|  | [optional] 

### Return type

[**Goal**](Goal.md)

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

# **analytics_management_profile_filter_links_delete**
> analytics_management_profile_filter_links_delete(account_id, web_property_id, profile_id, link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Delete a profile filter link.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to which the profile filter link belongs.
    web_property_id = 'web_property_id_example' # str | Web property Id to which the profile filter link belongs.
    profile_id = 'profile_id_example' # str | Profile ID to which the filter link belongs.
    link_id = 'link_id_example' # str | ID of the profile filter link to delete.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_instance.analytics_management_profile_filter_links_delete(account_id, web_property_id, profile_id, link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_profile_filter_links_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to which the profile filter link belongs. | 
 **web_property_id** | **str**| Web property Id to which the profile filter link belongs. | 
 **profile_id** | **str**| Profile ID to which the filter link belongs. | 
 **link_id** | **str**| ID of the profile filter link to delete. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

void (empty response body)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_management_profile_filter_links_get**
> ProfileFilterLink analytics_management_profile_filter_links_get(account_id, web_property_id, profile_id, link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Returns a single profile filter link.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.profile_filter_link import ProfileFilterLink
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to retrieve profile filter link for.
    web_property_id = 'web_property_id_example' # str | Web property Id to retrieve profile filter link for.
    profile_id = 'profile_id_example' # str | Profile ID to retrieve filter link for.
    link_id = 'link_id_example' # str | ID of the profile filter link.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.analytics_management_profile_filter_links_get(account_id, web_property_id, profile_id, link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of ManagementApi->analytics_management_profile_filter_links_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_profile_filter_links_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to retrieve profile filter link for. | 
 **web_property_id** | **str**| Web property Id to retrieve profile filter link for. | 
 **profile_id** | **str**| Profile ID to retrieve filter link for. | 
 **link_id** | **str**| ID of the profile filter link. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**ProfileFilterLink**](ProfileFilterLink.md)

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

# **analytics_management_profile_filter_links_insert**
> ProfileFilterLink analytics_management_profile_filter_links_insert(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, profile_filter_link=profile_filter_link)



Create a new profile filter link.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.profile_filter_link import ProfileFilterLink
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to create profile filter link for.
    web_property_id = 'web_property_id_example' # str | Web property Id to create profile filter link for.
    profile_id = 'profile_id_example' # str | Profile ID to create filter link for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    profile_filter_link = openapi_client.ProfileFilterLink() # ProfileFilterLink |  (optional)

    try:
        api_response = api_instance.analytics_management_profile_filter_links_insert(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, profile_filter_link=profile_filter_link)
        print("The response of ManagementApi->analytics_management_profile_filter_links_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_profile_filter_links_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to create profile filter link for. | 
 **web_property_id** | **str**| Web property Id to create profile filter link for. | 
 **profile_id** | **str**| Profile ID to create filter link for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **profile_filter_link** | [**ProfileFilterLink**](ProfileFilterLink.md)|  | [optional] 

### Return type

[**ProfileFilterLink**](ProfileFilterLink.md)

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

# **analytics_management_profile_filter_links_list**
> ProfileFilterLinks analytics_management_profile_filter_links_list(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)



Lists all profile filter links for a profile.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.profile_filter_links import ProfileFilterLinks
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to retrieve profile filter links for.
    web_property_id = 'web_property_id_example' # str | Web property Id for profile filter links for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
    profile_id = 'profile_id_example' # str | Profile ID to retrieve filter links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    max_results = 56 # int | The maximum number of profile filter links to include in this response. (optional)
    start_index = 56 # int | An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. (optional)

    try:
        api_response = api_instance.analytics_management_profile_filter_links_list(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)
        print("The response of ManagementApi->analytics_management_profile_filter_links_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_profile_filter_links_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to retrieve profile filter links for. | 
 **web_property_id** | **str**| Web property Id for profile filter links for. Can either be a specific web property ID or &#39;~all&#39;, which refers to all the web properties that user has access to. | 
 **profile_id** | **str**| Profile ID to retrieve filter links for. Can either be a specific profile ID or &#39;~all&#39;, which refers to all the profiles that user has access to. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **max_results** | **int**| The maximum number of profile filter links to include in this response. | [optional] 
 **start_index** | **int**| An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. | [optional] 

### Return type

[**ProfileFilterLinks**](ProfileFilterLinks.md)

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

# **analytics_management_profile_filter_links_patch**
> ProfileFilterLink analytics_management_profile_filter_links_patch(account_id, web_property_id, profile_id, link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, profile_filter_link=profile_filter_link)



Update an existing profile filter link. This method supports patch semantics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.profile_filter_link import ProfileFilterLink
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to which profile filter link belongs.
    web_property_id = 'web_property_id_example' # str | Web property Id to which profile filter link belongs
    profile_id = 'profile_id_example' # str | Profile ID to which filter link belongs
    link_id = 'link_id_example' # str | ID of the profile filter link to be updated.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    profile_filter_link = openapi_client.ProfileFilterLink() # ProfileFilterLink |  (optional)

    try:
        api_response = api_instance.analytics_management_profile_filter_links_patch(account_id, web_property_id, profile_id, link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, profile_filter_link=profile_filter_link)
        print("The response of ManagementApi->analytics_management_profile_filter_links_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_profile_filter_links_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to which profile filter link belongs. | 
 **web_property_id** | **str**| Web property Id to which profile filter link belongs | 
 **profile_id** | **str**| Profile ID to which filter link belongs | 
 **link_id** | **str**| ID of the profile filter link to be updated. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **profile_filter_link** | [**ProfileFilterLink**](ProfileFilterLink.md)|  | [optional] 

### Return type

[**ProfileFilterLink**](ProfileFilterLink.md)

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

# **analytics_management_profile_filter_links_update**
> ProfileFilterLink analytics_management_profile_filter_links_update(account_id, web_property_id, profile_id, link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, profile_filter_link=profile_filter_link)



Update an existing profile filter link.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.profile_filter_link import ProfileFilterLink
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to which profile filter link belongs.
    web_property_id = 'web_property_id_example' # str | Web property Id to which profile filter link belongs
    profile_id = 'profile_id_example' # str | Profile ID to which filter link belongs
    link_id = 'link_id_example' # str | ID of the profile filter link to be updated.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    profile_filter_link = openapi_client.ProfileFilterLink() # ProfileFilterLink |  (optional)

    try:
        api_response = api_instance.analytics_management_profile_filter_links_update(account_id, web_property_id, profile_id, link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, profile_filter_link=profile_filter_link)
        print("The response of ManagementApi->analytics_management_profile_filter_links_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_profile_filter_links_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to which profile filter link belongs. | 
 **web_property_id** | **str**| Web property Id to which profile filter link belongs | 
 **profile_id** | **str**| Profile ID to which filter link belongs | 
 **link_id** | **str**| ID of the profile filter link to be updated. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **profile_filter_link** | [**ProfileFilterLink**](ProfileFilterLink.md)|  | [optional] 

### Return type

[**ProfileFilterLink**](ProfileFilterLink.md)

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

# **analytics_management_profile_user_links_delete**
> analytics_management_profile_user_links_delete(account_id, web_property_id, profile_id, link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Removes a user from the given view (profile).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to delete the user link for.
    web_property_id = 'web_property_id_example' # str | Web Property ID to delete the user link for.
    profile_id = 'profile_id_example' # str | View (Profile) ID to delete the user link for.
    link_id = 'link_id_example' # str | Link ID to delete the user link for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_instance.analytics_management_profile_user_links_delete(account_id, web_property_id, profile_id, link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_profile_user_links_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to delete the user link for. | 
 **web_property_id** | **str**| Web Property ID to delete the user link for. | 
 **profile_id** | **str**| View (Profile) ID to delete the user link for. | 
 **link_id** | **str**| Link ID to delete the user link for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

void (empty response body)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_management_profile_user_links_insert**
> EntityUserLink analytics_management_profile_user_links_insert(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, entity_user_link=entity_user_link)



Adds a new user to the given view (profile).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.entity_user_link import EntityUserLink
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to create the user link for.
    web_property_id = 'web_property_id_example' # str | Web Property ID to create the user link for.
    profile_id = 'profile_id_example' # str | View (Profile) ID to create the user link for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    entity_user_link = openapi_client.EntityUserLink() # EntityUserLink |  (optional)

    try:
        api_response = api_instance.analytics_management_profile_user_links_insert(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, entity_user_link=entity_user_link)
        print("The response of ManagementApi->analytics_management_profile_user_links_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_profile_user_links_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to create the user link for. | 
 **web_property_id** | **str**| Web Property ID to create the user link for. | 
 **profile_id** | **str**| View (Profile) ID to create the user link for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **entity_user_link** | [**EntityUserLink**](EntityUserLink.md)|  | [optional] 

### Return type

[**EntityUserLink**](EntityUserLink.md)

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

# **analytics_management_profile_user_links_list**
> EntityUserLinks analytics_management_profile_user_links_list(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)



Lists profile-user links for a given view (profile).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.entity_user_links import EntityUserLinks
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID which the given view (profile) belongs to.
    web_property_id = 'web_property_id_example' # str | Web Property ID which the given view (profile) belongs to. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
    profile_id = 'profile_id_example' # str | View (Profile) ID to retrieve the profile-user links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    max_results = 56 # int | The maximum number of profile-user links to include in this response. (optional)
    start_index = 56 # int | An index of the first profile-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. (optional)

    try:
        api_response = api_instance.analytics_management_profile_user_links_list(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)
        print("The response of ManagementApi->analytics_management_profile_user_links_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_profile_user_links_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID which the given view (profile) belongs to. | 
 **web_property_id** | **str**| Web Property ID which the given view (profile) belongs to. Can either be a specific web property ID or &#39;~all&#39;, which refers to all the web properties that user has access to. | 
 **profile_id** | **str**| View (Profile) ID to retrieve the profile-user links for. Can either be a specific profile ID or &#39;~all&#39;, which refers to all the profiles that user has access to. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **max_results** | **int**| The maximum number of profile-user links to include in this response. | [optional] 
 **start_index** | **int**| An index of the first profile-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. | [optional] 

### Return type

[**EntityUserLinks**](EntityUserLinks.md)

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

# **analytics_management_profile_user_links_update**
> EntityUserLink analytics_management_profile_user_links_update(account_id, web_property_id, profile_id, link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, entity_user_link=entity_user_link)



Updates permissions for an existing user on the given view (profile).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.entity_user_link import EntityUserLink
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to update the user link for.
    web_property_id = 'web_property_id_example' # str | Web Property ID to update the user link for.
    profile_id = 'profile_id_example' # str | View (Profile ID) to update the user link for.
    link_id = 'link_id_example' # str | Link ID to update the user link for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    entity_user_link = openapi_client.EntityUserLink() # EntityUserLink |  (optional)

    try:
        api_response = api_instance.analytics_management_profile_user_links_update(account_id, web_property_id, profile_id, link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, entity_user_link=entity_user_link)
        print("The response of ManagementApi->analytics_management_profile_user_links_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_profile_user_links_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to update the user link for. | 
 **web_property_id** | **str**| Web Property ID to update the user link for. | 
 **profile_id** | **str**| View (Profile ID) to update the user link for. | 
 **link_id** | **str**| Link ID to update the user link for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **entity_user_link** | [**EntityUserLink**](EntityUserLink.md)|  | [optional] 

### Return type

[**EntityUserLink**](EntityUserLink.md)

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

# **analytics_management_profiles_delete**
> analytics_management_profiles_delete(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Deletes a view (profile).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to delete the view (profile) for.
    web_property_id = 'web_property_id_example' # str | Web property ID to delete the view (profile) for.
    profile_id = 'profile_id_example' # str | ID of the view (profile) to be deleted.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_instance.analytics_management_profiles_delete(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_profiles_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to delete the view (profile) for. | 
 **web_property_id** | **str**| Web property ID to delete the view (profile) for. | 
 **profile_id** | **str**| ID of the view (profile) to be deleted. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

void (empty response body)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_management_profiles_get**
> Profile analytics_management_profiles_get(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Gets a view (profile) to which the user has access.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.profile import Profile
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to retrieve the view (profile) for.
    web_property_id = 'web_property_id_example' # str | Web property ID to retrieve the view (profile) for.
    profile_id = 'profile_id_example' # str | View (Profile) ID to retrieve the view (profile) for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.analytics_management_profiles_get(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of ManagementApi->analytics_management_profiles_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_profiles_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to retrieve the view (profile) for. | 
 **web_property_id** | **str**| Web property ID to retrieve the view (profile) for. | 
 **profile_id** | **str**| View (Profile) ID to retrieve the view (profile) for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**Profile**](Profile.md)

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

# **analytics_management_profiles_insert**
> Profile analytics_management_profiles_insert(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, profile=profile)



Create a new view (profile).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.profile import Profile
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to create the view (profile) for.
    web_property_id = 'web_property_id_example' # str | Web property ID to create the view (profile) for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    profile = openapi_client.Profile() # Profile |  (optional)

    try:
        api_response = api_instance.analytics_management_profiles_insert(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, profile=profile)
        print("The response of ManagementApi->analytics_management_profiles_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_profiles_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to create the view (profile) for. | 
 **web_property_id** | **str**| Web property ID to create the view (profile) for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **profile** | [**Profile**](Profile.md)|  | [optional] 

### Return type

[**Profile**](Profile.md)

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

# **analytics_management_profiles_list**
> Profiles analytics_management_profiles_list(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)



Lists views (profiles) to which the user has access.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.profiles import Profiles
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID for the view (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access.
    web_property_id = 'web_property_id_example' # str | Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    max_results = 56 # int | The maximum number of views (profiles) to include in this response. (optional)
    start_index = 56 # int | An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. (optional)

    try:
        api_response = api_instance.analytics_management_profiles_list(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)
        print("The response of ManagementApi->analytics_management_profiles_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_profiles_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID for the view (profiles) to retrieve. Can either be a specific account ID or &#39;~all&#39;, which refers to all the accounts to which the user has access. | 
 **web_property_id** | **str**| Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or &#39;~all&#39;, which refers to all the web properties to which the user has access. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **max_results** | **int**| The maximum number of views (profiles) to include in this response. | [optional] 
 **start_index** | **int**| An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. | [optional] 

### Return type

[**Profiles**](Profiles.md)

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

# **analytics_management_profiles_patch**
> Profile analytics_management_profiles_patch(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, profile=profile)



Updates an existing view (profile). This method supports patch semantics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.profile import Profile
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to which the view (profile) belongs
    web_property_id = 'web_property_id_example' # str | Web property ID to which the view (profile) belongs
    profile_id = 'profile_id_example' # str | ID of the view (profile) to be updated.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    profile = openapi_client.Profile() # Profile |  (optional)

    try:
        api_response = api_instance.analytics_management_profiles_patch(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, profile=profile)
        print("The response of ManagementApi->analytics_management_profiles_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_profiles_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to which the view (profile) belongs | 
 **web_property_id** | **str**| Web property ID to which the view (profile) belongs | 
 **profile_id** | **str**| ID of the view (profile) to be updated. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **profile** | [**Profile**](Profile.md)|  | [optional] 

### Return type

[**Profile**](Profile.md)

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

# **analytics_management_profiles_update**
> Profile analytics_management_profiles_update(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, profile=profile)



Updates an existing view (profile).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.profile import Profile
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to which the view (profile) belongs
    web_property_id = 'web_property_id_example' # str | Web property ID to which the view (profile) belongs
    profile_id = 'profile_id_example' # str | ID of the view (profile) to be updated.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    profile = openapi_client.Profile() # Profile |  (optional)

    try:
        api_response = api_instance.analytics_management_profiles_update(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, profile=profile)
        print("The response of ManagementApi->analytics_management_profiles_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_profiles_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to which the view (profile) belongs | 
 **web_property_id** | **str**| Web property ID to which the view (profile) belongs | 
 **profile_id** | **str**| ID of the view (profile) to be updated. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **profile** | [**Profile**](Profile.md)|  | [optional] 

### Return type

[**Profile**](Profile.md)

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

# **analytics_management_remarketing_audience_delete**
> analytics_management_remarketing_audience_delete(account_id, web_property_id, remarketing_audience_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Delete a remarketing audience.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to which the remarketing audience belongs.
    web_property_id = 'web_property_id_example' # str | Web property ID to which the remarketing audience belongs.
    remarketing_audience_id = 'remarketing_audience_id_example' # str | The ID of the remarketing audience to delete.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_instance.analytics_management_remarketing_audience_delete(account_id, web_property_id, remarketing_audience_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_remarketing_audience_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to which the remarketing audience belongs. | 
 **web_property_id** | **str**| Web property ID to which the remarketing audience belongs. | 
 **remarketing_audience_id** | **str**| The ID of the remarketing audience to delete. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

void (empty response body)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_management_remarketing_audience_get**
> RemarketingAudience analytics_management_remarketing_audience_get(account_id, web_property_id, remarketing_audience_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Gets a remarketing audience to which the user has access.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.remarketing_audience import RemarketingAudience
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | The account ID of the remarketing audience to retrieve.
    web_property_id = 'web_property_id_example' # str | The web property ID of the remarketing audience to retrieve.
    remarketing_audience_id = 'remarketing_audience_id_example' # str | The ID of the remarketing audience to retrieve.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.analytics_management_remarketing_audience_get(account_id, web_property_id, remarketing_audience_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of ManagementApi->analytics_management_remarketing_audience_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_remarketing_audience_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| The account ID of the remarketing audience to retrieve. | 
 **web_property_id** | **str**| The web property ID of the remarketing audience to retrieve. | 
 **remarketing_audience_id** | **str**| The ID of the remarketing audience to retrieve. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**RemarketingAudience**](RemarketingAudience.md)

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

# **analytics_management_remarketing_audience_insert**
> RemarketingAudience analytics_management_remarketing_audience_insert(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, remarketing_audience=remarketing_audience)



Creates a new remarketing audience.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.remarketing_audience import RemarketingAudience
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | The account ID for which to create the remarketing audience.
    web_property_id = 'web_property_id_example' # str | Web property ID for which to create the remarketing audience.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    remarketing_audience = openapi_client.RemarketingAudience() # RemarketingAudience |  (optional)

    try:
        api_response = api_instance.analytics_management_remarketing_audience_insert(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, remarketing_audience=remarketing_audience)
        print("The response of ManagementApi->analytics_management_remarketing_audience_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_remarketing_audience_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| The account ID for which to create the remarketing audience. | 
 **web_property_id** | **str**| Web property ID for which to create the remarketing audience. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **remarketing_audience** | [**RemarketingAudience**](RemarketingAudience.md)|  | [optional] 

### Return type

[**RemarketingAudience**](RemarketingAudience.md)

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

# **analytics_management_remarketing_audience_list**
> RemarketingAudiences analytics_management_remarketing_audience_list(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index, type=type)



Lists remarketing audiences to which the user has access.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.remarketing_audiences import RemarketingAudiences
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | The account ID of the remarketing audiences to retrieve.
    web_property_id = 'web_property_id_example' # str | The web property ID of the remarketing audiences to retrieve.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    max_results = 56 # int | The maximum number of remarketing audiences to include in this response. (optional)
    start_index = 56 # int | An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. (optional)
    type = 'type_example' # str |  (optional)

    try:
        api_response = api_instance.analytics_management_remarketing_audience_list(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index, type=type)
        print("The response of ManagementApi->analytics_management_remarketing_audience_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_remarketing_audience_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| The account ID of the remarketing audiences to retrieve. | 
 **web_property_id** | **str**| The web property ID of the remarketing audiences to retrieve. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **max_results** | **int**| The maximum number of remarketing audiences to include in this response. | [optional] 
 **start_index** | **int**| An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. | [optional] 
 **type** | **str**|  | [optional] 

### Return type

[**RemarketingAudiences**](RemarketingAudiences.md)

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

# **analytics_management_remarketing_audience_patch**
> RemarketingAudience analytics_management_remarketing_audience_patch(account_id, web_property_id, remarketing_audience_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, remarketing_audience=remarketing_audience)



Updates an existing remarketing audience. This method supports patch semantics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.remarketing_audience import RemarketingAudience
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | The account ID of the remarketing audience to update.
    web_property_id = 'web_property_id_example' # str | The web property ID of the remarketing audience to update.
    remarketing_audience_id = 'remarketing_audience_id_example' # str | The ID of the remarketing audience to update.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    remarketing_audience = openapi_client.RemarketingAudience() # RemarketingAudience |  (optional)

    try:
        api_response = api_instance.analytics_management_remarketing_audience_patch(account_id, web_property_id, remarketing_audience_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, remarketing_audience=remarketing_audience)
        print("The response of ManagementApi->analytics_management_remarketing_audience_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_remarketing_audience_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| The account ID of the remarketing audience to update. | 
 **web_property_id** | **str**| The web property ID of the remarketing audience to update. | 
 **remarketing_audience_id** | **str**| The ID of the remarketing audience to update. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **remarketing_audience** | [**RemarketingAudience**](RemarketingAudience.md)|  | [optional] 

### Return type

[**RemarketingAudience**](RemarketingAudience.md)

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

# **analytics_management_remarketing_audience_update**
> RemarketingAudience analytics_management_remarketing_audience_update(account_id, web_property_id, remarketing_audience_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, remarketing_audience=remarketing_audience)



Updates an existing remarketing audience.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.remarketing_audience import RemarketingAudience
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | The account ID of the remarketing audience to update.
    web_property_id = 'web_property_id_example' # str | The web property ID of the remarketing audience to update.
    remarketing_audience_id = 'remarketing_audience_id_example' # str | The ID of the remarketing audience to update.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    remarketing_audience = openapi_client.RemarketingAudience() # RemarketingAudience |  (optional)

    try:
        api_response = api_instance.analytics_management_remarketing_audience_update(account_id, web_property_id, remarketing_audience_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, remarketing_audience=remarketing_audience)
        print("The response of ManagementApi->analytics_management_remarketing_audience_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_remarketing_audience_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| The account ID of the remarketing audience to update. | 
 **web_property_id** | **str**| The web property ID of the remarketing audience to update. | 
 **remarketing_audience_id** | **str**| The ID of the remarketing audience to update. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **remarketing_audience** | [**RemarketingAudience**](RemarketingAudience.md)|  | [optional] 

### Return type

[**RemarketingAudience**](RemarketingAudience.md)

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

# **analytics_management_segments_list**
> Segments analytics_management_segments_list(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)



Lists segments to which the user has access.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.segments import Segments
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    max_results = 56 # int | The maximum number of segments to include in this response. (optional)
    start_index = 56 # int | An index of the first segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. (optional)

    try:
        api_response = api_instance.analytics_management_segments_list(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)
        print("The response of ManagementApi->analytics_management_segments_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_segments_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **max_results** | **int**| The maximum number of segments to include in this response. | [optional] 
 **start_index** | **int**| An index of the first segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. | [optional] 

### Return type

[**Segments**](Segments.md)

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

# **analytics_management_unsampled_reports_delete**
> analytics_management_unsampled_reports_delete(account_id, web_property_id, profile_id, unsampled_report_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Deletes an unsampled report.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to delete the unsampled report for.
    web_property_id = 'web_property_id_example' # str | Web property ID to delete the unsampled reports for.
    profile_id = 'profile_id_example' # str | View (Profile) ID to delete the unsampled report for.
    unsampled_report_id = 'unsampled_report_id_example' # str | ID of the unsampled report to be deleted.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_instance.analytics_management_unsampled_reports_delete(account_id, web_property_id, profile_id, unsampled_report_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_unsampled_reports_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to delete the unsampled report for. | 
 **web_property_id** | **str**| Web property ID to delete the unsampled reports for. | 
 **profile_id** | **str**| View (Profile) ID to delete the unsampled report for. | 
 **unsampled_report_id** | **str**| ID of the unsampled report to be deleted. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

void (empty response body)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_management_unsampled_reports_get**
> UnsampledReport analytics_management_unsampled_reports_get(account_id, web_property_id, profile_id, unsampled_report_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Returns a single unsampled report.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.unsampled_report import UnsampledReport
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to retrieve unsampled report for.
    web_property_id = 'web_property_id_example' # str | Web property ID to retrieve unsampled reports for.
    profile_id = 'profile_id_example' # str | View (Profile) ID to retrieve unsampled report for.
    unsampled_report_id = 'unsampled_report_id_example' # str | ID of the unsampled report to retrieve.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.analytics_management_unsampled_reports_get(account_id, web_property_id, profile_id, unsampled_report_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of ManagementApi->analytics_management_unsampled_reports_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_unsampled_reports_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to retrieve unsampled report for. | 
 **web_property_id** | **str**| Web property ID to retrieve unsampled reports for. | 
 **profile_id** | **str**| View (Profile) ID to retrieve unsampled report for. | 
 **unsampled_report_id** | **str**| ID of the unsampled report to retrieve. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**UnsampledReport**](UnsampledReport.md)

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

# **analytics_management_unsampled_reports_insert**
> UnsampledReport analytics_management_unsampled_reports_insert(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, unsampled_report=unsampled_report)



Create a new unsampled report.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.unsampled_report import UnsampledReport
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to create the unsampled report for.
    web_property_id = 'web_property_id_example' # str | Web property ID to create the unsampled report for.
    profile_id = 'profile_id_example' # str | View (Profile) ID to create the unsampled report for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    unsampled_report = openapi_client.UnsampledReport() # UnsampledReport |  (optional)

    try:
        api_response = api_instance.analytics_management_unsampled_reports_insert(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, unsampled_report=unsampled_report)
        print("The response of ManagementApi->analytics_management_unsampled_reports_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_unsampled_reports_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to create the unsampled report for. | 
 **web_property_id** | **str**| Web property ID to create the unsampled report for. | 
 **profile_id** | **str**| View (Profile) ID to create the unsampled report for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **unsampled_report** | [**UnsampledReport**](UnsampledReport.md)|  | [optional] 

### Return type

[**UnsampledReport**](UnsampledReport.md)

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

# **analytics_management_unsampled_reports_list**
> UnsampledReports analytics_management_unsampled_reports_list(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)



Lists unsampled reports to which the user has access.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.unsampled_reports import UnsampledReports
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to retrieve unsampled reports for. Must be a specific account ID, ~all is not supported.
    web_property_id = 'web_property_id_example' # str | Web property ID to retrieve unsampled reports for. Must be a specific web property ID, ~all is not supported.
    profile_id = 'profile_id_example' # str | View (Profile) ID to retrieve unsampled reports for. Must be a specific view (profile) ID, ~all is not supported.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    max_results = 56 # int | The maximum number of unsampled reports to include in this response. (optional)
    start_index = 56 # int | An index of the first unsampled report to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. (optional)

    try:
        api_response = api_instance.analytics_management_unsampled_reports_list(account_id, web_property_id, profile_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)
        print("The response of ManagementApi->analytics_management_unsampled_reports_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_unsampled_reports_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to retrieve unsampled reports for. Must be a specific account ID, ~all is not supported. | 
 **web_property_id** | **str**| Web property ID to retrieve unsampled reports for. Must be a specific web property ID, ~all is not supported. | 
 **profile_id** | **str**| View (Profile) ID to retrieve unsampled reports for. Must be a specific view (profile) ID, ~all is not supported. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **max_results** | **int**| The maximum number of unsampled reports to include in this response. | [optional] 
 **start_index** | **int**| An index of the first unsampled report to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. | [optional] 

### Return type

[**UnsampledReports**](UnsampledReports.md)

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

# **analytics_management_uploads_delete_upload_data**
> analytics_management_uploads_delete_upload_data(account_id, web_property_id, custom_data_source_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, analytics_dataimport_delete_upload_data_request=analytics_dataimport_delete_upload_data_request)



Delete data associated with a previous upload.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.analytics_dataimport_delete_upload_data_request import AnalyticsDataimportDeleteUploadDataRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account Id for the uploads to be deleted.
    web_property_id = 'web_property_id_example' # str | Web property Id for the uploads to be deleted.
    custom_data_source_id = 'custom_data_source_id_example' # str | Custom data source Id for the uploads to be deleted.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    analytics_dataimport_delete_upload_data_request = openapi_client.AnalyticsDataimportDeleteUploadDataRequest() # AnalyticsDataimportDeleteUploadDataRequest |  (optional)

    try:
        api_instance.analytics_management_uploads_delete_upload_data(account_id, web_property_id, custom_data_source_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, analytics_dataimport_delete_upload_data_request=analytics_dataimport_delete_upload_data_request)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_uploads_delete_upload_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account Id for the uploads to be deleted. | 
 **web_property_id** | **str**| Web property Id for the uploads to be deleted. | 
 **custom_data_source_id** | **str**| Custom data source Id for the uploads to be deleted. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **analytics_dataimport_delete_upload_data_request** | [**AnalyticsDataimportDeleteUploadDataRequest**](AnalyticsDataimportDeleteUploadDataRequest.md)|  | [optional] 

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

# **analytics_management_uploads_get**
> Upload analytics_management_uploads_get(account_id, web_property_id, custom_data_source_id, upload_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



List uploads to which the user has access.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.upload import Upload
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account Id for the upload to retrieve.
    web_property_id = 'web_property_id_example' # str | Web property Id for the upload to retrieve.
    custom_data_source_id = 'custom_data_source_id_example' # str | Custom data source Id for upload to retrieve.
    upload_id = 'upload_id_example' # str | Upload Id to retrieve.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.analytics_management_uploads_get(account_id, web_property_id, custom_data_source_id, upload_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of ManagementApi->analytics_management_uploads_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_uploads_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account Id for the upload to retrieve. | 
 **web_property_id** | **str**| Web property Id for the upload to retrieve. | 
 **custom_data_source_id** | **str**| Custom data source Id for upload to retrieve. | 
 **upload_id** | **str**| Upload Id to retrieve. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**Upload**](Upload.md)

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

# **analytics_management_uploads_list**
> Uploads analytics_management_uploads_list(account_id, web_property_id, custom_data_source_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)



List uploads to which the user has access.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.uploads import Uploads
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account Id for the uploads to retrieve.
    web_property_id = 'web_property_id_example' # str | Web property Id for the uploads to retrieve.
    custom_data_source_id = 'custom_data_source_id_example' # str | Custom data source Id for uploads to retrieve.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    max_results = 56 # int | The maximum number of uploads to include in this response. (optional)
    start_index = 56 # int | A 1-based index of the first upload to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. (optional)

    try:
        api_response = api_instance.analytics_management_uploads_list(account_id, web_property_id, custom_data_source_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)
        print("The response of ManagementApi->analytics_management_uploads_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_uploads_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account Id for the uploads to retrieve. | 
 **web_property_id** | **str**| Web property Id for the uploads to retrieve. | 
 **custom_data_source_id** | **str**| Custom data source Id for uploads to retrieve. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **max_results** | **int**| The maximum number of uploads to include in this response. | [optional] 
 **start_index** | **int**| A 1-based index of the first upload to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. | [optional] 

### Return type

[**Uploads**](Uploads.md)

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

# **analytics_management_uploads_upload_data**
> Upload analytics_management_uploads_upload_data(account_id, web_property_id, custom_data_source_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Upload data for a custom data source.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.upload import Upload
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account Id associated with the upload.
    web_property_id = 'web_property_id_example' # str | Web property UA-string associated with the upload.
    custom_data_source_id = 'custom_data_source_id_example' # str | Custom data source Id to which the data being uploaded belongs.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.analytics_management_uploads_upload_data(account_id, web_property_id, custom_data_source_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of ManagementApi->analytics_management_uploads_upload_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_uploads_upload_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account Id associated with the upload. | 
 **web_property_id** | **str**| Web property UA-string associated with the upload. | 
 **custom_data_source_id** | **str**| Custom data source Id to which the data being uploaded belongs. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**Upload**](Upload.md)

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

# **analytics_management_web_property_ad_words_links_delete**
> analytics_management_web_property_ad_words_links_delete(account_id, web_property_id, web_property_ad_words_link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Deletes a web property-Google Ads link.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | ID of the account which the given web property belongs to.
    web_property_id = 'web_property_id_example' # str | Web property ID to delete the Google Ads link for.
    web_property_ad_words_link_id = 'web_property_ad_words_link_id_example' # str | Web property Google Ads link ID.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_instance.analytics_management_web_property_ad_words_links_delete(account_id, web_property_id, web_property_ad_words_link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_web_property_ad_words_links_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| ID of the account which the given web property belongs to. | 
 **web_property_id** | **str**| Web property ID to delete the Google Ads link for. | 
 **web_property_ad_words_link_id** | **str**| Web property Google Ads link ID. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

void (empty response body)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_management_web_property_ad_words_links_get**
> EntityAdWordsLink analytics_management_web_property_ad_words_links_get(account_id, web_property_id, web_property_ad_words_link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Returns a web property-Google Ads link to which the user has access.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.entity_ad_words_link import EntityAdWordsLink
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | ID of the account which the given web property belongs to.
    web_property_id = 'web_property_id_example' # str | Web property ID to retrieve the Google Ads link for.
    web_property_ad_words_link_id = 'web_property_ad_words_link_id_example' # str | Web property-Google Ads link ID.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.analytics_management_web_property_ad_words_links_get(account_id, web_property_id, web_property_ad_words_link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of ManagementApi->analytics_management_web_property_ad_words_links_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_web_property_ad_words_links_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| ID of the account which the given web property belongs to. | 
 **web_property_id** | **str**| Web property ID to retrieve the Google Ads link for. | 
 **web_property_ad_words_link_id** | **str**| Web property-Google Ads link ID. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**EntityAdWordsLink**](EntityAdWordsLink.md)

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

# **analytics_management_web_property_ad_words_links_insert**
> EntityAdWordsLink analytics_management_web_property_ad_words_links_insert(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, entity_ad_words_link=entity_ad_words_link)



Creates a webProperty-Google Ads link.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.entity_ad_words_link import EntityAdWordsLink
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | ID of the Google Analytics account to create the link for.
    web_property_id = 'web_property_id_example' # str | Web property ID to create the link for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    entity_ad_words_link = openapi_client.EntityAdWordsLink() # EntityAdWordsLink |  (optional)

    try:
        api_response = api_instance.analytics_management_web_property_ad_words_links_insert(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, entity_ad_words_link=entity_ad_words_link)
        print("The response of ManagementApi->analytics_management_web_property_ad_words_links_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_web_property_ad_words_links_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| ID of the Google Analytics account to create the link for. | 
 **web_property_id** | **str**| Web property ID to create the link for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **entity_ad_words_link** | [**EntityAdWordsLink**](EntityAdWordsLink.md)|  | [optional] 

### Return type

[**EntityAdWordsLink**](EntityAdWordsLink.md)

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

# **analytics_management_web_property_ad_words_links_list**
> EntityAdWordsLinks analytics_management_web_property_ad_words_links_list(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)



Lists webProperty-Google Ads links for a given web property.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.entity_ad_words_links import EntityAdWordsLinks
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | ID of the account which the given web property belongs to.
    web_property_id = 'web_property_id_example' # str | Web property ID to retrieve the Google Ads links for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    max_results = 56 # int | The maximum number of webProperty-Google Ads links to include in this response. (optional)
    start_index = 56 # int | An index of the first webProperty-Google Ads link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. (optional)

    try:
        api_response = api_instance.analytics_management_web_property_ad_words_links_list(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)
        print("The response of ManagementApi->analytics_management_web_property_ad_words_links_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_web_property_ad_words_links_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| ID of the account which the given web property belongs to. | 
 **web_property_id** | **str**| Web property ID to retrieve the Google Ads links for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **max_results** | **int**| The maximum number of webProperty-Google Ads links to include in this response. | [optional] 
 **start_index** | **int**| An index of the first webProperty-Google Ads link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. | [optional] 

### Return type

[**EntityAdWordsLinks**](EntityAdWordsLinks.md)

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

# **analytics_management_web_property_ad_words_links_patch**
> EntityAdWordsLink analytics_management_web_property_ad_words_links_patch(account_id, web_property_id, web_property_ad_words_link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, entity_ad_words_link=entity_ad_words_link)



Updates an existing webProperty-Google Ads link. This method supports patch semantics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.entity_ad_words_link import EntityAdWordsLink
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | ID of the account which the given web property belongs to.
    web_property_id = 'web_property_id_example' # str | Web property ID to retrieve the Google Ads link for.
    web_property_ad_words_link_id = 'web_property_ad_words_link_id_example' # str | Web property-Google Ads link ID.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    entity_ad_words_link = openapi_client.EntityAdWordsLink() # EntityAdWordsLink |  (optional)

    try:
        api_response = api_instance.analytics_management_web_property_ad_words_links_patch(account_id, web_property_id, web_property_ad_words_link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, entity_ad_words_link=entity_ad_words_link)
        print("The response of ManagementApi->analytics_management_web_property_ad_words_links_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_web_property_ad_words_links_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| ID of the account which the given web property belongs to. | 
 **web_property_id** | **str**| Web property ID to retrieve the Google Ads link for. | 
 **web_property_ad_words_link_id** | **str**| Web property-Google Ads link ID. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **entity_ad_words_link** | [**EntityAdWordsLink**](EntityAdWordsLink.md)|  | [optional] 

### Return type

[**EntityAdWordsLink**](EntityAdWordsLink.md)

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

# **analytics_management_web_property_ad_words_links_update**
> EntityAdWordsLink analytics_management_web_property_ad_words_links_update(account_id, web_property_id, web_property_ad_words_link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, entity_ad_words_link=entity_ad_words_link)



Updates an existing webProperty-Google Ads link.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.entity_ad_words_link import EntityAdWordsLink
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | ID of the account which the given web property belongs to.
    web_property_id = 'web_property_id_example' # str | Web property ID to retrieve the Google Ads link for.
    web_property_ad_words_link_id = 'web_property_ad_words_link_id_example' # str | Web property-Google Ads link ID.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    entity_ad_words_link = openapi_client.EntityAdWordsLink() # EntityAdWordsLink |  (optional)

    try:
        api_response = api_instance.analytics_management_web_property_ad_words_links_update(account_id, web_property_id, web_property_ad_words_link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, entity_ad_words_link=entity_ad_words_link)
        print("The response of ManagementApi->analytics_management_web_property_ad_words_links_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_web_property_ad_words_links_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| ID of the account which the given web property belongs to. | 
 **web_property_id** | **str**| Web property ID to retrieve the Google Ads link for. | 
 **web_property_ad_words_link_id** | **str**| Web property-Google Ads link ID. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **entity_ad_words_link** | [**EntityAdWordsLink**](EntityAdWordsLink.md)|  | [optional] 

### Return type

[**EntityAdWordsLink**](EntityAdWordsLink.md)

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

# **analytics_management_webproperties_get**
> Webproperty analytics_management_webproperties_get(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Gets a web property to which the user has access.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.webproperty import Webproperty
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to retrieve the web property for.
    web_property_id = 'web_property_id_example' # str | ID to retrieve the web property for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.analytics_management_webproperties_get(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of ManagementApi->analytics_management_webproperties_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_webproperties_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to retrieve the web property for. | 
 **web_property_id** | **str**| ID to retrieve the web property for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**Webproperty**](Webproperty.md)

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

# **analytics_management_webproperties_insert**
> Webproperty analytics_management_webproperties_insert(account_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, webproperty=webproperty)



Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.webproperty import Webproperty
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to create the web property for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    webproperty = openapi_client.Webproperty() # Webproperty |  (optional)

    try:
        api_response = api_instance.analytics_management_webproperties_insert(account_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, webproperty=webproperty)
        print("The response of ManagementApi->analytics_management_webproperties_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_webproperties_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to create the web property for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **webproperty** | [**Webproperty**](Webproperty.md)|  | [optional] 

### Return type

[**Webproperty**](Webproperty.md)

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

# **analytics_management_webproperties_list**
> Webproperties analytics_management_webproperties_list(account_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)



Lists web properties to which the user has access.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.webproperties import Webproperties
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    max_results = 56 # int | The maximum number of web properties to include in this response. (optional)
    start_index = 56 # int | An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. (optional)

    try:
        api_response = api_instance.analytics_management_webproperties_list(account_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)
        print("The response of ManagementApi->analytics_management_webproperties_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_webproperties_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to retrieve web properties for. Can either be a specific account ID or &#39;~all&#39;, which refers to all the accounts that user has access to. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **max_results** | **int**| The maximum number of web properties to include in this response. | [optional] 
 **start_index** | **int**| An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. | [optional] 

### Return type

[**Webproperties**](Webproperties.md)

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

# **analytics_management_webproperties_patch**
> Webproperty analytics_management_webproperties_patch(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, webproperty=webproperty)



Updates an existing web property. This method supports patch semantics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.webproperty import Webproperty
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to which the web property belongs
    web_property_id = 'web_property_id_example' # str | Web property ID
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    webproperty = openapi_client.Webproperty() # Webproperty |  (optional)

    try:
        api_response = api_instance.analytics_management_webproperties_patch(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, webproperty=webproperty)
        print("The response of ManagementApi->analytics_management_webproperties_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_webproperties_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to which the web property belongs | 
 **web_property_id** | **str**| Web property ID | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **webproperty** | [**Webproperty**](Webproperty.md)|  | [optional] 

### Return type

[**Webproperty**](Webproperty.md)

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

# **analytics_management_webproperties_update**
> Webproperty analytics_management_webproperties_update(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, webproperty=webproperty)



Updates an existing web property.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.webproperty import Webproperty
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to which the web property belongs
    web_property_id = 'web_property_id_example' # str | Web property ID
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    webproperty = openapi_client.Webproperty() # Webproperty |  (optional)

    try:
        api_response = api_instance.analytics_management_webproperties_update(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, webproperty=webproperty)
        print("The response of ManagementApi->analytics_management_webproperties_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_webproperties_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to which the web property belongs | 
 **web_property_id** | **str**| Web property ID | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **webproperty** | [**Webproperty**](Webproperty.md)|  | [optional] 

### Return type

[**Webproperty**](Webproperty.md)

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

# **analytics_management_webproperty_user_links_delete**
> analytics_management_webproperty_user_links_delete(account_id, web_property_id, link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Removes a user from the given web property.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to delete the user link for.
    web_property_id = 'web_property_id_example' # str | Web Property ID to delete the user link for.
    link_id = 'link_id_example' # str | Link ID to delete the user link for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_instance.analytics_management_webproperty_user_links_delete(account_id, web_property_id, link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_webproperty_user_links_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to delete the user link for. | 
 **web_property_id** | **str**| Web Property ID to delete the user link for. | 
 **link_id** | **str**| Link ID to delete the user link for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

void (empty response body)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_management_webproperty_user_links_insert**
> EntityUserLink analytics_management_webproperty_user_links_insert(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, entity_user_link=entity_user_link)



Adds a new user to the given web property.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.entity_user_link import EntityUserLink
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to create the user link for.
    web_property_id = 'web_property_id_example' # str | Web Property ID to create the user link for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    entity_user_link = openapi_client.EntityUserLink() # EntityUserLink |  (optional)

    try:
        api_response = api_instance.analytics_management_webproperty_user_links_insert(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, entity_user_link=entity_user_link)
        print("The response of ManagementApi->analytics_management_webproperty_user_links_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_webproperty_user_links_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to create the user link for. | 
 **web_property_id** | **str**| Web Property ID to create the user link for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **entity_user_link** | [**EntityUserLink**](EntityUserLink.md)|  | [optional] 

### Return type

[**EntityUserLink**](EntityUserLink.md)

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

# **analytics_management_webproperty_user_links_list**
> EntityUserLinks analytics_management_webproperty_user_links_list(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)



Lists webProperty-user links for a given web property.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.entity_user_links import EntityUserLinks
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID which the given web property belongs to.
    web_property_id = 'web_property_id_example' # str | Web Property ID for the webProperty-user links to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    max_results = 56 # int | The maximum number of webProperty-user Links to include in this response. (optional)
    start_index = 56 # int | An index of the first webProperty-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. (optional)

    try:
        api_response = api_instance.analytics_management_webproperty_user_links_list(account_id, web_property_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index)
        print("The response of ManagementApi->analytics_management_webproperty_user_links_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_webproperty_user_links_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID which the given web property belongs to. | 
 **web_property_id** | **str**| Web Property ID for the webProperty-user links to retrieve. Can either be a specific web property ID or &#39;~all&#39;, which refers to all the web properties that user has access to. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **max_results** | **int**| The maximum number of webProperty-user Links to include in this response. | [optional] 
 **start_index** | **int**| An index of the first webProperty-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. | [optional] 

### Return type

[**EntityUserLinks**](EntityUserLinks.md)

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

# **analytics_management_webproperty_user_links_update**
> EntityUserLink analytics_management_webproperty_user_links_update(account_id, web_property_id, link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, entity_user_link=entity_user_link)



Updates permissions for an existing user on the given web property.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.entity_user_link import EntityUserLink
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.ManagementApi(api_client)
    account_id = 'account_id_example' # str | Account ID to update the account-user link for.
    web_property_id = 'web_property_id_example' # str | Web property ID to update the account-user link for.
    link_id = 'link_id_example' # str | Link ID to update the account-user link for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    entity_user_link = openapi_client.EntityUserLink() # EntityUserLink |  (optional)

    try:
        api_response = api_instance.analytics_management_webproperty_user_links_update(account_id, web_property_id, link_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, entity_user_link=entity_user_link)
        print("The response of ManagementApi->analytics_management_webproperty_user_links_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->analytics_management_webproperty_user_links_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account ID to update the account-user link for. | 
 **web_property_id** | **str**| Web property ID to update the account-user link for. | 
 **link_id** | **str**| Link ID to update the account-user link for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **entity_user_link** | [**EntityUserLink**](EntityUserLink.md)|  | [optional] 

### Return type

[**EntityUserLink**](EntityUserLink.md)

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


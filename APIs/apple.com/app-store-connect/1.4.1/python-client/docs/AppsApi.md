# openapi_client.AppsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apps_app_infos_get_to_many_related**](AppsApi.md#apps_app_infos_get_to_many_related) | **GET** /v1/apps/{id}/appInfos | 
[**apps_app_store_versions_get_to_many_related**](AppsApi.md#apps_app_store_versions_get_to_many_related) | **GET** /v1/apps/{id}/appStoreVersions | 
[**apps_available_territories_get_to_many_related**](AppsApi.md#apps_available_territories_get_to_many_related) | **GET** /v1/apps/{id}/availableTerritories | 
[**apps_beta_app_localizations_get_to_many_related**](AppsApi.md#apps_beta_app_localizations_get_to_many_related) | **GET** /v1/apps/{id}/betaAppLocalizations | 
[**apps_beta_app_review_detail_get_to_one_related**](AppsApi.md#apps_beta_app_review_detail_get_to_one_related) | **GET** /v1/apps/{id}/betaAppReviewDetail | 
[**apps_beta_groups_get_to_many_related**](AppsApi.md#apps_beta_groups_get_to_many_related) | **GET** /v1/apps/{id}/betaGroups | 
[**apps_beta_license_agreement_get_to_one_related**](AppsApi.md#apps_beta_license_agreement_get_to_one_related) | **GET** /v1/apps/{id}/betaLicenseAgreement | 
[**apps_beta_testers_delete_to_many_relationship**](AppsApi.md#apps_beta_testers_delete_to_many_relationship) | **DELETE** /v1/apps/{id}/relationships/betaTesters | 
[**apps_builds_get_to_many_related**](AppsApi.md#apps_builds_get_to_many_related) | **GET** /v1/apps/{id}/builds | 
[**apps_end_user_license_agreement_get_to_one_related**](AppsApi.md#apps_end_user_license_agreement_get_to_one_related) | **GET** /v1/apps/{id}/endUserLicenseAgreement | 
[**apps_game_center_enabled_versions_get_to_many_related**](AppsApi.md#apps_game_center_enabled_versions_get_to_many_related) | **GET** /v1/apps/{id}/gameCenterEnabledVersions | 
[**apps_get_collection**](AppsApi.md#apps_get_collection) | **GET** /v1/apps | 
[**apps_get_instance**](AppsApi.md#apps_get_instance) | **GET** /v1/apps/{id} | 
[**apps_in_app_purchases_get_to_many_related**](AppsApi.md#apps_in_app_purchases_get_to_many_related) | **GET** /v1/apps/{id}/inAppPurchases | 
[**apps_perf_power_metrics_get_to_many_related**](AppsApi.md#apps_perf_power_metrics_get_to_many_related) | **GET** /v1/apps/{id}/perfPowerMetrics | 
[**apps_pre_order_get_to_one_related**](AppsApi.md#apps_pre_order_get_to_one_related) | **GET** /v1/apps/{id}/preOrder | 
[**apps_pre_release_versions_get_to_many_related**](AppsApi.md#apps_pre_release_versions_get_to_many_related) | **GET** /v1/apps/{id}/preReleaseVersions | 
[**apps_prices_get_to_many_related**](AppsApi.md#apps_prices_get_to_many_related) | **GET** /v1/apps/{id}/prices | 
[**apps_update_instance**](AppsApi.md#apps_update_instance) | **PATCH** /v1/apps/{id} | 


# **apps_app_infos_get_to_many_related**
> AppInfosResponse apps_app_infos_get_to_many_related(id, fields_age_rating_declarations=fields_age_rating_declarations, fields_app_infos=fields_app_infos, fields_app_categories=fields_app_categories, fields_app_info_localizations=fields_app_info_localizations, fields_apps=fields_apps, limit=limit, include=include)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_infos_response import AppInfosResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_age_rating_declarations = ['fields_age_rating_declarations_example'] # List[str] | the fields to include for returned resources of type ageRatingDeclarations (optional)
    fields_app_infos = ['fields_app_infos_example'] # List[str] | the fields to include for returned resources of type appInfos (optional)
    fields_app_categories = ['fields_app_categories_example'] # List[str] | the fields to include for returned resources of type appCategories (optional)
    fields_app_info_localizations = ['fields_app_info_localizations_example'] # List[str] | the fields to include for returned resources of type appInfoLocalizations (optional)
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)
    limit = 56 # int | maximum resources per page (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)

    try:
        api_response = api_instance.apps_app_infos_get_to_many_related(id, fields_age_rating_declarations=fields_age_rating_declarations, fields_app_infos=fields_app_infos, fields_app_categories=fields_app_categories, fields_app_info_localizations=fields_app_info_localizations, fields_apps=fields_apps, limit=limit, include=include)
        print("The response of AppsApi->apps_app_infos_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_app_infos_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_age_rating_declarations** | [**List[str]**](str.md)| the fields to include for returned resources of type ageRatingDeclarations | [optional] 
 **fields_app_infos** | [**List[str]**](str.md)| the fields to include for returned resources of type appInfos | [optional] 
 **fields_app_categories** | [**List[str]**](str.md)| the fields to include for returned resources of type appCategories | [optional] 
 **fields_app_info_localizations** | [**List[str]**](str.md)| the fields to include for returned resources of type appInfoLocalizations | [optional] 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppInfosResponse**](AppInfosResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of related resources |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_app_store_versions_get_to_many_related**
> AppStoreVersionsResponse apps_app_store_versions_get_to_many_related(id, filter_app_store_state=filter_app_store_state, filter_platform=filter_platform, filter_version_string=filter_version_string, filter_id=filter_id, fields_idfa_declarations=fields_idfa_declarations, fields_app_store_version_localizations=fields_app_store_version_localizations, fields_routing_app_coverages=fields_routing_app_coverages, fields_app_store_version_phased_releases=fields_app_store_version_phased_releases, fields_age_rating_declarations=fields_age_rating_declarations, fields_app_store_review_details=fields_app_store_review_details, fields_app_store_versions=fields_app_store_versions, fields_builds=fields_builds, fields_app_store_version_submissions=fields_app_store_version_submissions, fields_apps=fields_apps, limit=limit, include=include)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_store_versions_response import AppStoreVersionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    filter_app_store_state = ['filter_app_store_state_example'] # List[str] | filter by attribute 'appStoreState' (optional)
    filter_platform = ['filter_platform_example'] # List[str] | filter by attribute 'platform' (optional)
    filter_version_string = ['filter_version_string_example'] # List[str] | filter by attribute 'versionString' (optional)
    filter_id = ['filter_id_example'] # List[str] | filter by id(s) (optional)
    fields_idfa_declarations = ['fields_idfa_declarations_example'] # List[str] | the fields to include for returned resources of type idfaDeclarations (optional)
    fields_app_store_version_localizations = ['fields_app_store_version_localizations_example'] # List[str] | the fields to include for returned resources of type appStoreVersionLocalizations (optional)
    fields_routing_app_coverages = ['fields_routing_app_coverages_example'] # List[str] | the fields to include for returned resources of type routingAppCoverages (optional)
    fields_app_store_version_phased_releases = ['fields_app_store_version_phased_releases_example'] # List[str] | the fields to include for returned resources of type appStoreVersionPhasedReleases (optional)
    fields_age_rating_declarations = ['fields_age_rating_declarations_example'] # List[str] | the fields to include for returned resources of type ageRatingDeclarations (optional)
    fields_app_store_review_details = ['fields_app_store_review_details_example'] # List[str] | the fields to include for returned resources of type appStoreReviewDetails (optional)
    fields_app_store_versions = ['fields_app_store_versions_example'] # List[str] | the fields to include for returned resources of type appStoreVersions (optional)
    fields_builds = ['fields_builds_example'] # List[str] | the fields to include for returned resources of type builds (optional)
    fields_app_store_version_submissions = ['fields_app_store_version_submissions_example'] # List[str] | the fields to include for returned resources of type appStoreVersionSubmissions (optional)
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)
    limit = 56 # int | maximum resources per page (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)

    try:
        api_response = api_instance.apps_app_store_versions_get_to_many_related(id, filter_app_store_state=filter_app_store_state, filter_platform=filter_platform, filter_version_string=filter_version_string, filter_id=filter_id, fields_idfa_declarations=fields_idfa_declarations, fields_app_store_version_localizations=fields_app_store_version_localizations, fields_routing_app_coverages=fields_routing_app_coverages, fields_app_store_version_phased_releases=fields_app_store_version_phased_releases, fields_age_rating_declarations=fields_age_rating_declarations, fields_app_store_review_details=fields_app_store_review_details, fields_app_store_versions=fields_app_store_versions, fields_builds=fields_builds, fields_app_store_version_submissions=fields_app_store_version_submissions, fields_apps=fields_apps, limit=limit, include=include)
        print("The response of AppsApi->apps_app_store_versions_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_app_store_versions_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **filter_app_store_state** | [**List[str]**](str.md)| filter by attribute &#39;appStoreState&#39; | [optional] 
 **filter_platform** | [**List[str]**](str.md)| filter by attribute &#39;platform&#39; | [optional] 
 **filter_version_string** | [**List[str]**](str.md)| filter by attribute &#39;versionString&#39; | [optional] 
 **filter_id** | [**List[str]**](str.md)| filter by id(s) | [optional] 
 **fields_idfa_declarations** | [**List[str]**](str.md)| the fields to include for returned resources of type idfaDeclarations | [optional] 
 **fields_app_store_version_localizations** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreVersionLocalizations | [optional] 
 **fields_routing_app_coverages** | [**List[str]**](str.md)| the fields to include for returned resources of type routingAppCoverages | [optional] 
 **fields_app_store_version_phased_releases** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreVersionPhasedReleases | [optional] 
 **fields_age_rating_declarations** | [**List[str]**](str.md)| the fields to include for returned resources of type ageRatingDeclarations | [optional] 
 **fields_app_store_review_details** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreReviewDetails | [optional] 
 **fields_app_store_versions** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreVersions | [optional] 
 **fields_builds** | [**List[str]**](str.md)| the fields to include for returned resources of type builds | [optional] 
 **fields_app_store_version_submissions** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreVersionSubmissions | [optional] 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppStoreVersionsResponse**](AppStoreVersionsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of related resources |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_available_territories_get_to_many_related**
> TerritoriesResponse apps_available_territories_get_to_many_related(id, fields_territories=fields_territories, limit=limit)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.territories_response import TerritoriesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_territories = ['fields_territories_example'] # List[str] | the fields to include for returned resources of type territories (optional)
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.apps_available_territories_get_to_many_related(id, fields_territories=fields_territories, limit=limit)
        print("The response of AppsApi->apps_available_territories_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_available_territories_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_territories** | [**List[str]**](str.md)| the fields to include for returned resources of type territories | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 

### Return type

[**TerritoriesResponse**](TerritoriesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of related resources |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_beta_app_localizations_get_to_many_related**
> BetaAppLocalizationsResponse apps_beta_app_localizations_get_to_many_related(id, fields_beta_app_localizations=fields_beta_app_localizations, limit=limit)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_app_localizations_response import BetaAppLocalizationsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_beta_app_localizations = ['fields_beta_app_localizations_example'] # List[str] | the fields to include for returned resources of type betaAppLocalizations (optional)
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.apps_beta_app_localizations_get_to_many_related(id, fields_beta_app_localizations=fields_beta_app_localizations, limit=limit)
        print("The response of AppsApi->apps_beta_app_localizations_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_beta_app_localizations_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_beta_app_localizations** | [**List[str]**](str.md)| the fields to include for returned resources of type betaAppLocalizations | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 

### Return type

[**BetaAppLocalizationsResponse**](BetaAppLocalizationsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of related resources |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_beta_app_review_detail_get_to_one_related**
> BetaAppReviewDetailResponse apps_beta_app_review_detail_get_to_one_related(id, fields_beta_app_review_details=fields_beta_app_review_details)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_app_review_detail_response import BetaAppReviewDetailResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_beta_app_review_details = ['fields_beta_app_review_details_example'] # List[str] | the fields to include for returned resources of type betaAppReviewDetails (optional)

    try:
        api_response = api_instance.apps_beta_app_review_detail_get_to_one_related(id, fields_beta_app_review_details=fields_beta_app_review_details)
        print("The response of AppsApi->apps_beta_app_review_detail_get_to_one_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_beta_app_review_detail_get_to_one_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_beta_app_review_details** | [**List[str]**](str.md)| the fields to include for returned resources of type betaAppReviewDetails | [optional] 

### Return type

[**BetaAppReviewDetailResponse**](BetaAppReviewDetailResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Related resource |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_beta_groups_get_to_many_related**
> BetaGroupsResponse apps_beta_groups_get_to_many_related(id, fields_beta_groups=fields_beta_groups, limit=limit)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_groups_response import BetaGroupsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_beta_groups = ['fields_beta_groups_example'] # List[str] | the fields to include for returned resources of type betaGroups (optional)
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.apps_beta_groups_get_to_many_related(id, fields_beta_groups=fields_beta_groups, limit=limit)
        print("The response of AppsApi->apps_beta_groups_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_beta_groups_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_beta_groups** | [**List[str]**](str.md)| the fields to include for returned resources of type betaGroups | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 

### Return type

[**BetaGroupsResponse**](BetaGroupsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of related resources |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_beta_license_agreement_get_to_one_related**
> BetaLicenseAgreementResponse apps_beta_license_agreement_get_to_one_related(id, fields_beta_license_agreements=fields_beta_license_agreements)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_license_agreement_response import BetaLicenseAgreementResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_beta_license_agreements = ['fields_beta_license_agreements_example'] # List[str] | the fields to include for returned resources of type betaLicenseAgreements (optional)

    try:
        api_response = api_instance.apps_beta_license_agreement_get_to_one_related(id, fields_beta_license_agreements=fields_beta_license_agreements)
        print("The response of AppsApi->apps_beta_license_agreement_get_to_one_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_beta_license_agreement_get_to_one_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_beta_license_agreements** | [**List[str]**](str.md)| the fields to include for returned resources of type betaLicenseAgreements | [optional] 

### Return type

[**BetaLicenseAgreementResponse**](BetaLicenseAgreementResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Related resource |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_beta_testers_delete_to_many_relationship**
> apps_beta_testers_delete_to_many_relationship(id, app_beta_testers_linkages_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_beta_testers_linkages_request import AppBetaTestersLinkagesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    app_beta_testers_linkages_request = openapi_client.AppBetaTestersLinkagesRequest() # AppBetaTestersLinkagesRequest | List of related linkages

    try:
        api_instance.apps_beta_testers_delete_to_many_relationship(id, app_beta_testers_linkages_request)
    except Exception as e:
        print("Exception when calling AppsApi->apps_beta_testers_delete_to_many_relationship: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **app_beta_testers_linkages_request** | [**AppBetaTestersLinkagesRequest**](AppBetaTestersLinkagesRequest.md)| List of related linkages | 

### Return type

void (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success (no content) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_builds_get_to_many_related**
> BuildsResponse apps_builds_get_to_many_related(id, fields_builds=fields_builds, limit=limit)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.builds_response import BuildsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_builds = ['fields_builds_example'] # List[str] | the fields to include for returned resources of type builds (optional)
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.apps_builds_get_to_many_related(id, fields_builds=fields_builds, limit=limit)
        print("The response of AppsApi->apps_builds_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_builds_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_builds** | [**List[str]**](str.md)| the fields to include for returned resources of type builds | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 

### Return type

[**BuildsResponse**](BuildsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of related resources |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_end_user_license_agreement_get_to_one_related**
> EndUserLicenseAgreementResponse apps_end_user_license_agreement_get_to_one_related(id, fields_end_user_license_agreements=fields_end_user_license_agreements)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.end_user_license_agreement_response import EndUserLicenseAgreementResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_end_user_license_agreements = ['fields_end_user_license_agreements_example'] # List[str] | the fields to include for returned resources of type endUserLicenseAgreements (optional)

    try:
        api_response = api_instance.apps_end_user_license_agreement_get_to_one_related(id, fields_end_user_license_agreements=fields_end_user_license_agreements)
        print("The response of AppsApi->apps_end_user_license_agreement_get_to_one_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_end_user_license_agreement_get_to_one_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_end_user_license_agreements** | [**List[str]**](str.md)| the fields to include for returned resources of type endUserLicenseAgreements | [optional] 

### Return type

[**EndUserLicenseAgreementResponse**](EndUserLicenseAgreementResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Related resource |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_game_center_enabled_versions_get_to_many_related**
> GameCenterEnabledVersionsResponse apps_game_center_enabled_versions_get_to_many_related(id, filter_platform=filter_platform, filter_version_string=filter_version_string, filter_id=filter_id, sort=sort, fields_game_center_enabled_versions=fields_game_center_enabled_versions, fields_apps=fields_apps, limit=limit, include=include)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.game_center_enabled_versions_response import GameCenterEnabledVersionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    filter_platform = ['filter_platform_example'] # List[str] | filter by attribute 'platform' (optional)
    filter_version_string = ['filter_version_string_example'] # List[str] | filter by attribute 'versionString' (optional)
    filter_id = ['filter_id_example'] # List[str] | filter by id(s) (optional)
    sort = ['sort_example'] # List[str] | comma-separated list of sort expressions; resources will be sorted as specified (optional)
    fields_game_center_enabled_versions = ['fields_game_center_enabled_versions_example'] # List[str] | the fields to include for returned resources of type gameCenterEnabledVersions (optional)
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)
    limit = 56 # int | maximum resources per page (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)

    try:
        api_response = api_instance.apps_game_center_enabled_versions_get_to_many_related(id, filter_platform=filter_platform, filter_version_string=filter_version_string, filter_id=filter_id, sort=sort, fields_game_center_enabled_versions=fields_game_center_enabled_versions, fields_apps=fields_apps, limit=limit, include=include)
        print("The response of AppsApi->apps_game_center_enabled_versions_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_game_center_enabled_versions_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **filter_platform** | [**List[str]**](str.md)| filter by attribute &#39;platform&#39; | [optional] 
 **filter_version_string** | [**List[str]**](str.md)| filter by attribute &#39;versionString&#39; | [optional] 
 **filter_id** | [**List[str]**](str.md)| filter by id(s) | [optional] 
 **sort** | [**List[str]**](str.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fields_game_center_enabled_versions** | [**List[str]**](str.md)| the fields to include for returned resources of type gameCenterEnabledVersions | [optional] 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterEnabledVersionsResponse**](GameCenterEnabledVersionsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of related resources |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_get_collection**
> AppsResponse apps_get_collection(filter_app_store_versions_app_store_state=filter_app_store_versions_app_store_state, filter_app_store_versions_platform=filter_app_store_versions_platform, filter_bundle_id=filter_bundle_id, filter_name=filter_name, filter_sku=filter_sku, filter_app_store_versions=filter_app_store_versions, filter_id=filter_id, exists_game_center_enabled_versions=exists_game_center_enabled_versions, sort=sort, fields_apps=fields_apps, limit=limit, include=include, fields_beta_groups=fields_beta_groups, fields_perf_power_metrics=fields_perf_power_metrics, fields_app_infos=fields_app_infos, fields_app_pre_orders=fields_app_pre_orders, fields_pre_release_versions=fields_pre_release_versions, fields_app_prices=fields_app_prices, fields_in_app_purchases=fields_in_app_purchases, fields_beta_app_review_details=fields_beta_app_review_details, fields_territories=fields_territories, fields_game_center_enabled_versions=fields_game_center_enabled_versions, fields_app_store_versions=fields_app_store_versions, fields_builds=fields_builds, fields_beta_app_localizations=fields_beta_app_localizations, fields_beta_license_agreements=fields_beta_license_agreements, fields_end_user_license_agreements=fields_end_user_license_agreements, limit_app_infos=limit_app_infos, limit_app_store_versions=limit_app_store_versions, limit_available_territories=limit_available_territories, limit_beta_app_localizations=limit_beta_app_localizations, limit_beta_groups=limit_beta_groups, limit_builds=limit_builds, limit_game_center_enabled_versions=limit_game_center_enabled_versions, limit_in_app_purchases=limit_in_app_purchases, limit_pre_release_versions=limit_pre_release_versions, limit_prices=limit_prices)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.apps_response import AppsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    filter_app_store_versions_app_store_state = ['filter_app_store_versions_app_store_state_example'] # List[str] | filter by attribute 'appStoreVersions.appStoreState' (optional)
    filter_app_store_versions_platform = ['filter_app_store_versions_platform_example'] # List[str] | filter by attribute 'appStoreVersions.platform' (optional)
    filter_bundle_id = ['filter_bundle_id_example'] # List[str] | filter by attribute 'bundleId' (optional)
    filter_name = ['filter_name_example'] # List[str] | filter by attribute 'name' (optional)
    filter_sku = ['filter_sku_example'] # List[str] | filter by attribute 'sku' (optional)
    filter_app_store_versions = ['filter_app_store_versions_example'] # List[str] | filter by id(s) of related 'appStoreVersions' (optional)
    filter_id = ['filter_id_example'] # List[str] | filter by id(s) (optional)
    exists_game_center_enabled_versions = ['exists_game_center_enabled_versions_example'] # List[str] | filter by existence or non-existence of related 'gameCenterEnabledVersions' (optional)
    sort = ['sort_example'] # List[str] | comma-separated list of sort expressions; resources will be sorted as specified (optional)
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)
    limit = 56 # int | maximum resources per page (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_beta_groups = ['fields_beta_groups_example'] # List[str] | the fields to include for returned resources of type betaGroups (optional)
    fields_perf_power_metrics = ['fields_perf_power_metrics_example'] # List[str] | the fields to include for returned resources of type perfPowerMetrics (optional)
    fields_app_infos = ['fields_app_infos_example'] # List[str] | the fields to include for returned resources of type appInfos (optional)
    fields_app_pre_orders = ['fields_app_pre_orders_example'] # List[str] | the fields to include for returned resources of type appPreOrders (optional)
    fields_pre_release_versions = ['fields_pre_release_versions_example'] # List[str] | the fields to include for returned resources of type preReleaseVersions (optional)
    fields_app_prices = ['fields_app_prices_example'] # List[str] | the fields to include for returned resources of type appPrices (optional)
    fields_in_app_purchases = ['fields_in_app_purchases_example'] # List[str] | the fields to include for returned resources of type inAppPurchases (optional)
    fields_beta_app_review_details = ['fields_beta_app_review_details_example'] # List[str] | the fields to include for returned resources of type betaAppReviewDetails (optional)
    fields_territories = ['fields_territories_example'] # List[str] | the fields to include for returned resources of type territories (optional)
    fields_game_center_enabled_versions = ['fields_game_center_enabled_versions_example'] # List[str] | the fields to include for returned resources of type gameCenterEnabledVersions (optional)
    fields_app_store_versions = ['fields_app_store_versions_example'] # List[str] | the fields to include for returned resources of type appStoreVersions (optional)
    fields_builds = ['fields_builds_example'] # List[str] | the fields to include for returned resources of type builds (optional)
    fields_beta_app_localizations = ['fields_beta_app_localizations_example'] # List[str] | the fields to include for returned resources of type betaAppLocalizations (optional)
    fields_beta_license_agreements = ['fields_beta_license_agreements_example'] # List[str] | the fields to include for returned resources of type betaLicenseAgreements (optional)
    fields_end_user_license_agreements = ['fields_end_user_license_agreements_example'] # List[str] | the fields to include for returned resources of type endUserLicenseAgreements (optional)
    limit_app_infos = 56 # int | maximum number of related appInfos returned (when they are included) (optional)
    limit_app_store_versions = 56 # int | maximum number of related appStoreVersions returned (when they are included) (optional)
    limit_available_territories = 56 # int | maximum number of related availableTerritories returned (when they are included) (optional)
    limit_beta_app_localizations = 56 # int | maximum number of related betaAppLocalizations returned (when they are included) (optional)
    limit_beta_groups = 56 # int | maximum number of related betaGroups returned (when they are included) (optional)
    limit_builds = 56 # int | maximum number of related builds returned (when they are included) (optional)
    limit_game_center_enabled_versions = 56 # int | maximum number of related gameCenterEnabledVersions returned (when they are included) (optional)
    limit_in_app_purchases = 56 # int | maximum number of related inAppPurchases returned (when they are included) (optional)
    limit_pre_release_versions = 56 # int | maximum number of related preReleaseVersions returned (when they are included) (optional)
    limit_prices = 56 # int | maximum number of related prices returned (when they are included) (optional)

    try:
        api_response = api_instance.apps_get_collection(filter_app_store_versions_app_store_state=filter_app_store_versions_app_store_state, filter_app_store_versions_platform=filter_app_store_versions_platform, filter_bundle_id=filter_bundle_id, filter_name=filter_name, filter_sku=filter_sku, filter_app_store_versions=filter_app_store_versions, filter_id=filter_id, exists_game_center_enabled_versions=exists_game_center_enabled_versions, sort=sort, fields_apps=fields_apps, limit=limit, include=include, fields_beta_groups=fields_beta_groups, fields_perf_power_metrics=fields_perf_power_metrics, fields_app_infos=fields_app_infos, fields_app_pre_orders=fields_app_pre_orders, fields_pre_release_versions=fields_pre_release_versions, fields_app_prices=fields_app_prices, fields_in_app_purchases=fields_in_app_purchases, fields_beta_app_review_details=fields_beta_app_review_details, fields_territories=fields_territories, fields_game_center_enabled_versions=fields_game_center_enabled_versions, fields_app_store_versions=fields_app_store_versions, fields_builds=fields_builds, fields_beta_app_localizations=fields_beta_app_localizations, fields_beta_license_agreements=fields_beta_license_agreements, fields_end_user_license_agreements=fields_end_user_license_agreements, limit_app_infos=limit_app_infos, limit_app_store_versions=limit_app_store_versions, limit_available_territories=limit_available_territories, limit_beta_app_localizations=limit_beta_app_localizations, limit_beta_groups=limit_beta_groups, limit_builds=limit_builds, limit_game_center_enabled_versions=limit_game_center_enabled_versions, limit_in_app_purchases=limit_in_app_purchases, limit_pre_release_versions=limit_pre_release_versions, limit_prices=limit_prices)
        print("The response of AppsApi->apps_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_app_store_versions_app_store_state** | [**List[str]**](str.md)| filter by attribute &#39;appStoreVersions.appStoreState&#39; | [optional] 
 **filter_app_store_versions_platform** | [**List[str]**](str.md)| filter by attribute &#39;appStoreVersions.platform&#39; | [optional] 
 **filter_bundle_id** | [**List[str]**](str.md)| filter by attribute &#39;bundleId&#39; | [optional] 
 **filter_name** | [**List[str]**](str.md)| filter by attribute &#39;name&#39; | [optional] 
 **filter_sku** | [**List[str]**](str.md)| filter by attribute &#39;sku&#39; | [optional] 
 **filter_app_store_versions** | [**List[str]**](str.md)| filter by id(s) of related &#39;appStoreVersions&#39; | [optional] 
 **filter_id** | [**List[str]**](str.md)| filter by id(s) | [optional] 
 **exists_game_center_enabled_versions** | [**List[str]**](str.md)| filter by existence or non-existence of related &#39;gameCenterEnabledVersions&#39; | [optional] 
 **sort** | [**List[str]**](str.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_beta_groups** | [**List[str]**](str.md)| the fields to include for returned resources of type betaGroups | [optional] 
 **fields_perf_power_metrics** | [**List[str]**](str.md)| the fields to include for returned resources of type perfPowerMetrics | [optional] 
 **fields_app_infos** | [**List[str]**](str.md)| the fields to include for returned resources of type appInfos | [optional] 
 **fields_app_pre_orders** | [**List[str]**](str.md)| the fields to include for returned resources of type appPreOrders | [optional] 
 **fields_pre_release_versions** | [**List[str]**](str.md)| the fields to include for returned resources of type preReleaseVersions | [optional] 
 **fields_app_prices** | [**List[str]**](str.md)| the fields to include for returned resources of type appPrices | [optional] 
 **fields_in_app_purchases** | [**List[str]**](str.md)| the fields to include for returned resources of type inAppPurchases | [optional] 
 **fields_beta_app_review_details** | [**List[str]**](str.md)| the fields to include for returned resources of type betaAppReviewDetails | [optional] 
 **fields_territories** | [**List[str]**](str.md)| the fields to include for returned resources of type territories | [optional] 
 **fields_game_center_enabled_versions** | [**List[str]**](str.md)| the fields to include for returned resources of type gameCenterEnabledVersions | [optional] 
 **fields_app_store_versions** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreVersions | [optional] 
 **fields_builds** | [**List[str]**](str.md)| the fields to include for returned resources of type builds | [optional] 
 **fields_beta_app_localizations** | [**List[str]**](str.md)| the fields to include for returned resources of type betaAppLocalizations | [optional] 
 **fields_beta_license_agreements** | [**List[str]**](str.md)| the fields to include for returned resources of type betaLicenseAgreements | [optional] 
 **fields_end_user_license_agreements** | [**List[str]**](str.md)| the fields to include for returned resources of type endUserLicenseAgreements | [optional] 
 **limit_app_infos** | **int**| maximum number of related appInfos returned (when they are included) | [optional] 
 **limit_app_store_versions** | **int**| maximum number of related appStoreVersions returned (when they are included) | [optional] 
 **limit_available_territories** | **int**| maximum number of related availableTerritories returned (when they are included) | [optional] 
 **limit_beta_app_localizations** | **int**| maximum number of related betaAppLocalizations returned (when they are included) | [optional] 
 **limit_beta_groups** | **int**| maximum number of related betaGroups returned (when they are included) | [optional] 
 **limit_builds** | **int**| maximum number of related builds returned (when they are included) | [optional] 
 **limit_game_center_enabled_versions** | **int**| maximum number of related gameCenterEnabledVersions returned (when they are included) | [optional] 
 **limit_in_app_purchases** | **int**| maximum number of related inAppPurchases returned (when they are included) | [optional] 
 **limit_pre_release_versions** | **int**| maximum number of related preReleaseVersions returned (when they are included) | [optional] 
 **limit_prices** | **int**| maximum number of related prices returned (when they are included) | [optional] 

### Return type

[**AppsResponse**](AppsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of Apps |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_get_instance**
> AppResponse apps_get_instance(id, fields_apps=fields_apps, include=include, fields_beta_groups=fields_beta_groups, fields_perf_power_metrics=fields_perf_power_metrics, fields_app_infos=fields_app_infos, fields_app_pre_orders=fields_app_pre_orders, fields_pre_release_versions=fields_pre_release_versions, fields_app_prices=fields_app_prices, fields_in_app_purchases=fields_in_app_purchases, fields_beta_app_review_details=fields_beta_app_review_details, fields_territories=fields_territories, fields_game_center_enabled_versions=fields_game_center_enabled_versions, fields_app_store_versions=fields_app_store_versions, fields_builds=fields_builds, fields_beta_app_localizations=fields_beta_app_localizations, fields_beta_license_agreements=fields_beta_license_agreements, fields_end_user_license_agreements=fields_end_user_license_agreements, limit_app_infos=limit_app_infos, limit_app_store_versions=limit_app_store_versions, limit_available_territories=limit_available_territories, limit_beta_app_localizations=limit_beta_app_localizations, limit_beta_groups=limit_beta_groups, limit_builds=limit_builds, limit_game_center_enabled_versions=limit_game_center_enabled_versions, limit_in_app_purchases=limit_in_app_purchases, limit_pre_release_versions=limit_pre_release_versions, limit_prices=limit_prices)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_response import AppResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_beta_groups = ['fields_beta_groups_example'] # List[str] | the fields to include for returned resources of type betaGroups (optional)
    fields_perf_power_metrics = ['fields_perf_power_metrics_example'] # List[str] | the fields to include for returned resources of type perfPowerMetrics (optional)
    fields_app_infos = ['fields_app_infos_example'] # List[str] | the fields to include for returned resources of type appInfos (optional)
    fields_app_pre_orders = ['fields_app_pre_orders_example'] # List[str] | the fields to include for returned resources of type appPreOrders (optional)
    fields_pre_release_versions = ['fields_pre_release_versions_example'] # List[str] | the fields to include for returned resources of type preReleaseVersions (optional)
    fields_app_prices = ['fields_app_prices_example'] # List[str] | the fields to include for returned resources of type appPrices (optional)
    fields_in_app_purchases = ['fields_in_app_purchases_example'] # List[str] | the fields to include for returned resources of type inAppPurchases (optional)
    fields_beta_app_review_details = ['fields_beta_app_review_details_example'] # List[str] | the fields to include for returned resources of type betaAppReviewDetails (optional)
    fields_territories = ['fields_territories_example'] # List[str] | the fields to include for returned resources of type territories (optional)
    fields_game_center_enabled_versions = ['fields_game_center_enabled_versions_example'] # List[str] | the fields to include for returned resources of type gameCenterEnabledVersions (optional)
    fields_app_store_versions = ['fields_app_store_versions_example'] # List[str] | the fields to include for returned resources of type appStoreVersions (optional)
    fields_builds = ['fields_builds_example'] # List[str] | the fields to include for returned resources of type builds (optional)
    fields_beta_app_localizations = ['fields_beta_app_localizations_example'] # List[str] | the fields to include for returned resources of type betaAppLocalizations (optional)
    fields_beta_license_agreements = ['fields_beta_license_agreements_example'] # List[str] | the fields to include for returned resources of type betaLicenseAgreements (optional)
    fields_end_user_license_agreements = ['fields_end_user_license_agreements_example'] # List[str] | the fields to include for returned resources of type endUserLicenseAgreements (optional)
    limit_app_infos = 56 # int | maximum number of related appInfos returned (when they are included) (optional)
    limit_app_store_versions = 56 # int | maximum number of related appStoreVersions returned (when they are included) (optional)
    limit_available_territories = 56 # int | maximum number of related availableTerritories returned (when they are included) (optional)
    limit_beta_app_localizations = 56 # int | maximum number of related betaAppLocalizations returned (when they are included) (optional)
    limit_beta_groups = 56 # int | maximum number of related betaGroups returned (when they are included) (optional)
    limit_builds = 56 # int | maximum number of related builds returned (when they are included) (optional)
    limit_game_center_enabled_versions = 56 # int | maximum number of related gameCenterEnabledVersions returned (when they are included) (optional)
    limit_in_app_purchases = 56 # int | maximum number of related inAppPurchases returned (when they are included) (optional)
    limit_pre_release_versions = 56 # int | maximum number of related preReleaseVersions returned (when they are included) (optional)
    limit_prices = 56 # int | maximum number of related prices returned (when they are included) (optional)

    try:
        api_response = api_instance.apps_get_instance(id, fields_apps=fields_apps, include=include, fields_beta_groups=fields_beta_groups, fields_perf_power_metrics=fields_perf_power_metrics, fields_app_infos=fields_app_infos, fields_app_pre_orders=fields_app_pre_orders, fields_pre_release_versions=fields_pre_release_versions, fields_app_prices=fields_app_prices, fields_in_app_purchases=fields_in_app_purchases, fields_beta_app_review_details=fields_beta_app_review_details, fields_territories=fields_territories, fields_game_center_enabled_versions=fields_game_center_enabled_versions, fields_app_store_versions=fields_app_store_versions, fields_builds=fields_builds, fields_beta_app_localizations=fields_beta_app_localizations, fields_beta_license_agreements=fields_beta_license_agreements, fields_end_user_license_agreements=fields_end_user_license_agreements, limit_app_infos=limit_app_infos, limit_app_store_versions=limit_app_store_versions, limit_available_territories=limit_available_territories, limit_beta_app_localizations=limit_beta_app_localizations, limit_beta_groups=limit_beta_groups, limit_builds=limit_builds, limit_game_center_enabled_versions=limit_game_center_enabled_versions, limit_in_app_purchases=limit_in_app_purchases, limit_pre_release_versions=limit_pre_release_versions, limit_prices=limit_prices)
        print("The response of AppsApi->apps_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_beta_groups** | [**List[str]**](str.md)| the fields to include for returned resources of type betaGroups | [optional] 
 **fields_perf_power_metrics** | [**List[str]**](str.md)| the fields to include for returned resources of type perfPowerMetrics | [optional] 
 **fields_app_infos** | [**List[str]**](str.md)| the fields to include for returned resources of type appInfos | [optional] 
 **fields_app_pre_orders** | [**List[str]**](str.md)| the fields to include for returned resources of type appPreOrders | [optional] 
 **fields_pre_release_versions** | [**List[str]**](str.md)| the fields to include for returned resources of type preReleaseVersions | [optional] 
 **fields_app_prices** | [**List[str]**](str.md)| the fields to include for returned resources of type appPrices | [optional] 
 **fields_in_app_purchases** | [**List[str]**](str.md)| the fields to include for returned resources of type inAppPurchases | [optional] 
 **fields_beta_app_review_details** | [**List[str]**](str.md)| the fields to include for returned resources of type betaAppReviewDetails | [optional] 
 **fields_territories** | [**List[str]**](str.md)| the fields to include for returned resources of type territories | [optional] 
 **fields_game_center_enabled_versions** | [**List[str]**](str.md)| the fields to include for returned resources of type gameCenterEnabledVersions | [optional] 
 **fields_app_store_versions** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreVersions | [optional] 
 **fields_builds** | [**List[str]**](str.md)| the fields to include for returned resources of type builds | [optional] 
 **fields_beta_app_localizations** | [**List[str]**](str.md)| the fields to include for returned resources of type betaAppLocalizations | [optional] 
 **fields_beta_license_agreements** | [**List[str]**](str.md)| the fields to include for returned resources of type betaLicenseAgreements | [optional] 
 **fields_end_user_license_agreements** | [**List[str]**](str.md)| the fields to include for returned resources of type endUserLicenseAgreements | [optional] 
 **limit_app_infos** | **int**| maximum number of related appInfos returned (when they are included) | [optional] 
 **limit_app_store_versions** | **int**| maximum number of related appStoreVersions returned (when they are included) | [optional] 
 **limit_available_territories** | **int**| maximum number of related availableTerritories returned (when they are included) | [optional] 
 **limit_beta_app_localizations** | **int**| maximum number of related betaAppLocalizations returned (when they are included) | [optional] 
 **limit_beta_groups** | **int**| maximum number of related betaGroups returned (when they are included) | [optional] 
 **limit_builds** | **int**| maximum number of related builds returned (when they are included) | [optional] 
 **limit_game_center_enabled_versions** | **int**| maximum number of related gameCenterEnabledVersions returned (when they are included) | [optional] 
 **limit_in_app_purchases** | **int**| maximum number of related inAppPurchases returned (when they are included) | [optional] 
 **limit_pre_release_versions** | **int**| maximum number of related preReleaseVersions returned (when they are included) | [optional] 
 **limit_prices** | **int**| maximum number of related prices returned (when they are included) | [optional] 

### Return type

[**AppResponse**](AppResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single App |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_in_app_purchases_get_to_many_related**
> InAppPurchasesResponse apps_in_app_purchases_get_to_many_related(id, filter_in_app_purchase_type=filter_in_app_purchase_type, filter_can_be_submitted=filter_can_be_submitted, sort=sort, fields_in_app_purchases=fields_in_app_purchases, fields_apps=fields_apps, limit=limit, include=include)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.in_app_purchases_response import InAppPurchasesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    filter_in_app_purchase_type = ['filter_in_app_purchase_type_example'] # List[str] | filter by attribute 'inAppPurchaseType' (optional)
    filter_can_be_submitted = ['filter_can_be_submitted_example'] # List[str] | filter by canBeSubmitted (optional)
    sort = ['sort_example'] # List[str] | comma-separated list of sort expressions; resources will be sorted as specified (optional)
    fields_in_app_purchases = ['fields_in_app_purchases_example'] # List[str] | the fields to include for returned resources of type inAppPurchases (optional)
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)
    limit = 56 # int | maximum resources per page (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)

    try:
        api_response = api_instance.apps_in_app_purchases_get_to_many_related(id, filter_in_app_purchase_type=filter_in_app_purchase_type, filter_can_be_submitted=filter_can_be_submitted, sort=sort, fields_in_app_purchases=fields_in_app_purchases, fields_apps=fields_apps, limit=limit, include=include)
        print("The response of AppsApi->apps_in_app_purchases_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_in_app_purchases_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **filter_in_app_purchase_type** | [**List[str]**](str.md)| filter by attribute &#39;inAppPurchaseType&#39; | [optional] 
 **filter_can_be_submitted** | [**List[str]**](str.md)| filter by canBeSubmitted | [optional] 
 **sort** | [**List[str]**](str.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fields_in_app_purchases** | [**List[str]**](str.md)| the fields to include for returned resources of type inAppPurchases | [optional] 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**InAppPurchasesResponse**](InAppPurchasesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of related resources |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_perf_power_metrics_get_to_many_related**
> PerfPowerMetricsResponse apps_perf_power_metrics_get_to_many_related(id, filter_device_type=filter_device_type, filter_metric_type=filter_metric_type, filter_platform=filter_platform)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.perf_power_metrics_response import PerfPowerMetricsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    filter_device_type = ['filter_device_type_example'] # List[str] | filter by attribute 'deviceType' (optional)
    filter_metric_type = ['filter_metric_type_example'] # List[str] | filter by attribute 'metricType' (optional)
    filter_platform = ['filter_platform_example'] # List[str] | filter by attribute 'platform' (optional)

    try:
        api_response = api_instance.apps_perf_power_metrics_get_to_many_related(id, filter_device_type=filter_device_type, filter_metric_type=filter_metric_type, filter_platform=filter_platform)
        print("The response of AppsApi->apps_perf_power_metrics_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_perf_power_metrics_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **filter_device_type** | [**List[str]**](str.md)| filter by attribute &#39;deviceType&#39; | [optional] 
 **filter_metric_type** | [**List[str]**](str.md)| filter by attribute &#39;metricType&#39; | [optional] 
 **filter_platform** | [**List[str]**](str.md)| filter by attribute &#39;platform&#39; | [optional] 

### Return type

[**PerfPowerMetricsResponse**](PerfPowerMetricsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of related resources |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_pre_order_get_to_one_related**
> AppPreOrderResponse apps_pre_order_get_to_one_related(id, fields_app_pre_orders=fields_app_pre_orders)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_pre_order_response import AppPreOrderResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_app_pre_orders = ['fields_app_pre_orders_example'] # List[str] | the fields to include for returned resources of type appPreOrders (optional)

    try:
        api_response = api_instance.apps_pre_order_get_to_one_related(id, fields_app_pre_orders=fields_app_pre_orders)
        print("The response of AppsApi->apps_pre_order_get_to_one_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_pre_order_get_to_one_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_app_pre_orders** | [**List[str]**](str.md)| the fields to include for returned resources of type appPreOrders | [optional] 

### Return type

[**AppPreOrderResponse**](AppPreOrderResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Related resource |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_pre_release_versions_get_to_many_related**
> PreReleaseVersionsResponse apps_pre_release_versions_get_to_many_related(id, fields_pre_release_versions=fields_pre_release_versions, limit=limit)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.pre_release_versions_response import PreReleaseVersionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_pre_release_versions = ['fields_pre_release_versions_example'] # List[str] | the fields to include for returned resources of type preReleaseVersions (optional)
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.apps_pre_release_versions_get_to_many_related(id, fields_pre_release_versions=fields_pre_release_versions, limit=limit)
        print("The response of AppsApi->apps_pre_release_versions_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_pre_release_versions_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_pre_release_versions** | [**List[str]**](str.md)| the fields to include for returned resources of type preReleaseVersions | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 

### Return type

[**PreReleaseVersionsResponse**](PreReleaseVersionsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of related resources |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_prices_get_to_many_related**
> AppPricesResponse apps_prices_get_to_many_related(id, fields_app_prices=fields_app_prices, fields_app_price_tiers=fields_app_price_tiers, fields_apps=fields_apps, limit=limit, include=include)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_prices_response import AppPricesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_app_prices = ['fields_app_prices_example'] # List[str] | the fields to include for returned resources of type appPrices (optional)
    fields_app_price_tiers = ['fields_app_price_tiers_example'] # List[str] | the fields to include for returned resources of type appPriceTiers (optional)
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)
    limit = 56 # int | maximum resources per page (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)

    try:
        api_response = api_instance.apps_prices_get_to_many_related(id, fields_app_prices=fields_app_prices, fields_app_price_tiers=fields_app_price_tiers, fields_apps=fields_apps, limit=limit, include=include)
        print("The response of AppsApi->apps_prices_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_prices_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_app_prices** | [**List[str]**](str.md)| the fields to include for returned resources of type appPrices | [optional] 
 **fields_app_price_tiers** | [**List[str]**](str.md)| the fields to include for returned resources of type appPriceTiers | [optional] 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppPricesResponse**](AppPricesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of related resources |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_update_instance**
> AppResponse apps_update_instance(id, app_update_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_response import AppResponse
from openapi_client.models.app_update_request import AppUpdateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    app_update_request = openapi_client.AppUpdateRequest() # AppUpdateRequest | App representation

    try:
        api_response = api_instance.apps_update_instance(id, app_update_request)
        print("The response of AppsApi->apps_update_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_update_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **app_update_request** | [**AppUpdateRequest**](AppUpdateRequest.md)| App representation | 

### Return type

[**AppResponse**](AppResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single App |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


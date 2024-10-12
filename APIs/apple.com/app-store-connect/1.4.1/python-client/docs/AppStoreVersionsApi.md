# openapi_client.AppStoreVersionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**app_store_versions_age_rating_declaration_get_to_one_related**](AppStoreVersionsApi.md#app_store_versions_age_rating_declaration_get_to_one_related) | **GET** /v1/appStoreVersions/{id}/ageRatingDeclaration | 
[**app_store_versions_app_store_review_detail_get_to_one_related**](AppStoreVersionsApi.md#app_store_versions_app_store_review_detail_get_to_one_related) | **GET** /v1/appStoreVersions/{id}/appStoreReviewDetail | 
[**app_store_versions_app_store_version_localizations_get_to_many_related**](AppStoreVersionsApi.md#app_store_versions_app_store_version_localizations_get_to_many_related) | **GET** /v1/appStoreVersions/{id}/appStoreVersionLocalizations | 
[**app_store_versions_app_store_version_phased_release_get_to_one_related**](AppStoreVersionsApi.md#app_store_versions_app_store_version_phased_release_get_to_one_related) | **GET** /v1/appStoreVersions/{id}/appStoreVersionPhasedRelease | 
[**app_store_versions_app_store_version_submission_get_to_one_related**](AppStoreVersionsApi.md#app_store_versions_app_store_version_submission_get_to_one_related) | **GET** /v1/appStoreVersions/{id}/appStoreVersionSubmission | 
[**app_store_versions_build_get_to_one_related**](AppStoreVersionsApi.md#app_store_versions_build_get_to_one_related) | **GET** /v1/appStoreVersions/{id}/build | 
[**app_store_versions_build_get_to_one_relationship**](AppStoreVersionsApi.md#app_store_versions_build_get_to_one_relationship) | **GET** /v1/appStoreVersions/{id}/relationships/build | 
[**app_store_versions_build_update_to_one_relationship**](AppStoreVersionsApi.md#app_store_versions_build_update_to_one_relationship) | **PATCH** /v1/appStoreVersions/{id}/relationships/build | 
[**app_store_versions_create_instance**](AppStoreVersionsApi.md#app_store_versions_create_instance) | **POST** /v1/appStoreVersions | 
[**app_store_versions_delete_instance**](AppStoreVersionsApi.md#app_store_versions_delete_instance) | **DELETE** /v1/appStoreVersions/{id} | 
[**app_store_versions_get_instance**](AppStoreVersionsApi.md#app_store_versions_get_instance) | **GET** /v1/appStoreVersions/{id} | 
[**app_store_versions_idfa_declaration_get_to_one_related**](AppStoreVersionsApi.md#app_store_versions_idfa_declaration_get_to_one_related) | **GET** /v1/appStoreVersions/{id}/idfaDeclaration | 
[**app_store_versions_routing_app_coverage_get_to_one_related**](AppStoreVersionsApi.md#app_store_versions_routing_app_coverage_get_to_one_related) | **GET** /v1/appStoreVersions/{id}/routingAppCoverage | 
[**app_store_versions_update_instance**](AppStoreVersionsApi.md#app_store_versions_update_instance) | **PATCH** /v1/appStoreVersions/{id} | 


# **app_store_versions_age_rating_declaration_get_to_one_related**
> AgeRatingDeclarationResponse app_store_versions_age_rating_declaration_get_to_one_related(id, fields_age_rating_declarations=fields_age_rating_declarations)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.age_rating_declaration_response import AgeRatingDeclarationResponse
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
    api_instance = openapi_client.AppStoreVersionsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_age_rating_declarations = ['fields_age_rating_declarations_example'] # List[str] | the fields to include for returned resources of type ageRatingDeclarations (optional)

    try:
        api_response = api_instance.app_store_versions_age_rating_declaration_get_to_one_related(id, fields_age_rating_declarations=fields_age_rating_declarations)
        print("The response of AppStoreVersionsApi->app_store_versions_age_rating_declaration_get_to_one_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreVersionsApi->app_store_versions_age_rating_declaration_get_to_one_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_age_rating_declarations** | [**List[str]**](str.md)| the fields to include for returned resources of type ageRatingDeclarations | [optional] 

### Return type

[**AgeRatingDeclarationResponse**](AgeRatingDeclarationResponse.md)

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

# **app_store_versions_app_store_review_detail_get_to_one_related**
> AppStoreReviewDetailResponse app_store_versions_app_store_review_detail_get_to_one_related(id, fields_app_store_review_details=fields_app_store_review_details, fields_app_store_versions=fields_app_store_versions, fields_app_store_review_attachments=fields_app_store_review_attachments, include=include)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_store_review_detail_response import AppStoreReviewDetailResponse
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
    api_instance = openapi_client.AppStoreVersionsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_app_store_review_details = ['fields_app_store_review_details_example'] # List[str] | the fields to include for returned resources of type appStoreReviewDetails (optional)
    fields_app_store_versions = ['fields_app_store_versions_example'] # List[str] | the fields to include for returned resources of type appStoreVersions (optional)
    fields_app_store_review_attachments = ['fields_app_store_review_attachments_example'] # List[str] | the fields to include for returned resources of type appStoreReviewAttachments (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)

    try:
        api_response = api_instance.app_store_versions_app_store_review_detail_get_to_one_related(id, fields_app_store_review_details=fields_app_store_review_details, fields_app_store_versions=fields_app_store_versions, fields_app_store_review_attachments=fields_app_store_review_attachments, include=include)
        print("The response of AppStoreVersionsApi->app_store_versions_app_store_review_detail_get_to_one_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreVersionsApi->app_store_versions_app_store_review_detail_get_to_one_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_app_store_review_details** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreReviewDetails | [optional] 
 **fields_app_store_versions** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreVersions | [optional] 
 **fields_app_store_review_attachments** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreReviewAttachments | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppStoreReviewDetailResponse**](AppStoreReviewDetailResponse.md)

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

# **app_store_versions_app_store_version_localizations_get_to_many_related**
> AppStoreVersionLocalizationsResponse app_store_versions_app_store_version_localizations_get_to_many_related(id, fields_app_store_version_localizations=fields_app_store_version_localizations, limit=limit)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_store_version_localizations_response import AppStoreVersionLocalizationsResponse
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
    api_instance = openapi_client.AppStoreVersionsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_app_store_version_localizations = ['fields_app_store_version_localizations_example'] # List[str] | the fields to include for returned resources of type appStoreVersionLocalizations (optional)
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.app_store_versions_app_store_version_localizations_get_to_many_related(id, fields_app_store_version_localizations=fields_app_store_version_localizations, limit=limit)
        print("The response of AppStoreVersionsApi->app_store_versions_app_store_version_localizations_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreVersionsApi->app_store_versions_app_store_version_localizations_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_app_store_version_localizations** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreVersionLocalizations | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 

### Return type

[**AppStoreVersionLocalizationsResponse**](AppStoreVersionLocalizationsResponse.md)

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

# **app_store_versions_app_store_version_phased_release_get_to_one_related**
> AppStoreVersionPhasedReleaseResponse app_store_versions_app_store_version_phased_release_get_to_one_related(id, fields_app_store_version_phased_releases=fields_app_store_version_phased_releases)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_store_version_phased_release_response import AppStoreVersionPhasedReleaseResponse
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
    api_instance = openapi_client.AppStoreVersionsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_app_store_version_phased_releases = ['fields_app_store_version_phased_releases_example'] # List[str] | the fields to include for returned resources of type appStoreVersionPhasedReleases (optional)

    try:
        api_response = api_instance.app_store_versions_app_store_version_phased_release_get_to_one_related(id, fields_app_store_version_phased_releases=fields_app_store_version_phased_releases)
        print("The response of AppStoreVersionsApi->app_store_versions_app_store_version_phased_release_get_to_one_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreVersionsApi->app_store_versions_app_store_version_phased_release_get_to_one_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_app_store_version_phased_releases** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreVersionPhasedReleases | [optional] 

### Return type

[**AppStoreVersionPhasedReleaseResponse**](AppStoreVersionPhasedReleaseResponse.md)

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

# **app_store_versions_app_store_version_submission_get_to_one_related**
> AppStoreVersionSubmissionResponse app_store_versions_app_store_version_submission_get_to_one_related(id, fields_app_store_versions=fields_app_store_versions, fields_app_store_version_submissions=fields_app_store_version_submissions, include=include)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_store_version_submission_response import AppStoreVersionSubmissionResponse
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
    api_instance = openapi_client.AppStoreVersionsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_app_store_versions = ['fields_app_store_versions_example'] # List[str] | the fields to include for returned resources of type appStoreVersions (optional)
    fields_app_store_version_submissions = ['fields_app_store_version_submissions_example'] # List[str] | the fields to include for returned resources of type appStoreVersionSubmissions (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)

    try:
        api_response = api_instance.app_store_versions_app_store_version_submission_get_to_one_related(id, fields_app_store_versions=fields_app_store_versions, fields_app_store_version_submissions=fields_app_store_version_submissions, include=include)
        print("The response of AppStoreVersionsApi->app_store_versions_app_store_version_submission_get_to_one_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreVersionsApi->app_store_versions_app_store_version_submission_get_to_one_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_app_store_versions** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreVersions | [optional] 
 **fields_app_store_version_submissions** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreVersionSubmissions | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppStoreVersionSubmissionResponse**](AppStoreVersionSubmissionResponse.md)

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

# **app_store_versions_build_get_to_one_related**
> BuildResponse app_store_versions_build_get_to_one_related(id, fields_builds=fields_builds)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.build_response import BuildResponse
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
    api_instance = openapi_client.AppStoreVersionsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_builds = ['fields_builds_example'] # List[str] | the fields to include for returned resources of type builds (optional)

    try:
        api_response = api_instance.app_store_versions_build_get_to_one_related(id, fields_builds=fields_builds)
        print("The response of AppStoreVersionsApi->app_store_versions_build_get_to_one_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreVersionsApi->app_store_versions_build_get_to_one_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_builds** | [**List[str]**](str.md)| the fields to include for returned resources of type builds | [optional] 

### Return type

[**BuildResponse**](BuildResponse.md)

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

# **app_store_versions_build_get_to_one_relationship**
> AppStoreVersionBuildLinkageResponse app_store_versions_build_get_to_one_relationship(id)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_store_version_build_linkage_response import AppStoreVersionBuildLinkageResponse
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
    api_instance = openapi_client.AppStoreVersionsApi(api_client)
    id = 'id_example' # str | the id of the requested resource

    try:
        api_response = api_instance.app_store_versions_build_get_to_one_relationship(id)
        print("The response of AppStoreVersionsApi->app_store_versions_build_get_to_one_relationship:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreVersionsApi->app_store_versions_build_get_to_one_relationship: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 

### Return type

[**AppStoreVersionBuildLinkageResponse**](AppStoreVersionBuildLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Related linkage |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_store_versions_build_update_to_one_relationship**
> app_store_versions_build_update_to_one_relationship(id, app_store_version_build_linkage_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_store_version_build_linkage_request import AppStoreVersionBuildLinkageRequest
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
    api_instance = openapi_client.AppStoreVersionsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    app_store_version_build_linkage_request = openapi_client.AppStoreVersionBuildLinkageRequest() # AppStoreVersionBuildLinkageRequest | Related linkage

    try:
        api_instance.app_store_versions_build_update_to_one_relationship(id, app_store_version_build_linkage_request)
    except Exception as e:
        print("Exception when calling AppStoreVersionsApi->app_store_versions_build_update_to_one_relationship: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **app_store_version_build_linkage_request** | [**AppStoreVersionBuildLinkageRequest**](AppStoreVersionBuildLinkageRequest.md)| Related linkage | 

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

# **app_store_versions_create_instance**
> AppStoreVersionResponse app_store_versions_create_instance(app_store_version_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_store_version_create_request import AppStoreVersionCreateRequest
from openapi_client.models.app_store_version_response import AppStoreVersionResponse
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
    api_instance = openapi_client.AppStoreVersionsApi(api_client)
    app_store_version_create_request = openapi_client.AppStoreVersionCreateRequest() # AppStoreVersionCreateRequest | AppStoreVersion representation

    try:
        api_response = api_instance.app_store_versions_create_instance(app_store_version_create_request)
        print("The response of AppStoreVersionsApi->app_store_versions_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreVersionsApi->app_store_versions_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_store_version_create_request** | [**AppStoreVersionCreateRequest**](AppStoreVersionCreateRequest.md)| AppStoreVersion representation | 

### Return type

[**AppStoreVersionResponse**](AppStoreVersionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single AppStoreVersion |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_store_versions_delete_instance**
> app_store_versions_delete_instance(id)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
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
    api_instance = openapi_client.AppStoreVersionsApi(api_client)
    id = 'id_example' # str | the id of the requested resource

    try:
        api_instance.app_store_versions_delete_instance(id)
    except Exception as e:
        print("Exception when calling AppStoreVersionsApi->app_store_versions_delete_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 

### Return type

void (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success (no content) |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_store_versions_get_instance**
> AppStoreVersionResponse app_store_versions_get_instance(id, fields_app_store_versions=fields_app_store_versions, include=include, fields_app_store_version_localizations=fields_app_store_version_localizations, fields_idfa_declarations=fields_idfa_declarations, fields_routing_app_coverages=fields_routing_app_coverages, fields_app_store_version_phased_releases=fields_app_store_version_phased_releases, fields_age_rating_declarations=fields_age_rating_declarations, fields_app_store_review_details=fields_app_store_review_details, fields_builds=fields_builds, fields_app_store_version_submissions=fields_app_store_version_submissions, limit_app_store_version_localizations=limit_app_store_version_localizations)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_store_version_response import AppStoreVersionResponse
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
    api_instance = openapi_client.AppStoreVersionsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_app_store_versions = ['fields_app_store_versions_example'] # List[str] | the fields to include for returned resources of type appStoreVersions (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_app_store_version_localizations = ['fields_app_store_version_localizations_example'] # List[str] | the fields to include for returned resources of type appStoreVersionLocalizations (optional)
    fields_idfa_declarations = ['fields_idfa_declarations_example'] # List[str] | the fields to include for returned resources of type idfaDeclarations (optional)
    fields_routing_app_coverages = ['fields_routing_app_coverages_example'] # List[str] | the fields to include for returned resources of type routingAppCoverages (optional)
    fields_app_store_version_phased_releases = ['fields_app_store_version_phased_releases_example'] # List[str] | the fields to include for returned resources of type appStoreVersionPhasedReleases (optional)
    fields_age_rating_declarations = ['fields_age_rating_declarations_example'] # List[str] | the fields to include for returned resources of type ageRatingDeclarations (optional)
    fields_app_store_review_details = ['fields_app_store_review_details_example'] # List[str] | the fields to include for returned resources of type appStoreReviewDetails (optional)
    fields_builds = ['fields_builds_example'] # List[str] | the fields to include for returned resources of type builds (optional)
    fields_app_store_version_submissions = ['fields_app_store_version_submissions_example'] # List[str] | the fields to include for returned resources of type appStoreVersionSubmissions (optional)
    limit_app_store_version_localizations = 56 # int | maximum number of related appStoreVersionLocalizations returned (when they are included) (optional)

    try:
        api_response = api_instance.app_store_versions_get_instance(id, fields_app_store_versions=fields_app_store_versions, include=include, fields_app_store_version_localizations=fields_app_store_version_localizations, fields_idfa_declarations=fields_idfa_declarations, fields_routing_app_coverages=fields_routing_app_coverages, fields_app_store_version_phased_releases=fields_app_store_version_phased_releases, fields_age_rating_declarations=fields_age_rating_declarations, fields_app_store_review_details=fields_app_store_review_details, fields_builds=fields_builds, fields_app_store_version_submissions=fields_app_store_version_submissions, limit_app_store_version_localizations=limit_app_store_version_localizations)
        print("The response of AppStoreVersionsApi->app_store_versions_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreVersionsApi->app_store_versions_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_app_store_versions** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreVersions | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_app_store_version_localizations** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreVersionLocalizations | [optional] 
 **fields_idfa_declarations** | [**List[str]**](str.md)| the fields to include for returned resources of type idfaDeclarations | [optional] 
 **fields_routing_app_coverages** | [**List[str]**](str.md)| the fields to include for returned resources of type routingAppCoverages | [optional] 
 **fields_app_store_version_phased_releases** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreVersionPhasedReleases | [optional] 
 **fields_age_rating_declarations** | [**List[str]**](str.md)| the fields to include for returned resources of type ageRatingDeclarations | [optional] 
 **fields_app_store_review_details** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreReviewDetails | [optional] 
 **fields_builds** | [**List[str]**](str.md)| the fields to include for returned resources of type builds | [optional] 
 **fields_app_store_version_submissions** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreVersionSubmissions | [optional] 
 **limit_app_store_version_localizations** | **int**| maximum number of related appStoreVersionLocalizations returned (when they are included) | [optional] 

### Return type

[**AppStoreVersionResponse**](AppStoreVersionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single AppStoreVersion |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_store_versions_idfa_declaration_get_to_one_related**
> IdfaDeclarationResponse app_store_versions_idfa_declaration_get_to_one_related(id, fields_idfa_declarations=fields_idfa_declarations)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.idfa_declaration_response import IdfaDeclarationResponse
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
    api_instance = openapi_client.AppStoreVersionsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_idfa_declarations = ['fields_idfa_declarations_example'] # List[str] | the fields to include for returned resources of type idfaDeclarations (optional)

    try:
        api_response = api_instance.app_store_versions_idfa_declaration_get_to_one_related(id, fields_idfa_declarations=fields_idfa_declarations)
        print("The response of AppStoreVersionsApi->app_store_versions_idfa_declaration_get_to_one_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreVersionsApi->app_store_versions_idfa_declaration_get_to_one_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_idfa_declarations** | [**List[str]**](str.md)| the fields to include for returned resources of type idfaDeclarations | [optional] 

### Return type

[**IdfaDeclarationResponse**](IdfaDeclarationResponse.md)

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

# **app_store_versions_routing_app_coverage_get_to_one_related**
> RoutingAppCoverageResponse app_store_versions_routing_app_coverage_get_to_one_related(id, fields_routing_app_coverages=fields_routing_app_coverages)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.routing_app_coverage_response import RoutingAppCoverageResponse
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
    api_instance = openapi_client.AppStoreVersionsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_routing_app_coverages = ['fields_routing_app_coverages_example'] # List[str] | the fields to include for returned resources of type routingAppCoverages (optional)

    try:
        api_response = api_instance.app_store_versions_routing_app_coverage_get_to_one_related(id, fields_routing_app_coverages=fields_routing_app_coverages)
        print("The response of AppStoreVersionsApi->app_store_versions_routing_app_coverage_get_to_one_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreVersionsApi->app_store_versions_routing_app_coverage_get_to_one_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_routing_app_coverages** | [**List[str]**](str.md)| the fields to include for returned resources of type routingAppCoverages | [optional] 

### Return type

[**RoutingAppCoverageResponse**](RoutingAppCoverageResponse.md)

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

# **app_store_versions_update_instance**
> AppStoreVersionResponse app_store_versions_update_instance(id, app_store_version_update_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_store_version_response import AppStoreVersionResponse
from openapi_client.models.app_store_version_update_request import AppStoreVersionUpdateRequest
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
    api_instance = openapi_client.AppStoreVersionsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    app_store_version_update_request = openapi_client.AppStoreVersionUpdateRequest() # AppStoreVersionUpdateRequest | AppStoreVersion representation

    try:
        api_response = api_instance.app_store_versions_update_instance(id, app_store_version_update_request)
        print("The response of AppStoreVersionsApi->app_store_versions_update_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreVersionsApi->app_store_versions_update_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **app_store_version_update_request** | [**AppStoreVersionUpdateRequest**](AppStoreVersionUpdateRequest.md)| AppStoreVersion representation | 

### Return type

[**AppStoreVersionResponse**](AppStoreVersionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single AppStoreVersion |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


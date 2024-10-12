# openapi_client.ProjectsApi

All URIs are relative to *https://firebaseappdistribution.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**firebaseappdistribution_projects_apps_releases_tests_create**](ProjectsApi.md#firebaseappdistribution_projects_apps_releases_tests_create) | **POST** /v1alpha/{parent}/tests | 
[**firebaseappdistribution_projects_apps_releases_tests_get**](ProjectsApi.md#firebaseappdistribution_projects_apps_releases_tests_get) | **GET** /v1alpha/{name} | 
[**firebaseappdistribution_projects_apps_releases_tests_list**](ProjectsApi.md#firebaseappdistribution_projects_apps_releases_tests_list) | **GET** /v1alpha/{parent}/tests | 
[**firebaseappdistribution_projects_apps_update_test_config**](ProjectsApi.md#firebaseappdistribution_projects_apps_update_test_config) | **PATCH** /v1alpha/{name} | 
[**firebaseappdistribution_projects_testers_get_udids**](ProjectsApi.md#firebaseappdistribution_projects_testers_get_udids) | **GET** /v1alpha/{project}/testers:udids | 


# **firebaseappdistribution_projects_apps_releases_tests_create**
> GoogleFirebaseAppdistroV1alphaReleaseTest firebaseappdistribution_projects_apps_releases_tests_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, release_test_id=release_test_id, google_firebase_appdistro_v1alpha_release_test=google_firebase_appdistro_v1alpha_release_test)



Run automated test(s) on release.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appdistro_v1alpha_release_test import GoogleFirebaseAppdistroV1alphaReleaseTest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappdistribution.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappdistribution.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. The name of the release resource, which is the parent of the test Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}`
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
    release_test_id = 'release_test_id_example' # str | Optional. The ID to use for the test, which will become the final component of the tests's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. If it is not provided one will be automatically generated. (optional)
    google_firebase_appdistro_v1alpha_release_test = openapi_client.GoogleFirebaseAppdistroV1alphaReleaseTest() # GoogleFirebaseAppdistroV1alphaReleaseTest |  (optional)

    try:
        api_response = api_instance.firebaseappdistribution_projects_apps_releases_tests_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, release_test_id=release_test_id, google_firebase_appdistro_v1alpha_release_test=google_firebase_appdistro_v1alpha_release_test)
        print("The response of ProjectsApi->firebaseappdistribution_projects_apps_releases_tests_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappdistribution_projects_apps_releases_tests_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The name of the release resource, which is the parent of the test Format: &#x60;projects/{project_number}/apps/{app_id}/releases/{release_id}&#x60; | 
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
 **release_test_id** | **str**| Optional. The ID to use for the test, which will become the final component of the tests&#39;s resource name. This value should be 4-63 characters, and valid characters are /a-z-/. If it is not provided one will be automatically generated. | [optional] 
 **google_firebase_appdistro_v1alpha_release_test** | [**GoogleFirebaseAppdistroV1alphaReleaseTest**](GoogleFirebaseAppdistroV1alphaReleaseTest.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppdistroV1alphaReleaseTest**](GoogleFirebaseAppdistroV1alphaReleaseTest.md)

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

# **firebaseappdistribution_projects_apps_releases_tests_get**
> GoogleFirebaseAppdistroV1alphaReleaseTest firebaseappdistribution_projects_apps_releases_tests_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Get results for automated test run on release.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appdistro_v1alpha_release_test import GoogleFirebaseAppdistroV1alphaReleaseTest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappdistribution.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappdistribution.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    name = 'name_example' # str | Required. The name of the release test resource. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}/tests/{test_id}`
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
        api_response = api_instance.firebaseappdistribution_projects_apps_releases_tests_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of ProjectsApi->firebaseappdistribution_projects_apps_releases_tests_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappdistribution_projects_apps_releases_tests_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The name of the release test resource. Format: &#x60;projects/{project_number}/apps/{app_id}/releases/{release_id}/tests/{test_id}&#x60; | 
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

[**GoogleFirebaseAppdistroV1alphaReleaseTest**](GoogleFirebaseAppdistroV1alphaReleaseTest.md)

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

# **firebaseappdistribution_projects_apps_releases_tests_list**
> GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse firebaseappdistribution_projects_apps_releases_tests_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



List results for automated tests run on release.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appdistro_v1alpha_list_release_tests_response import GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappdistribution.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappdistribution.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. The name of the release resource, which is the parent of the tests Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}`
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
    page_size = 56 # int | Optional. The maximum number of tests to return. The service may return fewer than this value. (optional)
    page_token = 'page_token_example' # str | Optional. A page token, received from a previous `ListReleaseTests` call. Provide this to retrieve the subsequent page. (optional)

    try:
        api_response = api_instance.firebaseappdistribution_projects_apps_releases_tests_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->firebaseappdistribution_projects_apps_releases_tests_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappdistribution_projects_apps_releases_tests_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The name of the release resource, which is the parent of the tests Format: &#x60;projects/{project_number}/apps/{app_id}/releases/{release_id}&#x60; | 
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
 **page_size** | **int**| Optional. The maximum number of tests to return. The service may return fewer than this value. | [optional] 
 **page_token** | **str**| Optional. A page token, received from a previous &#x60;ListReleaseTests&#x60; call. Provide this to retrieve the subsequent page. | [optional] 

### Return type

[**GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse**](GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse.md)

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

# **firebaseappdistribution_projects_apps_update_test_config**
> GoogleFirebaseAppdistroV1alphaTestConfig firebaseappdistribution_projects_apps_update_test_config(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, google_firebase_appdistro_v1alpha_test_config=google_firebase_appdistro_v1alpha_test_config)



Updates a release.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appdistro_v1alpha_test_config import GoogleFirebaseAppdistroV1alphaTestConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappdistribution.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappdistribution.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    name = 'name_example' # str | Identifier. The name of the test configuration resource. Format: `projects/{project_number}/apps/{app_id}/testConfig`
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
    update_mask = 'update_mask_example' # str | Optional. The list of fields to update. (optional)
    google_firebase_appdistro_v1alpha_test_config = openapi_client.GoogleFirebaseAppdistroV1alphaTestConfig() # GoogleFirebaseAppdistroV1alphaTestConfig |  (optional)

    try:
        api_response = api_instance.firebaseappdistribution_projects_apps_update_test_config(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, google_firebase_appdistro_v1alpha_test_config=google_firebase_appdistro_v1alpha_test_config)
        print("The response of ProjectsApi->firebaseappdistribution_projects_apps_update_test_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappdistribution_projects_apps_update_test_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Identifier. The name of the test configuration resource. Format: &#x60;projects/{project_number}/apps/{app_id}/testConfig&#x60; | 
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
 **update_mask** | **str**| Optional. The list of fields to update. | [optional] 
 **google_firebase_appdistro_v1alpha_test_config** | [**GoogleFirebaseAppdistroV1alphaTestConfig**](GoogleFirebaseAppdistroV1alphaTestConfig.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppdistroV1alphaTestConfig**](GoogleFirebaseAppdistroV1alphaTestConfig.md)

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

# **firebaseappdistribution_projects_testers_get_udids**
> GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse firebaseappdistribution_projects_testers_get_udids(project, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, mobilesdk_app_id=mobilesdk_app_id)



Get UDIDs of tester iOS devices in a project

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appdistro_v1alpha_get_tester_udids_response import GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappdistribution.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappdistribution.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    project = 'project_example' # str | The name of the project, which is the parent of testers Format: `projects/{project_number}`
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
    mobilesdk_app_id = 'mobilesdk_app_id_example' # str | Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289 (optional)

    try:
        api_response = api_instance.firebaseappdistribution_projects_testers_get_udids(project, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, mobilesdk_app_id=mobilesdk_app_id)
        print("The response of ProjectsApi->firebaseappdistribution_projects_testers_get_udids:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappdistribution_projects_testers_get_udids: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The name of the project, which is the parent of testers Format: &#x60;projects/{project_number}&#x60; | 
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
 **mobilesdk_app_id** | **str**| Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289 | [optional] 

### Return type

[**GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse**](GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse.md)

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


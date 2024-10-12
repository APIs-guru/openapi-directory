# openapi_client.EditsApi

All URIs are relative to *https://www.googleapis.com/androidpublisher/v2/applications*

Method | HTTP request | Description
------------- | ------------- | -------------
[**androidpublisher_edits_apklistings_delete**](EditsApi.md#androidpublisher_edits_apklistings_delete) | **DELETE** /{packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language} | 
[**androidpublisher_edits_apklistings_deleteall**](EditsApi.md#androidpublisher_edits_apklistings_deleteall) | **DELETE** /{packageName}/edits/{editId}/apks/{apkVersionCode}/listings | 
[**androidpublisher_edits_apklistings_get**](EditsApi.md#androidpublisher_edits_apklistings_get) | **GET** /{packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language} | 
[**androidpublisher_edits_apklistings_list**](EditsApi.md#androidpublisher_edits_apklistings_list) | **GET** /{packageName}/edits/{editId}/apks/{apkVersionCode}/listings | 
[**androidpublisher_edits_apklistings_patch**](EditsApi.md#androidpublisher_edits_apklistings_patch) | **PATCH** /{packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language} | 
[**androidpublisher_edits_apklistings_update**](EditsApi.md#androidpublisher_edits_apklistings_update) | **PUT** /{packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language} | 
[**androidpublisher_edits_apks_addexternallyhosted**](EditsApi.md#androidpublisher_edits_apks_addexternallyhosted) | **POST** /{packageName}/edits/{editId}/apks/externallyHosted | 
[**androidpublisher_edits_apks_list**](EditsApi.md#androidpublisher_edits_apks_list) | **GET** /{packageName}/edits/{editId}/apks | 
[**androidpublisher_edits_apks_upload**](EditsApi.md#androidpublisher_edits_apks_upload) | **POST** /{packageName}/edits/{editId}/apks | 
[**androidpublisher_edits_bundles_list**](EditsApi.md#androidpublisher_edits_bundles_list) | **GET** /{packageName}/edits/{editId}/bundles | 
[**androidpublisher_edits_bundles_upload**](EditsApi.md#androidpublisher_edits_bundles_upload) | **POST** /{packageName}/edits/{editId}/bundles | 
[**androidpublisher_edits_commit**](EditsApi.md#androidpublisher_edits_commit) | **POST** /{packageName}/edits/{editId}:commit | 
[**androidpublisher_edits_delete**](EditsApi.md#androidpublisher_edits_delete) | **DELETE** /{packageName}/edits/{editId} | 
[**androidpublisher_edits_deobfuscationfiles_upload**](EditsApi.md#androidpublisher_edits_deobfuscationfiles_upload) | **POST** /{packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType} | 
[**androidpublisher_edits_details_get**](EditsApi.md#androidpublisher_edits_details_get) | **GET** /{packageName}/edits/{editId}/details | 
[**androidpublisher_edits_details_patch**](EditsApi.md#androidpublisher_edits_details_patch) | **PATCH** /{packageName}/edits/{editId}/details | 
[**androidpublisher_edits_details_update**](EditsApi.md#androidpublisher_edits_details_update) | **PUT** /{packageName}/edits/{editId}/details | 
[**androidpublisher_edits_expansionfiles_get**](EditsApi.md#androidpublisher_edits_expansionfiles_get) | **GET** /{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType} | 
[**androidpublisher_edits_expansionfiles_patch**](EditsApi.md#androidpublisher_edits_expansionfiles_patch) | **PATCH** /{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType} | 
[**androidpublisher_edits_expansionfiles_update**](EditsApi.md#androidpublisher_edits_expansionfiles_update) | **PUT** /{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType} | 
[**androidpublisher_edits_expansionfiles_upload**](EditsApi.md#androidpublisher_edits_expansionfiles_upload) | **POST** /{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType} | 
[**androidpublisher_edits_get**](EditsApi.md#androidpublisher_edits_get) | **GET** /{packageName}/edits/{editId} | 
[**androidpublisher_edits_images_delete**](EditsApi.md#androidpublisher_edits_images_delete) | **DELETE** /{packageName}/edits/{editId}/listings/{language}/{imageType}/{imageId} | 
[**androidpublisher_edits_images_deleteall**](EditsApi.md#androidpublisher_edits_images_deleteall) | **DELETE** /{packageName}/edits/{editId}/listings/{language}/{imageType} | 
[**androidpublisher_edits_images_list**](EditsApi.md#androidpublisher_edits_images_list) | **GET** /{packageName}/edits/{editId}/listings/{language}/{imageType} | 
[**androidpublisher_edits_images_upload**](EditsApi.md#androidpublisher_edits_images_upload) | **POST** /{packageName}/edits/{editId}/listings/{language}/{imageType} | 
[**androidpublisher_edits_insert**](EditsApi.md#androidpublisher_edits_insert) | **POST** /{packageName}/edits | 
[**androidpublisher_edits_listings_delete**](EditsApi.md#androidpublisher_edits_listings_delete) | **DELETE** /{packageName}/edits/{editId}/listings/{language} | 
[**androidpublisher_edits_listings_deleteall**](EditsApi.md#androidpublisher_edits_listings_deleteall) | **DELETE** /{packageName}/edits/{editId}/listings | 
[**androidpublisher_edits_listings_get**](EditsApi.md#androidpublisher_edits_listings_get) | **GET** /{packageName}/edits/{editId}/listings/{language} | 
[**androidpublisher_edits_listings_list**](EditsApi.md#androidpublisher_edits_listings_list) | **GET** /{packageName}/edits/{editId}/listings | 
[**androidpublisher_edits_listings_patch**](EditsApi.md#androidpublisher_edits_listings_patch) | **PATCH** /{packageName}/edits/{editId}/listings/{language} | 
[**androidpublisher_edits_listings_update**](EditsApi.md#androidpublisher_edits_listings_update) | **PUT** /{packageName}/edits/{editId}/listings/{language} | 
[**androidpublisher_edits_testers_get**](EditsApi.md#androidpublisher_edits_testers_get) | **GET** /{packageName}/edits/{editId}/testers/{track} | 
[**androidpublisher_edits_testers_patch**](EditsApi.md#androidpublisher_edits_testers_patch) | **PATCH** /{packageName}/edits/{editId}/testers/{track} | 
[**androidpublisher_edits_testers_update**](EditsApi.md#androidpublisher_edits_testers_update) | **PUT** /{packageName}/edits/{editId}/testers/{track} | 
[**androidpublisher_edits_tracks_get**](EditsApi.md#androidpublisher_edits_tracks_get) | **GET** /{packageName}/edits/{editId}/tracks/{track} | 
[**androidpublisher_edits_tracks_list**](EditsApi.md#androidpublisher_edits_tracks_list) | **GET** /{packageName}/edits/{editId}/tracks | 
[**androidpublisher_edits_tracks_patch**](EditsApi.md#androidpublisher_edits_tracks_patch) | **PATCH** /{packageName}/edits/{editId}/tracks/{track} | 
[**androidpublisher_edits_tracks_update**](EditsApi.md#androidpublisher_edits_tracks_update) | **PUT** /{packageName}/edits/{editId}/tracks/{track} | 
[**androidpublisher_edits_validate**](EditsApi.md#androidpublisher_edits_validate) | **POST** /{packageName}/edits/{editId}:validate | 


# **androidpublisher_edits_apklistings_delete**
> androidpublisher_edits_apklistings_delete(package_name, edit_id, apk_version_code, language, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Deletes the APK-specific localized listing for a specified APK and language code.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    apk_version_code = 56 # int | The APK version code whose APK-specific listings should be read or modified.
    language = 'language_example' # str | The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass \"de-AT\".
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_instance.androidpublisher_edits_apklistings_delete(package_name, edit_id, apk_version_code, language, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_apklistings_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **apk_version_code** | **int**| The APK version code whose APK-specific listings should be read or modified. | 
 **language** | **str**| The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass \&quot;de-AT\&quot;. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
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

# **androidpublisher_edits_apklistings_deleteall**
> androidpublisher_edits_apklistings_deleteall(package_name, edit_id, apk_version_code, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Deletes all the APK-specific localized listings for a specified APK.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    apk_version_code = 56 # int | The APK version code whose APK-specific listings should be read or modified.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_instance.androidpublisher_edits_apklistings_deleteall(package_name, edit_id, apk_version_code, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_apklistings_deleteall: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **apk_version_code** | **int**| The APK version code whose APK-specific listings should be read or modified. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
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

# **androidpublisher_edits_apklistings_get**
> ApkListing androidpublisher_edits_apklistings_get(package_name, edit_id, apk_version_code, language, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Fetches the APK-specific localized listing for a specified APK and language code.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.apk_listing import ApkListing
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    apk_version_code = 56 # int | The APK version code whose APK-specific listings should be read or modified.
    language = 'language_example' # str | The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass \"de-AT\".
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.androidpublisher_edits_apklistings_get(package_name, edit_id, apk_version_code, language, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of EditsApi->androidpublisher_edits_apklistings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_apklistings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **apk_version_code** | **int**| The APK version code whose APK-specific listings should be read or modified. | 
 **language** | **str**| The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass \&quot;de-AT\&quot;. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**ApkListing**](ApkListing.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_apklistings_list**
> ApkListingsListResponse androidpublisher_edits_apklistings_list(package_name, edit_id, apk_version_code, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Lists all the APK-specific localized listings for a specified APK.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.apk_listings_list_response import ApkListingsListResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    apk_version_code = 56 # int | The APK version code whose APK-specific listings should be read or modified.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.androidpublisher_edits_apklistings_list(package_name, edit_id, apk_version_code, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of EditsApi->androidpublisher_edits_apklistings_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_apklistings_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **apk_version_code** | **int**| The APK version code whose APK-specific listings should be read or modified. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**ApkListingsListResponse**](ApkListingsListResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_apklistings_patch**
> ApkListing androidpublisher_edits_apklistings_patch(package_name, edit_id, apk_version_code, language, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, apk_listing=apk_listing)



Updates or creates the APK-specific localized listing for a specified APK and language code. This method supports patch semantics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.apk_listing import ApkListing
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    apk_version_code = 56 # int | The APK version code whose APK-specific listings should be read or modified.
    language = 'language_example' # str | The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass \"de-AT\".
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    apk_listing = openapi_client.ApkListing() # ApkListing |  (optional)

    try:
        api_response = api_instance.androidpublisher_edits_apklistings_patch(package_name, edit_id, apk_version_code, language, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, apk_listing=apk_listing)
        print("The response of EditsApi->androidpublisher_edits_apklistings_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_apklistings_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **apk_version_code** | **int**| The APK version code whose APK-specific listings should be read or modified. | 
 **language** | **str**| The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass \&quot;de-AT\&quot;. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **apk_listing** | [**ApkListing**](ApkListing.md)|  | [optional] 

### Return type

[**ApkListing**](ApkListing.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_apklistings_update**
> ApkListing androidpublisher_edits_apklistings_update(package_name, edit_id, apk_version_code, language, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, apk_listing=apk_listing)



Updates or creates the APK-specific localized listing for a specified APK and language code.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.apk_listing import ApkListing
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    apk_version_code = 56 # int | The APK version code whose APK-specific listings should be read or modified.
    language = 'language_example' # str | The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass \"de-AT\".
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    apk_listing = openapi_client.ApkListing() # ApkListing |  (optional)

    try:
        api_response = api_instance.androidpublisher_edits_apklistings_update(package_name, edit_id, apk_version_code, language, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, apk_listing=apk_listing)
        print("The response of EditsApi->androidpublisher_edits_apklistings_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_apklistings_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **apk_version_code** | **int**| The APK version code whose APK-specific listings should be read or modified. | 
 **language** | **str**| The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass \&quot;de-AT\&quot;. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **apk_listing** | [**ApkListing**](ApkListing.md)|  | [optional] 

### Return type

[**ApkListing**](ApkListing.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_apks_addexternallyhosted**
> ApksAddExternallyHostedResponse androidpublisher_edits_apks_addexternallyhosted(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, apks_add_externally_hosted_request=apks_add_externally_hosted_request)



Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to enterprises using Google Play for Work whose application is configured to restrict distribution to the enterprise domain.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.apks_add_externally_hosted_request import ApksAddExternallyHostedRequest
from openapi_client.models.apks_add_externally_hosted_response import ApksAddExternallyHostedResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    apks_add_externally_hosted_request = openapi_client.ApksAddExternallyHostedRequest() # ApksAddExternallyHostedRequest |  (optional)

    try:
        api_response = api_instance.androidpublisher_edits_apks_addexternallyhosted(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, apks_add_externally_hosted_request=apks_add_externally_hosted_request)
        print("The response of EditsApi->androidpublisher_edits_apks_addexternallyhosted:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_apks_addexternallyhosted: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **apks_add_externally_hosted_request** | [**ApksAddExternallyHostedRequest**](ApksAddExternallyHostedRequest.md)|  | [optional] 

### Return type

[**ApksAddExternallyHostedResponse**](ApksAddExternallyHostedResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_apks_list**
> ApksListResponse androidpublisher_edits_apks_list(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.apks_list_response import ApksListResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.androidpublisher_edits_apks_list(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of EditsApi->androidpublisher_edits_apks_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_apks_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**ApksListResponse**](ApksListResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_apks_upload**
> Apk androidpublisher_edits_apks_upload(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.apk import Apk
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.androidpublisher_edits_apks_upload(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of EditsApi->androidpublisher_edits_apks_upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_apks_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**Apk**](Apk.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_bundles_list**
> BundlesListResponse androidpublisher_edits_bundles_list(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.bundles_list_response import BundlesListResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.androidpublisher_edits_bundles_list(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of EditsApi->androidpublisher_edits_bundles_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_bundles_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**BundlesListResponse**](BundlesListResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_bundles_upload**
> Bundle androidpublisher_edits_bundles_upload(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, ack_bundle_installation_warning=ack_bundle_installation_warning)



Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See: https://developers.google.com/api-client-library/java/google-api-java-client/errors for an example in java.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.bundle import Bundle
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    ack_bundle_installation_warning = True # bool | Must be set to true if the bundle installation may trigger a warning on user devices (for example, if installation size may be over a threshold, typically 100 MB). (optional)

    try:
        api_response = api_instance.androidpublisher_edits_bundles_upload(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, ack_bundle_installation_warning=ack_bundle_installation_warning)
        print("The response of EditsApi->androidpublisher_edits_bundles_upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_bundles_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **ack_bundle_installation_warning** | **bool**| Must be set to true if the bundle installation may trigger a warning on user devices (for example, if installation size may be over a threshold, typically 100 MB). | [optional] 

### Return type

[**Bundle**](Bundle.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_commit**
> AppEdit androidpublisher_edits_commit(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Commits/applies the changes made in this edit back to the app.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.app_edit import AppEdit
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.androidpublisher_edits_commit(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of EditsApi->androidpublisher_edits_commit:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_commit: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**AppEdit**](AppEdit.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_delete**
> androidpublisher_edits_delete(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_instance.androidpublisher_edits_delete(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
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

# **androidpublisher_edits_deobfuscationfiles_upload**
> DeobfuscationFilesUploadResponse androidpublisher_edits_deobfuscationfiles_upload(package_name, edit_id, apk_version_code, deobfuscation_file_type, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Uploads the deobfuscation file of the specified APK. If a deobfuscation or symbolication file already exists, it will be replaced. See https://developer.android.com/studio/build/shrink-code to learn more about deobfuscation files.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.deobfuscation_files_upload_response import DeobfuscationFilesUploadResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier of the Android app for which the deobfuscation files are being uploaded; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    apk_version_code = 56 # int | The version code of the APK whose deobfuscation file is being uploaded.
    deobfuscation_file_type = 'deobfuscation_file_type_example' # str | 
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.androidpublisher_edits_deobfuscationfiles_upload(package_name, edit_id, apk_version_code, deobfuscation_file_type, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of EditsApi->androidpublisher_edits_deobfuscationfiles_upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_deobfuscationfiles_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier of the Android app for which the deobfuscation files are being uploaded; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **apk_version_code** | **int**| The version code of the APK whose deobfuscation file is being uploaded. | 
 **deobfuscation_file_type** | **str**|  | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**DeobfuscationFilesUploadResponse**](DeobfuscationFilesUploadResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_details_get**
> AppDetails androidpublisher_edits_details_get(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Fetches app details for this edit. This includes the default language and developer support contact information.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.app_details import AppDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.androidpublisher_edits_details_get(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of EditsApi->androidpublisher_edits_details_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_details_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**AppDetails**](AppDetails.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_details_patch**
> AppDetails androidpublisher_edits_details_patch(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, app_details=app_details)



Updates app details for this edit. This method supports patch semantics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.app_details import AppDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    app_details = openapi_client.AppDetails() # AppDetails |  (optional)

    try:
        api_response = api_instance.androidpublisher_edits_details_patch(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, app_details=app_details)
        print("The response of EditsApi->androidpublisher_edits_details_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_details_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **app_details** | [**AppDetails**](AppDetails.md)|  | [optional] 

### Return type

[**AppDetails**](AppDetails.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_details_update**
> AppDetails androidpublisher_edits_details_update(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, app_details=app_details)



Updates app details for this edit.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.app_details import AppDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    app_details = openapi_client.AppDetails() # AppDetails |  (optional)

    try:
        api_response = api_instance.androidpublisher_edits_details_update(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, app_details=app_details)
        print("The response of EditsApi->androidpublisher_edits_details_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_details_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **app_details** | [**AppDetails**](AppDetails.md)|  | [optional] 

### Return type

[**AppDetails**](AppDetails.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_expansionfiles_get**
> ExpansionFile androidpublisher_edits_expansionfiles_get(package_name, edit_id, apk_version_code, expansion_file_type, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Fetches the Expansion File configuration for the APK specified.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.expansion_file import ExpansionFile
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    apk_version_code = 56 # int | The version code of the APK whose Expansion File configuration is being read or modified.
    expansion_file_type = 'expansion_file_type_example' # str | 
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.androidpublisher_edits_expansionfiles_get(package_name, edit_id, apk_version_code, expansion_file_type, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of EditsApi->androidpublisher_edits_expansionfiles_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_expansionfiles_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **apk_version_code** | **int**| The version code of the APK whose Expansion File configuration is being read or modified. | 
 **expansion_file_type** | **str**|  | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**ExpansionFile**](ExpansionFile.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_expansionfiles_patch**
> ExpansionFile androidpublisher_edits_expansionfiles_patch(package_name, edit_id, apk_version_code, expansion_file_type, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, expansion_file=expansion_file)



Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.expansion_file import ExpansionFile
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    apk_version_code = 56 # int | The version code of the APK whose Expansion File configuration is being read or modified.
    expansion_file_type = 'expansion_file_type_example' # str | 
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    expansion_file = openapi_client.ExpansionFile() # ExpansionFile |  (optional)

    try:
        api_response = api_instance.androidpublisher_edits_expansionfiles_patch(package_name, edit_id, apk_version_code, expansion_file_type, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, expansion_file=expansion_file)
        print("The response of EditsApi->androidpublisher_edits_expansionfiles_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_expansionfiles_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **apk_version_code** | **int**| The version code of the APK whose Expansion File configuration is being read or modified. | 
 **expansion_file_type** | **str**|  | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **expansion_file** | [**ExpansionFile**](ExpansionFile.md)|  | [optional] 

### Return type

[**ExpansionFile**](ExpansionFile.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_expansionfiles_update**
> ExpansionFile androidpublisher_edits_expansionfiles_update(package_name, edit_id, apk_version_code, expansion_file_type, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, expansion_file=expansion_file)



Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.expansion_file import ExpansionFile
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    apk_version_code = 56 # int | The version code of the APK whose Expansion File configuration is being read or modified.
    expansion_file_type = 'expansion_file_type_example' # str | 
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    expansion_file = openapi_client.ExpansionFile() # ExpansionFile |  (optional)

    try:
        api_response = api_instance.androidpublisher_edits_expansionfiles_update(package_name, edit_id, apk_version_code, expansion_file_type, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, expansion_file=expansion_file)
        print("The response of EditsApi->androidpublisher_edits_expansionfiles_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_expansionfiles_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **apk_version_code** | **int**| The version code of the APK whose Expansion File configuration is being read or modified. | 
 **expansion_file_type** | **str**|  | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **expansion_file** | [**ExpansionFile**](ExpansionFile.md)|  | [optional] 

### Return type

[**ExpansionFile**](ExpansionFile.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_expansionfiles_upload**
> ExpansionFilesUploadResponse androidpublisher_edits_expansionfiles_upload(package_name, edit_id, apk_version_code, expansion_file_type, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Uploads and attaches a new Expansion File to the APK specified.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.expansion_files_upload_response import ExpansionFilesUploadResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    apk_version_code = 56 # int | The version code of the APK whose Expansion File configuration is being read or modified.
    expansion_file_type = 'expansion_file_type_example' # str | 
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.androidpublisher_edits_expansionfiles_upload(package_name, edit_id, apk_version_code, expansion_file_type, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of EditsApi->androidpublisher_edits_expansionfiles_upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_expansionfiles_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **apk_version_code** | **int**| The version code of the APK whose Expansion File configuration is being read or modified. | 
 **expansion_file_type** | **str**|  | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**ExpansionFilesUploadResponse**](ExpansionFilesUploadResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_get**
> AppEdit androidpublisher_edits_get(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.app_edit import AppEdit
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.androidpublisher_edits_get(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of EditsApi->androidpublisher_edits_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**AppEdit**](AppEdit.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_images_delete**
> androidpublisher_edits_images_delete(package_name, edit_id, language, image_type, image_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Deletes the image (specified by id) from the edit.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    language = 'language_example' # str | The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass \"de-AT\".
    image_type = 'image_type_example' # str | 
    image_id = 'image_id_example' # str | Unique identifier an image within the set of images attached to this edit.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_instance.androidpublisher_edits_images_delete(package_name, edit_id, language, image_type, image_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_images_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **language** | **str**| The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass \&quot;de-AT\&quot;. | 
 **image_type** | **str**|  | 
 **image_id** | **str**| Unique identifier an image within the set of images attached to this edit. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
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

# **androidpublisher_edits_images_deleteall**
> ImagesDeleteAllResponse androidpublisher_edits_images_deleteall(package_name, edit_id, language, image_type, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Deletes all images for the specified language and image type.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.images_delete_all_response import ImagesDeleteAllResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    language = 'language_example' # str | The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass \"de-AT\".
    image_type = 'image_type_example' # str | 
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.androidpublisher_edits_images_deleteall(package_name, edit_id, language, image_type, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of EditsApi->androidpublisher_edits_images_deleteall:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_images_deleteall: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **language** | **str**| The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass \&quot;de-AT\&quot;. | 
 **image_type** | **str**|  | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**ImagesDeleteAllResponse**](ImagesDeleteAllResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_images_list**
> ImagesListResponse androidpublisher_edits_images_list(package_name, edit_id, language, image_type, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Lists all images for the specified language and image type.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.images_list_response import ImagesListResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    language = 'language_example' # str | The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass \"de-AT\".
    image_type = 'image_type_example' # str | 
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.androidpublisher_edits_images_list(package_name, edit_id, language, image_type, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of EditsApi->androidpublisher_edits_images_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_images_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **language** | **str**| The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass \&quot;de-AT\&quot;. | 
 **image_type** | **str**|  | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**ImagesListResponse**](ImagesListResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_images_upload**
> ImagesUploadResponse androidpublisher_edits_images_upload(package_name, edit_id, language, image_type, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Uploads a new image and adds it to the list of images for the specified language and image type.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.images_upload_response import ImagesUploadResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    language = 'language_example' # str | The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass \"de-AT\".
    image_type = 'image_type_example' # str | 
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.androidpublisher_edits_images_upload(package_name, edit_id, language, image_type, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of EditsApi->androidpublisher_edits_images_upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_images_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **language** | **str**| The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass \&quot;de-AT\&quot;. | 
 **image_type** | **str**|  | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**ImagesUploadResponse**](ImagesUploadResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_insert**
> AppEdit androidpublisher_edits_insert(package_name, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, app_edit=app_edit)



Creates a new edit for an app, populated with the app's current state.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.app_edit import AppEdit
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    app_edit = openapi_client.AppEdit() # AppEdit |  (optional)

    try:
        api_response = api_instance.androidpublisher_edits_insert(package_name, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, app_edit=app_edit)
        print("The response of EditsApi->androidpublisher_edits_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **app_edit** | [**AppEdit**](AppEdit.md)|  | [optional] 

### Return type

[**AppEdit**](AppEdit.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_listings_delete**
> androidpublisher_edits_listings_delete(package_name, edit_id, language, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Deletes the specified localized store listing from an edit.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    language = 'language_example' # str | The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass \"de-AT\".
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_instance.androidpublisher_edits_listings_delete(package_name, edit_id, language, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_listings_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **language** | **str**| The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass \&quot;de-AT\&quot;. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
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

# **androidpublisher_edits_listings_deleteall**
> androidpublisher_edits_listings_deleteall(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Deletes all localized listings from an edit.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_instance.androidpublisher_edits_listings_deleteall(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_listings_deleteall: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
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

# **androidpublisher_edits_listings_get**
> Listing androidpublisher_edits_listings_get(package_name, edit_id, language, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Fetches information about a localized store listing.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.listing import Listing
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    language = 'language_example' # str | The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass \"de-AT\".
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.androidpublisher_edits_listings_get(package_name, edit_id, language, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of EditsApi->androidpublisher_edits_listings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_listings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **language** | **str**| The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass \&quot;de-AT\&quot;. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**Listing**](Listing.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_listings_list**
> ListingsListResponse androidpublisher_edits_listings_list(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Returns all of the localized store listings attached to this edit.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.listings_list_response import ListingsListResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.androidpublisher_edits_listings_list(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of EditsApi->androidpublisher_edits_listings_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_listings_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**ListingsListResponse**](ListingsListResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_listings_patch**
> Listing androidpublisher_edits_listings_patch(package_name, edit_id, language, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, listing=listing)



Creates or updates a localized store listing. This method supports patch semantics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.listing import Listing
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    language = 'language_example' # str | The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass \"de-AT\".
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    listing = openapi_client.Listing() # Listing |  (optional)

    try:
        api_response = api_instance.androidpublisher_edits_listings_patch(package_name, edit_id, language, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, listing=listing)
        print("The response of EditsApi->androidpublisher_edits_listings_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_listings_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **language** | **str**| The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass \&quot;de-AT\&quot;. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **listing** | [**Listing**](Listing.md)|  | [optional] 

### Return type

[**Listing**](Listing.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_listings_update**
> Listing androidpublisher_edits_listings_update(package_name, edit_id, language, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, listing=listing)



Creates or updates a localized store listing.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.listing import Listing
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    language = 'language_example' # str | The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass \"de-AT\".
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    listing = openapi_client.Listing() # Listing |  (optional)

    try:
        api_response = api_instance.androidpublisher_edits_listings_update(package_name, edit_id, language, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, listing=listing)
        print("The response of EditsApi->androidpublisher_edits_listings_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_listings_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **language** | **str**| The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass \&quot;de-AT\&quot;. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **listing** | [**Listing**](Listing.md)|  | [optional] 

### Return type

[**Listing**](Listing.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_testers_get**
> Testers androidpublisher_edits_testers_get(package_name, edit_id, track, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.testers import Testers
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    track = 'track_example' # str | The track to read or modify.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.androidpublisher_edits_testers_get(package_name, edit_id, track, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of EditsApi->androidpublisher_edits_testers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_testers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **track** | **str**| The track to read or modify. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**Testers**](Testers.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_testers_patch**
> Testers androidpublisher_edits_testers_patch(package_name, edit_id, track, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, testers=testers)



### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.testers import Testers
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    track = 'track_example' # str | The track to read or modify.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    testers = openapi_client.Testers() # Testers |  (optional)

    try:
        api_response = api_instance.androidpublisher_edits_testers_patch(package_name, edit_id, track, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, testers=testers)
        print("The response of EditsApi->androidpublisher_edits_testers_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_testers_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **track** | **str**| The track to read or modify. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **testers** | [**Testers**](Testers.md)|  | [optional] 

### Return type

[**Testers**](Testers.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_testers_update**
> Testers androidpublisher_edits_testers_update(package_name, edit_id, track, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, testers=testers)



### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.testers import Testers
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    track = 'track_example' # str | The track to read or modify.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    testers = openapi_client.Testers() # Testers |  (optional)

    try:
        api_response = api_instance.androidpublisher_edits_testers_update(package_name, edit_id, track, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, testers=testers)
        print("The response of EditsApi->androidpublisher_edits_testers_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_testers_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **track** | **str**| The track to read or modify. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **testers** | [**Testers**](Testers.md)|  | [optional] 

### Return type

[**Testers**](Testers.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_tracks_get**
> Track androidpublisher_edits_tracks_get(package_name, edit_id, track, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.track import Track
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    track = 'track_example' # str | The track to read or modify.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.androidpublisher_edits_tracks_get(package_name, edit_id, track, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of EditsApi->androidpublisher_edits_tracks_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_tracks_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **track** | **str**| The track to read or modify. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**Track**](Track.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_tracks_list**
> TracksListResponse androidpublisher_edits_tracks_list(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Lists all the track configurations for this edit.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.tracks_list_response import TracksListResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.androidpublisher_edits_tracks_list(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of EditsApi->androidpublisher_edits_tracks_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_tracks_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**TracksListResponse**](TracksListResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_tracks_patch**
> Track androidpublisher_edits_tracks_patch(package_name, edit_id, track, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, track2=track2)



Updates the track configuration for the specified track type. This method supports patch semantics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.track import Track
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    track = 'track_example' # str | The track to read or modify.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    track2 = openapi_client.Track() # Track |  (optional)

    try:
        api_response = api_instance.androidpublisher_edits_tracks_patch(package_name, edit_id, track, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, track2=track2)
        print("The response of EditsApi->androidpublisher_edits_tracks_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_tracks_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **track** | **str**| The track to read or modify. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **track2** | [**Track**](Track.md)|  | [optional] 

### Return type

[**Track**](Track.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_tracks_update**
> Track androidpublisher_edits_tracks_update(package_name, edit_id, track, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, track2=track2)



Updates the track configuration for the specified track type.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.track import Track
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    track = 'track_example' # str | The track to read or modify.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    track2 = openapi_client.Track() # Track |  (optional)

    try:
        api_response = api_instance.androidpublisher_edits_tracks_update(package_name, edit_id, track, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, track2=track2)
        print("The response of EditsApi->androidpublisher_edits_tracks_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_tracks_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **track** | **str**| The track to read or modify. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **track2** | [**Track**](Track.md)|  | [optional] 

### Return type

[**Track**](Track.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_edits_validate**
> AppEdit androidpublisher_edits_validate(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Checks that the edit can be successfully committed. The edit's changes are not applied to the live app.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.app_edit import AppEdit
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.EditsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\".
    edit_id = 'edit_id_example' # str | Unique identifier for this edit.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.androidpublisher_edits_validate(package_name, edit_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of EditsApi->androidpublisher_edits_validate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsApi->androidpublisher_edits_validate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app that is being updated; for example, \&quot;com.spiffygame\&quot;. | 
 **edit_id** | **str**| Unique identifier for this edit. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**AppEdit**](AppEdit.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


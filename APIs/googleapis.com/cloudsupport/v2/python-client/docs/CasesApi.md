# openapi_client.CasesApi

All URIs are relative to *https://cloudsupport.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloudsupport_cases_attachments_list**](CasesApi.md#cloudsupport_cases_attachments_list) | **GET** /v2/{parent}/attachments | 
[**cloudsupport_cases_close**](CasesApi.md#cloudsupport_cases_close) | **POST** /v2/{name}:close | 
[**cloudsupport_cases_comments_create**](CasesApi.md#cloudsupport_cases_comments_create) | **POST** /v2/{parent}/comments | 
[**cloudsupport_cases_comments_list**](CasesApi.md#cloudsupport_cases_comments_list) | **GET** /v2/{parent}/comments | 
[**cloudsupport_cases_create**](CasesApi.md#cloudsupport_cases_create) | **POST** /v2/{parent}/cases | 
[**cloudsupport_cases_escalate**](CasesApi.md#cloudsupport_cases_escalate) | **POST** /v2/{name}:escalate | 
[**cloudsupport_cases_get**](CasesApi.md#cloudsupport_cases_get) | **GET** /v2/{name} | 
[**cloudsupport_cases_list**](CasesApi.md#cloudsupport_cases_list) | **GET** /v2/{parent}/cases | 
[**cloudsupport_cases_patch**](CasesApi.md#cloudsupport_cases_patch) | **PATCH** /v2/{name} | 
[**cloudsupport_cases_search**](CasesApi.md#cloudsupport_cases_search) | **GET** /v2/{parent}/cases:search | 


# **cloudsupport_cases_attachments_list**
> ListAttachmentsResponse cloudsupport_cases_attachments_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



List all the attachments associated with a support case. EXAMPLES: cURL: ```shell case=\"projects/some-project/cases/23598314\" curl \\ --header \"Authorization: Bearer $(gcloud auth print-access-token)\" \\ \"https://cloudsupport.googleapis.com/v2/$case/attachments\" ``` Python: ```python import googleapiclient.discovery api_version = \"v2\" supportApiService = googleapiclient.discovery.build( serviceName=\"cloudsupport\", version=api_version, discoveryServiceUrl=f\"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version}\", ) request = ( supportApiService.cases() .attachments() .list(parent=\"projects/some-project/cases/43595344\") ) print(request.execute()) ```

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_attachments_response import ListAttachmentsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudsupport.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudsupport.googleapis.com"
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
    api_instance = openapi_client.CasesApi(api_client)
    parent = 'parent_example' # str | Required. The name of the case for which attachments should be listed.
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
    page_size = 56 # int | The maximum number of attachments fetched with each request. If not provided, the default is 10. The maximum page size that will be returned is 100. (optional)
    page_token = 'page_token_example' # str | A token identifying the page of results to return. If unspecified, the first page is retrieved. (optional)

    try:
        api_response = api_instance.cloudsupport_cases_attachments_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of CasesApi->cloudsupport_cases_attachments_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cloudsupport_cases_attachments_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The name of the case for which attachments should be listed. | 
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
 **page_size** | **int**| The maximum number of attachments fetched with each request. If not provided, the default is 10. The maximum page size that will be returned is 100. | [optional] 
 **page_token** | **str**| A token identifying the page of results to return. If unspecified, the first page is retrieved. | [optional] 

### Return type

[**ListAttachmentsResponse**](ListAttachmentsResponse.md)

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

# **cloudsupport_cases_close**
> Case cloudsupport_cases_close(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, body=body)



Close a case. EXAMPLES: cURL: ```shell case=\"projects/some-project/cases/43595344\" curl \\ --request POST \\ --header \"Authorization: Bearer $(gcloud auth print-access-token)\" \\ \"https://cloudsupport.googleapis.com/v2/$case:close\" ``` Python: ```python import googleapiclient.discovery api_version = \"v2\" supportApiService = googleapiclient.discovery.build( serviceName=\"cloudsupport\", version=api_version, discoveryServiceUrl=f\"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version}\", ) request = supportApiService.cases().close( name=\"projects/some-project/cases/43595344\" ) print(request.execute()) ```

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.case import Case
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudsupport.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudsupport.googleapis.com"
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
    api_instance = openapi_client.CasesApi(api_client)
    name = 'name_example' # str | Required. The name of the case to close.
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
    body = None # object |  (optional)

    try:
        api_response = api_instance.cloudsupport_cases_close(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, body=body)
        print("The response of CasesApi->cloudsupport_cases_close:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cloudsupport_cases_close: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The name of the case to close. | 
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
 **body** | **object**|  | [optional] 

### Return type

[**Case**](Case.md)

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

# **cloudsupport_cases_comments_create**
> Comment cloudsupport_cases_comments_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, comment=comment)



Add a new comment to a case. The comment must have the following fields set: `body`. EXAMPLES: cURL: ```shell case=\"projects/some-project/cases/43591344\" curl \\ --request POST \\ --header \"Authorization: Bearer $(gcloud auth print-access-token)\" \\ --header 'Content-Type: application/json' \\ --data '{ \"body\": \"This is a test comment.\" }' \\ \"https://cloudsupport.googleapis.com/v2/$case/comments\" ``` Python: ```python import googleapiclient.discovery api_version = \"v2\" supportApiService = googleapiclient.discovery.build( serviceName=\"cloudsupport\", version=api_version, discoveryServiceUrl=f\"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version}\", ) request = ( supportApiService.cases() .comments() .create( parent=\"projects/some-project/cases/43595344\", body={\"body\": \"This is a test comment.\"}, ) ) print(request.execute()) ```

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.comment import Comment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudsupport.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudsupport.googleapis.com"
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
    api_instance = openapi_client.CasesApi(api_client)
    parent = 'parent_example' # str | Required. The name of the case to which the comment should be added.
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
    comment = openapi_client.Comment() # Comment |  (optional)

    try:
        api_response = api_instance.cloudsupport_cases_comments_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, comment=comment)
        print("The response of CasesApi->cloudsupport_cases_comments_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cloudsupport_cases_comments_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The name of the case to which the comment should be added. | 
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
 **comment** | [**Comment**](Comment.md)|  | [optional] 

### Return type

[**Comment**](Comment.md)

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

# **cloudsupport_cases_comments_list**
> ListCommentsResponse cloudsupport_cases_comments_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



List all the comments associated with a case. EXAMPLES: cURL: ```shell case=\"projects/some-project/cases/43595344\" curl \\ --header \"Authorization: Bearer $(gcloud auth print-access-token)\" \\ \"https://cloudsupport.googleapis.com/v2/$case/comments\" ``` Python: ```python import googleapiclient.discovery api_version = \"v2\" supportApiService = googleapiclient.discovery.build( serviceName=\"cloudsupport\", version=api_version, discoveryServiceUrl=f\"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version}\", ) request = ( supportApiService.cases() .comments() .list(parent=\"projects/some-project/cases/43595344\") ) print(request.execute()) ```

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_comments_response import ListCommentsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudsupport.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudsupport.googleapis.com"
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
    api_instance = openapi_client.CasesApi(api_client)
    parent = 'parent_example' # str | Required. The name of the case for which to list comments.
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
    page_size = 56 # int | The maximum number of comments to fetch. Defaults to 10. (optional)
    page_token = 'page_token_example' # str | A token identifying the page of results to return. If unspecified, the first page is returned. (optional)

    try:
        api_response = api_instance.cloudsupport_cases_comments_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of CasesApi->cloudsupport_cases_comments_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cloudsupport_cases_comments_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The name of the case for which to list comments. | 
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
 **page_size** | **int**| The maximum number of comments to fetch. Defaults to 10. | [optional] 
 **page_token** | **str**| A token identifying the page of results to return. If unspecified, the first page is returned. | [optional] 

### Return type

[**ListCommentsResponse**](ListCommentsResponse.md)

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

# **cloudsupport_cases_create**
> Case cloudsupport_cases_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, case=case)



Create a new case and associate it with a parent. It must have the following fields set: `display_name`, `description`, `classification`, and `priority`. If you're just testing the API and don't want to route your case to an agent, set `testCase=true`. EXAMPLES: cURL: ```shell parent=\"projects/some-project\" curl \\ --request POST \\ --header \"Authorization: Bearer $(gcloud auth print-access-token)\" \\ --header 'Content-Type: application/json' \\ --data '{ \"display_name\": \"Test case created by me.\", \"description\": \"a random test case, feel free to close\", \"classification\": { \"id\": \"100IK2AKCLHMGRJ9CDGMOCGP8DM6UTB4BT262T31BT1M2T31DHNMENPO6KS36CPJ786L2TBFEHGN6NPI64R3CDHN8880G08I1H3MURR7DHII0GRCDTQM8\" }, \"time_zone\": \"-07:00\", \"subscriber_email_addresses\": [ \"foo@domain.com\", \"bar@domain.com\" ], \"testCase\": true, \"priority\": \"P3\" }' \\ \"https://cloudsupport.googleapis.com/v2/$parent/cases\" ``` Python: ```python import googleapiclient.discovery api_version = \"v2\" supportApiService = googleapiclient.discovery.build( serviceName=\"cloudsupport\", version=api_version, discoveryServiceUrl=f\"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version}\", ) request = supportApiService.cases().create( parent=\"projects/some-project\", body={ \"displayName\": \"A Test Case\", \"description\": \"This is a test case.\", \"testCase\": True, \"priority\": \"P2\", \"classification\": { \"id\": \"100IK2AKCLHMGRJ9CDGMOCGP8DM6UTB4BT262T31BT1M2T31DHNMENPO6KS36CPJ786L2TBFEHGN6NPI64R3CDHN8880G08I1H3MURR7DHII0GRCDTQM8\" }, }, ) print(request.execute()) ```

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.case import Case
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudsupport.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudsupport.googleapis.com"
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
    api_instance = openapi_client.CasesApi(api_client)
    parent = 'parent_example' # str | Required. The name of the parent under which the case should be created.
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
    case = openapi_client.Case() # Case |  (optional)

    try:
        api_response = api_instance.cloudsupport_cases_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, case=case)
        print("The response of CasesApi->cloudsupport_cases_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cloudsupport_cases_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The name of the parent under which the case should be created. | 
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
 **case** | [**Case**](Case.md)|  | [optional] 

### Return type

[**Case**](Case.md)

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

# **cloudsupport_cases_escalate**
> Case cloudsupport_cases_escalate(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, escalate_case_request=escalate_case_request)



Escalate a case, starting the Google Cloud Support escalation management process. This operation is only available for some support services. Go to https://cloud.google.com/support and look for 'Technical support escalations' in the feature list to find out which ones let you do that. EXAMPLES: cURL: ```shell case=\"projects/some-project/cases/43595344\" curl \\ --request POST \\ --header \"Authorization: Bearer $(gcloud auth print-access-token)\" \\ --header \"Content-Type: application/json\" \\ --data '{ \"escalation\": { \"reason\": \"BUSINESS_IMPACT\", \"justification\": \"This is a test escalation.\" } }' \\ \"https://cloudsupport.googleapis.com/v2/$case:escalate\" ``` Python: ```python import googleapiclient.discovery api_version = \"v2\" supportApiService = googleapiclient.discovery.build( serviceName=\"cloudsupport\", version=api_version, discoveryServiceUrl=f\"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version}\", ) request = supportApiService.cases().escalate( name=\"projects/some-project/cases/43595344\", body={ \"escalation\": { \"reason\": \"BUSINESS_IMPACT\", \"justification\": \"This is a test escalation.\", }, }, ) print(request.execute()) ```

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.case import Case
from openapi_client.models.escalate_case_request import EscalateCaseRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudsupport.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudsupport.googleapis.com"
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
    api_instance = openapi_client.CasesApi(api_client)
    name = 'name_example' # str | Required. The name of the case to be escalated.
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
    escalate_case_request = openapi_client.EscalateCaseRequest() # EscalateCaseRequest |  (optional)

    try:
        api_response = api_instance.cloudsupport_cases_escalate(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, escalate_case_request=escalate_case_request)
        print("The response of CasesApi->cloudsupport_cases_escalate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cloudsupport_cases_escalate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The name of the case to be escalated. | 
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
 **escalate_case_request** | [**EscalateCaseRequest**](EscalateCaseRequest.md)|  | [optional] 

### Return type

[**Case**](Case.md)

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

# **cloudsupport_cases_get**
> Case cloudsupport_cases_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Retrieve a case. EXAMPLES: cURL: ```shell case=\"projects/some-project/cases/16033687\" curl \\ --header \"Authorization: Bearer $(gcloud auth print-access-token)\" \\ \"https://cloudsupport.googleapis.com/v2/$case\" ``` Python: ```python import googleapiclient.discovery api_version = \"v2\" supportApiService = googleapiclient.discovery.build( serviceName=\"cloudsupport\", version=api_version, discoveryServiceUrl=f\"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version}\", ) request = supportApiService.cases().get( name=\"projects/some-project/cases/43595344\", ) print(request.execute()) ```

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.case import Case
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudsupport.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudsupport.googleapis.com"
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
    api_instance = openapi_client.CasesApi(api_client)
    name = 'name_example' # str | Required. The full name of a case to be retrieved.
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
        api_response = api_instance.cloudsupport_cases_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of CasesApi->cloudsupport_cases_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cloudsupport_cases_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The full name of a case to be retrieved. | 
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

[**Case**](Case.md)

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

# **cloudsupport_cases_list**
> ListCasesResponse cloudsupport_cases_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token)



Retrieve all cases under a parent, but not its children. For example, listing cases under an organization only returns the cases that are directly parented by that organization. To retrieve cases under an organization and its projects, use `cases.search`. EXAMPLES: cURL: ```shell parent=\"projects/some-project\" curl \\ --header \"Authorization: Bearer $(gcloud auth print-access-token)\" \\ \"https://cloudsupport.googleapis.com/v2/$parent/cases\" ``` Python: ```python import googleapiclient.discovery api_version = \"v2\" supportApiService = googleapiclient.discovery.build( serviceName=\"cloudsupport\", version=api_version, discoveryServiceUrl=f\"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version}\", ) request = supportApiService.cases().list(parent=\"projects/some-project\") print(request.execute()) ```

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_cases_response import ListCasesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudsupport.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudsupport.googleapis.com"
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
    api_instance = openapi_client.CasesApi(api_client)
    parent = 'parent_example' # str | Required. The name of a parent to list cases under.
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
    filter = 'filter_example' # str | An expression used to filter cases. If it's an empty string, then no filtering happens. Otherwise, the endpoint returns the cases that match the filter. Expressions use the following fields separated by `AND` and specified with `=`: - `state`: Can be `OPEN` or `CLOSED`. - `priority`: Can be `P0`, `P1`, `P2`, `P3`, or `P4`. You can specify multiple values for priority using the `OR` operator. For example, `priority=P1 OR priority=P2`. - `creator.email`: The email address of the case creator. EXAMPLES: - `state=CLOSED` - `state=OPEN AND creator.email=\"tester@example.com\"` - `state=OPEN AND (priority=P0 OR priority=P1)` (optional)
    page_size = 56 # int | The maximum number of cases fetched with each request. Defaults to 10. (optional)
    page_token = 'page_token_example' # str | A token identifying the page of results to return. If unspecified, the first page is retrieved. (optional)

    try:
        api_response = api_instance.cloudsupport_cases_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token)
        print("The response of CasesApi->cloudsupport_cases_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cloudsupport_cases_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The name of a parent to list cases under. | 
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
 **filter** | **str**| An expression used to filter cases. If it&#39;s an empty string, then no filtering happens. Otherwise, the endpoint returns the cases that match the filter. Expressions use the following fields separated by &#x60;AND&#x60; and specified with &#x60;&#x3D;&#x60;: - &#x60;state&#x60;: Can be &#x60;OPEN&#x60; or &#x60;CLOSED&#x60;. - &#x60;priority&#x60;: Can be &#x60;P0&#x60;, &#x60;P1&#x60;, &#x60;P2&#x60;, &#x60;P3&#x60;, or &#x60;P4&#x60;. You can specify multiple values for priority using the &#x60;OR&#x60; operator. For example, &#x60;priority&#x3D;P1 OR priority&#x3D;P2&#x60;. - &#x60;creator.email&#x60;: The email address of the case creator. EXAMPLES: - &#x60;state&#x3D;CLOSED&#x60; - &#x60;state&#x3D;OPEN AND creator.email&#x3D;\&quot;tester@example.com\&quot;&#x60; - &#x60;state&#x3D;OPEN AND (priority&#x3D;P0 OR priority&#x3D;P1)&#x60; | [optional] 
 **page_size** | **int**| The maximum number of cases fetched with each request. Defaults to 10. | [optional] 
 **page_token** | **str**| A token identifying the page of results to return. If unspecified, the first page is retrieved. | [optional] 

### Return type

[**ListCasesResponse**](ListCasesResponse.md)

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

# **cloudsupport_cases_patch**
> Case cloudsupport_cases_patch(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, case=case)



Update a case. Only some fields can be updated. EXAMPLES: cURL: ```shell case=\"projects/some-project/cases/43595344\" curl \\ --request PATCH \\ --header \"Authorization: Bearer $(gcloud auth print-access-token)\" \\ --header \"Content-Type: application/json\" \\ --data '{ \"priority\": \"P1\" }' \\ \"https://cloudsupport.googleapis.com/v2/$case?updateMask=priority\" ``` Python: ```python import googleapiclient.discovery api_version = \"v2\" supportApiService = googleapiclient.discovery.build( serviceName=\"cloudsupport\", version=api_version, discoveryServiceUrl=f\"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version}\", ) request = supportApiService.cases().patch( name=\"projects/some-project/cases/43112854\", body={ \"displayName\": \"This is Now a New Title\", \"priority\": \"P2\", }, ) print(request.execute()) ```

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.case import Case
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudsupport.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudsupport.googleapis.com"
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
    api_instance = openapi_client.CasesApi(api_client)
    name = 'name_example' # str | The resource name for the case.
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
    update_mask = 'update_mask_example' # str | A list of attributes of the case that should be updated. Supported values are `priority`, `display_name`, and `subscriber_email_addresses`. If no fields are specified, all supported fields are updated. Be careful - if you do not provide a field mask, then you might accidentally clear some fields. For example, if you leave the field mask empty and do not provide a value for `subscriber_email_addresses`, then `subscriber_email_addresses` is updated to empty. (optional)
    case = openapi_client.Case() # Case |  (optional)

    try:
        api_response = api_instance.cloudsupport_cases_patch(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, case=case)
        print("The response of CasesApi->cloudsupport_cases_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cloudsupport_cases_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The resource name for the case. | 
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
 **update_mask** | **str**| A list of attributes of the case that should be updated. Supported values are &#x60;priority&#x60;, &#x60;display_name&#x60;, and &#x60;subscriber_email_addresses&#x60;. If no fields are specified, all supported fields are updated. Be careful - if you do not provide a field mask, then you might accidentally clear some fields. For example, if you leave the field mask empty and do not provide a value for &#x60;subscriber_email_addresses&#x60;, then &#x60;subscriber_email_addresses&#x60; is updated to empty. | [optional] 
 **case** | [**Case**](Case.md)|  | [optional] 

### Return type

[**Case**](Case.md)

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

# **cloudsupport_cases_search**
> SearchCasesResponse cloudsupport_cases_search(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token, query=query)



Search for cases using a query. EXAMPLES: cURL: ```shell parent=\"projects/some-project\" curl \\ --header \"Authorization: Bearer $(gcloud auth print-access-token)\" \\ \"https://cloudsupport.googleapis.com/v2/$parent/cases:search\" ``` Python: ```python import googleapiclient.discovery api_version = \"v2\" supportApiService = googleapiclient.discovery.build( serviceName=\"cloudsupport\", version=api_version, discoveryServiceUrl=f\"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version}\", ) request = supportApiService.cases().search( parent=\"projects/some-project\", query=\"state=OPEN\" ) print(request.execute()) ```

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.search_cases_response import SearchCasesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudsupport.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudsupport.googleapis.com"
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
    api_instance = openapi_client.CasesApi(api_client)
    parent = 'parent_example' # str | The name of the parent resource to search for cases under.
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
    page_size = 56 # int | The maximum number of cases fetched with each request. The default page size is 10. (optional)
    page_token = 'page_token_example' # str | A token identifying the page of results to return. If unspecified, the first page is retrieved. (optional)
    query = 'query_example' # str | An expression used to filter cases. Expressions use the following fields separated by `AND` and specified with `=`: - `organization`: An organization name in the form `organizations/`. - `project`: A project name in the form `projects/`. - `state`: Can be `OPEN` or `CLOSED`. - `priority`: Can be `P0`, `P1`, `P2`, `P3`, or `P4`. You can specify multiple values for priority using the `OR` operator. For example, `priority=P1 OR priority=P2`. - `creator.email`: The email address of the case creator. You must specify either `organization` or `project`. To search across `displayName`, `description`, and comments, use a global restriction with no keyword or operator. For example, `\"my search\"`. To search only cases updated after a certain date, use `update_time` restricted with that particular date, time, and timezone in ISO datetime format. For example, `update_time>\"2020-01-01T00:00:00-05:00\"`. `update_time` only supports the greater than operator (`>`). Examples: - `organization=\"organizations/123456789\"` - `project=\"projects/my-project-id\"` - `project=\"projects/123456789\"` - `organization=\"organizations/123456789\" AND state=CLOSED` - `project=\"projects/my-project-id\" AND creator.email=\"tester@example.com\"` - `project=\"projects/my-project-id\" AND (priority=P0 OR priority=P1)` (optional)

    try:
        api_response = api_instance.cloudsupport_cases_search(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token, query=query)
        print("The response of CasesApi->cloudsupport_cases_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cloudsupport_cases_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| The name of the parent resource to search for cases under. | 
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
 **page_size** | **int**| The maximum number of cases fetched with each request. The default page size is 10. | [optional] 
 **page_token** | **str**| A token identifying the page of results to return. If unspecified, the first page is retrieved. | [optional] 
 **query** | **str**| An expression used to filter cases. Expressions use the following fields separated by &#x60;AND&#x60; and specified with &#x60;&#x3D;&#x60;: - &#x60;organization&#x60;: An organization name in the form &#x60;organizations/&#x60;. - &#x60;project&#x60;: A project name in the form &#x60;projects/&#x60;. - &#x60;state&#x60;: Can be &#x60;OPEN&#x60; or &#x60;CLOSED&#x60;. - &#x60;priority&#x60;: Can be &#x60;P0&#x60;, &#x60;P1&#x60;, &#x60;P2&#x60;, &#x60;P3&#x60;, or &#x60;P4&#x60;. You can specify multiple values for priority using the &#x60;OR&#x60; operator. For example, &#x60;priority&#x3D;P1 OR priority&#x3D;P2&#x60;. - &#x60;creator.email&#x60;: The email address of the case creator. You must specify either &#x60;organization&#x60; or &#x60;project&#x60;. To search across &#x60;displayName&#x60;, &#x60;description&#x60;, and comments, use a global restriction with no keyword or operator. For example, &#x60;\&quot;my search\&quot;&#x60;. To search only cases updated after a certain date, use &#x60;update_time&#x60; restricted with that particular date, time, and timezone in ISO datetime format. For example, &#x60;update_time&gt;\&quot;2020-01-01T00:00:00-05:00\&quot;&#x60;. &#x60;update_time&#x60; only supports the greater than operator (&#x60;&gt;&#x60;). Examples: - &#x60;organization&#x3D;\&quot;organizations/123456789\&quot;&#x60; - &#x60;project&#x3D;\&quot;projects/my-project-id\&quot;&#x60; - &#x60;project&#x3D;\&quot;projects/123456789\&quot;&#x60; - &#x60;organization&#x3D;\&quot;organizations/123456789\&quot; AND state&#x3D;CLOSED&#x60; - &#x60;project&#x3D;\&quot;projects/my-project-id\&quot; AND creator.email&#x3D;\&quot;tester@example.com\&quot;&#x60; - &#x60;project&#x3D;\&quot;projects/my-project-id\&quot; AND (priority&#x3D;P0 OR priority&#x3D;P1)&#x60; | [optional] 

### Return type

[**SearchCasesResponse**](SearchCasesResponse.md)

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


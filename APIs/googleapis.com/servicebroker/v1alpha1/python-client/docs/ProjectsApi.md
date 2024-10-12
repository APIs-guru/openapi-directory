# openapi_client.ProjectsApi

All URIs are relative to *https://servicebroker.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**servicebroker_projects_brokers_instances_service_bindings_list**](ProjectsApi.md#servicebroker_projects_brokers_instances_service_bindings_list) | **GET** /v1alpha1/{parent}/service_bindings | 
[**servicebroker_projects_brokers_service_instances_list**](ProjectsApi.md#servicebroker_projects_brokers_service_instances_list) | **GET** /v1alpha1/{parent}/service_instances | 
[**servicebroker_projects_brokers_v2_catalog_list**](ProjectsApi.md#servicebroker_projects_brokers_v2_catalog_list) | **GET** /v1alpha1/{parent}/v2/catalog | 
[**servicebroker_projects_brokers_v2_service_instances_create**](ProjectsApi.md#servicebroker_projects_brokers_v2_service_instances_create) | **PUT** /v1alpha1/{parent}/v2/service_instances/{instance_id} | 
[**servicebroker_projects_brokers_v2_service_instances_delete**](ProjectsApi.md#servicebroker_projects_brokers_v2_service_instances_delete) | **DELETE** /v1alpha1/{parent}/v2/service_instances/{instanceId} | 
[**servicebroker_projects_brokers_v2_service_instances_get**](ProjectsApi.md#servicebroker_projects_brokers_v2_service_instances_get) | **GET** /v1alpha1/{name} | 
[**servicebroker_projects_brokers_v2_service_instances_get_last_operation**](ProjectsApi.md#servicebroker_projects_brokers_v2_service_instances_get_last_operation) | **GET** /v1alpha1/{parent}/v2/service_instances/{instanceId}/last_operation | 
[**servicebroker_projects_brokers_v2_service_instances_patch**](ProjectsApi.md#servicebroker_projects_brokers_v2_service_instances_patch) | **PATCH** /v1alpha1/{parent}/v2/service_instances/{instance_id} | 
[**servicebroker_projects_brokers_v2_service_instances_service_bindings_create**](ProjectsApi.md#servicebroker_projects_brokers_v2_service_instances_service_bindings_create) | **PUT** /v1alpha1/{parent}/v2/service_instances/{instanceId}/service_bindings/{binding_id} | 
[**servicebroker_projects_brokers_v2_service_instances_service_bindings_get**](ProjectsApi.md#servicebroker_projects_brokers_v2_service_instances_service_bindings_get) | **GET** /v1alpha1/{parent}/v2/service_instances/{instanceId}/service_bindings/{bindingId} | 
[**servicebroker_projects_brokers_v2_service_instances_service_bindings_get_last_operation**](ProjectsApi.md#servicebroker_projects_brokers_v2_service_instances_service_bindings_get_last_operation) | **GET** /v1alpha1/{parent}/v2/service_instances/{instanceId}/service_bindings/{bindingId}/last_operation | 


# **servicebroker_projects_brokers_instances_service_bindings_list**
> GoogleCloudServicebrokerV1alpha1ListBindingsResponse servicebroker_projects_brokers_instances_service_bindings_list(parent, upload_protocol=upload_protocol, quota_user=quota_user, pretty_print=pretty_print, upload_type=upload_type, fields=fields, param_callback=param_callback, oauth_token=oauth_token, xgafv=xgafv, alt=alt, key=key, access_token=access_token, page_size=page_size, page_token=page_token)



Lists all the bindings in the instance

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_servicebroker_v1alpha1_list_bindings_response import GoogleCloudServicebrokerV1alpha1ListBindingsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://servicebroker.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://servicebroker.googleapis.com"
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
    parent = 'parent_example' # str | Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]/instances/[INSTANCE_ID]`.
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    page_size = 56 # int | Specifies the number of results to return per page. If there are fewer elements than the specified number, returns all elements. Optional. If unset or 0, all the results will be returned. (optional)
    page_token = 'page_token_example' # str | Specifies a page token to use. Set `pageToken` to a `nextPageToken` returned by a previous list request to get the next page of results. (optional)

    try:
        api_response = api_instance.servicebroker_projects_brokers_instances_service_bindings_list(parent, upload_protocol=upload_protocol, quota_user=quota_user, pretty_print=pretty_print, upload_type=upload_type, fields=fields, param_callback=param_callback, oauth_token=oauth_token, xgafv=xgafv, alt=alt, key=key, access_token=access_token, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->servicebroker_projects_brokers_instances_service_bindings_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->servicebroker_projects_brokers_instances_service_bindings_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Parent must match &#x60;projects/[PROJECT_ID]/brokers/[BROKER_ID]/instances/[INSTANCE_ID]&#x60;. | 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **page_size** | **int**| Specifies the number of results to return per page. If there are fewer elements than the specified number, returns all elements. Optional. If unset or 0, all the results will be returned. | [optional] 
 **page_token** | **str**| Specifies a page token to use. Set &#x60;pageToken&#x60; to a &#x60;nextPageToken&#x60; returned by a previous list request to get the next page of results. | [optional] 

### Return type

[**GoogleCloudServicebrokerV1alpha1ListBindingsResponse**](GoogleCloudServicebrokerV1alpha1ListBindingsResponse.md)

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

# **servicebroker_projects_brokers_service_instances_list**
> GoogleCloudServicebrokerV1alpha1ListServiceInstancesResponse servicebroker_projects_brokers_service_instances_list(parent, upload_protocol=upload_protocol, quota_user=quota_user, pretty_print=pretty_print, upload_type=upload_type, fields=fields, param_callback=param_callback, oauth_token=oauth_token, xgafv=xgafv, alt=alt, key=key, access_token=access_token, page_size=page_size, page_token=page_token)



Lists all the instances in the brokers This API is an extension and not part of the OSB spec. Hence the path is a standard Google API URL.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_servicebroker_v1alpha1_list_service_instances_response import GoogleCloudServicebrokerV1alpha1ListServiceInstancesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://servicebroker.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://servicebroker.googleapis.com"
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
    parent = 'parent_example' # str | Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    page_size = 56 # int | Specifies the number of results to return per page. If there are fewer elements than the specified number, returns all elements. Optional. If unset or 0, all the results will be returned. (optional)
    page_token = 'page_token_example' # str | Specifies a page token to use. Set `pageToken` to a `nextPageToken` returned by a previous list request to get the next page of results. (optional)

    try:
        api_response = api_instance.servicebroker_projects_brokers_service_instances_list(parent, upload_protocol=upload_protocol, quota_user=quota_user, pretty_print=pretty_print, upload_type=upload_type, fields=fields, param_callback=param_callback, oauth_token=oauth_token, xgafv=xgafv, alt=alt, key=key, access_token=access_token, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->servicebroker_projects_brokers_service_instances_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->servicebroker_projects_brokers_service_instances_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Parent must match &#x60;projects/[PROJECT_ID]/brokers/[BROKER_ID]&#x60;. | 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **page_size** | **int**| Specifies the number of results to return per page. If there are fewer elements than the specified number, returns all elements. Optional. If unset or 0, all the results will be returned. | [optional] 
 **page_token** | **str**| Specifies a page token to use. Set &#x60;pageToken&#x60; to a &#x60;nextPageToken&#x60; returned by a previous list request to get the next page of results. | [optional] 

### Return type

[**GoogleCloudServicebrokerV1alpha1ListServiceInstancesResponse**](GoogleCloudServicebrokerV1alpha1ListServiceInstancesResponse.md)

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

# **servicebroker_projects_brokers_v2_catalog_list**
> GoogleCloudServicebrokerV1alpha1ListCatalogResponse servicebroker_projects_brokers_v2_catalog_list(parent, upload_protocol=upload_protocol, quota_user=quota_user, pretty_print=pretty_print, upload_type=upload_type, fields=fields, param_callback=param_callback, oauth_token=oauth_token, xgafv=xgafv, alt=alt, key=key, access_token=access_token, page_size=page_size, page_token=page_token)



Lists all the Services registered with this broker for consumption for given service registry broker, which contains an set of services. Note, that Service producer API is separate from Broker API.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_servicebroker_v1alpha1_list_catalog_response import GoogleCloudServicebrokerV1alpha1ListCatalogResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://servicebroker.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://servicebroker.googleapis.com"
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
    parent = 'parent_example' # str | Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    page_size = 56 # int | Specifies the number of results to return per page. If there are fewer elements than the specified number, returns all elements. Optional. If unset or 0, all the results will be returned. (optional)
    page_token = 'page_token_example' # str | Specifies a page token to use. Set `pageToken` to a `nextPageToken` returned by a previous list request to get the next page of results. (optional)

    try:
        api_response = api_instance.servicebroker_projects_brokers_v2_catalog_list(parent, upload_protocol=upload_protocol, quota_user=quota_user, pretty_print=pretty_print, upload_type=upload_type, fields=fields, param_callback=param_callback, oauth_token=oauth_token, xgafv=xgafv, alt=alt, key=key, access_token=access_token, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->servicebroker_projects_brokers_v2_catalog_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->servicebroker_projects_brokers_v2_catalog_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Parent must match &#x60;projects/[PROJECT_ID]/brokers/[BROKER_ID]&#x60;. | 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **page_size** | **int**| Specifies the number of results to return per page. If there are fewer elements than the specified number, returns all elements. Optional. If unset or 0, all the results will be returned. | [optional] 
 **page_token** | **str**| Specifies a page token to use. Set &#x60;pageToken&#x60; to a &#x60;nextPageToken&#x60; returned by a previous list request to get the next page of results. | [optional] 

### Return type

[**GoogleCloudServicebrokerV1alpha1ListCatalogResponse**](GoogleCloudServicebrokerV1alpha1ListCatalogResponse.md)

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

# **servicebroker_projects_brokers_v2_service_instances_create**
> GoogleCloudServicebrokerV1alpha1CreateServiceInstanceResponse servicebroker_projects_brokers_v2_service_instances_create(parent, instance_id, upload_protocol=upload_protocol, quota_user=quota_user, pretty_print=pretty_print, upload_type=upload_type, fields=fields, param_callback=param_callback, oauth_token=oauth_token, xgafv=xgafv, alt=alt, key=key, access_token=access_token, accepts_incomplete=accepts_incomplete, google_cloud_servicebroker_v1alpha1_service_instance=google_cloud_servicebroker_v1alpha1_service_instance)



Provisions a service instance. If `request.accepts_incomplete` is false and Broker cannot execute request synchronously HTTP 422 error will be returned along with FAILED_PRECONDITION status. If `request.accepts_incomplete` is true and the Broker decides to execute resource asynchronously then HTTP 202 response code will be returned and a valid polling operation in the response will be included. If Broker executes the request synchronously and it succeeds HTTP 201 response will be furnished. If identical instance exists, then HTTP 200 response will be returned. If an instance with identical ID but mismatching parameters exists, then HTTP 409 status code will be returned.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_servicebroker_v1alpha1_create_service_instance_response import GoogleCloudServicebrokerV1alpha1CreateServiceInstanceResponse
from openapi_client.models.google_cloud_servicebroker_v1alpha1_service_instance import GoogleCloudServicebrokerV1alpha1ServiceInstance
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://servicebroker.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://servicebroker.googleapis.com"
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
    parent = 'parent_example' # str | Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
    instance_id = 'instance_id_example' # str | The id of the service instance. Must be unique within GCP project. Maximum length is 64, GUID recommended. Required.
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    accepts_incomplete = True # bool | Value indicating that API client supports asynchronous operations. If Broker cannot execute the request synchronously HTTP 422 code will be returned to HTTP clients along with FAILED_PRECONDITION error. If true and broker will execute request asynchronously 202 HTTP code will be returned. This broker always requires this to be true as all mutator operations are asynchronous. (optional)
    google_cloud_servicebroker_v1alpha1_service_instance = openapi_client.GoogleCloudServicebrokerV1alpha1ServiceInstance() # GoogleCloudServicebrokerV1alpha1ServiceInstance |  (optional)

    try:
        api_response = api_instance.servicebroker_projects_brokers_v2_service_instances_create(parent, instance_id, upload_protocol=upload_protocol, quota_user=quota_user, pretty_print=pretty_print, upload_type=upload_type, fields=fields, param_callback=param_callback, oauth_token=oauth_token, xgafv=xgafv, alt=alt, key=key, access_token=access_token, accepts_incomplete=accepts_incomplete, google_cloud_servicebroker_v1alpha1_service_instance=google_cloud_servicebroker_v1alpha1_service_instance)
        print("The response of ProjectsApi->servicebroker_projects_brokers_v2_service_instances_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->servicebroker_projects_brokers_v2_service_instances_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Parent must match &#x60;projects/[PROJECT_ID]/brokers/[BROKER_ID]&#x60;. | 
 **instance_id** | **str**| The id of the service instance. Must be unique within GCP project. Maximum length is 64, GUID recommended. Required. | 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **accepts_incomplete** | **bool**| Value indicating that API client supports asynchronous operations. If Broker cannot execute the request synchronously HTTP 422 code will be returned to HTTP clients along with FAILED_PRECONDITION error. If true and broker will execute request asynchronously 202 HTTP code will be returned. This broker always requires this to be true as all mutator operations are asynchronous. | [optional] 
 **google_cloud_servicebroker_v1alpha1_service_instance** | [**GoogleCloudServicebrokerV1alpha1ServiceInstance**](GoogleCloudServicebrokerV1alpha1ServiceInstance.md)|  | [optional] 

### Return type

[**GoogleCloudServicebrokerV1alpha1CreateServiceInstanceResponse**](GoogleCloudServicebrokerV1alpha1CreateServiceInstanceResponse.md)

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

# **servicebroker_projects_brokers_v2_service_instances_delete**
> GoogleCloudServicebrokerV1alpha1DeleteServiceInstanceResponse servicebroker_projects_brokers_v2_service_instances_delete(parent, instance_id, upload_protocol=upload_protocol, quota_user=quota_user, pretty_print=pretty_print, upload_type=upload_type, fields=fields, param_callback=param_callback, oauth_token=oauth_token, xgafv=xgafv, alt=alt, key=key, access_token=access_token, accepts_incomplete=accepts_incomplete, plan_id=plan_id, service_id=service_id)



Deprovisions a service instance. For synchronous/asynchronous request details see CreateServiceInstance method. If service instance does not exist HTTP 410 status will be returned.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_servicebroker_v1alpha1_delete_service_instance_response import GoogleCloudServicebrokerV1alpha1DeleteServiceInstanceResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://servicebroker.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://servicebroker.googleapis.com"
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
    parent = 'parent_example' # str | Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
    instance_id = 'instance_id_example' # str | The instance id to deprovision.
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    accepts_incomplete = True # bool | See CreateServiceInstanceRequest for details. (optional)
    plan_id = 'plan_id_example' # str | The plan id of the service instance. (optional)
    service_id = 'service_id_example' # str | The service id of the service instance. (optional)

    try:
        api_response = api_instance.servicebroker_projects_brokers_v2_service_instances_delete(parent, instance_id, upload_protocol=upload_protocol, quota_user=quota_user, pretty_print=pretty_print, upload_type=upload_type, fields=fields, param_callback=param_callback, oauth_token=oauth_token, xgafv=xgafv, alt=alt, key=key, access_token=access_token, accepts_incomplete=accepts_incomplete, plan_id=plan_id, service_id=service_id)
        print("The response of ProjectsApi->servicebroker_projects_brokers_v2_service_instances_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->servicebroker_projects_brokers_v2_service_instances_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Parent must match &#x60;projects/[PROJECT_ID]/brokers/[BROKER_ID]&#x60;. | 
 **instance_id** | **str**| The instance id to deprovision. | 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **accepts_incomplete** | **bool**| See CreateServiceInstanceRequest for details. | [optional] 
 **plan_id** | **str**| The plan id of the service instance. | [optional] 
 **service_id** | **str**| The service id of the service instance. | [optional] 

### Return type

[**GoogleCloudServicebrokerV1alpha1DeleteServiceInstanceResponse**](GoogleCloudServicebrokerV1alpha1DeleteServiceInstanceResponse.md)

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

# **servicebroker_projects_brokers_v2_service_instances_get**
> GoogleCloudServicebrokerV1alpha1ServiceInstance servicebroker_projects_brokers_v2_service_instances_get(name, upload_protocol=upload_protocol, quota_user=quota_user, pretty_print=pretty_print, upload_type=upload_type, fields=fields, param_callback=param_callback, oauth_token=oauth_token, xgafv=xgafv, alt=alt, key=key, access_token=access_token)



Gets the given service instance from the system. This API is an extension and not part of the OSB spec. Hence the path is a standard Google API URL.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_servicebroker_v1alpha1_service_instance import GoogleCloudServicebrokerV1alpha1ServiceInstance
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://servicebroker.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://servicebroker.googleapis.com"
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
    name = 'name_example' # str | The resource name of the instance to return.
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)

    try:
        api_response = api_instance.servicebroker_projects_brokers_v2_service_instances_get(name, upload_protocol=upload_protocol, quota_user=quota_user, pretty_print=pretty_print, upload_type=upload_type, fields=fields, param_callback=param_callback, oauth_token=oauth_token, xgafv=xgafv, alt=alt, key=key, access_token=access_token)
        print("The response of ProjectsApi->servicebroker_projects_brokers_v2_service_instances_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->servicebroker_projects_brokers_v2_service_instances_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The resource name of the instance to return. | 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 

### Return type

[**GoogleCloudServicebrokerV1alpha1ServiceInstance**](GoogleCloudServicebrokerV1alpha1ServiceInstance.md)

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

# **servicebroker_projects_brokers_v2_service_instances_get_last_operation**
> GoogleCloudServicebrokerV1alpha1Operation servicebroker_projects_brokers_v2_service_instances_get_last_operation(parent, instance_id, upload_protocol=upload_protocol, quota_user=quota_user, pretty_print=pretty_print, upload_type=upload_type, fields=fields, param_callback=param_callback, oauth_token=oauth_token, xgafv=xgafv, alt=alt, key=key, access_token=access_token, operation=operation, plan_id=plan_id, service_id=service_id)



Returns the state of the last operation for the service instance. Only last (or current) operation can be polled.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_servicebroker_v1alpha1_operation import GoogleCloudServicebrokerV1alpha1Operation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://servicebroker.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://servicebroker.googleapis.com"
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
    parent = 'parent_example' # str | Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
    instance_id = 'instance_id_example' # str | The instance id for which to return the last operation status.
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    operation = 'operation_example' # str | If `operation` was returned during mutation operation, this field must be populated with the provided value. (optional)
    plan_id = 'plan_id_example' # str | Plan id. (optional)
    service_id = 'service_id_example' # str | Service id. (optional)

    try:
        api_response = api_instance.servicebroker_projects_brokers_v2_service_instances_get_last_operation(parent, instance_id, upload_protocol=upload_protocol, quota_user=quota_user, pretty_print=pretty_print, upload_type=upload_type, fields=fields, param_callback=param_callback, oauth_token=oauth_token, xgafv=xgafv, alt=alt, key=key, access_token=access_token, operation=operation, plan_id=plan_id, service_id=service_id)
        print("The response of ProjectsApi->servicebroker_projects_brokers_v2_service_instances_get_last_operation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->servicebroker_projects_brokers_v2_service_instances_get_last_operation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Parent must match &#x60;projects/[PROJECT_ID]/brokers/[BROKER_ID]&#x60;. | 
 **instance_id** | **str**| The instance id for which to return the last operation status. | 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **operation** | **str**| If &#x60;operation&#x60; was returned during mutation operation, this field must be populated with the provided value. | [optional] 
 **plan_id** | **str**| Plan id. | [optional] 
 **service_id** | **str**| Service id. | [optional] 

### Return type

[**GoogleCloudServicebrokerV1alpha1Operation**](GoogleCloudServicebrokerV1alpha1Operation.md)

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

# **servicebroker_projects_brokers_v2_service_instances_patch**
> GoogleCloudServicebrokerV1alpha1UpdateServiceInstanceResponse servicebroker_projects_brokers_v2_service_instances_patch(parent, instance_id, upload_protocol=upload_protocol, quota_user=quota_user, pretty_print=pretty_print, upload_type=upload_type, fields=fields, param_callback=param_callback, oauth_token=oauth_token, xgafv=xgafv, alt=alt, key=key, access_token=access_token, accepts_incomplete=accepts_incomplete, google_cloud_servicebroker_v1alpha1_service_instance=google_cloud_servicebroker_v1alpha1_service_instance)



Updates an existing service instance. See CreateServiceInstance for possible response codes.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_servicebroker_v1alpha1_service_instance import GoogleCloudServicebrokerV1alpha1ServiceInstance
from openapi_client.models.google_cloud_servicebroker_v1alpha1_update_service_instance_response import GoogleCloudServicebrokerV1alpha1UpdateServiceInstanceResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://servicebroker.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://servicebroker.googleapis.com"
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
    parent = 'parent_example' # str | Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
    instance_id = 'instance_id_example' # str | The id of the service instance. Must be unique within GCP project. Maximum length is 64, GUID recommended. Required.
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    accepts_incomplete = True # bool | See CreateServiceInstanceRequest for details. (optional)
    google_cloud_servicebroker_v1alpha1_service_instance = openapi_client.GoogleCloudServicebrokerV1alpha1ServiceInstance() # GoogleCloudServicebrokerV1alpha1ServiceInstance |  (optional)

    try:
        api_response = api_instance.servicebroker_projects_brokers_v2_service_instances_patch(parent, instance_id, upload_protocol=upload_protocol, quota_user=quota_user, pretty_print=pretty_print, upload_type=upload_type, fields=fields, param_callback=param_callback, oauth_token=oauth_token, xgafv=xgafv, alt=alt, key=key, access_token=access_token, accepts_incomplete=accepts_incomplete, google_cloud_servicebroker_v1alpha1_service_instance=google_cloud_servicebroker_v1alpha1_service_instance)
        print("The response of ProjectsApi->servicebroker_projects_brokers_v2_service_instances_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->servicebroker_projects_brokers_v2_service_instances_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Parent must match &#x60;projects/[PROJECT_ID]/brokers/[BROKER_ID]&#x60;. | 
 **instance_id** | **str**| The id of the service instance. Must be unique within GCP project. Maximum length is 64, GUID recommended. Required. | 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **accepts_incomplete** | **bool**| See CreateServiceInstanceRequest for details. | [optional] 
 **google_cloud_servicebroker_v1alpha1_service_instance** | [**GoogleCloudServicebrokerV1alpha1ServiceInstance**](GoogleCloudServicebrokerV1alpha1ServiceInstance.md)|  | [optional] 

### Return type

[**GoogleCloudServicebrokerV1alpha1UpdateServiceInstanceResponse**](GoogleCloudServicebrokerV1alpha1UpdateServiceInstanceResponse.md)

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

# **servicebroker_projects_brokers_v2_service_instances_service_bindings_create**
> GoogleCloudServicebrokerV1alpha1CreateBindingResponse servicebroker_projects_brokers_v2_service_instances_service_bindings_create(parent, instance_id, binding_id, upload_protocol=upload_protocol, quota_user=quota_user, pretty_print=pretty_print, upload_type=upload_type, fields=fields, param_callback=param_callback, oauth_token=oauth_token, xgafv=xgafv, alt=alt, key=key, access_token=access_token, accepts_incomplete=accepts_incomplete, google_cloud_servicebroker_v1alpha1_binding=google_cloud_servicebroker_v1alpha1_binding)



CreateBinding generates a service binding to an existing service instance. See ProviServiceInstance for async operation details.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_servicebroker_v1alpha1_binding import GoogleCloudServicebrokerV1alpha1Binding
from openapi_client.models.google_cloud_servicebroker_v1alpha1_create_binding_response import GoogleCloudServicebrokerV1alpha1CreateBindingResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://servicebroker.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://servicebroker.googleapis.com"
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
    parent = 'parent_example' # str | The GCP container. Must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
    instance_id = 'instance_id_example' # str | The service instance to which to bind.
    binding_id = 'binding_id_example' # str | The id of the binding. Must be unique within GCP project. Maximum length is 64, GUID recommended. Required.
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    accepts_incomplete = True # bool | See CreateServiceInstanceRequest for details. (optional)
    google_cloud_servicebroker_v1alpha1_binding = openapi_client.GoogleCloudServicebrokerV1alpha1Binding() # GoogleCloudServicebrokerV1alpha1Binding |  (optional)

    try:
        api_response = api_instance.servicebroker_projects_brokers_v2_service_instances_service_bindings_create(parent, instance_id, binding_id, upload_protocol=upload_protocol, quota_user=quota_user, pretty_print=pretty_print, upload_type=upload_type, fields=fields, param_callback=param_callback, oauth_token=oauth_token, xgafv=xgafv, alt=alt, key=key, access_token=access_token, accepts_incomplete=accepts_incomplete, google_cloud_servicebroker_v1alpha1_binding=google_cloud_servicebroker_v1alpha1_binding)
        print("The response of ProjectsApi->servicebroker_projects_brokers_v2_service_instances_service_bindings_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->servicebroker_projects_brokers_v2_service_instances_service_bindings_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| The GCP container. Must match &#x60;projects/[PROJECT_ID]/brokers/[BROKER_ID]&#x60;. | 
 **instance_id** | **str**| The service instance to which to bind. | 
 **binding_id** | **str**| The id of the binding. Must be unique within GCP project. Maximum length is 64, GUID recommended. Required. | 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **accepts_incomplete** | **bool**| See CreateServiceInstanceRequest for details. | [optional] 
 **google_cloud_servicebroker_v1alpha1_binding** | [**GoogleCloudServicebrokerV1alpha1Binding**](GoogleCloudServicebrokerV1alpha1Binding.md)|  | [optional] 

### Return type

[**GoogleCloudServicebrokerV1alpha1CreateBindingResponse**](GoogleCloudServicebrokerV1alpha1CreateBindingResponse.md)

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

# **servicebroker_projects_brokers_v2_service_instances_service_bindings_get**
> GoogleCloudServicebrokerV1alpha1GetBindingResponse servicebroker_projects_brokers_v2_service_instances_service_bindings_get(parent, instance_id, binding_id, upload_protocol=upload_protocol, quota_user=quota_user, pretty_print=pretty_print, upload_type=upload_type, fields=fields, param_callback=param_callback, oauth_token=oauth_token, xgafv=xgafv, alt=alt, key=key, access_token=access_token, plan_id=plan_id, service_id=service_id)



GetBinding returns the binding information.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_servicebroker_v1alpha1_get_binding_response import GoogleCloudServicebrokerV1alpha1GetBindingResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://servicebroker.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://servicebroker.googleapis.com"
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
    parent = 'parent_example' # str | Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
    instance_id = 'instance_id_example' # str | Instance id to which the binding is bound.
    binding_id = 'binding_id_example' # str | The binding id.
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    plan_id = 'plan_id_example' # str | Plan id. (optional)
    service_id = 'service_id_example' # str | Service id. (optional)

    try:
        api_response = api_instance.servicebroker_projects_brokers_v2_service_instances_service_bindings_get(parent, instance_id, binding_id, upload_protocol=upload_protocol, quota_user=quota_user, pretty_print=pretty_print, upload_type=upload_type, fields=fields, param_callback=param_callback, oauth_token=oauth_token, xgafv=xgafv, alt=alt, key=key, access_token=access_token, plan_id=plan_id, service_id=service_id)
        print("The response of ProjectsApi->servicebroker_projects_brokers_v2_service_instances_service_bindings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->servicebroker_projects_brokers_v2_service_instances_service_bindings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Parent must match &#x60;projects/[PROJECT_ID]/brokers/[BROKER_ID]&#x60;. | 
 **instance_id** | **str**| Instance id to which the binding is bound. | 
 **binding_id** | **str**| The binding id. | 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **plan_id** | **str**| Plan id. | [optional] 
 **service_id** | **str**| Service id. | [optional] 

### Return type

[**GoogleCloudServicebrokerV1alpha1GetBindingResponse**](GoogleCloudServicebrokerV1alpha1GetBindingResponse.md)

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

# **servicebroker_projects_brokers_v2_service_instances_service_bindings_get_last_operation**
> GoogleCloudServicebrokerV1alpha1Operation servicebroker_projects_brokers_v2_service_instances_service_bindings_get_last_operation(parent, instance_id, binding_id, upload_protocol=upload_protocol, quota_user=quota_user, pretty_print=pretty_print, upload_type=upload_type, fields=fields, param_callback=param_callback, oauth_token=oauth_token, xgafv=xgafv, alt=alt, key=key, access_token=access_token, operation=operation, plan_id=plan_id, service_id=service_id)



Returns the state of the last operation for the binding. Only last (or current) operation can be polled.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_servicebroker_v1alpha1_operation import GoogleCloudServicebrokerV1alpha1Operation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://servicebroker.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://servicebroker.googleapis.com"
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
    parent = 'parent_example' # str | Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
    instance_id = 'instance_id_example' # str | The instance id that the binding is bound to.
    binding_id = 'binding_id_example' # str | The binding id for which to return the last operation
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    operation = 'operation_example' # str | If `operation` was returned during mutation operation, this field must be populated with the provided value. (optional)
    plan_id = 'plan_id_example' # str | Plan id. (optional)
    service_id = 'service_id_example' # str | Service id. (optional)

    try:
        api_response = api_instance.servicebroker_projects_brokers_v2_service_instances_service_bindings_get_last_operation(parent, instance_id, binding_id, upload_protocol=upload_protocol, quota_user=quota_user, pretty_print=pretty_print, upload_type=upload_type, fields=fields, param_callback=param_callback, oauth_token=oauth_token, xgafv=xgafv, alt=alt, key=key, access_token=access_token, operation=operation, plan_id=plan_id, service_id=service_id)
        print("The response of ProjectsApi->servicebroker_projects_brokers_v2_service_instances_service_bindings_get_last_operation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->servicebroker_projects_brokers_v2_service_instances_service_bindings_get_last_operation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Parent must match &#x60;projects/[PROJECT_ID]/brokers/[BROKER_ID]&#x60;. | 
 **instance_id** | **str**| The instance id that the binding is bound to. | 
 **binding_id** | **str**| The binding id for which to return the last operation | 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **operation** | **str**| If &#x60;operation&#x60; was returned during mutation operation, this field must be populated with the provided value. | [optional] 
 **plan_id** | **str**| Plan id. | [optional] 
 **service_id** | **str**| Service id. | [optional] 

### Return type

[**GoogleCloudServicebrokerV1alpha1Operation**](GoogleCloudServicebrokerV1alpha1Operation.md)

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


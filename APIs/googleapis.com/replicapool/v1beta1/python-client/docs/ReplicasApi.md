# openapi_client.ReplicasApi

All URIs are relative to *https://www.googleapis.com/replicapool/v1beta1/projects*

Method | HTTP request | Description
------------- | ------------- | -------------
[**replicapool_replicas_delete**](ReplicasApi.md#replicapool_replicas_delete) | **POST** /{projectName}/zones/{zone}/pools/{poolName}/replicas/{replicaName} | 
[**replicapool_replicas_get**](ReplicasApi.md#replicapool_replicas_get) | **GET** /{projectName}/zones/{zone}/pools/{poolName}/replicas/{replicaName} | 
[**replicapool_replicas_list**](ReplicasApi.md#replicapool_replicas_list) | **GET** /{projectName}/zones/{zone}/pools/{poolName}/replicas | 
[**replicapool_replicas_restart**](ReplicasApi.md#replicapool_replicas_restart) | **POST** /{projectName}/zones/{zone}/pools/{poolName}/replicas/{replicaName}/restart | 


# **replicapool_replicas_delete**
> Replica replicapool_replicas_delete(project_name, zone, pool_name, replica_name, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, replicas_delete_request=replicas_delete_request)



Deletes a replica from the pool.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.replica import Replica
from openapi_client.models.replicas_delete_request import ReplicasDeleteRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/replicapool/v1beta1/projects
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/replicapool/v1beta1/projects"
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
    api_instance = openapi_client.ReplicasApi(api_client)
    project_name = 'project_name_example' # str | The project ID for this request.
    zone = 'zone_example' # str | The zone where the replica lives.
    pool_name = 'pool_name_example' # str | The replica pool name for this request.
    replica_name = 'replica_name_example' # str | The name of the replica for this request.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    replicas_delete_request = openapi_client.ReplicasDeleteRequest() # ReplicasDeleteRequest |  (optional)

    try:
        api_response = api_instance.replicapool_replicas_delete(project_name, zone, pool_name, replica_name, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, replicas_delete_request=replicas_delete_request)
        print("The response of ReplicasApi->replicapool_replicas_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicasApi->replicapool_replicas_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_name** | **str**| The project ID for this request. | 
 **zone** | **str**| The zone where the replica lives. | 
 **pool_name** | **str**| The replica pool name for this request. | 
 **replica_name** | **str**| The name of the replica for this request. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **replicas_delete_request** | [**ReplicasDeleteRequest**](ReplicasDeleteRequest.md)|  | [optional] 

### Return type

[**Replica**](Replica.md)

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

# **replicapool_replicas_get**
> Replica replicapool_replicas_get(project_name, zone, pool_name, replica_name, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Gets information about a specific replica.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.replica import Replica
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/replicapool/v1beta1/projects
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/replicapool/v1beta1/projects"
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
    api_instance = openapi_client.ReplicasApi(api_client)
    project_name = 'project_name_example' # str | The project ID for this request.
    zone = 'zone_example' # str | The zone where the replica lives.
    pool_name = 'pool_name_example' # str | The replica pool name for this request.
    replica_name = 'replica_name_example' # str | The name of the replica for this request.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.replicapool_replicas_get(project_name, zone, pool_name, replica_name, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of ReplicasApi->replicapool_replicas_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicasApi->replicapool_replicas_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_name** | **str**| The project ID for this request. | 
 **zone** | **str**| The zone where the replica lives. | 
 **pool_name** | **str**| The replica pool name for this request. | 
 **replica_name** | **str**| The name of the replica for this request. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**Replica**](Replica.md)

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

# **replicapool_replicas_list**
> ReplicasListResponse replicapool_replicas_list(project_name, zone, pool_name, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, page_token=page_token)



Lists all replicas in a pool.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.replicas_list_response import ReplicasListResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/replicapool/v1beta1/projects
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/replicapool/v1beta1/projects"
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
    api_instance = openapi_client.ReplicasApi(api_client)
    project_name = 'project_name_example' # str | The project ID for this request.
    zone = 'zone_example' # str | The zone where the replica pool lives.
    pool_name = 'pool_name_example' # str | The replica pool name for this request.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    max_results = 500 # int | Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50) (optional) (default to 500)
    page_token = 'page_token_example' # str | Set this to the nextPageToken value returned by a previous list request to obtain the next page of results from the previous list request. (optional)

    try:
        api_response = api_instance.replicapool_replicas_list(project_name, zone, pool_name, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, page_token=page_token)
        print("The response of ReplicasApi->replicapool_replicas_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicasApi->replicapool_replicas_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_name** | **str**| The project ID for this request. | 
 **zone** | **str**| The zone where the replica pool lives. | 
 **pool_name** | **str**| The replica pool name for this request. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **max_results** | **int**| Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50) | [optional] [default to 500]
 **page_token** | **str**| Set this to the nextPageToken value returned by a previous list request to obtain the next page of results from the previous list request. | [optional] 

### Return type

[**ReplicasListResponse**](ReplicasListResponse.md)

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

# **replicapool_replicas_restart**
> Replica replicapool_replicas_restart(project_name, zone, pool_name, replica_name, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Restarts a replica in a pool.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.replica import Replica
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/replicapool/v1beta1/projects
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/replicapool/v1beta1/projects"
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
    api_instance = openapi_client.ReplicasApi(api_client)
    project_name = 'project_name_example' # str | The project ID for this request.
    zone = 'zone_example' # str | The zone where the replica lives.
    pool_name = 'pool_name_example' # str | The replica pool name for this request.
    replica_name = 'replica_name_example' # str | The name of the replica for this request.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.replicapool_replicas_restart(project_name, zone, pool_name, replica_name, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of ReplicasApi->replicapool_replicas_restart:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicasApi->replicapool_replicas_restart: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_name** | **str**| The project ID for this request. | 
 **zone** | **str**| The zone where the replica lives. | 
 **pool_name** | **str**| The replica pool name for this request. | 
 **replica_name** | **str**| The name of the replica for this request. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**Replica**](Replica.md)

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


# openapi_client.CodepushApi

All URIs are relative to *https://api.appcenter.ms*

Method | HTTP request | Description
------------- | ------------- | -------------
[**code_push_acquisition_get_acquisition_status**](CodepushApi.md#code_push_acquisition_get_acquisition_status) | **GET** /v0.1/public/codepush/status | 
[**code_push_acquisition_update_check**](CodepushApi.md#code_push_acquisition_update_check) | **GET** /v0.1/public/codepush/update_check | 
[**code_push_acquisition_update_deploy_status**](CodepushApi.md#code_push_acquisition_update_deploy_status) | **POST** /v0.1/public/codepush/report_status/deploy | 
[**code_push_acquisition_update_download_status**](CodepushApi.md#code_push_acquisition_update_download_status) | **POST** /v0.1/public/codepush/report_status/download | 
[**code_push_deployment_metrics_get**](CodepushApi.md#code_push_deployment_metrics_get) | **GET** /v0.1/apps/{owner_name}/{app_name}/deployments/{deployment_name}/metrics | 
[**code_push_deployment_release_rollback**](CodepushApi.md#code_push_deployment_release_rollback) | **POST** /v0.1/apps/{owner_name}/{app_name}/deployments/{deployment_name}/rollback_release | 
[**code_push_deployment_releases_create**](CodepushApi.md#code_push_deployment_releases_create) | **POST** /v0.1/apps/{owner_name}/{app_name}/deployments/{deployment_name}/releases | 
[**code_push_deployment_releases_delete**](CodepushApi.md#code_push_deployment_releases_delete) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/deployments/{deployment_name}/releases | 
[**code_push_deployment_releases_get**](CodepushApi.md#code_push_deployment_releases_get) | **GET** /v0.1/apps/{owner_name}/{app_name}/deployments/{deployment_name}/releases | 
[**code_push_deployment_upload_create**](CodepushApi.md#code_push_deployment_upload_create) | **POST** /v0.1/apps/{owner_name}/{app_name}/deployments/{deployment_name}/uploads | 
[**code_push_deployments_create**](CodepushApi.md#code_push_deployments_create) | **POST** /v0.1/apps/{owner_name}/{app_name}/deployments | 
[**code_push_deployments_delete**](CodepushApi.md#code_push_deployments_delete) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/deployments/{deployment_name} | 
[**code_push_deployments_get**](CodepushApi.md#code_push_deployments_get) | **GET** /v0.1/apps/{owner_name}/{app_name}/deployments/{deployment_name} | 
[**code_push_deployments_list**](CodepushApi.md#code_push_deployments_list) | **GET** /v0.1/apps/{owner_name}/{app_name}/deployments | 
[**code_push_deployments_promote**](CodepushApi.md#code_push_deployments_promote) | **POST** /v0.1/apps/{owner_name}/{app_name}/deployments/{deployment_name}/promote_release/{promote_deployment_name} | 
[**code_push_deployments_update**](CodepushApi.md#code_push_deployments_update) | **PATCH** /v0.1/apps/{owner_name}/{app_name}/deployments/{deployment_name} | 
[**deployment_releases_update**](CodepushApi.md#deployment_releases_update) | **PATCH** /v0.1/apps/{owner_name}/{app_name}/deployments/{deployment_name}/releases/{release_label} | 
[**legacy_code_push_acquisition_update_check**](CodepushApi.md#legacy_code_push_acquisition_update_check) | **GET** /v0.1/legacy/updateCheck | 
[**legacy_code_push_acquisition_update_download_status**](CodepushApi.md#legacy_code_push_acquisition_update_download_status) | **POST** /v0.1/legacy/reportStatus/download | 
[**legacy_code_push_acquisition_update_installs_status**](CodepushApi.md#legacy_code_push_acquisition_update_installs_status) | **POST** /v0.1/legacy/reportStatus/deploy | 


# **code_push_acquisition_get_acquisition_status**
> CodePushAcquisitionGetAcquisitionStatus200Response code_push_acquisition_get_acquisition_status()



Returns the acquisition service status to the caller

### Example


```python
import openapi_client
from openapi_client.models.code_push_acquisition_get_acquisition_status200_response import CodePushAcquisitionGetAcquisitionStatus200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CodepushApi(api_client)

    try:
        api_response = api_instance.code_push_acquisition_get_acquisition_status()
        print("The response of CodepushApi->code_push_acquisition_get_acquisition_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CodepushApi->code_push_acquisition_get_acquisition_status: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**CodePushAcquisitionGetAcquisitionStatus200Response**](CodePushAcquisitionGetAcquisitionStatus200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **code_push_acquisition_update_check**
> CodePushAcquisitionUpdateCheck200Response code_push_acquisition_update_check(deployment_key, app_version, package_hash=package_hash, label=label, client_unique_id=client_unique_id, is_companion=is_companion, previous_label_or_app_version=previous_label_or_app_version, previous_deployment_key=previous_deployment_key)



Check for updates

### Example


```python
import openapi_client
from openapi_client.models.code_push_acquisition_update_check200_response import CodePushAcquisitionUpdateCheck200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CodepushApi(api_client)
    deployment_key = 'deployment_key_example' # str | 
    app_version = 'app_version_example' # str | 
    package_hash = 'package_hash_example' # str |  (optional)
    label = 'label_example' # str |  (optional)
    client_unique_id = 'client_unique_id_example' # str |  (optional)
    is_companion = True # bool |  (optional)
    previous_label_or_app_version = 'previous_label_or_app_version_example' # str |  (optional)
    previous_deployment_key = 'previous_deployment_key_example' # str |  (optional)

    try:
        api_response = api_instance.code_push_acquisition_update_check(deployment_key, app_version, package_hash=package_hash, label=label, client_unique_id=client_unique_id, is_companion=is_companion, previous_label_or_app_version=previous_label_or_app_version, previous_deployment_key=previous_deployment_key)
        print("The response of CodepushApi->code_push_acquisition_update_check:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CodepushApi->code_push_acquisition_update_check: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_key** | **str**|  | 
 **app_version** | **str**|  | 
 **package_hash** | **str**|  | [optional] 
 **label** | **str**|  | [optional] 
 **client_unique_id** | **str**|  | [optional] 
 **is_companion** | **bool**|  | [optional] 
 **previous_label_or_app_version** | **str**|  | [optional] 
 **previous_deployment_key** | **str**|  | [optional] 

### Return type

[**CodePushAcquisitionUpdateCheck200Response**](CodePushAcquisitionUpdateCheck200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **code_push_acquisition_update_deploy_status**
> code_push_acquisition_update_deploy_status(code_push_acquisition_update_deploy_status_request)



Report Deployment status metric

### Example


```python
import openapi_client
from openapi_client.models.code_push_acquisition_update_deploy_status_request import CodePushAcquisitionUpdateDeployStatusRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CodepushApi(api_client)
    code_push_acquisition_update_deploy_status_request = openapi_client.CodePushAcquisitionUpdateDeployStatusRequest() # CodePushAcquisitionUpdateDeployStatusRequest | Deployment status metric properties

    try:
        api_instance.code_push_acquisition_update_deploy_status(code_push_acquisition_update_deploy_status_request)
    except Exception as e:
        print("Exception when calling CodepushApi->code_push_acquisition_update_deploy_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code_push_acquisition_update_deploy_status_request** | [**CodePushAcquisitionUpdateDeployStatusRequest**](CodePushAcquisitionUpdateDeployStatusRequest.md)| Deployment status metric properties | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **code_push_acquisition_update_download_status**
> code_push_acquisition_update_download_status(code_push_acquisition_update_deploy_status_request)



Report download of specified release

### Example


```python
import openapi_client
from openapi_client.models.code_push_acquisition_update_deploy_status_request import CodePushAcquisitionUpdateDeployStatusRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CodepushApi(api_client)
    code_push_acquisition_update_deploy_status_request = openapi_client.CodePushAcquisitionUpdateDeployStatusRequest() # CodePushAcquisitionUpdateDeployStatusRequest | Deployment status metric properties

    try:
        api_instance.code_push_acquisition_update_download_status(code_push_acquisition_update_deploy_status_request)
    except Exception as e:
        print("Exception when calling CodepushApi->code_push_acquisition_update_download_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code_push_acquisition_update_deploy_status_request** | [**CodePushAcquisitionUpdateDeployStatusRequest**](CodePushAcquisitionUpdateDeployStatusRequest.md)| Deployment status metric properties | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **code_push_deployment_metrics_get**
> List[CodePushDeploymentMetricsGet200ResponseInner] code_push_deployment_metrics_get(deployment_name, owner_name, app_name)



Gets all releases metrics for specified Deployment

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.code_push_deployment_metrics_get200_response_inner import CodePushDeploymentMetricsGet200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CodepushApi(api_client)
    deployment_name = 'deployment_name_example' # str | deployment name
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.code_push_deployment_metrics_get(deployment_name, owner_name, app_name)
        print("The response of CodepushApi->code_push_deployment_metrics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CodepushApi->code_push_deployment_metrics_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| deployment name | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[CodePushDeploymentMetricsGet200ResponseInner]**](CodePushDeploymentMetricsGet200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **code_push_deployment_release_rollback**
> CodePushDeploymentsList200ResponseInnerLatestRelease code_push_deployment_release_rollback(deployment_name, owner_name, app_name, code_push_deployment_release_rollback_request=code_push_deployment_release_rollback_request)



Rollback the latest or a specific release for an app deployment

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.code_push_deployment_release_rollback_request import CodePushDeploymentReleaseRollbackRequest
from openapi_client.models.code_push_deployments_list200_response_inner_latest_release import CodePushDeploymentsList200ResponseInnerLatestRelease
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CodepushApi(api_client)
    deployment_name = 'deployment_name_example' # str | deployment name
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    code_push_deployment_release_rollback_request = openapi_client.CodePushDeploymentReleaseRollbackRequest() # CodePushDeploymentReleaseRollbackRequest | The specific release label that you want to rollback to (optional)

    try:
        api_response = api_instance.code_push_deployment_release_rollback(deployment_name, owner_name, app_name, code_push_deployment_release_rollback_request=code_push_deployment_release_rollback_request)
        print("The response of CodepushApi->code_push_deployment_release_rollback:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CodepushApi->code_push_deployment_release_rollback: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| deployment name | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **code_push_deployment_release_rollback_request** | [**CodePushDeploymentReleaseRollbackRequest**](CodePushDeploymentReleaseRollbackRequest.md)| The specific release label that you want to rollback to | [optional] 

### Return type

[**CodePushDeploymentsList200ResponseInnerLatestRelease**](CodePushDeploymentsList200ResponseInnerLatestRelease.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **code_push_deployment_releases_create**
> CodePushDeploymentsList200ResponseInnerLatestRelease code_push_deployment_releases_create(deployment_name, owner_name, app_name, code_push_deployment_releases_create_request)



Create a new CodePush release for the specified deployment

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.code_push_deployment_releases_create_request import CodePushDeploymentReleasesCreateRequest
from openapi_client.models.code_push_deployments_list200_response_inner_latest_release import CodePushDeploymentsList200ResponseInnerLatestRelease
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CodepushApi(api_client)
    deployment_name = 'deployment_name_example' # str | deployment name
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    code_push_deployment_releases_create_request = openapi_client.CodePushDeploymentReleasesCreateRequest() # CodePushDeploymentReleasesCreateRequest | The necessary information required to download the bundle and being the release process.

    try:
        api_response = api_instance.code_push_deployment_releases_create(deployment_name, owner_name, app_name, code_push_deployment_releases_create_request)
        print("The response of CodepushApi->code_push_deployment_releases_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CodepushApi->code_push_deployment_releases_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| deployment name | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **code_push_deployment_releases_create_request** | [**CodePushDeploymentReleasesCreateRequest**](CodePushDeploymentReleasesCreateRequest.md)| The necessary information required to download the bundle and being the release process. | 

### Return type

[**CodePushDeploymentsList200ResponseInnerLatestRelease**](CodePushDeploymentsList200ResponseInnerLatestRelease.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **code_push_deployment_releases_delete**
> code_push_deployment_releases_delete(deployment_name, owner_name, app_name)



Clears a Deployment of releases

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CodepushApi(api_client)
    deployment_name = 'deployment_name_example' # str | deployment name
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_instance.code_push_deployment_releases_delete(deployment_name, owner_name, app_name)
    except Exception as e:
        print("Exception when calling CodepushApi->code_push_deployment_releases_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| deployment name | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **code_push_deployment_releases_get**
> List[CodePushDeploymentsList200ResponseInnerLatestRelease] code_push_deployment_releases_get(deployment_name, owner_name, app_name)



Gets the history of releases on a Deployment

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.code_push_deployments_list200_response_inner_latest_release import CodePushDeploymentsList200ResponseInnerLatestRelease
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CodepushApi(api_client)
    deployment_name = 'deployment_name_example' # str | deployment name
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.code_push_deployment_releases_get(deployment_name, owner_name, app_name)
        print("The response of CodepushApi->code_push_deployment_releases_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CodepushApi->code_push_deployment_releases_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| deployment name | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[CodePushDeploymentsList200ResponseInnerLatestRelease]**](CodePushDeploymentsList200ResponseInnerLatestRelease.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **code_push_deployment_upload_create**
> CodePushDeploymentUploadCreate200Response code_push_deployment_upload_create(deployment_name, owner_name, app_name)



Create a new CodePush release upload for the specified deployment

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.code_push_deployment_upload_create200_response import CodePushDeploymentUploadCreate200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CodepushApi(api_client)
    deployment_name = 'deployment_name_example' # str | deployment name
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.code_push_deployment_upload_create(deployment_name, owner_name, app_name)
        print("The response of CodepushApi->code_push_deployment_upload_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CodepushApi->code_push_deployment_upload_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| deployment name | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**CodePushDeploymentUploadCreate200Response**](CodePushDeploymentUploadCreate200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **code_push_deployments_create**
> CodePushDeploymentsList200ResponseInner code_push_deployments_create(owner_name, app_name, code_push_deployments_list200_response_inner)



Creates a CodePush Deployment for the given app

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.code_push_deployments_list200_response_inner import CodePushDeploymentsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CodepushApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    code_push_deployments_list200_response_inner = openapi_client.CodePushDeploymentsList200ResponseInner() # CodePushDeploymentsList200ResponseInner | Deployment to be created

    try:
        api_response = api_instance.code_push_deployments_create(owner_name, app_name, code_push_deployments_list200_response_inner)
        print("The response of CodepushApi->code_push_deployments_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CodepushApi->code_push_deployments_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **code_push_deployments_list200_response_inner** | [**CodePushDeploymentsList200ResponseInner**](CodePushDeploymentsList200ResponseInner.md)| Deployment to be created | 

### Return type

[**CodePushDeploymentsList200ResponseInner**](CodePushDeploymentsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **code_push_deployments_delete**
> code_push_deployments_delete(deployment_name, owner_name, app_name, body=body)



Deletes a CodePush Deployment for the given app

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CodepushApi(api_client)
    deployment_name = 'deployment_name_example' # str | deployment name
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    body = None # object |  (optional)

    try:
        api_instance.code_push_deployments_delete(deployment_name, owner_name, app_name, body=body)
    except Exception as e:
        print("Exception when calling CodepushApi->code_push_deployments_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| deployment name | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **code_push_deployments_get**
> CodePushDeploymentsList200ResponseInner code_push_deployments_get(deployment_name, owner_name, app_name)



Gets a CodePush Deployment for the given app

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.code_push_deployments_list200_response_inner import CodePushDeploymentsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CodepushApi(api_client)
    deployment_name = 'deployment_name_example' # str | deployment name
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.code_push_deployments_get(deployment_name, owner_name, app_name)
        print("The response of CodepushApi->code_push_deployments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CodepushApi->code_push_deployments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| deployment name | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**CodePushDeploymentsList200ResponseInner**](CodePushDeploymentsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **code_push_deployments_list**
> List[CodePushDeploymentsList200ResponseInner] code_push_deployments_list(owner_name, app_name)



Gets a list of CodePush deployments for the given app

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.code_push_deployments_list200_response_inner import CodePushDeploymentsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CodepushApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.code_push_deployments_list(owner_name, app_name)
        print("The response of CodepushApi->code_push_deployments_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CodepushApi->code_push_deployments_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[CodePushDeploymentsList200ResponseInner]**](CodePushDeploymentsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **code_push_deployments_promote**
> CodePushDeploymentsList200ResponseInnerLatestRelease code_push_deployments_promote(deployment_name, promote_deployment_name, owner_name, app_name, code_push_deployments_promote_request=code_push_deployments_promote_request)



Promote one release (default latest one) from one deployment to another

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.code_push_deployments_list200_response_inner_latest_release import CodePushDeploymentsList200ResponseInnerLatestRelease
from openapi_client.models.code_push_deployments_promote_request import CodePushDeploymentsPromoteRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CodepushApi(api_client)
    deployment_name = 'deployment_name_example' # str | deployment name
    promote_deployment_name = 'promote_deployment_name_example' # str | deployment name
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    code_push_deployments_promote_request = openapi_client.CodePushDeploymentsPromoteRequest() # CodePushDeploymentsPromoteRequest | Release to be promoted, only needs to provide optional fields, description, label, disabled, mandatory, rollout, targetBinaryVersion (optional)

    try:
        api_response = api_instance.code_push_deployments_promote(deployment_name, promote_deployment_name, owner_name, app_name, code_push_deployments_promote_request=code_push_deployments_promote_request)
        print("The response of CodepushApi->code_push_deployments_promote:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CodepushApi->code_push_deployments_promote: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| deployment name | 
 **promote_deployment_name** | **str**| deployment name | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **code_push_deployments_promote_request** | [**CodePushDeploymentsPromoteRequest**](CodePushDeploymentsPromoteRequest.md)| Release to be promoted, only needs to provide optional fields, description, label, disabled, mandatory, rollout, targetBinaryVersion | [optional] 

### Return type

[**CodePushDeploymentsList200ResponseInnerLatestRelease**](CodePushDeploymentsList200ResponseInnerLatestRelease.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Promote a new release to the target deployment, return this new release. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **code_push_deployments_update**
> code_push_deployments_update(deployment_name, owner_name, app_name, code_push_deployments_update_request)



Modifies a CodePush Deployment for the given app

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.code_push_deployments_update_request import CodePushDeploymentsUpdateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CodepushApi(api_client)
    deployment_name = 'deployment_name_example' # str | deployment name
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    code_push_deployments_update_request = openapi_client.CodePushDeploymentsUpdateRequest() # CodePushDeploymentsUpdateRequest | Deployment modification. All fields are optional and only provided fields will get updated.

    try:
        api_instance.code_push_deployments_update(deployment_name, owner_name, app_name, code_push_deployments_update_request)
    except Exception as e:
        print("Exception when calling CodepushApi->code_push_deployments_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| deployment name | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **code_push_deployments_update_request** | [**CodePushDeploymentsUpdateRequest**](CodePushDeploymentsUpdateRequest.md)| Deployment modification. All fields are optional and only provided fields will get updated. | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployment_releases_update**
> CodePushDeploymentsList200ResponseInnerLatestRelease deployment_releases_update(deployment_name, release_label, owner_name, app_name, deployment_releases_update_request)



Modifies a CodePush release metadata under the given Deployment

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.code_push_deployments_list200_response_inner_latest_release import CodePushDeploymentsList200ResponseInnerLatestRelease
from openapi_client.models.deployment_releases_update_request import DeploymentReleasesUpdateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CodepushApi(api_client)
    deployment_name = 'deployment_name_example' # str | deployment name
    release_label = 'release_label_example' # str | release label
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    deployment_releases_update_request = openapi_client.DeploymentReleasesUpdateRequest() # DeploymentReleasesUpdateRequest | Release modification. All fields are optional and only provided fields will get updated.

    try:
        api_response = api_instance.deployment_releases_update(deployment_name, release_label, owner_name, app_name, deployment_releases_update_request)
        print("The response of CodepushApi->deployment_releases_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CodepushApi->deployment_releases_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| deployment name | 
 **release_label** | **str**| release label | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **deployment_releases_update_request** | [**DeploymentReleasesUpdateRequest**](DeploymentReleasesUpdateRequest.md)| Release modification. All fields are optional and only provided fields will get updated. | 

### Return type

[**CodePushDeploymentsList200ResponseInnerLatestRelease**](CodePushDeploymentsList200ResponseInnerLatestRelease.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**204** | Nothing to patch |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **legacy_code_push_acquisition_update_check**
> LegacyCodePushAcquisitionUpdateCheck200Response legacy_code_push_acquisition_update_check(deployment_key=deployment_key, app_version=app_version, package_hash=package_hash, label=label, client_unique_id=client_unique_id, is_companion=is_companion)



Check for updates

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.legacy_code_push_acquisition_update_check200_response import LegacyCodePushAcquisitionUpdateCheck200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CodepushApi(api_client)
    deployment_key = 'deployment_key_example' # str |  (optional)
    app_version = 'app_version_example' # str |  (optional)
    package_hash = 'package_hash_example' # str |  (optional)
    label = 'label_example' # str |  (optional)
    client_unique_id = 'client_unique_id_example' # str |  (optional)
    is_companion = 'is_companion_example' # str |  (optional)

    try:
        api_response = api_instance.legacy_code_push_acquisition_update_check(deployment_key=deployment_key, app_version=app_version, package_hash=package_hash, label=label, client_unique_id=client_unique_id, is_companion=is_companion)
        print("The response of CodepushApi->legacy_code_push_acquisition_update_check:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CodepushApi->legacy_code_push_acquisition_update_check: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_key** | **str**|  | [optional] 
 **app_version** | **str**|  | [optional] 
 **package_hash** | **str**|  | [optional] 
 **label** | **str**|  | [optional] 
 **client_unique_id** | **str**|  | [optional] 
 **is_companion** | **str**|  | [optional] 

### Return type

[**LegacyCodePushAcquisitionUpdateCheck200Response**](LegacyCodePushAcquisitionUpdateCheck200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **legacy_code_push_acquisition_update_download_status**
> legacy_code_push_acquisition_update_download_status(legacy_code_push_acquisition_update_installs_status_request)



Report download of specified release

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.legacy_code_push_acquisition_update_installs_status_request import LegacyCodePushAcquisitionUpdateInstallsStatusRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CodepushApi(api_client)
    legacy_code_push_acquisition_update_installs_status_request = openapi_client.LegacyCodePushAcquisitionUpdateInstallsStatusRequest() # LegacyCodePushAcquisitionUpdateInstallsStatusRequest | Deployment status metric properties

    try:
        api_instance.legacy_code_push_acquisition_update_download_status(legacy_code_push_acquisition_update_installs_status_request)
    except Exception as e:
        print("Exception when calling CodepushApi->legacy_code_push_acquisition_update_download_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legacy_code_push_acquisition_update_installs_status_request** | [**LegacyCodePushAcquisitionUpdateInstallsStatusRequest**](LegacyCodePushAcquisitionUpdateInstallsStatusRequest.md)| Deployment status metric properties | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **legacy_code_push_acquisition_update_installs_status**
> legacy_code_push_acquisition_update_installs_status(legacy_code_push_acquisition_update_installs_status_request)



Report deploy of specified release

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.legacy_code_push_acquisition_update_installs_status_request import LegacyCodePushAcquisitionUpdateInstallsStatusRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CodepushApi(api_client)
    legacy_code_push_acquisition_update_installs_status_request = openapi_client.LegacyCodePushAcquisitionUpdateInstallsStatusRequest() # LegacyCodePushAcquisitionUpdateInstallsStatusRequest | Deployment status metric properties

    try:
        api_instance.legacy_code_push_acquisition_update_installs_status(legacy_code_push_acquisition_update_installs_status_request)
    except Exception as e:
        print("Exception when calling CodepushApi->legacy_code_push_acquisition_update_installs_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legacy_code_push_acquisition_update_installs_status_request** | [**LegacyCodePushAcquisitionUpdateInstallsStatusRequest**](LegacyCodePushAcquisitionUpdateInstallsStatusRequest.md)| Deployment status metric properties | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.ComposeDeploymentApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_compose_deployment**](ComposeDeploymentApi.md#create_compose_deployment) | **PUT** /ComposeDeployments/$/Create | Creates a Service Fabric compose deployment.
[**get_compose_deployment_status**](ComposeDeploymentApi.md#get_compose_deployment_status) | **GET** /ComposeDeployments/{deploymentName} | Gets information about a Service Fabric compose deployment.
[**get_compose_deployment_status_list**](ComposeDeploymentApi.md#get_compose_deployment_status_list) | **GET** /ComposeDeployments | Gets the list of compose deployments created in the Service Fabric cluster.
[**get_compose_deployment_upgrade_progress**](ComposeDeploymentApi.md#get_compose_deployment_upgrade_progress) | **GET** /ComposeDeployments/{deploymentName}/$/GetUpgradeProgress | Gets details for the latest upgrade performed on this Service Fabric compose deployment.
[**remove_compose_deployment**](ComposeDeploymentApi.md#remove_compose_deployment) | **POST** /ComposeDeployments/{deploymentName}/$/Delete | Deletes an existing Service Fabric compose deployment from cluster.
[**start_compose_deployment_upgrade**](ComposeDeploymentApi.md#start_compose_deployment_upgrade) | **POST** /ComposeDeployments/{deploymentName}/$/Upgrade | Starts upgrading a compose deployment in the Service Fabric cluster.


# **create_compose_deployment**
> create_compose_deployment(api_version, create_compose_deployment_description, timeout=timeout)

Creates a Service Fabric compose deployment.

Compose is a file format that describes multi-container applications. This API allows deploying container based applications defined in compose format in a Service Fabric cluster. Once the deployment is created, its status can be tracked via the `GetComposeDeploymentStatus` API.

### Example


```python
import openapi_client
from openapi_client.models.create_compose_deployment_description import CreateComposeDeploymentDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ComposeDeploymentApi(api_client)
    api_version = 6.0-preview # str | The version of the API. This parameter is required and its value must be '\"6.0-preview'. (default to 6.0-preview)
    create_compose_deployment_description = openapi_client.CreateComposeDeploymentDescription() # CreateComposeDeploymentDescription | Describes the compose deployment that needs to be created.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Creates a Service Fabric compose deployment.
        api_instance.create_compose_deployment(api_version, create_compose_deployment_description, timeout=timeout)
    except Exception as e:
        print("Exception when calling ComposeDeploymentApi->create_compose_deployment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;\&quot;6.0-preview&#39;. | [default to 6.0-preview]
 **create_compose_deployment_description** | [**CreateComposeDeploymentDescription**](CreateComposeDeploymentDescription.md)| Describes the compose deployment that needs to be created. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | A successful operation will return 202 status code. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_compose_deployment_status**
> ComposeDeploymentStatusInfo get_compose_deployment_status(api_version, deployment_name, timeout=timeout)

Gets information about a Service Fabric compose deployment.

Returns the status of the compose deployment that was created or in the process of being created in the Service Fabric cluster and whose name matches the one specified as the parameter. The response includes the name, status, and other details about the deployment.

### Example


```python
import openapi_client
from openapi_client.models.compose_deployment_status_info import ComposeDeploymentStatusInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ComposeDeploymentApi(api_client)
    api_version = 6.0-preview # str | The version of the API. This parameter is required and its value must be '\"6.0-preview'. (default to 6.0-preview)
    deployment_name = 'deployment_name_example' # str | The identity of the deployment.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets information about a Service Fabric compose deployment.
        api_response = api_instance.get_compose_deployment_status(api_version, deployment_name, timeout=timeout)
        print("The response of ComposeDeploymentApi->get_compose_deployment_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComposeDeploymentApi->get_compose_deployment_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;\&quot;6.0-preview&#39;. | [default to 6.0-preview]
 **deployment_name** | **str**| The identity of the deployment. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**ComposeDeploymentStatusInfo**](ComposeDeploymentStatusInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about the compose deployment. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_compose_deployment_status_list**
> PagedComposeDeploymentStatusInfoList get_compose_deployment_status_list(api_version, continuation_token=continuation_token, max_results=max_results, timeout=timeout)

Gets the list of compose deployments created in the Service Fabric cluster.

Gets the status about the compose deployments that were created or in the process of being created in the Service Fabric cluster. The response includes the name, status, and other details about the compose deployments. If the list of deployments do not fit in a page, one page of results is returned as well as a continuation token, which can be used to get the next page.

### Example


```python
import openapi_client
from openapi_client.models.paged_compose_deployment_status_info_list import PagedComposeDeploymentStatusInfoList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ComposeDeploymentApi(api_client)
    api_version = 6.0-preview # str | The version of the API. This parameter is required and its value must be '\"6.0-preview'. (default to 6.0-preview)
    continuation_token = 'continuation_token_example' # str | The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded. (optional)
    max_results = 0 # int | The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message. (optional) (default to 0)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the list of compose deployments created in the Service Fabric cluster.
        api_response = api_instance.get_compose_deployment_status_list(api_version, continuation_token=continuation_token, max_results=max_results, timeout=timeout)
        print("The response of ComposeDeploymentApi->get_compose_deployment_status_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComposeDeploymentApi->get_compose_deployment_status_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;\&quot;6.0-preview&#39;. | [default to 6.0-preview]
 **continuation_token** | **str**| The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded. | [optional] 
 **max_results** | **int**| The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message. | [optional] [default to 0]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**PagedComposeDeploymentStatusInfoList**](PagedComposeDeploymentStatusInfoList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of status of compose deployments in the cluster. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_compose_deployment_upgrade_progress**
> ComposeDeploymentUpgradeProgressInfo get_compose_deployment_upgrade_progress(api_version, deployment_name, timeout=timeout)

Gets details for the latest upgrade performed on this Service Fabric compose deployment.

Returns the information about the state of the compose deployment upgrade along with details to aid debugging application health issues.

### Example


```python
import openapi_client
from openapi_client.models.compose_deployment_upgrade_progress_info import ComposeDeploymentUpgradeProgressInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ComposeDeploymentApi(api_client)
    api_version = 6.0-preview # str | The version of the API. This parameter is required and its value must be '\"6.0-preview'. (default to 6.0-preview)
    deployment_name = 'deployment_name_example' # str | The identity of the deployment.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets details for the latest upgrade performed on this Service Fabric compose deployment.
        api_response = api_instance.get_compose_deployment_upgrade_progress(api_version, deployment_name, timeout=timeout)
        print("The response of ComposeDeploymentApi->get_compose_deployment_upgrade_progress:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComposeDeploymentApi->get_compose_deployment_upgrade_progress: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;\&quot;6.0-preview&#39;. | [default to 6.0-preview]
 **deployment_name** | **str**| The identity of the deployment. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**ComposeDeploymentUpgradeProgressInfo**](ComposeDeploymentUpgradeProgressInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Details about the compose deployment upgrade. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_compose_deployment**
> remove_compose_deployment(api_version, deployment_name, timeout=timeout)

Deletes an existing Service Fabric compose deployment from cluster.

Deletes an existing Service Fabric compose deployment.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ComposeDeploymentApi(api_client)
    api_version = 6.0-preview # str | The version of the API. This parameter is required and its value must be '\"6.0-preview'. (default to 6.0-preview)
    deployment_name = 'deployment_name_example' # str | The identity of the deployment.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Deletes an existing Service Fabric compose deployment from cluster.
        api_instance.remove_compose_deployment(api_version, deployment_name, timeout=timeout)
    except Exception as e:
        print("Exception when calling ComposeDeploymentApi->remove_compose_deployment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;\&quot;6.0-preview&#39;. | [default to 6.0-preview]
 **deployment_name** | **str**| The identity of the deployment. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | A successful operation will return 202 status code. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **start_compose_deployment_upgrade**
> start_compose_deployment_upgrade(api_version, deployment_name, compose_deployment_upgrade_description, timeout=timeout)

Starts upgrading a compose deployment in the Service Fabric cluster.

Validates the supplied upgrade parameters and starts upgrading the deployment if the parameters are valid.

### Example


```python
import openapi_client
from openapi_client.models.compose_deployment_upgrade_description import ComposeDeploymentUpgradeDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ComposeDeploymentApi(api_client)
    api_version = 6.0-preview # str | The version of the API. This parameter is required and its value must be '\"6.0-preview'. (default to 6.0-preview)
    deployment_name = 'deployment_name_example' # str | The identity of the deployment.
    compose_deployment_upgrade_description = openapi_client.ComposeDeploymentUpgradeDescription() # ComposeDeploymentUpgradeDescription | Parameters for upgrading compose deployment.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Starts upgrading a compose deployment in the Service Fabric cluster.
        api_instance.start_compose_deployment_upgrade(api_version, deployment_name, compose_deployment_upgrade_description, timeout=timeout)
    except Exception as e:
        print("Exception when calling ComposeDeploymentApi->start_compose_deployment_upgrade: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;\&quot;6.0-preview&#39;. | [default to 6.0-preview]
 **deployment_name** | **str**| The identity of the deployment. | 
 **compose_deployment_upgrade_description** | [**ComposeDeploymentUpgradeDescription**](ComposeDeploymentUpgradeDescription.md)| Parameters for upgrading compose deployment. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | A successful response means that the upgrade has started. Use GetComposeDeploymentUpgrade operation to get the status of the upgrade. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.TenantConfigurationApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenant_configuration_deploy**](TenantConfigurationApi.md#tenant_configuration_deploy) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/tenant/{configurationName}/deploy | 
[**tenant_configuration_save**](TenantConfigurationApi.md#tenant_configuration_save) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/tenant/{configurationName}/save | 
[**tenant_configuration_validate**](TenantConfigurationApi.md#tenant_configuration_validate) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/tenant/{configurationName}/validate | 


# **tenant_configuration_deploy**
> OperationResultContract tenant_configuration_deploy(resource_group_name, service_name, api_version, subscription_id, configuration_name, parameters)



This operation applies changes from the specified Git branch to the configuration database. This is a long running operation and could take several minutes to complete.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deploy_configuration_parameters import DeployConfigurationParameters
from openapi_client.models.operation_result_contract import OperationResultContract
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TenantConfigurationApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    configuration_name = 'configuration_name_example' # str | The identifier of the Git Configuration Operation.
    parameters = openapi_client.DeployConfigurationParameters() # DeployConfigurationParameters | Deploy Configuration parameters.

    try:
        api_response = api_instance.tenant_configuration_deploy(resource_group_name, service_name, api_version, subscription_id, configuration_name, parameters)
        print("The response of TenantConfigurationApi->tenant_configuration_deploy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantConfigurationApi->tenant_configuration_deploy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **configuration_name** | **str**| The identifier of the Git Configuration Operation. | 
 **parameters** | [**DeployConfigurationParameters**](DeployConfigurationParameters.md)| Deploy Configuration parameters. | 

### Return type

[**OperationResultContract**](OperationResultContract.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Result of applying changes from Git branch to database. |  -  |
**202** | Accepted: Location header contains the URL where the status of the long running operation can be checked. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenant_configuration_save**
> OperationResultContract tenant_configuration_save(resource_group_name, service_name, api_version, subscription_id, configuration_name, parameters)



This operation creates a commit with the current configuration snapshot to the specified branch in the repository. This is a long running operation and could take several minutes to complete.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_result_contract import OperationResultContract
from openapi_client.models.save_configuration_parameter import SaveConfigurationParameter
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TenantConfigurationApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    configuration_name = 'configuration_name_example' # str | The identifier of the Git Configuration Operation.
    parameters = openapi_client.SaveConfigurationParameter() # SaveConfigurationParameter | Save Configuration parameters.

    try:
        api_response = api_instance.tenant_configuration_save(resource_group_name, service_name, api_version, subscription_id, configuration_name, parameters)
        print("The response of TenantConfigurationApi->tenant_configuration_save:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantConfigurationApi->tenant_configuration_save: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **configuration_name** | **str**| The identifier of the Git Configuration Operation. | 
 **parameters** | [**SaveConfigurationParameter**](SaveConfigurationParameter.md)| Save Configuration parameters. | 

### Return type

[**OperationResultContract**](OperationResultContract.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Result of creating a commit in the repository. |  -  |
**202** | Accepted: Location header contains the URL where the status of the long running operation can be checked. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenant_configuration_validate**
> OperationResultContract tenant_configuration_validate(resource_group_name, service_name, api_version, subscription_id, configuration_name, parameters)



This operation validates the changes in the specified Git branch. This is a long running operation and could take several minutes to complete.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deploy_configuration_parameters import DeployConfigurationParameters
from openapi_client.models.operation_result_contract import OperationResultContract
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TenantConfigurationApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    configuration_name = 'configuration_name_example' # str | The identifier of the Git Configuration Operation.
    parameters = openapi_client.DeployConfigurationParameters() # DeployConfigurationParameters | Validate Configuration parameters.

    try:
        api_response = api_instance.tenant_configuration_validate(resource_group_name, service_name, api_version, subscription_id, configuration_name, parameters)
        print("The response of TenantConfigurationApi->tenant_configuration_validate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantConfigurationApi->tenant_configuration_validate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **configuration_name** | **str**| The identifier of the Git Configuration Operation. | 
 **parameters** | [**DeployConfigurationParameters**](DeployConfigurationParameters.md)| Validate Configuration parameters. | 

### Return type

[**OperationResultContract**](OperationResultContract.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Result of validating the changes in the specified Git branch. |  -  |
**202** | Accepted: Location header contains the URL where the status of the long running operation can be checked. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


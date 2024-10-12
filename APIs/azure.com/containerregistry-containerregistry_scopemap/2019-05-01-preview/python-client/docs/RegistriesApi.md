# openapi_client.RegistriesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**registries_generate_credentials**](RegistriesApi.md#registries_generate_credentials) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/generateCredentials | 


# **registries_generate_credentials**
> GenerateCredentialsResult registries_generate_credentials(api_version, subscription_id, resource_group_name, registry_name, generate_credentials_parameters)



Generate keys for a token of a specified container registry.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.generate_credentials_parameters import GenerateCredentialsParameters
from openapi_client.models.generate_credentials_result import GenerateCredentialsResult
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
    api_instance = openapi_client.RegistriesApi(api_client)
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    generate_credentials_parameters = openapi_client.GenerateCredentialsParameters() # GenerateCredentialsParameters | The parameters for generating credentials.

    try:
        api_response = api_instance.registries_generate_credentials(api_version, subscription_id, resource_group_name, registry_name, generate_credentials_parameters)
        print("The response of RegistriesApi->registries_generate_credentials:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistriesApi->registries_generate_credentials: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **generate_credentials_parameters** | [**GenerateCredentialsParameters**](GenerateCredentialsParameters.md)| The parameters for generating credentials. | 

### Return type

[**GenerateCredentialsResult**](GenerateCredentialsResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**202** | The request was successful; the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


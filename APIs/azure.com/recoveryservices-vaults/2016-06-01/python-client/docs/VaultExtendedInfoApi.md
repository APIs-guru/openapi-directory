# openapi_client.VaultExtendedInfoApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vault_extended_info_create_or_update**](VaultExtendedInfoApi.md#vault_extended_info_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/extendedInformation/vaultExtendedInfo | 
[**vault_extended_info_get**](VaultExtendedInfoApi.md#vault_extended_info_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/extendedInformation/vaultExtendedInfo | 
[**vault_extended_info_update**](VaultExtendedInfoApi.md#vault_extended_info_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/extendedInformation/vaultExtendedInfo | 


# **vault_extended_info_create_or_update**
> VaultExtendedInfoResource vault_extended_info_create_or_update(subscription_id, resource_group_name, vault_name, api_version, resource_resource_extended_info_details)



Create vault extended info.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vault_extended_info_resource import VaultExtendedInfoResource
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
    api_instance = openapi_client.VaultExtendedInfoApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    api_version = 'api_version_example' # str | Client Api Version.
    resource_resource_extended_info_details = openapi_client.VaultExtendedInfoResource() # VaultExtendedInfoResource | Details of ResourceExtendedInfo

    try:
        api_response = api_instance.vault_extended_info_create_or_update(subscription_id, resource_group_name, vault_name, api_version, resource_resource_extended_info_details)
        print("The response of VaultExtendedInfoApi->vault_extended_info_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VaultExtendedInfoApi->vault_extended_info_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription Id. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **api_version** | **str**| Client Api Version. | 
 **resource_resource_extended_info_details** | [**VaultExtendedInfoResource**](VaultExtendedInfoResource.md)| Details of ResourceExtendedInfo | 

### Return type

[**VaultExtendedInfoResource**](VaultExtendedInfoResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vault_extended_info_get**
> VaultExtendedInfoResource vault_extended_info_get(subscription_id, api_version, resource_group_name, vault_name)



Get the vault extended info.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vault_extended_info_resource import VaultExtendedInfoResource
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
    api_instance = openapi_client.VaultExtendedInfoApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    api_version = 'api_version_example' # str | Client Api Version.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.

    try:
        api_response = api_instance.vault_extended_info_get(subscription_id, api_version, resource_group_name, vault_name)
        print("The response of VaultExtendedInfoApi->vault_extended_info_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VaultExtendedInfoApi->vault_extended_info_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription Id. | 
 **api_version** | **str**| Client Api Version. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **vault_name** | **str**| The name of the recovery services vault. | 

### Return type

[**VaultExtendedInfoResource**](VaultExtendedInfoResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vault_extended_info_update**
> VaultExtendedInfoResource vault_extended_info_update(subscription_id, resource_group_name, vault_name, api_version, resource_resource_extended_info_details)



Update vault extended info.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vault_extended_info_resource import VaultExtendedInfoResource
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
    api_instance = openapi_client.VaultExtendedInfoApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    api_version = 'api_version_example' # str | Client Api Version.
    resource_resource_extended_info_details = openapi_client.VaultExtendedInfoResource() # VaultExtendedInfoResource | Details of ResourceExtendedInfo

    try:
        api_response = api_instance.vault_extended_info_update(subscription_id, resource_group_name, vault_name, api_version, resource_resource_extended_info_details)
        print("The response of VaultExtendedInfoApi->vault_extended_info_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VaultExtendedInfoApi->vault_extended_info_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription Id. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **api_version** | **str**| Client Api Version. | 
 **resource_resource_extended_info_details** | [**VaultExtendedInfoResource**](VaultExtendedInfoResource.md)| Details of ResourceExtendedInfo | 

### Return type

[**VaultExtendedInfoResource**](VaultExtendedInfoResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


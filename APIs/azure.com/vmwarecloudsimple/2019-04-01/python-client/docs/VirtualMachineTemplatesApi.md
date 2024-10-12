# openapi_client.VirtualMachineTemplatesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_machine_templates_get**](VirtualMachineTemplatesApi.md#virtual_machine_templates_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/virtualMachineTemplates/{virtualMachineTemplateName} | Implements virtual machine template GET method
[**virtual_machine_templates_list**](VirtualMachineTemplatesApi.md#virtual_machine_templates_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/virtualMachineTemplates | Implements list of available VM templates


# **virtual_machine_templates_get**
> VirtualMachineTemplate virtual_machine_templates_get(subscription_id, region_id, pc_name, virtual_machine_template_name, api_version)

Implements virtual machine template GET method

Returns virtual machine templates by its name

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_template import VirtualMachineTemplate
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
    api_instance = openapi_client.VirtualMachineTemplatesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    region_id = 'region_id_example' # str | The region Id (westus, eastus)
    pc_name = 'pc_name_example' # str | The private cloud name
    virtual_machine_template_name = 'virtual_machine_template_name_example' # str | virtual machine template id (vsphereId)
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Implements virtual machine template GET method
        api_response = api_instance.virtual_machine_templates_get(subscription_id, region_id, pc_name, virtual_machine_template_name, api_version)
        print("The response of VirtualMachineTemplatesApi->virtual_machine_templates_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineTemplatesApi->virtual_machine_templates_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **region_id** | **str**| The region Id (westus, eastus) | 
 **pc_name** | **str**| The private cloud name | 
 **virtual_machine_template_name** | **str**| virtual machine template id (vsphereId) | 
 **api_version** | **str**| Client API version. | 

### Return type

[**VirtualMachineTemplate**](VirtualMachineTemplate.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**0** | General Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_templates_list**
> VirtualMachineTemplateListResponse virtual_machine_templates_list(subscription_id, api_version, pc_name, region_id, resource_pool_name)

Implements list of available VM templates

Returns list of virtual machine templates in region for private cloud

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_template_list_response import VirtualMachineTemplateListResponse
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
    api_instance = openapi_client.VirtualMachineTemplatesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    api_version = 'api_version_example' # str | Client API version.
    pc_name = 'pc_name_example' # str | The private cloud name
    region_id = 'region_id_example' # str | The region Id (westus, eastus)
    resource_pool_name = 'resource_pool_name_example' # str | Resource pool used to derive vSphere cluster which contains VM templates

    try:
        # Implements list of available VM templates
        api_response = api_instance.virtual_machine_templates_list(subscription_id, api_version, pc_name, region_id, resource_pool_name)
        print("The response of VirtualMachineTemplatesApi->virtual_machine_templates_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineTemplatesApi->virtual_machine_templates_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **api_version** | **str**| Client API version. | 
 **pc_name** | **str**| The private cloud name | 
 **region_id** | **str**| The region Id (westus, eastus) | 
 **resource_pool_name** | **str**| Resource pool used to derive vSphere cluster which contains VM templates | 

### Return type

[**VirtualMachineTemplateListResponse**](VirtualMachineTemplateListResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**0** | General Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


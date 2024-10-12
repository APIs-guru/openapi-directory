# openapi_client.VirtualMachineImageTemplateApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_machine_image_templates_create_or_update**](VirtualMachineImageTemplateApi.md#virtual_machine_image_templates_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName} | 
[**virtual_machine_image_templates_delete**](VirtualMachineImageTemplateApi.md#virtual_machine_image_templates_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName} | 
[**virtual_machine_image_templates_get**](VirtualMachineImageTemplateApi.md#virtual_machine_image_templates_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName} | 
[**virtual_machine_image_templates_get_run_output**](VirtualMachineImageTemplateApi.md#virtual_machine_image_templates_get_run_output) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/runOutputs/{runOutputName} | 
[**virtual_machine_image_templates_list**](VirtualMachineImageTemplateApi.md#virtual_machine_image_templates_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.VirtualMachineImages/imageTemplates | 
[**virtual_machine_image_templates_list_by_resource_group**](VirtualMachineImageTemplateApi.md#virtual_machine_image_templates_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates | 
[**virtual_machine_image_templates_list_run_outputs**](VirtualMachineImageTemplateApi.md#virtual_machine_image_templates_list_run_outputs) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/runOutputs | 
[**virtual_machine_image_templates_run**](VirtualMachineImageTemplateApi.md#virtual_machine_image_templates_run) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/run | 
[**virtual_machine_image_templates_update**](VirtualMachineImageTemplateApi.md#virtual_machine_image_templates_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName} | 


# **virtual_machine_image_templates_create_or_update**
> ImageTemplate virtual_machine_image_templates_create_or_update(api_version, subscription_id, resource_group_name, image_template_name, parameters)



Create or update a virtual machine image template

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.image_template import ImageTemplate
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
    api_instance = openapi_client.VirtualMachineImageTemplateApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    image_template_name = 'image_template_name_example' # str | The name of the image Template
    parameters = openapi_client.ImageTemplate() # ImageTemplate | Parameters supplied to the CreateImageTemplate operation

    try:
        api_response = api_instance.virtual_machine_image_templates_create_or_update(api_version, subscription_id, resource_group_name, image_template_name, parameters)
        print("The response of VirtualMachineImageTemplateApi->virtual_machine_image_templates_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineImageTemplateApi->virtual_machine_image_templates_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **image_template_name** | **str**| The name of the image Template | 
 **parameters** | [**ImageTemplate**](ImageTemplate.md)| Parameters supplied to the CreateImageTemplate operation | 

### Return type

[**ImageTemplate**](ImageTemplate.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_image_templates_delete**
> virtual_machine_image_templates_delete(api_version, subscription_id, resource_group_name, image_template_name)



Delete a virtual machine image template

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.VirtualMachineImageTemplateApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    image_template_name = 'image_template_name_example' # str | The name of the image Template

    try:
        api_instance.virtual_machine_image_templates_delete(api_version, subscription_id, resource_group_name, image_template_name)
    except Exception as e:
        print("Exception when calling VirtualMachineImageTemplateApi->virtual_machine_image_templates_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **image_template_name** | **str**| The name of the image Template | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. |  -  |
**202** | The operation will be completed asynchronously. |  -  |
**204** | NoContent -- VM image template does not exist in the subscription. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_image_templates_get**
> ImageTemplate virtual_machine_image_templates_get(api_version, subscription_id, resource_group_name, image_template_name)



Get information about a virtual machine image template

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.image_template import ImageTemplate
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
    api_instance = openapi_client.VirtualMachineImageTemplateApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    image_template_name = 'image_template_name_example' # str | The name of the image Template

    try:
        api_response = api_instance.virtual_machine_image_templates_get(api_version, subscription_id, resource_group_name, image_template_name)
        print("The response of VirtualMachineImageTemplateApi->virtual_machine_image_templates_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineImageTemplateApi->virtual_machine_image_templates_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **image_template_name** | **str**| The name of the image Template | 

### Return type

[**ImageTemplate**](ImageTemplate.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_image_templates_get_run_output**
> RunOutput virtual_machine_image_templates_get_run_output(api_version, subscription_id, resource_group_name, image_template_name, run_output_name)



Get the specified run output for the specified image template resource

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.run_output import RunOutput
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
    api_instance = openapi_client.VirtualMachineImageTemplateApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    image_template_name = 'image_template_name_example' # str | The name of the image Template
    run_output_name = 'run_output_name_example' # str | The name of the run output

    try:
        api_response = api_instance.virtual_machine_image_templates_get_run_output(api_version, subscription_id, resource_group_name, image_template_name, run_output_name)
        print("The response of VirtualMachineImageTemplateApi->virtual_machine_image_templates_get_run_output:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineImageTemplateApi->virtual_machine_image_templates_get_run_output: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **image_template_name** | **str**| The name of the image Template | 
 **run_output_name** | **str**| The name of the run output | 

### Return type

[**RunOutput**](RunOutput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_image_templates_list**
> ImageTemplateListResult virtual_machine_image_templates_list(subscription_id, api_version)



Gets information about the VM image templates associated with the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.image_template_list_result import ImageTemplateListResult
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
    api_instance = openapi_client.VirtualMachineImageTemplateApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.virtual_machine_image_templates_list(subscription_id, api_version)
        print("The response of VirtualMachineImageTemplateApi->virtual_machine_image_templates_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineImageTemplateApi->virtual_machine_image_templates_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**ImageTemplateListResult**](ImageTemplateListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_image_templates_list_by_resource_group**
> ImageTemplateListResult virtual_machine_image_templates_list_by_resource_group(resource_group_name, subscription_id, api_version)



Gets information about the VM image templates associated with the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.image_template_list_result import ImageTemplateListResult
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
    api_instance = openapi_client.VirtualMachineImageTemplateApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.virtual_machine_image_templates_list_by_resource_group(resource_group_name, subscription_id, api_version)
        print("The response of VirtualMachineImageTemplateApi->virtual_machine_image_templates_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineImageTemplateApi->virtual_machine_image_templates_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**ImageTemplateListResult**](ImageTemplateListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_image_templates_list_run_outputs**
> RunOutputCollection virtual_machine_image_templates_list_run_outputs(api_version, subscription_id, resource_group_name, image_template_name)



List all run outputs for the specified Image Template resource

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.run_output_collection import RunOutputCollection
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
    api_instance = openapi_client.VirtualMachineImageTemplateApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    image_template_name = 'image_template_name_example' # str | The name of the image Template

    try:
        api_response = api_instance.virtual_machine_image_templates_list_run_outputs(api_version, subscription_id, resource_group_name, image_template_name)
        print("The response of VirtualMachineImageTemplateApi->virtual_machine_image_templates_list_run_outputs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineImageTemplateApi->virtual_machine_image_templates_list_run_outputs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **image_template_name** | **str**| The name of the image Template | 

### Return type

[**RunOutputCollection**](RunOutputCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_image_templates_run**
> virtual_machine_image_templates_run(api_version, subscription_id, resource_group_name, image_template_name)



Create artifacts from a existing image template

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.VirtualMachineImageTemplateApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    image_template_name = 'image_template_name_example' # str | The name of the image Template

    try:
        api_instance.virtual_machine_image_templates_run(api_version, subscription_id, resource_group_name, image_template_name)
    except Exception as e:
        print("Exception when calling VirtualMachineImageTemplateApi->virtual_machine_image_templates_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **image_template_name** | **str**| The name of the image Template | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The operation will be completed asynchronously. |  -  |
**204** | The operation was successful. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_image_templates_update**
> ImageTemplate virtual_machine_image_templates_update(subscription_id, resource_group_name, image_template_name, api_version, parameters)



Update the tags for this Virtual Machine Image Template

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.image_template import ImageTemplate
from openapi_client.models.image_template_update_parameters import ImageTemplateUpdateParameters
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
    api_instance = openapi_client.VirtualMachineImageTemplateApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    image_template_name = 'image_template_name_example' # str | The name of the image Template
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.ImageTemplateUpdateParameters() # ImageTemplateUpdateParameters | Additional parameters for Image Template update.

    try:
        api_response = api_instance.virtual_machine_image_templates_update(subscription_id, resource_group_name, image_template_name, api_version, parameters)
        print("The response of VirtualMachineImageTemplateApi->virtual_machine_image_templates_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineImageTemplateApi->virtual_machine_image_templates_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **image_template_name** | **str**| The name of the image Template | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**ImageTemplateUpdateParameters**](ImageTemplateUpdateParameters.md)| Additional parameters for Image Template update. | 

### Return type

[**ImageTemplate**](ImageTemplate.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


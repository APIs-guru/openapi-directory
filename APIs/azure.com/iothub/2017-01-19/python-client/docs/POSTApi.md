# openapi_client.POSTApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iot_hub_resource_check_name_availability**](POSTApi.md#iot_hub_resource_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Devices/checkNameAvailability | Check if an IoT hub name is available.
[**iot_hub_resource_export_devices**](POSTApi.md#iot_hub_resource_export_devices) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/exportDevices | Exports all the device identities in the IoT hub identity registry to an Azure Storage blob container. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.
[**iot_hub_resource_get_keys_for_key_name**](POSTApi.md#iot_hub_resource_get_keys_for_key_name) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/IotHubKeys/{keyName}/listkeys | Get a shared access policy by name from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
[**iot_hub_resource_import_devices**](POSTApi.md#iot_hub_resource_import_devices) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/importDevices | Import, update, or delete device identities in the IoT hub identity registry from a blob. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.
[**iot_hub_resource_list_keys**](POSTApi.md#iot_hub_resource_list_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/listkeys | Get the security metadata for an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.


# **iot_hub_resource_check_name_availability**
> IotHubNameAvailabilityInfo iot_hub_resource_check_name_availability(api_version, subscription_id, operation_inputs)

Check if an IoT hub name is available.

Check if an IoT hub name is available.

### Example


```python
import openapi_client
from openapi_client.models.iot_hub_name_availability_info import IotHubNameAvailabilityInfo
from openapi_client.models.operation_inputs import OperationInputs
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.POSTApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    operation_inputs = openapi_client.OperationInputs() # OperationInputs | Set the name parameter in the OperationInputs structure to the name of the IoT hub to check.

    try:
        # Check if an IoT hub name is available.
        api_response = api_instance.iot_hub_resource_check_name_availability(api_version, subscription_id, operation_inputs)
        print("The response of POSTApi->iot_hub_resource_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling POSTApi->iot_hub_resource_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **operation_inputs** | [**OperationInputs**](OperationInputs.md)| Set the name parameter in the OperationInputs structure to the name of the IoT hub to check. | 

### Return type

[**IotHubNameAvailabilityInfo**](IotHubNameAvailabilityInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The body contains a JSON-serialized response that specifies whether the IoT hub name is available. If the name is not available, the body contains the reason. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_hub_resource_export_devices**
> JobResponse iot_hub_resource_export_devices(api_version, subscription_id, resource_group_name, resource_name, export_devices_parameters)

Exports all the device identities in the IoT hub identity registry to an Azure Storage blob container. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.

Exports all the device identities in the IoT hub identity registry to an Azure Storage blob container. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.

### Example


```python
import openapi_client
from openapi_client.models.export_devices_request import ExportDevicesRequest
from openapi_client.models.job_response import JobResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.POSTApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT hub.
    resource_name = 'resource_name_example' # str | The name of the IoT hub.
    export_devices_parameters = openapi_client.ExportDevicesRequest() # ExportDevicesRequest | The parameters that specify the export devices operation.

    try:
        # Exports all the device identities in the IoT hub identity registry to an Azure Storage blob container. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.
        api_response = api_instance.iot_hub_resource_export_devices(api_version, subscription_id, resource_group_name, resource_name, export_devices_parameters)
        print("The response of POSTApi->iot_hub_resource_export_devices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling POSTApi->iot_hub_resource_export_devices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT hub. | 
 **resource_name** | **str**| The name of the IoT hub. | 
 **export_devices_parameters** | [**ExportDevicesRequest**](ExportDevicesRequest.md)| The parameters that specify the export devices operation. | 

### Return type

[**JobResponse**](JobResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_hub_resource_get_keys_for_key_name**
> SharedAccessSignatureAuthorizationRule iot_hub_resource_get_keys_for_key_name(api_version, subscription_id, resource_group_name, resource_name, key_name)

Get a shared access policy by name from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.

Get a shared access policy by name from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.

### Example


```python
import openapi_client
from openapi_client.models.shared_access_signature_authorization_rule import SharedAccessSignatureAuthorizationRule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.POSTApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT hub.
    resource_name = 'resource_name_example' # str | The name of the IoT hub.
    key_name = 'key_name_example' # str | The name of the shared access policy.

    try:
        # Get a shared access policy by name from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
        api_response = api_instance.iot_hub_resource_get_keys_for_key_name(api_version, subscription_id, resource_group_name, resource_name, key_name)
        print("The response of POSTApi->iot_hub_resource_get_keys_for_key_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling POSTApi->iot_hub_resource_get_keys_for_key_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT hub. | 
 **resource_name** | **str**| The name of the IoT hub. | 
 **key_name** | **str**| The name of the shared access policy. | 

### Return type

[**SharedAccessSignatureAuthorizationRule**](SharedAccessSignatureAuthorizationRule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The body contains a JSON-serialized shared access policy, including keys, that you can use to access one or more IoT hub endpoints. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_hub_resource_import_devices**
> JobResponse iot_hub_resource_import_devices(api_version, subscription_id, resource_group_name, resource_name, import_devices_parameters)

Import, update, or delete device identities in the IoT hub identity registry from a blob. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.

Import, update, or delete device identities in the IoT hub identity registry from a blob. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.

### Example


```python
import openapi_client
from openapi_client.models.import_devices_request import ImportDevicesRequest
from openapi_client.models.job_response import JobResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.POSTApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT hub.
    resource_name = 'resource_name_example' # str | The name of the IoT hub.
    import_devices_parameters = openapi_client.ImportDevicesRequest() # ImportDevicesRequest | The parameters that specify the import devices operation.

    try:
        # Import, update, or delete device identities in the IoT hub identity registry from a blob. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.
        api_response = api_instance.iot_hub_resource_import_devices(api_version, subscription_id, resource_group_name, resource_name, import_devices_parameters)
        print("The response of POSTApi->iot_hub_resource_import_devices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling POSTApi->iot_hub_resource_import_devices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT hub. | 
 **resource_name** | **str**| The name of the IoT hub. | 
 **import_devices_parameters** | [**ImportDevicesRequest**](ImportDevicesRequest.md)| The parameters that specify the import devices operation. | 

### Return type

[**JobResponse**](JobResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_hub_resource_list_keys**
> SharedAccessSignatureAuthorizationRuleListResult iot_hub_resource_list_keys(api_version, subscription_id, resource_group_name, resource_name)

Get the security metadata for an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.

Get the security metadata for an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.

### Example


```python
import openapi_client
from openapi_client.models.shared_access_signature_authorization_rule_list_result import SharedAccessSignatureAuthorizationRuleListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.POSTApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT hub.
    resource_name = 'resource_name_example' # str | The name of the IoT hub.

    try:
        # Get the security metadata for an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
        api_response = api_instance.iot_hub_resource_list_keys(api_version, subscription_id, resource_group_name, resource_name)
        print("The response of POSTApi->iot_hub_resource_list_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling POSTApi->iot_hub_resource_list_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT hub. | 
 **resource_name** | **str**| The name of the IoT hub. | 

### Return type

[**SharedAccessSignatureAuthorizationRuleListResult**](SharedAccessSignatureAuthorizationRuleListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The body contains a JSON-serialized array of shared access policies, including keys, that you can use to access the IoT hub endpoints. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


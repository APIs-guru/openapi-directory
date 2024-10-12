# openapi_client.ServiceApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_list_available_skus**](ServiceApi.md#service_list_available_skus) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.DataBox/locations/{location}/availableSkus | 
[**service_list_available_skus_by_resource_group**](ServiceApi.md#service_list_available_skus_by_resource_group) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/locations/{location}/availableSkus | 
[**service_region_configuration**](ServiceApi.md#service_region_configuration) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.DataBox/locations/{location}/regionConfiguration | 
[**service_validate_address**](ServiceApi.md#service_validate_address) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.DataBox/locations/{location}/validateAddress | 
[**service_validate_inputs**](ServiceApi.md#service_validate_inputs) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.DataBox/locations/{location}/validateInputs | 
[**service_validate_inputs_by_resource_group**](ServiceApi.md#service_validate_inputs_by_resource_group) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/locations/{location}/validateInputs | 


# **service_list_available_skus**
> AvailableSkusResult service_list_available_skus(subscription_id, location, api_version, available_sku_request)



This method provides the list of available skus for the given subscription and location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.available_sku_request import AvailableSkuRequest
from openapi_client.models.available_skus_result import AvailableSkusResult
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
    api_instance = openapi_client.ServiceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    location = 'location_example' # str | The location of the resource
    api_version = 'api_version_example' # str | The API Version
    available_sku_request = openapi_client.AvailableSkuRequest() # AvailableSkuRequest | Filters for showing the available skus.

    try:
        api_response = api_instance.service_list_available_skus(subscription_id, location, api_version, available_sku_request)
        print("The response of ServiceApi->service_list_available_skus:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceApi->service_list_available_skus: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **location** | **str**| The location of the resource | 
 **api_version** | **str**| The API Version | 
 **available_sku_request** | [**AvailableSkuRequest**](AvailableSkuRequest.md)| Filters for showing the available skus. | 

### Return type

[**AvailableSkusResult**](AvailableSkusResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of available skus under subscription. |  -  |
**0** | Error response describing reason for operation failure. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_list_available_skus_by_resource_group**
> AvailableSkusResult service_list_available_skus_by_resource_group(subscription_id, resource_group_name, location, api_version, available_sku_request)



This method provides the list of available skus for the given subscription, resource group and location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.available_sku_request import AvailableSkuRequest
from openapi_client.models.available_skus_result import AvailableSkusResult
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
    api_instance = openapi_client.ServiceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    location = 'location_example' # str | The location of the resource
    api_version = 'api_version_example' # str | The API Version
    available_sku_request = openapi_client.AvailableSkuRequest() # AvailableSkuRequest | Filters for showing the available skus.

    try:
        api_response = api_instance.service_list_available_skus_by_resource_group(subscription_id, resource_group_name, location, api_version, available_sku_request)
        print("The response of ServiceApi->service_list_available_skus_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceApi->service_list_available_skus_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **location** | **str**| The location of the resource | 
 **api_version** | **str**| The API Version | 
 **available_sku_request** | [**AvailableSkuRequest**](AvailableSkuRequest.md)| Filters for showing the available skus. | 

### Return type

[**AvailableSkusResult**](AvailableSkusResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of available skus under Resource group. |  -  |
**0** | Error response describing reason for operation failure. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_region_configuration**
> RegionConfigurationResponse service_region_configuration(subscription_id, location, api_version, region_configuration_request)



This API provides configuration details specific to given region/location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.region_configuration_request import RegionConfigurationRequest
from openapi_client.models.region_configuration_response import RegionConfigurationResponse
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
    api_instance = openapi_client.ServiceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    location = 'location_example' # str | The location of the resource
    api_version = 'api_version_example' # str | The API Version
    region_configuration_request = openapi_client.RegionConfigurationRequest() # RegionConfigurationRequest | Request body to get the configuration for the region.

    try:
        api_response = api_instance.service_region_configuration(subscription_id, location, api_version, region_configuration_request)
        print("The response of ServiceApi->service_region_configuration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceApi->service_region_configuration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **location** | **str**| The location of the resource | 
 **api_version** | **str**| The API Version | 
 **region_configuration_request** | [**RegionConfigurationRequest**](RegionConfigurationRequest.md)| Request body to get the configuration for the region. | 

### Return type

[**RegionConfigurationResponse**](RegionConfigurationResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Region configuration response. |  -  |
**0** | Error response describing reason for operation failure. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_validate_address**
> AddressValidationOutput service_validate_address(subscription_id, location, api_version, validate_address)



[DEPRECATED NOTICE: This operation will soon be removed] This method validates the customer shipping address and provide alternate addresses if any.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.address_validation_output import AddressValidationOutput
from openapi_client.models.validate_address import ValidateAddress
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
    api_instance = openapi_client.ServiceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    location = 'location_example' # str | The location of the resource
    api_version = 'api_version_example' # str | The API Version
    validate_address = openapi_client.ValidateAddress() # ValidateAddress | Shipping address of the customer.

    try:
        api_response = api_instance.service_validate_address(subscription_id, location, api_version, validate_address)
        print("The response of ServiceApi->service_validate_address:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceApi->service_validate_address: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **location** | **str**| The location of the resource | 
 **api_version** | **str**| The API Version | 
 **validate_address** | [**ValidateAddress**](ValidateAddress.md)| Shipping address of the customer. | 

### Return type

[**AddressValidationOutput**](AddressValidationOutput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The valid and alternate addresses. |  -  |
**0** | Error response describing reason for operation failure. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_validate_inputs**
> ValidationResponse service_validate_inputs(subscription_id, location, api_version, validation_request)



This method does all necessary pre-job creation validation under subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.validation_request import ValidationRequest
from openapi_client.models.validation_response import ValidationResponse
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
    api_instance = openapi_client.ServiceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    location = 'location_example' # str | The location of the resource
    api_version = 'api_version_example' # str | The API Version
    validation_request = openapi_client.ValidationRequest() # ValidationRequest | Inputs of the customer.

    try:
        api_response = api_instance.service_validate_inputs(subscription_id, location, api_version, validation_request)
        print("The response of ServiceApi->service_validate_inputs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceApi->service_validate_inputs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **location** | **str**| The location of the resource | 
 **api_version** | **str**| The API Version | 
 **validation_request** | [**ValidationRequest**](ValidationRequest.md)| Inputs of the customer. | 

### Return type

[**ValidationResponse**](ValidationResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The validation status and responses of each validating parameter. |  -  |
**0** | Error response describing reason for operation failure. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_validate_inputs_by_resource_group**
> ValidationResponse service_validate_inputs_by_resource_group(subscription_id, resource_group_name, location, api_version, validation_request)



This method does all necessary pre-job creation validation under resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.validation_request import ValidationRequest
from openapi_client.models.validation_response import ValidationResponse
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
    api_instance = openapi_client.ServiceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    location = 'location_example' # str | The location of the resource
    api_version = 'api_version_example' # str | The API Version
    validation_request = openapi_client.ValidationRequest() # ValidationRequest | Inputs of the customer.

    try:
        api_response = api_instance.service_validate_inputs_by_resource_group(subscription_id, resource_group_name, location, api_version, validation_request)
        print("The response of ServiceApi->service_validate_inputs_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceApi->service_validate_inputs_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **location** | **str**| The location of the resource | 
 **api_version** | **str**| The API Version | 
 **validation_request** | [**ValidationRequest**](ValidationRequest.md)| Inputs of the customer. | 

### Return type

[**ValidationResponse**](ValidationResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The validation status and responses of each validating parameter. |  -  |
**0** | Error response describing reason for operation failure. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


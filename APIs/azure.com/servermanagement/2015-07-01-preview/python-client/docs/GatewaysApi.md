# openapi_client.GatewaysApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gateway_create**](GatewaysApi.md#gateway_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/gateways/{gatewayName} | 
[**gateway_delete**](GatewaysApi.md#gateway_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/gateways/{gatewayName} | 
[**gateway_get**](GatewaysApi.md#gateway_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/gateways/{gatewayName} | 
[**gateway_get_profile**](GatewaysApi.md#gateway_get_profile) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/gateways/{gatewayName}/profile | 
[**gateway_list**](GatewaysApi.md#gateway_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ServerManagement/gateways | 
[**gateway_list_for_resource_group**](GatewaysApi.md#gateway_list_for_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/gateways | 
[**gateway_regenerate_profile**](GatewaysApi.md#gateway_regenerate_profile) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/gateways/{gatewayName}/regenerateprofile | 
[**gateway_upgrade**](GatewaysApi.md#gateway_upgrade) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/gateways/{gatewayName}/upgradetolatest | 


# **gateway_create**
> GatewayResource gateway_create(subscription_id, api_version, resource_group_name, gateway_name, gateway_parameters)



Creates or updates a ManagementService gateway.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gateway_parameters import GatewayParameters
from openapi_client.models.gateway_resource import GatewayResource
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
    api_instance = openapi_client.GatewaysApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscriptionId.
    gateway_name = 'gateway_name_example' # str | The gateway name (256 characters maximum).
    gateway_parameters = openapi_client.GatewayParameters() # GatewayParameters | Parameters supplied to the CreateOrUpdate operation.

    try:
        api_response = api_instance.gateway_create(subscription_id, api_version, resource_group_name, gateway_name, gateway_parameters)
        print("The response of GatewaysApi->gateway_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GatewaysApi->gateway_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscriptionId. | 
 **gateway_name** | **str**| The gateway name (256 characters maximum). | 
 **gateway_parameters** | [**GatewayParameters**](GatewayParameters.md)| Parameters supplied to the CreateOrUpdate operation. | 

### Return type

[**GatewayResource**](GatewayResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**201** | The operation completed successfully. |  -  |
**0** | Default Response. It will be deserialized as per the error definition specified in the schema and an exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gateway_delete**
> gateway_delete(subscription_id, api_version, resource_group_name, gateway_name)



Deletes a gateway from a resource group.

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
    api_instance = openapi_client.GatewaysApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscriptionId.
    gateway_name = 'gateway_name_example' # str | The gateway name (256 characters maximum).

    try:
        api_instance.gateway_delete(subscription_id, api_version, resource_group_name, gateway_name)
    except Exception as e:
        print("Exception when calling GatewaysApi->gateway_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscriptionId. | 
 **gateway_name** | **str**| The gateway name (256 characters maximum). | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The object exists and was deleted successfully. |  -  |
**204** | The request is well formed but the resource does not exist. |  -  |
**0** | Default Response. It will be deserialized as per the error definition specified in the schema and an exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gateway_get**
> GatewayResource gateway_get(subscription_id, api_version, resource_group_name, gateway_name, expand=expand)



Gets a gateway.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gateway_resource import GatewayResource
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
    api_instance = openapi_client.GatewaysApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscriptionId.
    gateway_name = 'gateway_name_example' # str | The gateway name (256 characters maximum).
    expand = 'expand_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. (optional)

    try:
        api_response = api_instance.gateway_get(subscription_id, api_version, resource_group_name, gateway_name, expand=expand)
        print("The response of GatewaysApi->gateway_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GatewaysApi->gateway_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscriptionId. | 
 **gateway_name** | **str**| The gateway name (256 characters maximum). | 
 **expand** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | [optional] 

### Return type

[**GatewayResource**](GatewayResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**0** | Default Response. It will be deserialized as per the error definition specified in the schema and an exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gateway_get_profile**
> GatewayProfile gateway_get_profile(subscription_id, api_version, resource_group_name, gateway_name)



Gets a gateway profile.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gateway_profile import GatewayProfile
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
    api_instance = openapi_client.GatewaysApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscriptionId.
    gateway_name = 'gateway_name_example' # str | The gateway name (256 characters maximum).

    try:
        api_response = api_instance.gateway_get_profile(subscription_id, api_version, resource_group_name, gateway_name)
        print("The response of GatewaysApi->gateway_get_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GatewaysApi->gateway_get_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscriptionId. | 
 **gateway_name** | **str**| The gateway name (256 characters maximum). | 

### Return type

[**GatewayProfile**](GatewayProfile.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**202** | Accepted: Location header contains the URL where the status of the long running operation can be checked. |  -  |
**0** | Default Response. It will be deserialized as per the error definition specified in the schema and an exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gateway_list**
> GatewayResources gateway_list(subscription_id, api_version)



Lists gateways in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gateway_resources import GatewayResources
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
    api_instance = openapi_client.GatewaysApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.

    try:
        api_response = api_instance.gateway_list(subscription_id, api_version)
        print("The response of GatewaysApi->gateway_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GatewaysApi->gateway_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 

### Return type

[**GatewayResources**](GatewayResources.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**0** | Default Response. It will be deserialized as per the error definition specified in the schema and an exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gateway_list_for_resource_group**
> GatewayResources gateway_list_for_resource_group(subscription_id, api_version, resource_group_name)



Returns gateways in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gateway_resources import GatewayResources
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
    api_instance = openapi_client.GatewaysApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscriptionId.

    try:
        api_response = api_instance.gateway_list_for_resource_group(subscription_id, api_version, resource_group_name)
        print("The response of GatewaysApi->gateway_list_for_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GatewaysApi->gateway_list_for_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscriptionId. | 

### Return type

[**GatewayResources**](GatewayResources.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**0** | Default Response. It will be deserialized as per the error definition specified in the schema and an exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gateway_regenerate_profile**
> gateway_regenerate_profile(subscription_id, api_version, resource_group_name, gateway_name)



Regenerates a gateway's profile

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
    api_instance = openapi_client.GatewaysApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscriptionId.
    gateway_name = 'gateway_name_example' # str | The gateway name (256 characters maximum).

    try:
        api_instance.gateway_regenerate_profile(subscription_id, api_version, resource_group_name, gateway_name)
    except Exception as e:
        print("Exception when calling GatewaysApi->gateway_regenerate_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscriptionId. | 
 **gateway_name** | **str**| The gateway name (256 characters maximum). | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**202** | Accepted: Location header contains the URL where the status of the long running operation can be checked. |  -  |
**0** | Default Response. It will be deserialized as per the error definition specified in the schema and an exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gateway_upgrade**
> gateway_upgrade(subscription_id, api_version, resource_group_name, gateway_name)



Upgrades a gateway.

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
    api_instance = openapi_client.GatewaysApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscriptionId.
    gateway_name = 'gateway_name_example' # str | The gateway name (256 characters maximum).

    try:
        api_instance.gateway_upgrade(subscription_id, api_version, resource_group_name, gateway_name)
    except Exception as e:
        print("Exception when calling GatewaysApi->gateway_upgrade: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscriptionId. | 
 **gateway_name** | **str**| The gateway name (256 characters maximum). | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**202** | Accepted: Location header contains the URL where the status of the long running operation can be checked. |  -  |
**0** | Default Response. It will be deserialized as per the error definition specified in the schema and an exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


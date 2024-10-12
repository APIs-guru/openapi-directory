# openapi_client.ApplicationGatewaysApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**application_gateways_backend_health**](ApplicationGatewaysApi.md#application_gateways_backend_health) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}/backendhealth | 
[**application_gateways_create_or_update**](ApplicationGatewaysApi.md#application_gateways_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName} | 
[**application_gateways_delete**](ApplicationGatewaysApi.md#application_gateways_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName} | 
[**application_gateways_get**](ApplicationGatewaysApi.md#application_gateways_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName} | 
[**application_gateways_get_ssl_predefined_policy**](ApplicationGatewaysApi.md#application_gateways_get_ssl_predefined_policy) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/applicationGatewayAvailableSslOptions/default/predefinedPolicies/{predefinedPolicyName} | 
[**application_gateways_list**](ApplicationGatewaysApi.md#application_gateways_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways | 
[**application_gateways_list_all**](ApplicationGatewaysApi.md#application_gateways_list_all) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/applicationGateways | 
[**application_gateways_list_available_ssl_options**](ApplicationGatewaysApi.md#application_gateways_list_available_ssl_options) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/applicationGatewayAvailableSslOptions/default | 
[**application_gateways_list_available_ssl_predefined_policies**](ApplicationGatewaysApi.md#application_gateways_list_available_ssl_predefined_policies) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/applicationGatewayAvailableSslOptions/default/predefinedPolicies | 
[**application_gateways_list_available_waf_rule_sets**](ApplicationGatewaysApi.md#application_gateways_list_available_waf_rule_sets) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/applicationGatewayAvailableWafRuleSets | 
[**application_gateways_start**](ApplicationGatewaysApi.md#application_gateways_start) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}/start | 
[**application_gateways_stop**](ApplicationGatewaysApi.md#application_gateways_stop) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}/stop | 
[**application_gateways_update_tags**](ApplicationGatewaysApi.md#application_gateways_update_tags) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName} | 


# **application_gateways_backend_health**
> ApplicationGatewayBackendHealth application_gateways_backend_health(resource_group_name, application_gateway_name, api_version, subscription_id, expand=expand)



Gets the backend health of the specified application gateway in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_gateway_backend_health import ApplicationGatewayBackendHealth
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
    api_instance = openapi_client.ApplicationGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    application_gateway_name = 'application_gateway_name_example' # str | The name of the application gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    expand = 'expand_example' # str | Expands BackendAddressPool and BackendHttpSettings referenced in backend health. (optional)

    try:
        api_response = api_instance.application_gateways_backend_health(resource_group_name, application_gateway_name, api_version, subscription_id, expand=expand)
        print("The response of ApplicationGatewaysApi->application_gateways_backend_health:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationGatewaysApi->application_gateways_backend_health: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **application_gateway_name** | **str**| The name of the application gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **expand** | **str**| Expands BackendAddressPool and BackendHttpSettings referenced in backend health. | [optional] 

### Return type

[**ApplicationGatewayBackendHealth**](ApplicationGatewayBackendHealth.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_gateways_create_or_update**
> ApplicationGateway application_gateways_create_or_update(resource_group_name, application_gateway_name, api_version, subscription_id, parameters)



Creates or updates the specified application gateway.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_gateway import ApplicationGateway
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
    api_instance = openapi_client.ApplicationGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    application_gateway_name = 'application_gateway_name_example' # str | The name of the application gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ApplicationGateway() # ApplicationGateway | Parameters supplied to the create or update application gateway operation.

    try:
        api_response = api_instance.application_gateways_create_or_update(resource_group_name, application_gateway_name, api_version, subscription_id, parameters)
        print("The response of ApplicationGatewaysApi->application_gateways_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationGatewaysApi->application_gateways_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **application_gateway_name** | **str**| The name of the application gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ApplicationGateway**](ApplicationGateway.md)| Parameters supplied to the create or update application gateway operation. | 

### Return type

[**ApplicationGateway**](ApplicationGateway.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting ApplicationGateway resource. |  -  |
**201** | Create successful. The operation returns the resulting ApplicationGateway resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_gateways_delete**
> application_gateways_delete(resource_group_name, application_gateway_name, api_version, subscription_id)



Deletes the specified application gateway.

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
    api_instance = openapi_client.ApplicationGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    application_gateway_name = 'application_gateway_name_example' # str | The name of the application gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.application_gateways_delete(resource_group_name, application_gateway_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ApplicationGatewaysApi->application_gateways_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **application_gateway_name** | **str**| The name of the application gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Delete successful. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**204** | Request successful. Resource with the specified name does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_gateways_get**
> ApplicationGateway application_gateways_get(resource_group_name, application_gateway_name, api_version, subscription_id)



Gets the specified application gateway.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_gateway import ApplicationGateway
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
    api_instance = openapi_client.ApplicationGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    application_gateway_name = 'application_gateway_name_example' # str | The name of the application gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.application_gateways_get(resource_group_name, application_gateway_name, api_version, subscription_id)
        print("The response of ApplicationGatewaysApi->application_gateways_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationGatewaysApi->application_gateways_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **application_gateway_name** | **str**| The name of the application gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ApplicationGateway**](ApplicationGateway.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns an ApplicationGateway resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_gateways_get_ssl_predefined_policy**
> object application_gateways_get_ssl_predefined_policy(api_version, subscription_id, predefined_policy_name)



Gets Ssl predefined policy with the specified policy name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.object import object
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
    api_instance = openapi_client.ApplicationGatewaysApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    predefined_policy_name = 'predefined_policy_name_example' # str | Name of Ssl predefined policy.

    try:
        api_response = api_instance.application_gateways_get_ssl_predefined_policy(api_version, subscription_id, predefined_policy_name)
        print("The response of ApplicationGatewaysApi->application_gateways_get_ssl_predefined_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationGatewaysApi->application_gateways_get_ssl_predefined_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **predefined_policy_name** | **str**| Name of Ssl predefined policy. | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The operation returns a Ssl predefined policy with the specified policy name. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_gateways_list**
> ApplicationGatewayListResult application_gateways_list(resource_group_name, api_version, subscription_id)



Lists all application gateways in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_gateway_list_result import ApplicationGatewayListResult
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
    api_instance = openapi_client.ApplicationGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.application_gateways_list(resource_group_name, api_version, subscription_id)
        print("The response of ApplicationGatewaysApi->application_gateways_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationGatewaysApi->application_gateways_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ApplicationGatewayListResult**](ApplicationGatewayListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The operation returns a list of ApplicationGateway resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_gateways_list_all**
> ApplicationGatewayListResult application_gateways_list_all(api_version, subscription_id)



Gets all the application gateways in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_gateway_list_result import ApplicationGatewayListResult
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
    api_instance = openapi_client.ApplicationGatewaysApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.application_gateways_list_all(api_version, subscription_id)
        print("The response of ApplicationGatewaysApi->application_gateways_list_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationGatewaysApi->application_gateways_list_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ApplicationGatewayListResult**](ApplicationGatewayListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The operation returns a list of ApplicationGateway resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_gateways_list_available_ssl_options**
> object application_gateways_list_available_ssl_options(api_version, subscription_id)



Lists available Ssl options for configuring Ssl policy.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.object import object
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
    api_instance = openapi_client.ApplicationGatewaysApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.application_gateways_list_available_ssl_options(api_version, subscription_id)
        print("The response of ApplicationGatewaysApi->application_gateways_list_available_ssl_options:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationGatewaysApi->application_gateways_list_available_ssl_options: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The operation returns all available Ssl options for configuring Ssl policy. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_gateways_list_available_ssl_predefined_policies**
> ApplicationGatewayAvailableSslPredefinedPolicies application_gateways_list_available_ssl_predefined_policies(api_version, subscription_id)



Lists all SSL predefined policies for configuring Ssl policy.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_gateway_available_ssl_predefined_policies import ApplicationGatewayAvailableSslPredefinedPolicies
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
    api_instance = openapi_client.ApplicationGatewaysApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.application_gateways_list_available_ssl_predefined_policies(api_version, subscription_id)
        print("The response of ApplicationGatewaysApi->application_gateways_list_available_ssl_predefined_policies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationGatewaysApi->application_gateways_list_available_ssl_predefined_policies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ApplicationGatewayAvailableSslPredefinedPolicies**](ApplicationGatewayAvailableSslPredefinedPolicies.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The operation returns a lists of all Ssl predefined policies for configuring Ssl policy. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_gateways_list_available_waf_rule_sets**
> ApplicationGatewayAvailableWafRuleSetsResult application_gateways_list_available_waf_rule_sets(api_version, subscription_id)



Lists all available web application firewall rule sets.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_gateway_available_waf_rule_sets_result import ApplicationGatewayAvailableWafRuleSetsResult
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
    api_instance = openapi_client.ApplicationGatewaysApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.application_gateways_list_available_waf_rule_sets(api_version, subscription_id)
        print("The response of ApplicationGatewaysApi->application_gateways_list_available_waf_rule_sets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationGatewaysApi->application_gateways_list_available_waf_rule_sets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ApplicationGatewayAvailableWafRuleSetsResult**](ApplicationGatewayAvailableWafRuleSetsResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The operation returns a list of all available web application firewall rule sets. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_gateways_start**
> application_gateways_start(resource_group_name, application_gateway_name, api_version, subscription_id)



Starts the specified application gateway.

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
    api_instance = openapi_client.ApplicationGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    application_gateway_name = 'application_gateway_name_example' # str | The name of the application gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.application_gateways_start(resource_group_name, application_gateway_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ApplicationGatewaysApi->application_gateways_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **application_gateway_name** | **str**| The name of the application gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation starts the ApplicationGateway resource. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_gateways_stop**
> application_gateways_stop(resource_group_name, application_gateway_name, api_version, subscription_id)



Stops the specified application gateway in a resource group.

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
    api_instance = openapi_client.ApplicationGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    application_gateway_name = 'application_gateway_name_example' # str | The name of the application gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.application_gateways_stop(resource_group_name, application_gateway_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ApplicationGatewaysApi->application_gateways_stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **application_gateway_name** | **str**| The name of the application gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation stops the ApplicationGateway resource. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_gateways_update_tags**
> ApplicationGateway application_gateways_update_tags(resource_group_name, application_gateway_name, api_version, subscription_id, parameters)



Updates the specified application gateway tags.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_gateway import ApplicationGateway
from openapi_client.models.application_gateways_update_tags_request import ApplicationGatewaysUpdateTagsRequest
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
    api_instance = openapi_client.ApplicationGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    application_gateway_name = 'application_gateway_name_example' # str | The name of the application gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ApplicationGatewaysUpdateTagsRequest() # ApplicationGatewaysUpdateTagsRequest | Parameters supplied to update application gateway tags.

    try:
        api_response = api_instance.application_gateways_update_tags(resource_group_name, application_gateway_name, api_version, subscription_id, parameters)
        print("The response of ApplicationGatewaysApi->application_gateways_update_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationGatewaysApi->application_gateways_update_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **application_gateway_name** | **str**| The name of the application gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ApplicationGatewaysUpdateTagsRequest**](ApplicationGatewaysUpdateTagsRequest.md)| Parameters supplied to update application gateway tags. | 

### Return type

[**ApplicationGateway**](ApplicationGateway.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting ApplicationGateway resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


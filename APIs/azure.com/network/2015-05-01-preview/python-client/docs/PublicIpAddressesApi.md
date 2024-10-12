# openapi_client.PublicIpAddressesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**public_ip_addresses_create_or_update**](PublicIpAddressesApi.md#public_ip_addresses_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPAddresses/{publicIpAddressName}/ | 
[**public_ip_addresses_delete**](PublicIpAddressesApi.md#public_ip_addresses_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPAddresses/{publicIpAddressName}/ | 
[**public_ip_addresses_get**](PublicIpAddressesApi.md#public_ip_addresses_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPAddresses/{publicIpAddressName}/ | 
[**public_ip_addresses_list**](PublicIpAddressesApi.md#public_ip_addresses_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPAddresses | 
[**public_ip_addresses_list_all**](PublicIpAddressesApi.md#public_ip_addresses_list_all) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/publicIPAddresses | 


# **public_ip_addresses_create_or_update**
> PublicIpAddress public_ip_addresses_create_or_update(resource_group_name, public_ip_address_name, api_version, subscription_id, parameters)



The Put PublicIPAddress operation creates/updates a stable/dynamic PublicIP address

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.public_ip_address import PublicIpAddress
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
    api_instance = openapi_client.PublicIpAddressesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    public_ip_address_name = 'public_ip_address_name_example' # str | The name of the publicIpAddress.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.PublicIpAddress() # PublicIpAddress | Parameters supplied to the create/update PublicIPAddress operation

    try:
        api_response = api_instance.public_ip_addresses_create_or_update(resource_group_name, public_ip_address_name, api_version, subscription_id, parameters)
        print("The response of PublicIpAddressesApi->public_ip_addresses_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicIpAddressesApi->public_ip_addresses_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **public_ip_address_name** | **str**| The name of the publicIpAddress. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**PublicIpAddress**](PublicIpAddress.md)| Parameters supplied to the create/update PublicIPAddress operation | 

### Return type

[**PublicIpAddress**](PublicIpAddress.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **public_ip_addresses_delete**
> public_ip_addresses_delete(resource_group_name, public_ip_address_name, api_version, subscription_id)



The delete publicIpAddress operation deletes the specified publicIpAddress.

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
    api_instance = openapi_client.PublicIpAddressesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    public_ip_address_name = 'public_ip_address_name_example' # str | The name of the subnet.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.public_ip_addresses_delete(resource_group_name, public_ip_address_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling PublicIpAddressesApi->public_ip_addresses_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **public_ip_address_name** | **str**| The name of the subnet. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** |  |  -  |
**202** |  |  -  |
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **public_ip_addresses_get**
> PublicIpAddress public_ip_addresses_get(resource_group_name, public_ip_address_name, api_version, subscription_id)



The Get publicIpAddress operation retrieves information about the specified pubicIpAddress

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.public_ip_address import PublicIpAddress
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
    api_instance = openapi_client.PublicIpAddressesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    public_ip_address_name = 'public_ip_address_name_example' # str | The name of the subnet.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.public_ip_addresses_get(resource_group_name, public_ip_address_name, api_version, subscription_id)
        print("The response of PublicIpAddressesApi->public_ip_addresses_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicIpAddressesApi->public_ip_addresses_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **public_ip_address_name** | **str**| The name of the subnet. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**PublicIpAddress**](PublicIpAddress.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **public_ip_addresses_list**
> PublicIpAddressListResult public_ip_addresses_list(resource_group_name, api_version, subscription_id)



The List publicIpAddress operation retrieves all the publicIpAddresses in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.public_ip_address_list_result import PublicIpAddressListResult
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
    api_instance = openapi_client.PublicIpAddressesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.public_ip_addresses_list(resource_group_name, api_version, subscription_id)
        print("The response of PublicIpAddressesApi->public_ip_addresses_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicIpAddressesApi->public_ip_addresses_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**PublicIpAddressListResult**](PublicIpAddressListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **public_ip_addresses_list_all**
> PublicIpAddressListResult public_ip_addresses_list_all(api_version, subscription_id)



The List publicIpAddress operation retrieves all the publicIpAddresses in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.public_ip_address_list_result import PublicIpAddressListResult
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
    api_instance = openapi_client.PublicIpAddressesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.public_ip_addresses_list_all(api_version, subscription_id)
        print("The response of PublicIpAddressesApi->public_ip_addresses_list_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicIpAddressesApi->public_ip_addresses_list_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**PublicIpAddressListResult**](PublicIpAddressListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


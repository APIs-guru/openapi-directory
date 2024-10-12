# openapi_client.PeeringRegisteredAsnsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**registered_asns_create_or_update**](PeeringRegisteredAsnsApi.md#registered_asns_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}/registeredAsns/{registeredAsnName} | 
[**registered_asns_delete**](PeeringRegisteredAsnsApi.md#registered_asns_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}/registeredAsns/{registeredAsnName} | 
[**registered_asns_get**](PeeringRegisteredAsnsApi.md#registered_asns_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}/registeredAsns/{registeredAsnName} | 
[**registered_asns_list_by_peering**](PeeringRegisteredAsnsApi.md#registered_asns_list_by_peering) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}/registeredAsns | 


# **registered_asns_create_or_update**
> PeeringRegisteredAsn registered_asns_create_or_update(resource_group_name, peering_name, registered_asn_name, subscription_id, api_version, registered_asn)



Creates a new registered ASN with the specified name under the given subscription, resource group and peering.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.peering_registered_asn import PeeringRegisteredAsn
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
    api_instance = openapi_client.PeeringRegisteredAsnsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    peering_name = 'peering_name_example' # str | The name of the peering.
    registered_asn_name = 'registered_asn_name_example' # str | The name of the ASN.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.
    registered_asn = openapi_client.PeeringRegisteredAsn() # PeeringRegisteredAsn | The properties needed to create a registered ASN.

    try:
        api_response = api_instance.registered_asns_create_or_update(resource_group_name, peering_name, registered_asn_name, subscription_id, api_version, registered_asn)
        print("The response of PeeringRegisteredAsnsApi->registered_asns_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PeeringRegisteredAsnsApi->registered_asns_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **peering_name** | **str**| The name of the peering. | 
 **registered_asn_name** | **str**| The name of the ASN. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **api_version** | **str**| The client API version. | 
 **registered_asn** | [**PeeringRegisteredAsn**](PeeringRegisteredAsn.md)| The properties needed to create a registered ASN. | 

### Return type

[**PeeringRegisteredAsn**](PeeringRegisteredAsn.md)

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
**0** | Error response describing why the operation has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registered_asns_delete**
> registered_asns_delete(resource_group_name, peering_name, registered_asn_name, subscription_id, api_version)



Deletes an existing registered ASN with the specified name under the given subscription, resource group and peering.

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
    api_instance = openapi_client.PeeringRegisteredAsnsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    peering_name = 'peering_name_example' # str | The name of the peering.
    registered_asn_name = 'registered_asn_name_example' # str | The name of the registered ASN.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_instance.registered_asns_delete(resource_group_name, peering_name, registered_asn_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling PeeringRegisteredAsnsApi->registered_asns_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **peering_name** | **str**| The name of the peering. | 
 **registered_asn_name** | **str**| The name of the registered ASN. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **api_version** | **str**| The client API version. | 

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
**200** | OK |  -  |
**204** | NoContent |  -  |
**0** | Error response describing why the operation has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registered_asns_get**
> PeeringRegisteredAsn registered_asns_get(resource_group_name, peering_name, registered_asn_name, subscription_id, api_version)



Gets an existing registered ASN with the specified name under the given subscription, resource group and peering.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.peering_registered_asn import PeeringRegisteredAsn
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
    api_instance = openapi_client.PeeringRegisteredAsnsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    peering_name = 'peering_name_example' # str | The name of the peering.
    registered_asn_name = 'registered_asn_name_example' # str | The name of the registered ASN.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_response = api_instance.registered_asns_get(resource_group_name, peering_name, registered_asn_name, subscription_id, api_version)
        print("The response of PeeringRegisteredAsnsApi->registered_asns_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PeeringRegisteredAsnsApi->registered_asns_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **peering_name** | **str**| The name of the peering. | 
 **registered_asn_name** | **str**| The name of the registered ASN. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **api_version** | **str**| The client API version. | 

### Return type

[**PeeringRegisteredAsn**](PeeringRegisteredAsn.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registered_asns_list_by_peering**
> PeeringRegisteredAsnListResult registered_asns_list_by_peering(resource_group_name, peering_name, subscription_id, api_version)



Lists all registered ASNs under the given subscription, resource group and peering.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.peering_registered_asn_list_result import PeeringRegisteredAsnListResult
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
    api_instance = openapi_client.PeeringRegisteredAsnsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    peering_name = 'peering_name_example' # str | The name of the peering.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_response = api_instance.registered_asns_list_by_peering(resource_group_name, peering_name, subscription_id, api_version)
        print("The response of PeeringRegisteredAsnsApi->registered_asns_list_by_peering:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PeeringRegisteredAsnsApi->registered_asns_list_by_peering: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **peering_name** | **str**| The name of the peering. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **api_version** | **str**| The client API version. | 

### Return type

[**PeeringRegisteredAsnListResult**](PeeringRegisteredAsnListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


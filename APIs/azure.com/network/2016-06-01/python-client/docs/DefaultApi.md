# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**check_dns_name_availability**](DefaultApi.md#check_dns_name_availability) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/CheckDnsNameAvailability | 
[**virtual_networks_check_ip_address_availability**](DefaultApi.md#virtual_networks_check_ip_address_availability) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/CheckIPAddressAvailability | 


# **check_dns_name_availability**
> DnsNameAvailabilityResult check_dns_name_availability(location, api_version, subscription_id, domain_name_label=domain_name_label)



Checks whether a domain name in the cloudapp.net zone is available for use.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dns_name_availability_result import DnsNameAvailabilityResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    location = 'location_example' # str | The location of the domain name
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    domain_name_label = 'domain_name_label_example' # str | The domain name to be verified. It must conform to the following regular expression: ^[a-z][a-z0-9-]{1,61}[a-z0-9]$. (optional)

    try:
        api_response = api_instance.check_dns_name_availability(location, api_version, subscription_id, domain_name_label=domain_name_label)
        print("The response of DefaultApi->check_dns_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->check_dns_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The location of the domain name | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **domain_name_label** | **str**| The domain name to be verified. It must conform to the following regular expression: ^[a-z][a-z0-9-]{1,61}[a-z0-9]$. | [optional] 

### Return type

[**DnsNameAvailabilityResult**](DnsNameAvailabilityResult.md)

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

# **virtual_networks_check_ip_address_availability**
> IPAddressAvailabilityResult virtual_networks_check_ip_address_availability(resource_group_name, virtual_network_name, api_version, subscription_id, ip_address=ip_address)



Checks whether a private Ip address is available for use.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.ip_address_availability_result import IPAddressAvailabilityResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_name = 'virtual_network_name_example' # str | The name of the virtual network.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    ip_address = 'ip_address_example' # str | The private IP address to be verified. (optional)

    try:
        api_response = api_instance.virtual_networks_check_ip_address_availability(resource_group_name, virtual_network_name, api_version, subscription_id, ip_address=ip_address)
        print("The response of DefaultApi->virtual_networks_check_ip_address_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->virtual_networks_check_ip_address_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_name** | **str**| The name of the virtual network. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **ip_address** | **str**| The private IP address to be verified. | [optional] 

### Return type

[**IPAddressAvailabilityResult**](IPAddressAvailabilityResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | private IP address availability and list of other free addresses if the requested one is not available |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


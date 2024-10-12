# openapi_client.SnmpApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_snmp_1**](SnmpApi.md#get_network_snmp_1) | **GET** /networks/{networkId}/snmp | Return the SNMP settings for a network
[**get_organization_snmp_1**](SnmpApi.md#get_organization_snmp_1) | **GET** /organizations/{organizationId}/snmp | Return the SNMP settings for an organization
[**update_network_snmp_1**](SnmpApi.md#update_network_snmp_1) | **PUT** /networks/{networkId}/snmp | Update the SNMP settings for a network
[**update_organization_snmp_1**](SnmpApi.md#update_organization_snmp_1) | **PUT** /organizations/{organizationId}/snmp | Update the SNMP settings for an organization


# **get_network_snmp_1**
> object get_network_snmp_1(network_id)

Return the SNMP settings for a network

Return the SNMP settings for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SnmpApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the SNMP settings for a network
        api_response = api_instance.get_network_snmp_1(network_id)
        print("The response of SnmpApi->get_network_snmp_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnmpApi->get_network_snmp_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_snmp_1**
> object get_organization_snmp_1(organization_id)

Return the SNMP settings for an organization

Return the SNMP settings for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SnmpApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Return the SNMP settings for an organization
        api_response = api_instance.get_organization_snmp_1(organization_id)
        print("The response of SnmpApi->get_organization_snmp_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnmpApi->get_organization_snmp_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_network_snmp_1**
> object update_network_snmp_1(network_id, update_network_snmp_request=update_network_snmp_request)

Update the SNMP settings for a network

Update the SNMP settings for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_snmp_request import UpdateNetworkSnmpRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SnmpApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_snmp_request = openapi_client.UpdateNetworkSnmpRequest() # UpdateNetworkSnmpRequest |  (optional)

    try:
        # Update the SNMP settings for a network
        api_response = api_instance.update_network_snmp_1(network_id, update_network_snmp_request=update_network_snmp_request)
        print("The response of SnmpApi->update_network_snmp_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnmpApi->update_network_snmp_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_snmp_request** | [**UpdateNetworkSnmpRequest**](UpdateNetworkSnmpRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_snmp_1**
> object update_organization_snmp_1(organization_id, update_organization_snmp_request=update_organization_snmp_request)

Update the SNMP settings for an organization

Update the SNMP settings for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_snmp_request import UpdateOrganizationSnmpRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SnmpApi(api_client)
    organization_id = 'organization_id_example' # str | 
    update_organization_snmp_request = openapi_client.UpdateOrganizationSnmpRequest() # UpdateOrganizationSnmpRequest |  (optional)

    try:
        # Update the SNMP settings for an organization
        api_response = api_instance.update_organization_snmp_1(organization_id, update_organization_snmp_request=update_organization_snmp_request)
        print("The response of SnmpApi->update_organization_snmp_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnmpApi->update_organization_snmp_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **update_organization_snmp_request** | [**UpdateOrganizationSnmpRequest**](UpdateOrganizationSnmpRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


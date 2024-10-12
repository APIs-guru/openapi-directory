# openapi_client.IntrusionApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_appliance_security_intrusion_2**](IntrusionApi.md#get_network_appliance_security_intrusion_2) | **GET** /networks/{networkId}/appliance/security/intrusion | Returns all supported intrusion settings for an MX network
[**get_organization_appliance_security_intrusion_2**](IntrusionApi.md#get_organization_appliance_security_intrusion_2) | **GET** /organizations/{organizationId}/appliance/security/intrusion | Returns all supported intrusion settings for an organization
[**update_network_appliance_security_intrusion_2**](IntrusionApi.md#update_network_appliance_security_intrusion_2) | **PUT** /networks/{networkId}/appliance/security/intrusion | Set the supported intrusion settings for an MX network
[**update_organization_appliance_security_intrusion_2**](IntrusionApi.md#update_organization_appliance_security_intrusion_2) | **PUT** /organizations/{organizationId}/appliance/security/intrusion | Sets supported intrusion settings for an organization


# **get_network_appliance_security_intrusion_2**
> object get_network_appliance_security_intrusion_2(network_id)

Returns all supported intrusion settings for an MX network

Returns all supported intrusion settings for an MX network

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
    api_instance = openapi_client.IntrusionApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns all supported intrusion settings for an MX network
        api_response = api_instance.get_network_appliance_security_intrusion_2(network_id)
        print("The response of IntrusionApi->get_network_appliance_security_intrusion_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntrusionApi->get_network_appliance_security_intrusion_2: %s\n" % e)
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

# **get_organization_appliance_security_intrusion_2**
> object get_organization_appliance_security_intrusion_2(organization_id)

Returns all supported intrusion settings for an organization

Returns all supported intrusion settings for an organization

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
    api_instance = openapi_client.IntrusionApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Returns all supported intrusion settings for an organization
        api_response = api_instance.get_organization_appliance_security_intrusion_2(organization_id)
        print("The response of IntrusionApi->get_organization_appliance_security_intrusion_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntrusionApi->get_organization_appliance_security_intrusion_2: %s\n" % e)
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

# **update_network_appliance_security_intrusion_2**
> object update_network_appliance_security_intrusion_2(network_id, update_network_appliance_security_intrusion_request=update_network_appliance_security_intrusion_request)

Set the supported intrusion settings for an MX network

Set the supported intrusion settings for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_security_intrusion_request import UpdateNetworkApplianceSecurityIntrusionRequest
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
    api_instance = openapi_client.IntrusionApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_security_intrusion_request = openapi_client.UpdateNetworkApplianceSecurityIntrusionRequest() # UpdateNetworkApplianceSecurityIntrusionRequest |  (optional)

    try:
        # Set the supported intrusion settings for an MX network
        api_response = api_instance.update_network_appliance_security_intrusion_2(network_id, update_network_appliance_security_intrusion_request=update_network_appliance_security_intrusion_request)
        print("The response of IntrusionApi->update_network_appliance_security_intrusion_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntrusionApi->update_network_appliance_security_intrusion_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_security_intrusion_request** | [**UpdateNetworkApplianceSecurityIntrusionRequest**](UpdateNetworkApplianceSecurityIntrusionRequest.md)|  | [optional] 

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

# **update_organization_appliance_security_intrusion_2**
> object update_organization_appliance_security_intrusion_2(organization_id, update_organization_appliance_security_intrusion_request)

Sets supported intrusion settings for an organization

Sets supported intrusion settings for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_appliance_security_intrusion_request import UpdateOrganizationApplianceSecurityIntrusionRequest
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
    api_instance = openapi_client.IntrusionApi(api_client)
    organization_id = 'organization_id_example' # str | 
    update_organization_appliance_security_intrusion_request = openapi_client.UpdateOrganizationApplianceSecurityIntrusionRequest() # UpdateOrganizationApplianceSecurityIntrusionRequest | 

    try:
        # Sets supported intrusion settings for an organization
        api_response = api_instance.update_organization_appliance_security_intrusion_2(organization_id, update_organization_appliance_security_intrusion_request)
        print("The response of IntrusionApi->update_organization_appliance_security_intrusion_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntrusionApi->update_organization_appliance_security_intrusion_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **update_organization_appliance_security_intrusion_request** | [**UpdateOrganizationApplianceSecurityIntrusionRequest**](UpdateOrganizationApplianceSecurityIntrusionRequest.md)|  | 

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


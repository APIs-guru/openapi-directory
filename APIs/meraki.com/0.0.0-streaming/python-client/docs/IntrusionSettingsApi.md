# openapi_client.IntrusionSettingsApi

All URIs are relative to *https://api.meraki.com/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_security_intrusion_settings**](IntrusionSettingsApi.md#get_network_security_intrusion_settings) | **GET** /networks/{networkId}/security/intrusionSettings | Returns all supported intrusion settings for an MX network
[**get_organization_security_intrusion_settings**](IntrusionSettingsApi.md#get_organization_security_intrusion_settings) | **GET** /organizations/{organizationId}/security/intrusionSettings | Returns all supported intrusion settings for an organization
[**update_network_security_intrusion_settings**](IntrusionSettingsApi.md#update_network_security_intrusion_settings) | **PUT** /networks/{networkId}/security/intrusionSettings | Set the supported intrusion settings for an MX network
[**update_organization_security_intrusion_settings**](IntrusionSettingsApi.md#update_organization_security_intrusion_settings) | **PUT** /organizations/{organizationId}/security/intrusionSettings | Sets supported intrusion settings for an organization


# **get_network_security_intrusion_settings**
> object get_network_security_intrusion_settings(network_id)

Returns all supported intrusion settings for an MX network

Returns all supported intrusion settings for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.IntrusionSettingsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns all supported intrusion settings for an MX network
        api_response = api_instance.get_network_security_intrusion_settings(network_id)
        print("The response of IntrusionSettingsApi->get_network_security_intrusion_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntrusionSettingsApi->get_network_security_intrusion_settings: %s\n" % e)
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

# **get_organization_security_intrusion_settings**
> object get_organization_security_intrusion_settings(organization_id)

Returns all supported intrusion settings for an organization

Returns all supported intrusion settings for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.IntrusionSettingsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Returns all supported intrusion settings for an organization
        api_response = api_instance.get_organization_security_intrusion_settings(organization_id)
        print("The response of IntrusionSettingsApi->get_organization_security_intrusion_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntrusionSettingsApi->get_organization_security_intrusion_settings: %s\n" % e)
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

# **update_network_security_intrusion_settings**
> object update_network_security_intrusion_settings(network_id, update_network_security_intrusion_settings_request=update_network_security_intrusion_settings_request)

Set the supported intrusion settings for an MX network

Set the supported intrusion settings for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_security_intrusion_settings_request import UpdateNetworkSecurityIntrusionSettingsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.IntrusionSettingsApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_security_intrusion_settings_request = openapi_client.UpdateNetworkSecurityIntrusionSettingsRequest() # UpdateNetworkSecurityIntrusionSettingsRequest |  (optional)

    try:
        # Set the supported intrusion settings for an MX network
        api_response = api_instance.update_network_security_intrusion_settings(network_id, update_network_security_intrusion_settings_request=update_network_security_intrusion_settings_request)
        print("The response of IntrusionSettingsApi->update_network_security_intrusion_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntrusionSettingsApi->update_network_security_intrusion_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_security_intrusion_settings_request** | [**UpdateNetworkSecurityIntrusionSettingsRequest**](UpdateNetworkSecurityIntrusionSettingsRequest.md)|  | [optional] 

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

# **update_organization_security_intrusion_settings**
> object update_organization_security_intrusion_settings(organization_id, update_organization_security_intrusion_settings_request)

Sets supported intrusion settings for an organization

Sets supported intrusion settings for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_security_intrusion_settings_request import UpdateOrganizationSecurityIntrusionSettingsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.IntrusionSettingsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    update_organization_security_intrusion_settings_request = openapi_client.UpdateOrganizationSecurityIntrusionSettingsRequest() # UpdateOrganizationSecurityIntrusionSettingsRequest | 

    try:
        # Sets supported intrusion settings for an organization
        api_response = api_instance.update_organization_security_intrusion_settings(organization_id, update_organization_security_intrusion_settings_request)
        print("The response of IntrusionSettingsApi->update_organization_security_intrusion_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntrusionSettingsApi->update_organization_security_intrusion_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **update_organization_security_intrusion_settings_request** | [**UpdateOrganizationSecurityIntrusionSettingsRequest**](UpdateOrganizationSecurityIntrusionSettingsRequest.md)|  | 

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


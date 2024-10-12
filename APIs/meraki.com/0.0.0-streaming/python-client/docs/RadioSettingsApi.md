# openapi_client.RadioSettingsApi

All URIs are relative to *https://api.meraki.com/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_wireless_rf_profile**](RadioSettingsApi.md#create_network_wireless_rf_profile) | **POST** /networks/{networkId}/wireless/rfProfiles | Creates new RF profile for this network
[**delete_network_wireless_rf_profile**](RadioSettingsApi.md#delete_network_wireless_rf_profile) | **DELETE** /networks/{networkId}/wireless/rfProfiles/{rfProfileId} | Delete a RF Profile
[**get_network_wireless_rf_profile**](RadioSettingsApi.md#get_network_wireless_rf_profile) | **GET** /networks/{networkId}/wireless/rfProfiles/{rfProfileId} | Return a RF profile
[**get_network_wireless_rf_profiles**](RadioSettingsApi.md#get_network_wireless_rf_profiles) | **GET** /networks/{networkId}/wireless/rfProfiles | List the non-basic RF profiles for this network
[**update_network_wireless_rf_profile**](RadioSettingsApi.md#update_network_wireless_rf_profile) | **PUT** /networks/{networkId}/wireless/rfProfiles/{rfProfileId} | Updates specified RF profile for this network


# **create_network_wireless_rf_profile**
> object create_network_wireless_rf_profile(network_id, create_network_wireless_rf_profile_request)

Creates new RF profile for this network

Creates new RF profile for this network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_wireless_rf_profile_request import CreateNetworkWirelessRfProfileRequest
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
    api_instance = openapi_client.RadioSettingsApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_wireless_rf_profile_request = openapi_client.CreateNetworkWirelessRfProfileRequest() # CreateNetworkWirelessRfProfileRequest | 

    try:
        # Creates new RF profile for this network
        api_response = api_instance.create_network_wireless_rf_profile(network_id, create_network_wireless_rf_profile_request)
        print("The response of RadioSettingsApi->create_network_wireless_rf_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RadioSettingsApi->create_network_wireless_rf_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_wireless_rf_profile_request** | [**CreateNetworkWirelessRfProfileRequest**](CreateNetworkWirelessRfProfileRequest.md)|  | 

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
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_network_wireless_rf_profile**
> delete_network_wireless_rf_profile(network_id, rf_profile_id)

Delete a RF Profile

Delete a RF Profile

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
    api_instance = openapi_client.RadioSettingsApi(api_client)
    network_id = 'network_id_example' # str | 
    rf_profile_id = 'rf_profile_id_example' # str | 

    try:
        # Delete a RF Profile
        api_instance.delete_network_wireless_rf_profile(network_id, rf_profile_id)
    except Exception as e:
        print("Exception when calling RadioSettingsApi->delete_network_wireless_rf_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **rf_profile_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_wireless_rf_profile**
> object get_network_wireless_rf_profile(network_id, rf_profile_id)

Return a RF profile

Return a RF profile

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
    api_instance = openapi_client.RadioSettingsApi(api_client)
    network_id = 'network_id_example' # str | 
    rf_profile_id = 'rf_profile_id_example' # str | 

    try:
        # Return a RF profile
        api_response = api_instance.get_network_wireless_rf_profile(network_id, rf_profile_id)
        print("The response of RadioSettingsApi->get_network_wireless_rf_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RadioSettingsApi->get_network_wireless_rf_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **rf_profile_id** | **str**|  | 

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

# **get_network_wireless_rf_profiles**
> List[object] get_network_wireless_rf_profiles(network_id, include_template_profiles=include_template_profiles)

List the non-basic RF profiles for this network

List the non-basic RF profiles for this network

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
    api_instance = openapi_client.RadioSettingsApi(api_client)
    network_id = 'network_id_example' # str | 
    include_template_profiles = True # bool | If the network is bound to a template, this parameter controls whether or not the non-basic RF profiles defined on the template should be included in the response alongside the non-basic profiles defined on the bound network. Defaults to false. (optional)

    try:
        # List the non-basic RF profiles for this network
        api_response = api_instance.get_network_wireless_rf_profiles(network_id, include_template_profiles=include_template_profiles)
        print("The response of RadioSettingsApi->get_network_wireless_rf_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RadioSettingsApi->get_network_wireless_rf_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **include_template_profiles** | **bool**| If the network is bound to a template, this parameter controls whether or not the non-basic RF profiles defined on the template should be included in the response alongside the non-basic profiles defined on the bound network. Defaults to false. | [optional] 

### Return type

**List[object]**

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

# **update_network_wireless_rf_profile**
> object update_network_wireless_rf_profile(network_id, rf_profile_id, update_network_wireless_rf_profile_request=update_network_wireless_rf_profile_request)

Updates specified RF profile for this network

Updates specified RF profile for this network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_rf_profile_request import UpdateNetworkWirelessRfProfileRequest
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
    api_instance = openapi_client.RadioSettingsApi(api_client)
    network_id = 'network_id_example' # str | 
    rf_profile_id = 'rf_profile_id_example' # str | 
    update_network_wireless_rf_profile_request = openapi_client.UpdateNetworkWirelessRfProfileRequest() # UpdateNetworkWirelessRfProfileRequest |  (optional)

    try:
        # Updates specified RF profile for this network
        api_response = api_instance.update_network_wireless_rf_profile(network_id, rf_profile_id, update_network_wireless_rf_profile_request=update_network_wireless_rf_profile_request)
        print("The response of RadioSettingsApi->update_network_wireless_rf_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RadioSettingsApi->update_network_wireless_rf_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **rf_profile_id** | **str**|  | 
 **update_network_wireless_rf_profile_request** | [**UpdateNetworkWirelessRfProfileRequest**](UpdateNetworkWirelessRfProfileRequest.md)|  | [optional] 

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


# openapi_client.SwitchSettingsApi

All URIs are relative to *https://api.meraki.com/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_switch_settings_qos_rule**](SwitchSettingsApi.md#create_network_switch_settings_qos_rule) | **POST** /networks/{networkId}/switch/settings/qosRules | Add a quality of service rule
[**delete_network_switch_settings_qos_rule**](SwitchSettingsApi.md#delete_network_switch_settings_qos_rule) | **DELETE** /networks/{networkId}/switch/settings/qosRules/{qosRuleId} | Delete a quality of service rule
[**get_network_switch_settings**](SwitchSettingsApi.md#get_network_switch_settings) | **GET** /networks/{networkId}/switch/settings | Returns the switch network settings
[**get_network_switch_settings_mtu**](SwitchSettingsApi.md#get_network_switch_settings_mtu) | **GET** /networks/{networkId}/switch/settings/mtu | Return the MTU configuration
[**get_network_switch_settings_multicast**](SwitchSettingsApi.md#get_network_switch_settings_multicast) | **GET** /networks/{networkId}/switch/settings/multicast | Return multicast settings for a network
[**get_network_switch_settings_qos_rule**](SwitchSettingsApi.md#get_network_switch_settings_qos_rule) | **GET** /networks/{networkId}/switch/settings/qosRules/{qosRuleId} | Return a quality of service rule
[**get_network_switch_settings_qos_rules**](SwitchSettingsApi.md#get_network_switch_settings_qos_rules) | **GET** /networks/{networkId}/switch/settings/qosRules | List quality of service rules
[**get_network_switch_settings_qos_rules_order**](SwitchSettingsApi.md#get_network_switch_settings_qos_rules_order) | **GET** /networks/{networkId}/switch/settings/qosRules/order | Return the quality of service rule IDs by order in which they will be processed by the switch
[**get_network_switch_settings_storm_control**](SwitchSettingsApi.md#get_network_switch_settings_storm_control) | **GET** /networks/{networkId}/switch/settings/stormControl | Return the storm control configuration for a switch network
[**update_network_switch_settings**](SwitchSettingsApi.md#update_network_switch_settings) | **PUT** /networks/{networkId}/switch/settings | Update switch network settings
[**update_network_switch_settings_multicast**](SwitchSettingsApi.md#update_network_switch_settings_multicast) | **PUT** /networks/{networkId}/switch/settings/multicast | Update multicast settings for a network
[**update_network_switch_settings_qos_rule**](SwitchSettingsApi.md#update_network_switch_settings_qos_rule) | **PUT** /networks/{networkId}/switch/settings/qosRules/{qosRuleId} | Update a quality of service rule
[**update_network_switch_settings_qos_rules_order**](SwitchSettingsApi.md#update_network_switch_settings_qos_rules_order) | **PUT** /networks/{networkId}/switch/settings/qosRules/order | Update the order in which the rules should be processed by the switch
[**update_network_switch_settings_storm_control**](SwitchSettingsApi.md#update_network_switch_settings_storm_control) | **PUT** /networks/{networkId}/switch/settings/stormControl | Update the storm control configuration for a switch network


# **create_network_switch_settings_qos_rule**
> object create_network_switch_settings_qos_rule(network_id, create_network_switch_settings_qos_rule_request)

Add a quality of service rule

Add a quality of service rule

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_switch_settings_qos_rule_request import CreateNetworkSwitchSettingsQosRuleRequest
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
    api_instance = openapi_client.SwitchSettingsApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_switch_settings_qos_rule_request = openapi_client.CreateNetworkSwitchSettingsQosRuleRequest() # CreateNetworkSwitchSettingsQosRuleRequest | 

    try:
        # Add a quality of service rule
        api_response = api_instance.create_network_switch_settings_qos_rule(network_id, create_network_switch_settings_qos_rule_request)
        print("The response of SwitchSettingsApi->create_network_switch_settings_qos_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchSettingsApi->create_network_switch_settings_qos_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_switch_settings_qos_rule_request** | [**CreateNetworkSwitchSettingsQosRuleRequest**](CreateNetworkSwitchSettingsQosRuleRequest.md)|  | 

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

# **delete_network_switch_settings_qos_rule**
> delete_network_switch_settings_qos_rule(network_id, qos_rule_id)

Delete a quality of service rule

Delete a quality of service rule

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
    api_instance = openapi_client.SwitchSettingsApi(api_client)
    network_id = 'network_id_example' # str | 
    qos_rule_id = 'qos_rule_id_example' # str | 

    try:
        # Delete a quality of service rule
        api_instance.delete_network_switch_settings_qos_rule(network_id, qos_rule_id)
    except Exception as e:
        print("Exception when calling SwitchSettingsApi->delete_network_switch_settings_qos_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **qos_rule_id** | **str**|  | 

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

# **get_network_switch_settings**
> object get_network_switch_settings(network_id)

Returns the switch network settings

Returns the switch network settings

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
    api_instance = openapi_client.SwitchSettingsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns the switch network settings
        api_response = api_instance.get_network_switch_settings(network_id)
        print("The response of SwitchSettingsApi->get_network_switch_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchSettingsApi->get_network_switch_settings: %s\n" % e)
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

# **get_network_switch_settings_mtu**
> object get_network_switch_settings_mtu(network_id)

Return the MTU configuration

Return the MTU configuration

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
    api_instance = openapi_client.SwitchSettingsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the MTU configuration
        api_response = api_instance.get_network_switch_settings_mtu(network_id)
        print("The response of SwitchSettingsApi->get_network_switch_settings_mtu:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchSettingsApi->get_network_switch_settings_mtu: %s\n" % e)
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

# **get_network_switch_settings_multicast**
> object get_network_switch_settings_multicast(network_id)

Return multicast settings for a network

Return multicast settings for a network

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
    api_instance = openapi_client.SwitchSettingsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return multicast settings for a network
        api_response = api_instance.get_network_switch_settings_multicast(network_id)
        print("The response of SwitchSettingsApi->get_network_switch_settings_multicast:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchSettingsApi->get_network_switch_settings_multicast: %s\n" % e)
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

# **get_network_switch_settings_qos_rule**
> object get_network_switch_settings_qos_rule(network_id, qos_rule_id)

Return a quality of service rule

Return a quality of service rule

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
    api_instance = openapi_client.SwitchSettingsApi(api_client)
    network_id = 'network_id_example' # str | 
    qos_rule_id = 'qos_rule_id_example' # str | 

    try:
        # Return a quality of service rule
        api_response = api_instance.get_network_switch_settings_qos_rule(network_id, qos_rule_id)
        print("The response of SwitchSettingsApi->get_network_switch_settings_qos_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchSettingsApi->get_network_switch_settings_qos_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **qos_rule_id** | **str**|  | 

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

# **get_network_switch_settings_qos_rules**
> List[object] get_network_switch_settings_qos_rules(network_id)

List quality of service rules

List quality of service rules

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
    api_instance = openapi_client.SwitchSettingsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List quality of service rules
        api_response = api_instance.get_network_switch_settings_qos_rules(network_id)
        print("The response of SwitchSettingsApi->get_network_switch_settings_qos_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchSettingsApi->get_network_switch_settings_qos_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **get_network_switch_settings_qos_rules_order**
> object get_network_switch_settings_qos_rules_order(network_id)

Return the quality of service rule IDs by order in which they will be processed by the switch

Return the quality of service rule IDs by order in which they will be processed by the switch

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
    api_instance = openapi_client.SwitchSettingsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the quality of service rule IDs by order in which they will be processed by the switch
        api_response = api_instance.get_network_switch_settings_qos_rules_order(network_id)
        print("The response of SwitchSettingsApi->get_network_switch_settings_qos_rules_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchSettingsApi->get_network_switch_settings_qos_rules_order: %s\n" % e)
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

# **get_network_switch_settings_storm_control**
> object get_network_switch_settings_storm_control(network_id)

Return the storm control configuration for a switch network

Return the storm control configuration for a switch network

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
    api_instance = openapi_client.SwitchSettingsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the storm control configuration for a switch network
        api_response = api_instance.get_network_switch_settings_storm_control(network_id)
        print("The response of SwitchSettingsApi->get_network_switch_settings_storm_control:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchSettingsApi->get_network_switch_settings_storm_control: %s\n" % e)
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

# **update_network_switch_settings**
> object update_network_switch_settings(network_id, update_network_switch_settings_request=update_network_switch_settings_request)

Update switch network settings

Update switch network settings

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_settings_request import UpdateNetworkSwitchSettingsRequest
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
    api_instance = openapi_client.SwitchSettingsApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_switch_settings_request = openapi_client.UpdateNetworkSwitchSettingsRequest() # UpdateNetworkSwitchSettingsRequest |  (optional)

    try:
        # Update switch network settings
        api_response = api_instance.update_network_switch_settings(network_id, update_network_switch_settings_request=update_network_switch_settings_request)
        print("The response of SwitchSettingsApi->update_network_switch_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchSettingsApi->update_network_switch_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_switch_settings_request** | [**UpdateNetworkSwitchSettingsRequest**](UpdateNetworkSwitchSettingsRequest.md)|  | [optional] 

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

# **update_network_switch_settings_multicast**
> object update_network_switch_settings_multicast(network_id, update_network_switch_settings_multicast_request=update_network_switch_settings_multicast_request)

Update multicast settings for a network

Update multicast settings for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_settings_multicast_request import UpdateNetworkSwitchSettingsMulticastRequest
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
    api_instance = openapi_client.SwitchSettingsApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_switch_settings_multicast_request = openapi_client.UpdateNetworkSwitchSettingsMulticastRequest() # UpdateNetworkSwitchSettingsMulticastRequest |  (optional)

    try:
        # Update multicast settings for a network
        api_response = api_instance.update_network_switch_settings_multicast(network_id, update_network_switch_settings_multicast_request=update_network_switch_settings_multicast_request)
        print("The response of SwitchSettingsApi->update_network_switch_settings_multicast:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchSettingsApi->update_network_switch_settings_multicast: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_switch_settings_multicast_request** | [**UpdateNetworkSwitchSettingsMulticastRequest**](UpdateNetworkSwitchSettingsMulticastRequest.md)|  | [optional] 

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

# **update_network_switch_settings_qos_rule**
> object update_network_switch_settings_qos_rule(network_id, qos_rule_id, update_network_switch_settings_qos_rule_request=update_network_switch_settings_qos_rule_request)

Update a quality of service rule

Update a quality of service rule

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_settings_qos_rule_request import UpdateNetworkSwitchSettingsQosRuleRequest
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
    api_instance = openapi_client.SwitchSettingsApi(api_client)
    network_id = 'network_id_example' # str | 
    qos_rule_id = 'qos_rule_id_example' # str | 
    update_network_switch_settings_qos_rule_request = openapi_client.UpdateNetworkSwitchSettingsQosRuleRequest() # UpdateNetworkSwitchSettingsQosRuleRequest |  (optional)

    try:
        # Update a quality of service rule
        api_response = api_instance.update_network_switch_settings_qos_rule(network_id, qos_rule_id, update_network_switch_settings_qos_rule_request=update_network_switch_settings_qos_rule_request)
        print("The response of SwitchSettingsApi->update_network_switch_settings_qos_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchSettingsApi->update_network_switch_settings_qos_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **qos_rule_id** | **str**|  | 
 **update_network_switch_settings_qos_rule_request** | [**UpdateNetworkSwitchSettingsQosRuleRequest**](UpdateNetworkSwitchSettingsQosRuleRequest.md)|  | [optional] 

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

# **update_network_switch_settings_qos_rules_order**
> object update_network_switch_settings_qos_rules_order(network_id, update_network_switch_settings_qos_rules_order_request)

Update the order in which the rules should be processed by the switch

Update the order in which the rules should be processed by the switch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_settings_qos_rules_order_request import UpdateNetworkSwitchSettingsQosRulesOrderRequest
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
    api_instance = openapi_client.SwitchSettingsApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_switch_settings_qos_rules_order_request = openapi_client.UpdateNetworkSwitchSettingsQosRulesOrderRequest() # UpdateNetworkSwitchSettingsQosRulesOrderRequest | 

    try:
        # Update the order in which the rules should be processed by the switch
        api_response = api_instance.update_network_switch_settings_qos_rules_order(network_id, update_network_switch_settings_qos_rules_order_request)
        print("The response of SwitchSettingsApi->update_network_switch_settings_qos_rules_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchSettingsApi->update_network_switch_settings_qos_rules_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_switch_settings_qos_rules_order_request** | [**UpdateNetworkSwitchSettingsQosRulesOrderRequest**](UpdateNetworkSwitchSettingsQosRulesOrderRequest.md)|  | 

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

# **update_network_switch_settings_storm_control**
> object update_network_switch_settings_storm_control(network_id, update_network_switch_settings_storm_control_request=update_network_switch_settings_storm_control_request)

Update the storm control configuration for a switch network

Update the storm control configuration for a switch network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_settings_storm_control_request import UpdateNetworkSwitchSettingsStormControlRequest
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
    api_instance = openapi_client.SwitchSettingsApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_switch_settings_storm_control_request = openapi_client.UpdateNetworkSwitchSettingsStormControlRequest() # UpdateNetworkSwitchSettingsStormControlRequest |  (optional)

    try:
        # Update the storm control configuration for a switch network
        api_response = api_instance.update_network_switch_settings_storm_control(network_id, update_network_switch_settings_storm_control_request=update_network_switch_settings_storm_control_request)
        print("The response of SwitchSettingsApi->update_network_switch_settings_storm_control:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchSettingsApi->update_network_switch_settings_storm_control: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_switch_settings_storm_control_request** | [**UpdateNetworkSwitchSettingsStormControlRequest**](UpdateNetworkSwitchSettingsStormControlRequest.md)|  | [optional] 

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


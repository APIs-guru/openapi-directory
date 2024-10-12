# openapi_client.QosRulesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_switch_qos_rule_1**](QosRulesApi.md#create_network_switch_qos_rule_1) | **POST** /networks/{networkId}/switch/qosRules | Add a quality of service rule
[**delete_network_switch_qos_rule_1**](QosRulesApi.md#delete_network_switch_qos_rule_1) | **DELETE** /networks/{networkId}/switch/qosRules/{qosRuleId} | Delete a quality of service rule
[**get_network_switch_qos_rule_1**](QosRulesApi.md#get_network_switch_qos_rule_1) | **GET** /networks/{networkId}/switch/qosRules/{qosRuleId} | Return a quality of service rule
[**get_network_switch_qos_rules_1**](QosRulesApi.md#get_network_switch_qos_rules_1) | **GET** /networks/{networkId}/switch/qosRules | List quality of service rules
[**get_network_switch_qos_rules_order_1**](QosRulesApi.md#get_network_switch_qos_rules_order_1) | **GET** /networks/{networkId}/switch/qosRules/order | Return the quality of service rule IDs by order in which they will be processed by the switch
[**update_network_switch_qos_rule_1**](QosRulesApi.md#update_network_switch_qos_rule_1) | **PUT** /networks/{networkId}/switch/qosRules/{qosRuleId} | Update a quality of service rule
[**update_network_switch_qos_rules_order_1**](QosRulesApi.md#update_network_switch_qos_rules_order_1) | **PUT** /networks/{networkId}/switch/qosRules/order | Update the order in which the rules should be processed by the switch


# **create_network_switch_qos_rule_1**
> object create_network_switch_qos_rule_1(network_id, create_network_switch_qos_rule_request)

Add a quality of service rule

Add a quality of service rule

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_switch_qos_rule_request import CreateNetworkSwitchQosRuleRequest
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
    api_instance = openapi_client.QosRulesApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_switch_qos_rule_request = openapi_client.CreateNetworkSwitchQosRuleRequest() # CreateNetworkSwitchQosRuleRequest | 

    try:
        # Add a quality of service rule
        api_response = api_instance.create_network_switch_qos_rule_1(network_id, create_network_switch_qos_rule_request)
        print("The response of QosRulesApi->create_network_switch_qos_rule_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QosRulesApi->create_network_switch_qos_rule_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_switch_qos_rule_request** | [**CreateNetworkSwitchQosRuleRequest**](CreateNetworkSwitchQosRuleRequest.md)|  | 

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

# **delete_network_switch_qos_rule_1**
> delete_network_switch_qos_rule_1(network_id, qos_rule_id)

Delete a quality of service rule

Delete a quality of service rule

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
    api_instance = openapi_client.QosRulesApi(api_client)
    network_id = 'network_id_example' # str | 
    qos_rule_id = 'qos_rule_id_example' # str | 

    try:
        # Delete a quality of service rule
        api_instance.delete_network_switch_qos_rule_1(network_id, qos_rule_id)
    except Exception as e:
        print("Exception when calling QosRulesApi->delete_network_switch_qos_rule_1: %s\n" % e)
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

# **get_network_switch_qos_rule_1**
> object get_network_switch_qos_rule_1(network_id, qos_rule_id)

Return a quality of service rule

Return a quality of service rule

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
    api_instance = openapi_client.QosRulesApi(api_client)
    network_id = 'network_id_example' # str | 
    qos_rule_id = 'qos_rule_id_example' # str | 

    try:
        # Return a quality of service rule
        api_response = api_instance.get_network_switch_qos_rule_1(network_id, qos_rule_id)
        print("The response of QosRulesApi->get_network_switch_qos_rule_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QosRulesApi->get_network_switch_qos_rule_1: %s\n" % e)
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

# **get_network_switch_qos_rules_1**
> List[object] get_network_switch_qos_rules_1(network_id)

List quality of service rules

List quality of service rules

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
    api_instance = openapi_client.QosRulesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List quality of service rules
        api_response = api_instance.get_network_switch_qos_rules_1(network_id)
        print("The response of QosRulesApi->get_network_switch_qos_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QosRulesApi->get_network_switch_qos_rules_1: %s\n" % e)
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

# **get_network_switch_qos_rules_order_1**
> object get_network_switch_qos_rules_order_1(network_id)

Return the quality of service rule IDs by order in which they will be processed by the switch

Return the quality of service rule IDs by order in which they will be processed by the switch

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
    api_instance = openapi_client.QosRulesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the quality of service rule IDs by order in which they will be processed by the switch
        api_response = api_instance.get_network_switch_qos_rules_order_1(network_id)
        print("The response of QosRulesApi->get_network_switch_qos_rules_order_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QosRulesApi->get_network_switch_qos_rules_order_1: %s\n" % e)
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

# **update_network_switch_qos_rule_1**
> object update_network_switch_qos_rule_1(network_id, qos_rule_id, update_network_switch_qos_rule_request=update_network_switch_qos_rule_request)

Update a quality of service rule

Update a quality of service rule

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_qos_rule_request import UpdateNetworkSwitchQosRuleRequest
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
    api_instance = openapi_client.QosRulesApi(api_client)
    network_id = 'network_id_example' # str | 
    qos_rule_id = 'qos_rule_id_example' # str | 
    update_network_switch_qos_rule_request = openapi_client.UpdateNetworkSwitchQosRuleRequest() # UpdateNetworkSwitchQosRuleRequest |  (optional)

    try:
        # Update a quality of service rule
        api_response = api_instance.update_network_switch_qos_rule_1(network_id, qos_rule_id, update_network_switch_qos_rule_request=update_network_switch_qos_rule_request)
        print("The response of QosRulesApi->update_network_switch_qos_rule_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QosRulesApi->update_network_switch_qos_rule_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **qos_rule_id** | **str**|  | 
 **update_network_switch_qos_rule_request** | [**UpdateNetworkSwitchQosRuleRequest**](UpdateNetworkSwitchQosRuleRequest.md)|  | [optional] 

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

# **update_network_switch_qos_rules_order_1**
> object update_network_switch_qos_rules_order_1(network_id, update_network_switch_qos_rules_order_request)

Update the order in which the rules should be processed by the switch

Update the order in which the rules should be processed by the switch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_qos_rules_order_request import UpdateNetworkSwitchQosRulesOrderRequest
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
    api_instance = openapi_client.QosRulesApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_switch_qos_rules_order_request = openapi_client.UpdateNetworkSwitchQosRulesOrderRequest() # UpdateNetworkSwitchQosRulesOrderRequest | 

    try:
        # Update the order in which the rules should be processed by the switch
        api_response = api_instance.update_network_switch_qos_rules_order_1(network_id, update_network_switch_qos_rules_order_request)
        print("The response of QosRulesApi->update_network_switch_qos_rules_order_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QosRulesApi->update_network_switch_qos_rules_order_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_switch_qos_rules_order_request** | [**UpdateNetworkSwitchQosRulesOrderRequest**](UpdateNetworkSwitchQosRulesOrderRequest.md)|  | 

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


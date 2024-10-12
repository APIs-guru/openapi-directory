# openapi_client.MX1ManyNATRulesApi

All URIs are relative to *https://api.meraki.com/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_one_to_many_nat_rules**](MX1ManyNATRulesApi.md#get_network_one_to_many_nat_rules) | **GET** /networks/{networkId}/oneToManyNatRules | Return the 1:Many NAT mapping rules for an MX network
[**update_network_one_to_many_nat_rules**](MX1ManyNATRulesApi.md#update_network_one_to_many_nat_rules) | **PUT** /networks/{networkId}/oneToManyNatRules | Set the 1:Many NAT mapping rules for an MX network


# **get_network_one_to_many_nat_rules**
> object get_network_one_to_many_nat_rules(network_id)

Return the 1:Many NAT mapping rules for an MX network

Return the 1:Many NAT mapping rules for an MX network

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
    api_instance = openapi_client.MX1ManyNATRulesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the 1:Many NAT mapping rules for an MX network
        api_response = api_instance.get_network_one_to_many_nat_rules(network_id)
        print("The response of MX1ManyNATRulesApi->get_network_one_to_many_nat_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MX1ManyNATRulesApi->get_network_one_to_many_nat_rules: %s\n" % e)
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

# **update_network_one_to_many_nat_rules**
> object update_network_one_to_many_nat_rules(network_id, update_network_one_to_many_nat_rules_request)

Set the 1:Many NAT mapping rules for an MX network

Set the 1:Many NAT mapping rules for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_one_to_many_nat_rules_request import UpdateNetworkOneToManyNatRulesRequest
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
    api_instance = openapi_client.MX1ManyNATRulesApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_one_to_many_nat_rules_request = openapi_client.UpdateNetworkOneToManyNatRulesRequest() # UpdateNetworkOneToManyNatRulesRequest | 

    try:
        # Set the 1:Many NAT mapping rules for an MX network
        api_response = api_instance.update_network_one_to_many_nat_rules(network_id, update_network_one_to_many_nat_rules_request)
        print("The response of MX1ManyNATRulesApi->update_network_one_to_many_nat_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MX1ManyNATRulesApi->update_network_one_to_many_nat_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_one_to_many_nat_rules_request** | [**UpdateNetworkOneToManyNatRulesRequest**](UpdateNetworkOneToManyNatRulesRequest.md)|  | 

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


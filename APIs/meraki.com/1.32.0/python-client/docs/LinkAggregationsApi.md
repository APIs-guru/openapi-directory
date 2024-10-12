# openapi_client.LinkAggregationsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_switch_link_aggregation_1**](LinkAggregationsApi.md#create_network_switch_link_aggregation_1) | **POST** /networks/{networkId}/switch/linkAggregations | Create a link aggregation group
[**delete_network_switch_link_aggregation_1**](LinkAggregationsApi.md#delete_network_switch_link_aggregation_1) | **DELETE** /networks/{networkId}/switch/linkAggregations/{linkAggregationId} | Split a link aggregation group into separate ports
[**get_network_switch_link_aggregations_1**](LinkAggregationsApi.md#get_network_switch_link_aggregations_1) | **GET** /networks/{networkId}/switch/linkAggregations | List link aggregation groups
[**update_network_switch_link_aggregation_1**](LinkAggregationsApi.md#update_network_switch_link_aggregation_1) | **PUT** /networks/{networkId}/switch/linkAggregations/{linkAggregationId} | Update a link aggregation group


# **create_network_switch_link_aggregation_1**
> object create_network_switch_link_aggregation_1(network_id, create_network_switch_link_aggregation_request=create_network_switch_link_aggregation_request)

Create a link aggregation group

Create a link aggregation group

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_switch_link_aggregation_request import CreateNetworkSwitchLinkAggregationRequest
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
    api_instance = openapi_client.LinkAggregationsApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_switch_link_aggregation_request = openapi_client.CreateNetworkSwitchLinkAggregationRequest() # CreateNetworkSwitchLinkAggregationRequest |  (optional)

    try:
        # Create a link aggregation group
        api_response = api_instance.create_network_switch_link_aggregation_1(network_id, create_network_switch_link_aggregation_request=create_network_switch_link_aggregation_request)
        print("The response of LinkAggregationsApi->create_network_switch_link_aggregation_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LinkAggregationsApi->create_network_switch_link_aggregation_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_switch_link_aggregation_request** | [**CreateNetworkSwitchLinkAggregationRequest**](CreateNetworkSwitchLinkAggregationRequest.md)|  | [optional] 

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

# **delete_network_switch_link_aggregation_1**
> delete_network_switch_link_aggregation_1(network_id, link_aggregation_id)

Split a link aggregation group into separate ports

Split a link aggregation group into separate ports

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
    api_instance = openapi_client.LinkAggregationsApi(api_client)
    network_id = 'network_id_example' # str | 
    link_aggregation_id = 'link_aggregation_id_example' # str | 

    try:
        # Split a link aggregation group into separate ports
        api_instance.delete_network_switch_link_aggregation_1(network_id, link_aggregation_id)
    except Exception as e:
        print("Exception when calling LinkAggregationsApi->delete_network_switch_link_aggregation_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **link_aggregation_id** | **str**|  | 

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

# **get_network_switch_link_aggregations_1**
> List[object] get_network_switch_link_aggregations_1(network_id)

List link aggregation groups

List link aggregation groups

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
    api_instance = openapi_client.LinkAggregationsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List link aggregation groups
        api_response = api_instance.get_network_switch_link_aggregations_1(network_id)
        print("The response of LinkAggregationsApi->get_network_switch_link_aggregations_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LinkAggregationsApi->get_network_switch_link_aggregations_1: %s\n" % e)
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

# **update_network_switch_link_aggregation_1**
> object update_network_switch_link_aggregation_1(network_id, link_aggregation_id, update_network_switch_link_aggregation_request=update_network_switch_link_aggregation_request)

Update a link aggregation group

Update a link aggregation group

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_link_aggregation_request import UpdateNetworkSwitchLinkAggregationRequest
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
    api_instance = openapi_client.LinkAggregationsApi(api_client)
    network_id = 'network_id_example' # str | 
    link_aggregation_id = 'link_aggregation_id_example' # str | 
    update_network_switch_link_aggregation_request = openapi_client.UpdateNetworkSwitchLinkAggregationRequest() # UpdateNetworkSwitchLinkAggregationRequest |  (optional)

    try:
        # Update a link aggregation group
        api_response = api_instance.update_network_switch_link_aggregation_1(network_id, link_aggregation_id, update_network_switch_link_aggregation_request=update_network_switch_link_aggregation_request)
        print("The response of LinkAggregationsApi->update_network_switch_link_aggregation_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LinkAggregationsApi->update_network_switch_link_aggregation_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **link_aggregation_id** | **str**|  | 
 **update_network_switch_link_aggregation_request** | [**UpdateNetworkSwitchLinkAggregationRequest**](UpdateNetworkSwitchLinkAggregationRequest.md)|  | [optional] 

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


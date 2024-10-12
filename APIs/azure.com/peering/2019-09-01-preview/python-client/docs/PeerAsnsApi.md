# openapi_client.PeerAsnsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**peer_asns_create_or_update**](PeerAsnsApi.md#peer_asns_create_or_update) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Peering/peerAsns/{peerAsnName} | 
[**peer_asns_delete**](PeerAsnsApi.md#peer_asns_delete) | **DELETE** /subscriptions/{subscriptionId}/providers/Microsoft.Peering/peerAsns/{peerAsnName} | 
[**peer_asns_get**](PeerAsnsApi.md#peer_asns_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Peering/peerAsns/{peerAsnName} | 
[**peer_asns_list_by_subscription**](PeerAsnsApi.md#peer_asns_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Peering/peerAsns | 


# **peer_asns_create_or_update**
> PeerAsn peer_asns_create_or_update(peer_asn_name, subscription_id, api_version, peer_asn)



Creates a new peer ASN or updates an existing peer ASN with the specified name under the given subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.peer_asn import PeerAsn
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
    api_instance = openapi_client.PeerAsnsApi(api_client)
    peer_asn_name = 'peer_asn_name_example' # str | The peer ASN name.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.
    peer_asn = openapi_client.PeerAsn() # PeerAsn | The peer ASN.

    try:
        api_response = api_instance.peer_asns_create_or_update(peer_asn_name, subscription_id, api_version, peer_asn)
        print("The response of PeerAsnsApi->peer_asns_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PeerAsnsApi->peer_asns_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **peer_asn_name** | **str**| The peer ASN name. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **api_version** | **str**| The client API version. | 
 **peer_asn** | [**PeerAsn**](PeerAsn.md)| The peer ASN. | 

### Return type

[**PeerAsn**](PeerAsn.md)

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

# **peer_asns_delete**
> peer_asns_delete(peer_asn_name, subscription_id, api_version)



Deletes an existing peer ASN with the specified name under the given subscription.

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
    api_instance = openapi_client.PeerAsnsApi(api_client)
    peer_asn_name = 'peer_asn_name_example' # str | The peer ASN name.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_instance.peer_asns_delete(peer_asn_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling PeerAsnsApi->peer_asns_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **peer_asn_name** | **str**| The peer ASN name. | 
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
**204** | No Content |  -  |
**0** | Error response describing why the operation has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **peer_asns_get**
> PeerAsn peer_asns_get(peer_asn_name, subscription_id, api_version)



Gets the peer ASN with the specified name under the given subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.peer_asn import PeerAsn
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
    api_instance = openapi_client.PeerAsnsApi(api_client)
    peer_asn_name = 'peer_asn_name_example' # str | The peer ASN name.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_response = api_instance.peer_asns_get(peer_asn_name, subscription_id, api_version)
        print("The response of PeerAsnsApi->peer_asns_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PeerAsnsApi->peer_asns_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **peer_asn_name** | **str**| The peer ASN name. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **api_version** | **str**| The client API version. | 

### Return type

[**PeerAsn**](PeerAsn.md)

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

# **peer_asns_list_by_subscription**
> PeerAsnListResult peer_asns_list_by_subscription(subscription_id, api_version)



Lists all of the peer ASNs under the given subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.peer_asn_list_result import PeerAsnListResult
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
    api_instance = openapi_client.PeerAsnsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_response = api_instance.peer_asns_list_by_subscription(subscription_id, api_version)
        print("The response of PeerAsnsApi->peer_asns_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PeerAsnsApi->peer_asns_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription ID. | 
 **api_version** | **str**| The client API version. | 

### Return type

[**PeerAsnListResult**](PeerAsnListResult.md)

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


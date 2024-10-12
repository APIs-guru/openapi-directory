# openapi_client.TransactionNodeApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transaction_nodes_create**](TransactionNodeApi.md#transaction_nodes_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName}/transactionNodes/{transactionNodeName} | 
[**transaction_nodes_delete**](TransactionNodeApi.md#transaction_nodes_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName}/transactionNodes/{transactionNodeName} | 
[**transaction_nodes_get**](TransactionNodeApi.md#transaction_nodes_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName}/transactionNodes/{transactionNodeName} | 
[**transaction_nodes_list**](TransactionNodeApi.md#transaction_nodes_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName}/transactionNodes | 
[**transaction_nodes_list_api_keys**](TransactionNodeApi.md#transaction_nodes_list_api_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName}/transactionNodes/{transactionNodeName}/listApiKeys | 
[**transaction_nodes_list_regenerate_api_keys**](TransactionNodeApi.md#transaction_nodes_list_regenerate_api_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName}/transactionNodes/{transactionNodeName}/regenerateApiKeys | 
[**transaction_nodes_update**](TransactionNodeApi.md#transaction_nodes_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName}/transactionNodes/{transactionNodeName} | 


# **transaction_nodes_create**
> TransactionNode transaction_nodes_create(blockchain_member_name, transaction_node_name, api_version, subscription_id, resource_group_name, transaction_node=transaction_node)



Create or update the transaction node.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.transaction_node import TransactionNode
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
    api_instance = openapi_client.TransactionNodeApi(api_client)
    blockchain_member_name = 'blockchain_member_name_example' # str | Blockchain member name.
    transaction_node_name = 'transaction_node_name_example' # str | Transaction node name.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    transaction_node = openapi_client.TransactionNode() # TransactionNode | Payload to create the transaction node. (optional)

    try:
        api_response = api_instance.transaction_nodes_create(blockchain_member_name, transaction_node_name, api_version, subscription_id, resource_group_name, transaction_node=transaction_node)
        print("The response of TransactionNodeApi->transaction_nodes_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionNodeApi->transaction_nodes_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain_member_name** | **str**| Blockchain member name. | 
 **transaction_node_name** | **str**| Transaction node name. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **transaction_node** | [**TransactionNode**](TransactionNode.md)| Payload to create the transaction node. | [optional] 

### Return type

[**TransactionNode**](TransactionNode.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**201** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transaction_nodes_delete**
> transaction_nodes_delete(blockchain_member_name, transaction_node_name, api_version, subscription_id, resource_group_name)



Delete the transaction node.

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
    api_instance = openapi_client.TransactionNodeApi(api_client)
    blockchain_member_name = 'blockchain_member_name_example' # str | Blockchain member name.
    transaction_node_name = 'transaction_node_name_example' # str | Transaction node name.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

    try:
        api_instance.transaction_nodes_delete(blockchain_member_name, transaction_node_name, api_version, subscription_id, resource_group_name)
    except Exception as e:
        print("Exception when calling TransactionNodeApi->transaction_nodes_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain_member_name** | **str**| Blockchain member name. | 
 **transaction_node_name** | **str**| Transaction node name. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Success |  -  |
**204** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transaction_nodes_get**
> TransactionNode transaction_nodes_get(blockchain_member_name, transaction_node_name, api_version, subscription_id, resource_group_name)



Get the details of the transaction node.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.transaction_node import TransactionNode
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
    api_instance = openapi_client.TransactionNodeApi(api_client)
    blockchain_member_name = 'blockchain_member_name_example' # str | Blockchain member name.
    transaction_node_name = 'transaction_node_name_example' # str | Transaction node name.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

    try:
        api_response = api_instance.transaction_nodes_get(blockchain_member_name, transaction_node_name, api_version, subscription_id, resource_group_name)
        print("The response of TransactionNodeApi->transaction_nodes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionNodeApi->transaction_nodes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain_member_name** | **str**| Blockchain member name. | 
 **transaction_node_name** | **str**| Transaction node name. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 

### Return type

[**TransactionNode**](TransactionNode.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transaction_nodes_list**
> TransactionNodeCollection transaction_nodes_list(blockchain_member_name, api_version, subscription_id, resource_group_name)



Lists the transaction nodes for a blockchain member.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.transaction_node_collection import TransactionNodeCollection
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
    api_instance = openapi_client.TransactionNodeApi(api_client)
    blockchain_member_name = 'blockchain_member_name_example' # str | Blockchain member name.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

    try:
        api_response = api_instance.transaction_nodes_list(blockchain_member_name, api_version, subscription_id, resource_group_name)
        print("The response of TransactionNodeApi->transaction_nodes_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionNodeApi->transaction_nodes_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain_member_name** | **str**| Blockchain member name. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 

### Return type

[**TransactionNodeCollection**](TransactionNodeCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transaction_nodes_list_api_keys**
> ApiKeyCollection transaction_nodes_list_api_keys(blockchain_member_name, transaction_node_name, api_version, subscription_id, resource_group_name)



List the API keys for the transaction node.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_key_collection import ApiKeyCollection
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
    api_instance = openapi_client.TransactionNodeApi(api_client)
    blockchain_member_name = 'blockchain_member_name_example' # str | Blockchain member name.
    transaction_node_name = 'transaction_node_name_example' # str | Transaction node name.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

    try:
        api_response = api_instance.transaction_nodes_list_api_keys(blockchain_member_name, transaction_node_name, api_version, subscription_id, resource_group_name)
        print("The response of TransactionNodeApi->transaction_nodes_list_api_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionNodeApi->transaction_nodes_list_api_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain_member_name** | **str**| Blockchain member name. | 
 **transaction_node_name** | **str**| Transaction node name. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 

### Return type

[**ApiKeyCollection**](ApiKeyCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transaction_nodes_list_regenerate_api_keys**
> ApiKeyCollection transaction_nodes_list_regenerate_api_keys(blockchain_member_name, transaction_node_name, api_version, subscription_id, resource_group_name, api_key=api_key)



Regenerate the API keys for the blockchain member.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_key import ApiKey
from openapi_client.models.api_key_collection import ApiKeyCollection
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
    api_instance = openapi_client.TransactionNodeApi(api_client)
    blockchain_member_name = 'blockchain_member_name_example' # str | Blockchain member name.
    transaction_node_name = 'transaction_node_name_example' # str | Transaction node name.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    api_key = openapi_client.ApiKey() # ApiKey | api key to be regenerated (optional)

    try:
        api_response = api_instance.transaction_nodes_list_regenerate_api_keys(blockchain_member_name, transaction_node_name, api_version, subscription_id, resource_group_name, api_key=api_key)
        print("The response of TransactionNodeApi->transaction_nodes_list_regenerate_api_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionNodeApi->transaction_nodes_list_regenerate_api_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain_member_name** | **str**| Blockchain member name. | 
 **transaction_node_name** | **str**| Transaction node name. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **api_key** | [**ApiKey**](ApiKey.md)| api key to be regenerated | [optional] 

### Return type

[**ApiKeyCollection**](ApiKeyCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transaction_nodes_update**
> TransactionNode transaction_nodes_update(blockchain_member_name, transaction_node_name, api_version, subscription_id, resource_group_name, transaction_node=transaction_node)



Update the transaction node.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.transaction_node import TransactionNode
from openapi_client.models.transaction_node_update import TransactionNodeUpdate
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
    api_instance = openapi_client.TransactionNodeApi(api_client)
    blockchain_member_name = 'blockchain_member_name_example' # str | Blockchain member name.
    transaction_node_name = 'transaction_node_name_example' # str | Transaction node name.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    transaction_node = openapi_client.TransactionNodeUpdate() # TransactionNodeUpdate | Payload to create the transaction node. (optional)

    try:
        api_response = api_instance.transaction_nodes_update(blockchain_member_name, transaction_node_name, api_version, subscription_id, resource_group_name, transaction_node=transaction_node)
        print("The response of TransactionNodeApi->transaction_nodes_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionNodeApi->transaction_nodes_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain_member_name** | **str**| Blockchain member name. | 
 **transaction_node_name** | **str**| Transaction node name. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **transaction_node** | [**TransactionNodeUpdate**](TransactionNodeUpdate.md)| Payload to create the transaction node. | [optional] 

### Return type

[**TransactionNode**](TransactionNode.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


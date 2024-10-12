# openapi_client.BlockchainMemberApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blockchain_members_create**](BlockchainMemberApi.md#blockchain_members_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName} | 
[**blockchain_members_delete**](BlockchainMemberApi.md#blockchain_members_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName} | 
[**blockchain_members_get**](BlockchainMemberApi.md#blockchain_members_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName} | 
[**blockchain_members_list**](BlockchainMemberApi.md#blockchain_members_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers | 
[**blockchain_members_list_all**](BlockchainMemberApi.md#blockchain_members_list_all) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Blockchain/blockchainMembers | 
[**blockchain_members_list_api_keys**](BlockchainMemberApi.md#blockchain_members_list_api_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName}/listApiKeys | 
[**blockchain_members_list_consortium_members**](BlockchainMemberApi.md#blockchain_members_list_consortium_members) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName}/consortiumMembers | 
[**blockchain_members_list_regenerate_api_keys**](BlockchainMemberApi.md#blockchain_members_list_regenerate_api_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName}/regenerateApiKeys | 
[**blockchain_members_update**](BlockchainMemberApi.md#blockchain_members_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName} | 


# **blockchain_members_create**
> BlockchainMember blockchain_members_create(blockchain_member_name, api_version, subscription_id, resource_group_name, blockchain_member=blockchain_member)



Create a blockchain member.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.blockchain_member import BlockchainMember
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
    api_instance = openapi_client.BlockchainMemberApi(api_client)
    blockchain_member_name = 'blockchain_member_name_example' # str | Blockchain member name.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    blockchain_member = openapi_client.BlockchainMember() # BlockchainMember | Payload to create a blockchain member. (optional)

    try:
        api_response = api_instance.blockchain_members_create(blockchain_member_name, api_version, subscription_id, resource_group_name, blockchain_member=blockchain_member)
        print("The response of BlockchainMemberApi->blockchain_members_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlockchainMemberApi->blockchain_members_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain_member_name** | **str**| Blockchain member name. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **blockchain_member** | [**BlockchainMember**](BlockchainMember.md)| Payload to create a blockchain member. | [optional] 

### Return type

[**BlockchainMember**](BlockchainMember.md)

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

# **blockchain_members_delete**
> blockchain_members_delete(blockchain_member_name, api_version, subscription_id, resource_group_name)



Delete a blockchain member.

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
    api_instance = openapi_client.BlockchainMemberApi(api_client)
    blockchain_member_name = 'blockchain_member_name_example' # str | Blockchain member name
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

    try:
        api_instance.blockchain_members_delete(blockchain_member_name, api_version, subscription_id, resource_group_name)
    except Exception as e:
        print("Exception when calling BlockchainMemberApi->blockchain_members_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain_member_name** | **str**| Blockchain member name | 
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

# **blockchain_members_get**
> BlockchainMember blockchain_members_get(blockchain_member_name, api_version, subscription_id, resource_group_name)



Get details about a blockchain member.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.blockchain_member import BlockchainMember
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
    api_instance = openapi_client.BlockchainMemberApi(api_client)
    blockchain_member_name = 'blockchain_member_name_example' # str | Blockchain member name.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

    try:
        api_response = api_instance.blockchain_members_get(blockchain_member_name, api_version, subscription_id, resource_group_name)
        print("The response of BlockchainMemberApi->blockchain_members_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlockchainMemberApi->blockchain_members_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain_member_name** | **str**| Blockchain member name. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 

### Return type

[**BlockchainMember**](BlockchainMember.md)

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

# **blockchain_members_list**
> BlockchainMemberCollection blockchain_members_list(api_version, subscription_id, resource_group_name)



Lists the blockchain members for a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.blockchain_member_collection import BlockchainMemberCollection
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
    api_instance = openapi_client.BlockchainMemberApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

    try:
        api_response = api_instance.blockchain_members_list(api_version, subscription_id, resource_group_name)
        print("The response of BlockchainMemberApi->blockchain_members_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlockchainMemberApi->blockchain_members_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 

### Return type

[**BlockchainMemberCollection**](BlockchainMemberCollection.md)

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

# **blockchain_members_list_all**
> BlockchainMemberCollection blockchain_members_list_all(api_version, subscription_id)



Lists the blockchain members for a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.blockchain_member_collection import BlockchainMemberCollection
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
    api_instance = openapi_client.BlockchainMemberApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.

    try:
        api_response = api_instance.blockchain_members_list_all(api_version, subscription_id)
        print("The response of BlockchainMemberApi->blockchain_members_list_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlockchainMemberApi->blockchain_members_list_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call. | 

### Return type

[**BlockchainMemberCollection**](BlockchainMemberCollection.md)

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

# **blockchain_members_list_api_keys**
> ApiKeyCollection blockchain_members_list_api_keys(blockchain_member_name, api_version, subscription_id, resource_group_name)



Lists the API keys for a blockchain member.

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
    api_instance = openapi_client.BlockchainMemberApi(api_client)
    blockchain_member_name = 'blockchain_member_name_example' # str | Blockchain member name.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

    try:
        api_response = api_instance.blockchain_members_list_api_keys(blockchain_member_name, api_version, subscription_id, resource_group_name)
        print("The response of BlockchainMemberApi->blockchain_members_list_api_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlockchainMemberApi->blockchain_members_list_api_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain_member_name** | **str**| Blockchain member name. | 
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

# **blockchain_members_list_consortium_members**
> ConsortiumMemberCollection blockchain_members_list_consortium_members(blockchain_member_name, api_version, subscription_id, resource_group_name)



Lists the consortium members for a blockchain member.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.consortium_member_collection import ConsortiumMemberCollection
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
    api_instance = openapi_client.BlockchainMemberApi(api_client)
    blockchain_member_name = 'blockchain_member_name_example' # str | Blockchain member name.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

    try:
        api_response = api_instance.blockchain_members_list_consortium_members(blockchain_member_name, api_version, subscription_id, resource_group_name)
        print("The response of BlockchainMemberApi->blockchain_members_list_consortium_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlockchainMemberApi->blockchain_members_list_consortium_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain_member_name** | **str**| Blockchain member name. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 

### Return type

[**ConsortiumMemberCollection**](ConsortiumMemberCollection.md)

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

# **blockchain_members_list_regenerate_api_keys**
> ApiKeyCollection blockchain_members_list_regenerate_api_keys(blockchain_member_name, api_version, subscription_id, resource_group_name, api_key=api_key)



Regenerate the API keys for a blockchain member.

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
    api_instance = openapi_client.BlockchainMemberApi(api_client)
    blockchain_member_name = 'blockchain_member_name_example' # str | Blockchain member name.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    api_key = openapi_client.ApiKey() # ApiKey | api key to be regenerate (optional)

    try:
        api_response = api_instance.blockchain_members_list_regenerate_api_keys(blockchain_member_name, api_version, subscription_id, resource_group_name, api_key=api_key)
        print("The response of BlockchainMemberApi->blockchain_members_list_regenerate_api_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlockchainMemberApi->blockchain_members_list_regenerate_api_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain_member_name** | **str**| Blockchain member name. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **api_key** | [**ApiKey**](ApiKey.md)| api key to be regenerate | [optional] 

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

# **blockchain_members_update**
> BlockchainMember blockchain_members_update(blockchain_member_name, api_version, subscription_id, resource_group_name, blockchain_member=blockchain_member)



Update a blockchain member.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.blockchain_member import BlockchainMember
from openapi_client.models.blockchain_member_update import BlockchainMemberUpdate
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
    api_instance = openapi_client.BlockchainMemberApi(api_client)
    blockchain_member_name = 'blockchain_member_name_example' # str | Blockchain member name.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    blockchain_member = openapi_client.BlockchainMemberUpdate() # BlockchainMemberUpdate | Payload to update the blockchain member. (optional)

    try:
        api_response = api_instance.blockchain_members_update(blockchain_member_name, api_version, subscription_id, resource_group_name, blockchain_member=blockchain_member)
        print("The response of BlockchainMemberApi->blockchain_members_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlockchainMemberApi->blockchain_members_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain_member_name** | **str**| Blockchain member name. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **blockchain_member** | [**BlockchainMemberUpdate**](BlockchainMemberUpdate.md)| Payload to update the blockchain member. | [optional] 

### Return type

[**BlockchainMember**](BlockchainMember.md)

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


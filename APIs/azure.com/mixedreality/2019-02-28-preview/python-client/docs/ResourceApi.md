# openapi_client.ResourceApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**spatial_anchors_accounts_create**](ResourceApi.md#spatial_anchors_accounts_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MixedReality/spatialAnchorsAccounts/{spatialAnchorsAccountName} | 
[**spatial_anchors_accounts_delete**](ResourceApi.md#spatial_anchors_accounts_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MixedReality/spatialAnchorsAccounts/{spatialAnchorsAccountName} | 
[**spatial_anchors_accounts_get**](ResourceApi.md#spatial_anchors_accounts_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MixedReality/spatialAnchorsAccounts/{spatialAnchorsAccountName} | 
[**spatial_anchors_accounts_list_by_resource_group**](ResourceApi.md#spatial_anchors_accounts_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MixedReality/spatialAnchorsAccounts | 
[**spatial_anchors_accounts_list_by_subscription**](ResourceApi.md#spatial_anchors_accounts_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.MixedReality/spatialAnchorsAccounts | 
[**spatial_anchors_accounts_update**](ResourceApi.md#spatial_anchors_accounts_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MixedReality/spatialAnchorsAccounts/{spatialAnchorsAccountName} | 


# **spatial_anchors_accounts_create**
> SpatialAnchorsAccount spatial_anchors_accounts_create(subscription_id, resource_group_name, spatial_anchors_account_name, api_version, spatial_anchors_account)



Creating or Updating a Spatial Anchors Account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.spatial_anchors_account import SpatialAnchorsAccount
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
    api_instance = openapi_client.ResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    spatial_anchors_account_name = 'spatial_anchors_account_name_example' # str | Name of an Mixed Reality Spatial Anchors Account.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    spatial_anchors_account = openapi_client.SpatialAnchorsAccount() # SpatialAnchorsAccount | Spatial Anchors Account parameter.

    try:
        api_response = api_instance.spatial_anchors_accounts_create(subscription_id, resource_group_name, spatial_anchors_account_name, api_version, spatial_anchors_account)
        print("The response of ResourceApi->spatial_anchors_accounts_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceApi->spatial_anchors_accounts_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **spatial_anchors_account_name** | **str**| Name of an Mixed Reality Spatial Anchors Account. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **spatial_anchors_account** | [**SpatialAnchorsAccount**](SpatialAnchorsAccount.md)| Spatial Anchors Account parameter. | 

### Return type

[**SpatialAnchorsAccount**](SpatialAnchorsAccount.md)

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
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **spatial_anchors_accounts_delete**
> spatial_anchors_accounts_delete(subscription_id, resource_group_name, spatial_anchors_account_name, api_version)



Delete a Spatial Anchors Account.

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
    api_instance = openapi_client.ResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    spatial_anchors_account_name = 'spatial_anchors_account_name_example' # str | Name of an Mixed Reality Spatial Anchors Account.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_instance.spatial_anchors_accounts_delete(subscription_id, resource_group_name, spatial_anchors_account_name, api_version)
    except Exception as e:
        print("Exception when calling ResourceApi->spatial_anchors_accounts_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **spatial_anchors_account_name** | **str**| Name of an Mixed Reality Spatial Anchors Account. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

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
**204** | NoContent |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **spatial_anchors_accounts_get**
> SpatialAnchorsAccount spatial_anchors_accounts_get(subscription_id, resource_group_name, spatial_anchors_account_name, api_version)



Retrieve a Spatial Anchors Account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.spatial_anchors_account import SpatialAnchorsAccount
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
    api_instance = openapi_client.ResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    spatial_anchors_account_name = 'spatial_anchors_account_name_example' # str | Name of an Mixed Reality Spatial Anchors Account.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_response = api_instance.spatial_anchors_accounts_get(subscription_id, resource_group_name, spatial_anchors_account_name, api_version)
        print("The response of ResourceApi->spatial_anchors_accounts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceApi->spatial_anchors_accounts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **spatial_anchors_account_name** | **str**| Name of an Mixed Reality Spatial Anchors Account. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**SpatialAnchorsAccount**](SpatialAnchorsAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **spatial_anchors_accounts_list_by_resource_group**
> SpatialAnchorsAccountList spatial_anchors_accounts_list_by_resource_group(subscription_id, resource_group_name, api_version)



List Resources by Resource Group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.spatial_anchors_account_list import SpatialAnchorsAccountList
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
    api_instance = openapi_client.ResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_response = api_instance.spatial_anchors_accounts_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of ResourceApi->spatial_anchors_accounts_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceApi->spatial_anchors_accounts_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**SpatialAnchorsAccountList**](SpatialAnchorsAccountList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **spatial_anchors_accounts_list_by_subscription**
> SpatialAnchorsAccountList spatial_anchors_accounts_list_by_subscription(subscription_id, api_version)



List Spatial Anchors Accounts by Subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.spatial_anchors_account_list import SpatialAnchorsAccountList
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
    api_instance = openapi_client.ResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_response = api_instance.spatial_anchors_accounts_list_by_subscription(subscription_id, api_version)
        print("The response of ResourceApi->spatial_anchors_accounts_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceApi->spatial_anchors_accounts_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**SpatialAnchorsAccountList**](SpatialAnchorsAccountList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **spatial_anchors_accounts_update**
> SpatialAnchorsAccount spatial_anchors_accounts_update(subscription_id, resource_group_name, spatial_anchors_account_name, api_version, spatial_anchors_account)



Updating a Spatial Anchors Account

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.spatial_anchors_account import SpatialAnchorsAccount
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
    api_instance = openapi_client.ResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    spatial_anchors_account_name = 'spatial_anchors_account_name_example' # str | Name of an Mixed Reality Spatial Anchors Account.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    spatial_anchors_account = openapi_client.SpatialAnchorsAccount() # SpatialAnchorsAccount | Spatial Anchors Account parameter.

    try:
        api_response = api_instance.spatial_anchors_accounts_update(subscription_id, resource_group_name, spatial_anchors_account_name, api_version, spatial_anchors_account)
        print("The response of ResourceApi->spatial_anchors_accounts_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceApi->spatial_anchors_accounts_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **spatial_anchors_account_name** | **str**| Name of an Mixed Reality Spatial Anchors Account. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **spatial_anchors_account** | [**SpatialAnchorsAccount**](SpatialAnchorsAccount.md)| Spatial Anchors Account parameter. | 

### Return type

[**SpatialAnchorsAccount**](SpatialAnchorsAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


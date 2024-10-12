# openapi_client.KeyApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**spatial_anchors_accounts_get_keys**](KeyApi.md#spatial_anchors_accounts_get_keys) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MixedReality/spatialAnchorsAccounts/{spatialAnchorsAccountName}/keys | 
[**spatial_anchors_accounts_regenerate_keys**](KeyApi.md#spatial_anchors_accounts_regenerate_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MixedReality/spatialAnchorsAccounts/{spatialAnchorsAccountName}/keys | 


# **spatial_anchors_accounts_get_keys**
> SpatialAnchorsAccountKeys spatial_anchors_accounts_get_keys(subscription_id, resource_group_name, spatial_anchors_account_name, api_version)



Get Both of the 2 Keys of a Spatial Anchors Account

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.spatial_anchors_account_keys import SpatialAnchorsAccountKeys
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
    api_instance = openapi_client.KeyApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    spatial_anchors_account_name = 'spatial_anchors_account_name_example' # str | Name of an Mixed Reality Spatial Anchors Account.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_response = api_instance.spatial_anchors_accounts_get_keys(subscription_id, resource_group_name, spatial_anchors_account_name, api_version)
        print("The response of KeyApi->spatial_anchors_accounts_get_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeyApi->spatial_anchors_accounts_get_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **spatial_anchors_account_name** | **str**| Name of an Mixed Reality Spatial Anchors Account. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**SpatialAnchorsAccountKeys**](SpatialAnchorsAccountKeys.md)

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

# **spatial_anchors_accounts_regenerate_keys**
> SpatialAnchorsAccountKeys spatial_anchors_accounts_regenerate_keys(subscription_id, resource_group_name, spatial_anchors_account_name, api_version, spatial_anchors_account_key_regenerate)



Regenerate 1 Key of a Spatial Anchors Account

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.spatial_anchors_account_key_regenerate_request import SpatialAnchorsAccountKeyRegenerateRequest
from openapi_client.models.spatial_anchors_account_keys import SpatialAnchorsAccountKeys
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
    api_instance = openapi_client.KeyApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    spatial_anchors_account_name = 'spatial_anchors_account_name_example' # str | Name of an Mixed Reality Spatial Anchors Account.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    spatial_anchors_account_key_regenerate = openapi_client.SpatialAnchorsAccountKeyRegenerateRequest() # SpatialAnchorsAccountKeyRegenerateRequest | Specifying which key to be regenerated.

    try:
        api_response = api_instance.spatial_anchors_accounts_regenerate_keys(subscription_id, resource_group_name, spatial_anchors_account_name, api_version, spatial_anchors_account_key_regenerate)
        print("The response of KeyApi->spatial_anchors_accounts_regenerate_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeyApi->spatial_anchors_accounts_regenerate_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **spatial_anchors_account_name** | **str**| Name of an Mixed Reality Spatial Anchors Account. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **spatial_anchors_account_key_regenerate** | [**SpatialAnchorsAccountKeyRegenerateRequest**](SpatialAnchorsAccountKeyRegenerateRequest.md)| Specifying which key to be regenerated. | 

### Return type

[**SpatialAnchorsAccountKeys**](SpatialAnchorsAccountKeys.md)

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


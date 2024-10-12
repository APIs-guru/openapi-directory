# openapi_client.ZonesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**zones_create_or_update**](ZonesApi.md#zones_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnszones/{zoneName} | 
[**zones_delete**](ZonesApi.md#zones_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnszones/{zoneName} | 
[**zones_get**](ZonesApi.md#zones_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnszones/{zoneName} | 
[**zones_list_zones_in_resource_group**](ZonesApi.md#zones_list_zones_in_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnszones | 
[**zones_list_zones_in_subscription**](ZonesApi.md#zones_list_zones_in_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/dnszones | 


# **zones_create_or_update**
> Zone zones_create_or_update(resource_group_name, zone_name, api_version, subscription_id, parameters, if_match=if_match, if_none_match=if_none_match)



Creates a DNS zone within a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.zone import Zone
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
    api_instance = openapi_client.ZonesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    zone_name = 'zone_name_example' # str | The name of the zone without a terminating dot.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    parameters = openapi_client.Zone() # Zone | Parameters supplied to the CreateOrUpdate operation.
    if_match = 'if_match_example' # str | The etag of Zone. (optional)
    if_none_match = 'if_none_match_example' # str | Defines the If-None-Match condition. Set to '*' to force Create-If-Not-Exist. Other values will be ignored. (optional)

    try:
        api_response = api_instance.zones_create_or_update(resource_group_name, zone_name, api_version, subscription_id, parameters, if_match=if_match, if_none_match=if_none_match)
        print("The response of ZonesApi->zones_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ZonesApi->zones_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **zone_name** | **str**| The name of the zone without a terminating dot. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **parameters** | [**Zone**](Zone.md)| Parameters supplied to the CreateOrUpdate operation. | 
 **if_match** | **str**| The etag of Zone. | [optional] 
 **if_none_match** | **str**| Defines the If-None-Match condition. Set to &#39;*&#39; to force Create-If-Not-Exist. Other values will be ignored. | [optional] 

### Return type

[**Zone**](Zone.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**202** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **zones_delete**
> zones_delete(resource_group_name, zone_name, api_version, subscription_id, if_match=if_match)



Removes a DNS zone from a resource group.

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
    api_instance = openapi_client.ZonesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    zone_name = 'zone_name_example' # str | The name of the zone without a terminating dot.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    if_match = 'if_match_example' # str | Defines the If-Match condition. The delete operation will be performed only if the ETag of the zone on the server matches this value. (optional)

    try:
        api_instance.zones_delete(resource_group_name, zone_name, api_version, subscription_id, if_match=if_match)
    except Exception as e:
        print("Exception when calling ZonesApi->zones_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **zone_name** | **str**| The name of the zone without a terminating dot. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **if_match** | **str**| Defines the If-Match condition. The delete operation will be performed only if the ETag of the zone on the server matches this value. | [optional] 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **zones_get**
> Zone zones_get(resource_group_name, zone_name, api_version, subscription_id)



Gets a DNS zone.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.zone import Zone
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
    api_instance = openapi_client.ZonesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    zone_name = 'zone_name_example' # str | The name of the zone without a terminating dot.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.zones_get(resource_group_name, zone_name, api_version, subscription_id)
        print("The response of ZonesApi->zones_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ZonesApi->zones_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **zone_name** | **str**| The name of the zone without a terminating dot. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**Zone**](Zone.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **zones_list_zones_in_resource_group**
> ZoneListResult zones_list_zones_in_resource_group(resource_group_name, api_version, subscription_id, top=top, filter=filter)



Lists the DNS zones within a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.zone_list_result import ZoneListResult
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
    api_instance = openapi_client.ZonesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    top = 'top_example' # str | Query parameters. If null is passed returns the default number of zones. (optional)
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        api_response = api_instance.zones_list_zones_in_resource_group(resource_group_name, api_version, subscription_id, top=top, filter=filter)
        print("The response of ZonesApi->zones_list_zones_in_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ZonesApi->zones_list_zones_in_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **top** | **str**| Query parameters. If null is passed returns the default number of zones. | [optional] 
 **filter** | **str**| The filter to apply on the operation. | [optional] 

### Return type

[**ZoneListResult**](ZoneListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **zones_list_zones_in_subscription**
> ZoneListResult zones_list_zones_in_subscription(api_version, subscription_id, top=top, filter=filter)



Lists the DNS zones within a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.zone_list_result import ZoneListResult
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
    api_instance = openapi_client.ZonesApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    top = 'top_example' # str | Query parameters. If null is passed returns the default number of zones. (optional)
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        api_response = api_instance.zones_list_zones_in_subscription(api_version, subscription_id, top=top, filter=filter)
        print("The response of ZonesApi->zones_list_zones_in_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ZonesApi->zones_list_zones_in_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **top** | **str**| Query parameters. If null is passed returns the default number of zones. | [optional] 
 **filter** | **str**| The filter to apply on the operation. | [optional] 

### Return type

[**ZoneListResult**](ZoneListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


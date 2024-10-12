# openapi_client.OriginsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**origins_get**](OriginsApi.md#origins_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/origins/{originName} | 
[**origins_list_by_endpoint**](OriginsApi.md#origins_list_by_endpoint) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/origins | 
[**origins_update**](OriginsApi.md#origins_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/origins/{originName} | 


# **origins_get**
> Origin origins_get(resource_group_name, profile_name, endpoint_name, origin_name, subscription_id, api_version)



Gets an existing origin within an endpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.origin import Origin
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
    api_instance = openapi_client.OriginsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint under the profile which is unique globally.
    origin_name = 'origin_name_example' # str | Name of the origin which is unique within the endpoint.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.

    try:
        api_response = api_instance.origins_get(resource_group_name, profile_name, endpoint_name, origin_name, subscription_id, api_version)
        print("The response of OriginsApi->origins_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OriginsApi->origins_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **endpoint_name** | **str**| Name of the endpoint under the profile which is unique globally. | 
 **origin_name** | **str**| Name of the origin which is unique within the endpoint. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 

### Return type

[**Origin**](Origin.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **origins_list_by_endpoint**
> OriginListResult origins_list_by_endpoint(resource_group_name, profile_name, endpoint_name, subscription_id, api_version)



Lists all of the existing origins within an endpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.origin_list_result import OriginListResult
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
    api_instance = openapi_client.OriginsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint under the profile which is unique globally.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.

    try:
        api_response = api_instance.origins_list_by_endpoint(resource_group_name, profile_name, endpoint_name, subscription_id, api_version)
        print("The response of OriginsApi->origins_list_by_endpoint:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OriginsApi->origins_list_by_endpoint: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **endpoint_name** | **str**| Name of the endpoint under the profile which is unique globally. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 

### Return type

[**OriginListResult**](OriginListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **origins_update**
> Origin origins_update(resource_group_name, profile_name, endpoint_name, origin_name, subscription_id, api_version, origin_update_properties)



Updates an existing origin within an endpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.origin import Origin
from openapi_client.models.origin_update_parameters import OriginUpdateParameters
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
    api_instance = openapi_client.OriginsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint under the profile which is unique globally.
    origin_name = 'origin_name_example' # str | Name of the origin which is unique within the endpoint.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.
    origin_update_properties = openapi_client.OriginUpdateParameters() # OriginUpdateParameters | Origin properties

    try:
        api_response = api_instance.origins_update(resource_group_name, profile_name, endpoint_name, origin_name, subscription_id, api_version, origin_update_properties)
        print("The response of OriginsApi->origins_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OriginsApi->origins_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **endpoint_name** | **str**| Name of the endpoint under the profile which is unique globally. | 
 **origin_name** | **str**| Name of the origin which is unique within the endpoint. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 
 **origin_update_properties** | [**OriginUpdateParameters**](OriginUpdateParameters.md)| Origin properties | 

### Return type

[**Origin**](Origin.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


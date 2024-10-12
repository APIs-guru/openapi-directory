# openapi_client.AvailabilityStatusesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**availability_statuses_get_by_resource**](AvailabilityStatusesApi.md#availability_statuses_get_by_resource) | **GET** /{resourceUri}/providers/Microsoft.ResourceHealth/availabilityStatuses/current | 
[**availability_statuses_list**](AvailabilityStatusesApi.md#availability_statuses_list) | **GET** /{resourceUri}/providers/Microsoft.ResourceHealth/availabilityStatuses | 
[**availability_statuses_list_by_resource_group**](AvailabilityStatusesApi.md#availability_statuses_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceHealth/availabilityStatuses | 
[**availability_statuses_list_by_subscription_id**](AvailabilityStatusesApi.md#availability_statuses_list_by_subscription_id) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ResourceHealth/availabilityStatuses | 


# **availability_statuses_get_by_resource**
> AvailabilityStatus availability_statuses_get_by_resource(resource_uri, api_version, filter=filter, expand=expand)



Gets current availability status for a single resource

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.availability_status import AvailabilityStatus
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
    api_instance = openapi_client.AvailabilityStatusesApi(api_client)
    resource_uri = 'resource_uri_example' # str | The fully qualified ID of the resource, including the resource name and resource type. Currently the API support not nested and one nesting level resource types : /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name} and /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN (optional)
    expand = 'expand_example' # str | Setting $expand=recommendedactions in url query expands the recommendedactions in the response. (optional)

    try:
        api_response = api_instance.availability_statuses_get_by_resource(resource_uri, api_version, filter=filter, expand=expand)
        print("The response of AvailabilityStatusesApi->availability_statuses_get_by_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AvailabilityStatusesApi->availability_statuses_get_by_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The fully qualified ID of the resource, including the resource name and resource type. Currently the API support not nested and one nesting level resource types : /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name} and /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName} | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom&#x3D;MSDN | [optional] 
 **expand** | **str**| Setting $expand&#x3D;recommendedactions in url query expands the recommendedactions in the response. | [optional] 

### Return type

[**AvailabilityStatus**](AvailabilityStatus.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The body contains the current availability status for a single resource |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **availability_statuses_list**
> AvailabilityStatusListResult availability_statuses_list(resource_uri, api_version, filter=filter, expand=expand)



Lists all historical availability transitions and impacting events for a single resource. Use the nextLink property in the response to get the next page of availability status

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.availability_status_list_result import AvailabilityStatusListResult
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
    api_instance = openapi_client.AvailabilityStatusesApi(api_client)
    resource_uri = 'resource_uri_example' # str | The fully qualified ID of the resource, including the resource name and resource type. Currently the API support not nested and one nesting level resource types : /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name} and /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN (optional)
    expand = 'expand_example' # str | Setting $expand=recommendedactions in url query expands the recommendedactions in the response. (optional)

    try:
        api_response = api_instance.availability_statuses_list(resource_uri, api_version, filter=filter, expand=expand)
        print("The response of AvailabilityStatusesApi->availability_statuses_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AvailabilityStatusesApi->availability_statuses_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The fully qualified ID of the resource, including the resource name and resource type. Currently the API support not nested and one nesting level resource types : /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name} and /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName} | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom&#x3D;MSDN | [optional] 
 **expand** | **str**| Setting $expand&#x3D;recommendedactions in url query expands the recommendedactions in the response. | [optional] 

### Return type

[**AvailabilityStatusListResult**](AvailabilityStatusListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The body contains the list of the historical availability statuses for a single resource |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **availability_statuses_list_by_resource_group**
> AvailabilityStatusListResult availability_statuses_list_by_resource_group(subscription_id, resource_group_name, api_version, filter=filter, expand=expand)



Lists the current availability status for all the resources in the resource group. Use the nextLink property in the response to get the next page of availability statuses.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.availability_status_list_result import AvailabilityStatusListResult
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
    api_instance = openapi_client.AvailabilityStatusesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN (optional)
    expand = 'expand_example' # str | Setting $expand=recommendedactions in url query expands the recommendedactions in the response. (optional)

    try:
        api_response = api_instance.availability_statuses_list_by_resource_group(subscription_id, resource_group_name, api_version, filter=filter, expand=expand)
        print("The response of AvailabilityStatusesApi->availability_statuses_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AvailabilityStatusesApi->availability_statuses_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom&#x3D;MSDN | [optional] 
 **expand** | **str**| Setting $expand&#x3D;recommendedactions in url query expands the recommendedactions in the response. | [optional] 

### Return type

[**AvailabilityStatusListResult**](AvailabilityStatusListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The body contains the list of the current availability status for all the resources in the resource group |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **availability_statuses_list_by_subscription_id**
> AvailabilityStatusListResult availability_statuses_list_by_subscription_id(api_version, subscription_id, filter=filter, expand=expand)



Lists the current availability status for all the resources in the subscription. Use the nextLink property in the response to get the next page of availability statuses.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.availability_status_list_result import AvailabilityStatusListResult
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
    api_instance = openapi_client.AvailabilityStatusesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    filter = 'filter_example' # str | The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN (optional)
    expand = 'expand_example' # str | Setting $expand=recommendedactions in url query expands the recommendedactions in the response. (optional)

    try:
        api_response = api_instance.availability_statuses_list_by_subscription_id(api_version, subscription_id, filter=filter, expand=expand)
        print("The response of AvailabilityStatusesApi->availability_statuses_list_by_subscription_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AvailabilityStatusesApi->availability_statuses_list_by_subscription_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **filter** | **str**| The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom&#x3D;MSDN | [optional] 
 **expand** | **str**| Setting $expand&#x3D;recommendedactions in url query expands the recommendedactions in the response. | [optional] 

### Return type

[**AvailabilityStatusListResult**](AvailabilityStatusListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The body contains the list of the current availability status for all the resources in the subscription |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


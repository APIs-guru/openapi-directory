# openapi_client.DisksApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**disks_get**](DisksApi.md#disks_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/disks/{DiskId} | 
[**disks_list**](DisksApi.md#disks_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/disks | 


# **disks_get**
> DisksGet200Response disks_get(subscription_id, location, disk_id, api_version)



Returns the disk.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.disks_get200_response import DisksGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DisksApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Location of the resource.
    disk_id = 'disk_id_example' # str | The disk guid as identity.
    api_version = '2018-07-30-preview' # str | Client API Version. (default to '2018-07-30-preview')

    try:
        api_response = api_instance.disks_get(subscription_id, location, disk_id, api_version)
        print("The response of DisksApi->disks_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisksApi->disks_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Location of the resource. | 
 **disk_id** | **str**| The disk guid as identity. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2018-07-30-preview&#39;]

### Return type

[**DisksGet200Response**](DisksGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- The disk has been returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disks_list**
> DisksList200Response disks_list(subscription_id, location, api_version, user_subscription_id=user_subscription_id, status=status, share_path=share_path, count=count, start=start)



Returns a list of disks.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.disks_list200_response import DisksList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DisksApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Location of the resource.
    api_version = '2018-07-30-preview' # str | Client API Version. (default to '2018-07-30-preview')
    user_subscription_id = 'user_subscription_id_example' # str | User Subscription Id which the resource belongs to. (optional)
    status = 'status_example' # str | The parameters of disk state. (optional)
    share_path = 'share_path_example' # str | The source share which the resource belongs to. (optional)
    count = 56 # int | The maximum number of disks to return. (optional)
    start = 56 # int | The start index of disks in query. (optional)

    try:
        api_response = api_instance.disks_list(subscription_id, location, api_version, user_subscription_id=user_subscription_id, status=status, share_path=share_path, count=count, start=start)
        print("The response of DisksApi->disks_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisksApi->disks_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Location of the resource. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2018-07-30-preview&#39;]
 **user_subscription_id** | **str**| User Subscription Id which the resource belongs to. | [optional] 
 **status** | **str**| The parameters of disk state. | [optional] 
 **share_path** | **str**| The source share which the resource belongs to. | [optional] 
 **count** | **int**| The maximum number of disks to return. | [optional] 
 **start** | **int**| The start index of disks in query. | [optional] 

### Return type

[**DisksList200Response**](DisksList200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- The list of disks has been returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


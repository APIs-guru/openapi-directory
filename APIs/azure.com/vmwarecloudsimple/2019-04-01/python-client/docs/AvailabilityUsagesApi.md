# openapi_client.AvailabilityUsagesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**skus_availability_list**](AvailabilityUsagesApi.md#skus_availability_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/availabilities | Implements SkuAvailability List method
[**usages_list**](AvailabilityUsagesApi.md#usages_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/usages | Implements Usages List method


# **skus_availability_list**
> SkuAvailabilityListResponse skus_availability_list(subscription_id, region_id, api_version, sku_id=sku_id)

Implements SkuAvailability List method

Returns list of available resources in region

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sku_availability_list_response import SkuAvailabilityListResponse
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
    api_instance = openapi_client.AvailabilityUsagesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    region_id = 'region_id_example' # str | The region Id (westus, eastus)
    api_version = 'api_version_example' # str | Client API version.
    sku_id = 'sku_id_example' # str | sku id, if no sku is passed availability for all skus will be returned (optional)

    try:
        # Implements SkuAvailability List method
        api_response = api_instance.skus_availability_list(subscription_id, region_id, api_version, sku_id=sku_id)
        print("The response of AvailabilityUsagesApi->skus_availability_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AvailabilityUsagesApi->skus_availability_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **region_id** | **str**| The region Id (westus, eastus) | 
 **api_version** | **str**| Client API version. | 
 **sku_id** | **str**| sku id, if no sku is passed availability for all skus will be returned | [optional] 

### Return type

[**SkuAvailabilityListResponse**](SkuAvailabilityListResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**0** | General Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usages_list**
> UsageListResponse usages_list(subscription_id, region_id, api_version, filter=filter)

Implements Usages List method

Returns list of usage in region

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.usage_list_response import UsageListResponse
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
    api_instance = openapi_client.AvailabilityUsagesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    region_id = 'region_id_example' # str | The region Id (westus, eastus)
    api_version = 'api_version_example' # str | Client API version.
    filter = 'filter_example' # str | The filter to apply on the list operation. only name.value is allowed here as a filter e.g. $filter=name.value eq 'xxxx' (optional)

    try:
        # Implements Usages List method
        api_response = api_instance.usages_list(subscription_id, region_id, api_version, filter=filter)
        print("The response of AvailabilityUsagesApi->usages_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AvailabilityUsagesApi->usages_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **region_id** | **str**| The region Id (westus, eastus) | 
 **api_version** | **str**| Client API version. | 
 **filter** | **str**| The filter to apply on the list operation. only name.value is allowed here as a filter e.g. $filter&#x3D;name.value eq &#39;xxxx&#39; | [optional] 

### Return type

[**UsageListResponse**](UsageListResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**0** | General Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


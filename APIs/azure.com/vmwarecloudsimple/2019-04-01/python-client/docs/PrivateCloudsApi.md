# openapi_client.PrivateCloudsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**private_clouds_get**](PrivateCloudsApi.md#private_clouds_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName} | Implements private cloud GET method
[**private_clouds_list**](PrivateCloudsApi.md#private_clouds_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds | Implements private cloud list GET method


# **private_clouds_get**
> PrivateCloud private_clouds_get(subscription_id, pc_name, region_id, api_version)

Implements private cloud GET method

Returns private cloud by its name

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.private_cloud import PrivateCloud
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
    api_instance = openapi_client.PrivateCloudsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    pc_name = 'pc_name_example' # str | The private cloud name
    region_id = 'region_id_example' # str | The region Id (westus, eastus)
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Implements private cloud GET method
        api_response = api_instance.private_clouds_get(subscription_id, pc_name, region_id, api_version)
        print("The response of PrivateCloudsApi->private_clouds_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateCloudsApi->private_clouds_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **pc_name** | **str**| The private cloud name | 
 **region_id** | **str**| The region Id (westus, eastus) | 
 **api_version** | **str**| Client API version. | 

### Return type

[**PrivateCloud**](PrivateCloud.md)

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

# **private_clouds_list**
> PrivateCloudList private_clouds_list(subscription_id, region_id, api_version)

Implements private cloud list GET method

Returns list of private clouds in particular region

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.private_cloud_list import PrivateCloudList
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
    api_instance = openapi_client.PrivateCloudsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    region_id = 'region_id_example' # str | The region Id (westus, eastus)
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Implements private cloud list GET method
        api_response = api_instance.private_clouds_list(subscription_id, region_id, api_version)
        print("The response of PrivateCloudsApi->private_clouds_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateCloudsApi->private_clouds_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **region_id** | **str**| The region Id (westus, eastus) | 
 **api_version** | **str**| Client API version. | 

### Return type

[**PrivateCloudList**](PrivateCloudList.md)

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


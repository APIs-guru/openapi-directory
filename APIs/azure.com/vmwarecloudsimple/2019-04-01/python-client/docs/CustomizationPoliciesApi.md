# openapi_client.CustomizationPoliciesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customization_policies_get**](CustomizationPoliciesApi.md#customization_policies_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/customizationPolicies/{customizationPolicyName} | Implements get of customization policy
[**customization_policies_list**](CustomizationPoliciesApi.md#customization_policies_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/customizationPolicies | Implements get of customization policies list


# **customization_policies_get**
> CustomizationPolicy customization_policies_get(api_version, subscription_id, region_id, pc_name, customization_policy_name)

Implements get of customization policy

Returns customization policy by its name

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.customization_policy import CustomizationPolicy
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
    api_instance = openapi_client.CustomizationPoliciesApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    region_id = 'region_id_example' # str | The region Id (westus, eastus)
    pc_name = 'pc_name_example' # str | The private cloud name
    customization_policy_name = 'customization_policy_name_example' # str | customization policy name

    try:
        # Implements get of customization policy
        api_response = api_instance.customization_policies_get(api_version, subscription_id, region_id, pc_name, customization_policy_name)
        print("The response of CustomizationPoliciesApi->customization_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomizationPoliciesApi->customization_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription ID. | 
 **region_id** | **str**| The region Id (westus, eastus) | 
 **pc_name** | **str**| The private cloud name | 
 **customization_policy_name** | **str**| customization policy name | 

### Return type

[**CustomizationPolicy**](CustomizationPolicy.md)

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

# **customization_policies_list**
> CustomizationPoliciesListResponse customization_policies_list(subscription_id, region_id, pc_name, api_version, filter=filter)

Implements get of customization policies list

Returns list of customization policies in region for private cloud

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.customization_policies_list_response import CustomizationPoliciesListResponse
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
    api_instance = openapi_client.CustomizationPoliciesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    region_id = 'region_id_example' # str | The region Id (westus, eastus)
    pc_name = 'pc_name_example' # str | The private cloud name
    api_version = 'api_version_example' # str | Client API version.
    filter = 'filter_example' # str | The filter to apply on the list operation. only type is allowed here as a filter e.g. $filter=type eq 'xxxx' (optional)

    try:
        # Implements get of customization policies list
        api_response = api_instance.customization_policies_list(subscription_id, region_id, pc_name, api_version, filter=filter)
        print("The response of CustomizationPoliciesApi->customization_policies_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomizationPoliciesApi->customization_policies_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **region_id** | **str**| The region Id (westus, eastus) | 
 **pc_name** | **str**| The private cloud name | 
 **api_version** | **str**| Client API version. | 
 **filter** | **str**| The filter to apply on the list operation. only type is allowed here as a filter e.g. $filter&#x3D;type eq &#39;xxxx&#39; | [optional] 

### Return type

[**CustomizationPoliciesListResponse**](CustomizationPoliciesListResponse.md)

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


# openapi_client.CostsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**costs_create_or_update**](CostsApi.md#costs_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/costs/{name} | 
[**costs_get**](CostsApi.md#costs_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/costs/{name} | 


# **costs_create_or_update**
> LabCost costs_create_or_update(subscription_id, resource_group_name, lab_name, name, api_version, lab_cost)



Create or replace an existing cost.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.lab_cost import LabCost
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
    api_instance = openapi_client.CostsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the cost.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')
    lab_cost = openapi_client.LabCost() # LabCost | A cost item.

    try:
        api_response = api_instance.costs_create_or_update(subscription_id, resource_group_name, lab_name, name, api_version, lab_cost)
        print("The response of CostsApi->costs_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CostsApi->costs_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the cost. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]
 **lab_cost** | [**LabCost**](LabCost.md)| A cost item. | 

### Return type

[**LabCost**](LabCost.md)

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
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **costs_get**
> LabCost costs_get(subscription_id, resource_group_name, lab_name, name, api_version, expand=expand)



Get cost.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.lab_cost import LabCost
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
    api_instance = openapi_client.CostsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the cost.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($expand=labCostDetails)' (optional)

    try:
        api_response = api_instance.costs_get(subscription_id, resource_group_name, lab_name, name, api_version, expand=expand)
        print("The response of CostsApi->costs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CostsApi->costs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the cost. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($expand&#x3D;labCostDetails)&#39; | [optional] 

### Return type

[**LabCost**](LabCost.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


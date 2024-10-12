# openapi_client.PATCHApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iot_hub_resource_update**](PATCHApi.md#iot_hub_resource_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName} | Update an existing IoT Hubs tags.


# **iot_hub_resource_update**
> IotHubDescription iot_hub_resource_update(subscription_id, resource_group_name, resource_name, api_version, iot_hub_tags)

Update an existing IoT Hubs tags.

Update an existing IoT Hub tags. to update other fields use the CreateOrUpdate method

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.iot_hub_description import IotHubDescription
from openapi_client.models.tags_resource import TagsResource
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
    api_instance = openapi_client.PATCHApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group identifier.
    resource_name = 'resource_name_example' # str | Name of iot hub to update.
    api_version = 'api_version_example' # str | The version of the API.
    iot_hub_tags = openapi_client.TagsResource() # TagsResource | Updated tag information to set into the iot hub instance.

    try:
        # Update an existing IoT Hubs tags.
        api_response = api_instance.iot_hub_resource_update(subscription_id, resource_group_name, resource_name, api_version, iot_hub_tags)
        print("The response of PATCHApi->iot_hub_resource_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PATCHApi->iot_hub_resource_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| Resource group identifier. | 
 **resource_name** | **str**| Name of iot hub to update. | 
 **api_version** | **str**| The version of the API. | 
 **iot_hub_tags** | [**TagsResource**](TagsResource.md)| Updated tag information to set into the iot hub instance. | 

### Return type

[**IotHubDescription**](IotHubDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Iot Hub was successfully updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


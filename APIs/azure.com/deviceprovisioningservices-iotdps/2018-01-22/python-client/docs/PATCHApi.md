# openapi_client.PATCHApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iot_dps_resource_update**](PATCHApi.md#iot_dps_resource_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName} | Update an existing provisioning service&#39;s tags.


# **iot_dps_resource_update**
> ProvisioningServiceDescription iot_dps_resource_update(subscription_id, resource_group_name, provisioning_service_name, api_version, provisioning_service_tags)

Update an existing provisioning service's tags.

Update an existing provisioning service's tags. to update other fields use the CreateOrUpdate method

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.provisioning_service_description import ProvisioningServiceDescription
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
    provisioning_service_name = 'provisioning_service_name_example' # str | Name of provisioning service to create or update.
    api_version = 'api_version_example' # str | The version of the API.
    provisioning_service_tags = openapi_client.TagsResource() # TagsResource | Updated tag information to set into the provisioning service instance.

    try:
        # Update an existing provisioning service's tags.
        api_response = api_instance.iot_dps_resource_update(subscription_id, resource_group_name, provisioning_service_name, api_version, provisioning_service_tags)
        print("The response of PATCHApi->iot_dps_resource_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PATCHApi->iot_dps_resource_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| Resource group identifier. | 
 **provisioning_service_name** | **str**| Name of provisioning service to create or update. | 
 **api_version** | **str**| The version of the API. | 
 **provisioning_service_tags** | [**TagsResource**](TagsResource.md)| Updated tag information to set into the provisioning service instance. | 

### Return type

[**ProvisioningServiceDescription**](ProvisioningServiceDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Provisioning Service was successfully updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


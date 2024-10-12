# ApiManagementServiceResource

A single API Management service resource in List or Get response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the resource. | [optional] [readonly] 
**identity** | [**ApiManagementServiceIdentity**](ApiManagementServiceIdentity.md) |  | [optional] 
**location** | **str** | Resource location. | 
**properties** | [**ApiManagementServiceProperties**](ApiManagementServiceProperties.md) |  | 
**sku** | [**ApiManagementServiceSkuProperties**](ApiManagementServiceSkuProperties.md) |  | 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type for API Management resource is set to Microsoft.ApiManagement. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_management_service_resource import ApiManagementServiceResource

# TODO update the JSON string below
json = "{}"
# create an instance of ApiManagementServiceResource from a JSON string
api_management_service_resource_instance = ApiManagementServiceResource.from_json(json)
# print the JSON string representation of the object
print(ApiManagementServiceResource.to_json())

# convert the object into a dict
api_management_service_resource_dict = api_management_service_resource_instance.to_dict()
# create an instance of ApiManagementServiceResource from a dict
api_management_service_resource_from_dict = ApiManagementServiceResource.from_dict(api_management_service_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



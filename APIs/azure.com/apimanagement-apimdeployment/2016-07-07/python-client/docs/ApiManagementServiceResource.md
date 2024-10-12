# ApiManagementServiceResource

Description of an API Management service resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the resource. | [optional] 
**id** | **str** | The ID of the created API Management service. | [optional] [readonly] 
**location** | **str** | Datacenter location of the API Management service. | 
**name** | **str** | Name of the API Management service. | [optional] [readonly] 
**type** | **str** | Resource type of the API Management service. | [optional] [readonly] 
**properties** | [**ApiManagementServiceProperties**](ApiManagementServiceProperties.md) |  | [optional] 
**sku** | [**ApiManagementServiceSkuProperties**](ApiManagementServiceSkuProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | API Management service tags. A maximum of 10 tags can be provided for a resource, and each tag must have a key no greater than 128 characters (and a value no greater than 256 characters). | [optional] 

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



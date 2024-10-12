# ServiceResourceUpdate

The service resource for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ServiceUpdateProperties**](ServiceUpdateProperties.md) |  | [optional] 
**id** | **str** | Azure resource ID. | [optional] [readonly] 
**location** | **str** | Resource location. | 
**name** | **str** | Azure resource name. | [optional] [readonly] 
**type** | **str** | Azure resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_resource_update import ServiceResourceUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceResourceUpdate from a JSON string
service_resource_update_instance = ServiceResourceUpdate.from_json(json)
# print the JSON string representation of the object
print(ServiceResourceUpdate.to_json())

# convert the object into a dict
service_resource_update_dict = service_resource_update_instance.to_dict()
# create an instance of ServiceResourceUpdate from a dict
service_resource_update_from_dict = ServiceResourceUpdate.from_dict(service_resource_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



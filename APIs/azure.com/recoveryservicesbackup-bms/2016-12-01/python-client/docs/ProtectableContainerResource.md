# ProtectableContainerResource

Protectable Container Class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ProtectableContainer**](ProtectableContainer.md) |  | [optional] 
**e_tag** | **str** | Optional ETag. | [optional] 
**id** | **str** | Resource Id represents the complete path to the resource. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name associated with the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/... | [optional] [readonly] 

## Example

```python
from openapi_client.models.protectable_container_resource import ProtectableContainerResource

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectableContainerResource from a JSON string
protectable_container_resource_instance = ProtectableContainerResource.from_json(json)
# print the JSON string representation of the object
print(ProtectableContainerResource.to_json())

# convert the object into a dict
protectable_container_resource_dict = protectable_container_resource_instance.to_dict()
# create an instance of ProtectableContainerResource from a dict
protectable_container_resource_from_dict = ProtectableContainerResource.from_dict(protectable_container_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



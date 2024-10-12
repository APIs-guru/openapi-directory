# ProtectedItemResource

The base class for backup items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ProtectedItem**](ProtectedItem.md) |  | [optional] 
**e_tag** | **str** | Optional ETag. | [optional] 
**id** | **str** | Resource ID represents the complete path to the resource. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name associated with the resource. | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/... | [optional] 

## Example

```python
from openapi_client.models.protected_item_resource import ProtectedItemResource

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectedItemResource from a JSON string
protected_item_resource_instance = ProtectedItemResource.from_json(json)
# print the JSON string representation of the object
print(ProtectedItemResource.to_json())

# convert the object into a dict
protected_item_resource_dict = protected_item_resource_instance.to_dict()
# create an instance of ProtectedItemResource from a dict
protected_item_resource_from_dict = ProtectedItemResource.from_dict(protected_item_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



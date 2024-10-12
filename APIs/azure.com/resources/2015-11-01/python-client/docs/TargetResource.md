# TargetResource

Target resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Gets or sets the ID of the resource. | [optional] 
**resource_name** | **str** | Gets or sets the name of the resource. | [optional] 
**resource_type** | **str** | Gets or sets the type of the resource. | [optional] 

## Example

```python
from openapi_client.models.target_resource import TargetResource

# TODO update the JSON string below
json = "{}"
# create an instance of TargetResource from a JSON string
target_resource_instance = TargetResource.from_json(json)
# print the JSON string representation of the object
print(TargetResource.to_json())

# convert the object into a dict
target_resource_dict = target_resource_instance.to_dict()
# create an instance of TargetResource from a dict
target_resource_from_dict = TargetResource.from_dict(target_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



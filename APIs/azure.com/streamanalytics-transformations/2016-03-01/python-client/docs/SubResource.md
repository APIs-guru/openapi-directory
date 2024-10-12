# SubResource

The base sub-resource model definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.sub_resource import SubResource

# TODO update the JSON string below
json = "{}"
# create an instance of SubResource from a JSON string
sub_resource_instance = SubResource.from_json(json)
# print the JSON string representation of the object
print(SubResource.to_json())

# convert the object into a dict
sub_resource_dict = sub_resource_instance.to_dict()
# create an instance of SubResource from a dict
sub_resource_from_dict = SubResource.from_dict(sub_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



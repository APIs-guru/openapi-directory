# NestedCable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**label** | **str** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_cable import NestedCable

# TODO update the JSON string below
json = "{}"
# create an instance of NestedCable from a JSON string
nested_cable_instance = NestedCable.from_json(json)
# print the JSON string representation of the object
print(NestedCable.to_json())

# convert the object into a dict
nested_cable_dict = nested_cable_instance.to_dict()
# create an instance of NestedCable from a dict
nested_cable_from_dict = NestedCable.from_dict(nested_cable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



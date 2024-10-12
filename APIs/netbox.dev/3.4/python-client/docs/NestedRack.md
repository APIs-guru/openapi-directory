# NestedRack


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_count** | **int** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_rack import NestedRack

# TODO update the JSON string below
json = "{}"
# create an instance of NestedRack from a JSON string
nested_rack_instance = NestedRack.from_json(json)
# print the JSON string representation of the object
print(NestedRack.to_json())

# convert the object into a dict
nested_rack_dict = nested_rack_instance.to_dict()
# create an instance of NestedRack from a dict
nested_rack_from_dict = NestedRack.from_dict(nested_rack_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



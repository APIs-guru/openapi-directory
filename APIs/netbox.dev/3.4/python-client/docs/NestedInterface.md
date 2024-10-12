# NestedInterface


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**occupied** | **bool** |  | [optional] [readonly] 
**cable** | **int** |  | [optional] 
**device** | [**NestedDevice**](NestedDevice.md) |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_interface import NestedInterface

# TODO update the JSON string below
json = "{}"
# create an instance of NestedInterface from a JSON string
nested_interface_instance = NestedInterface.from_json(json)
# print the JSON string representation of the object
print(NestedInterface.to_json())

# convert the object into a dict
nested_interface_dict = nested_interface_instance.to_dict()
# create an instance of NestedInterface from a dict
nested_interface_from_dict = NestedInterface.from_dict(nested_interface_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RackUnit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device** | [**NestedDevice**](NestedDevice.md) |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**face** | [**Face1**](Face1.md) |  | [optional] 
**id** | **float** |  | [optional] [readonly] 
**name** | **str** |  | [optional] [readonly] 
**occupied** | **bool** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.rack_unit import RackUnit

# TODO update the JSON string below
json = "{}"
# create an instance of RackUnit from a JSON string
rack_unit_instance = RackUnit.from_json(json)
# print the JSON string representation of the object
print(RackUnit.to_json())

# convert the object into a dict
rack_unit_dict = rack_unit_instance.to_dict()
# create an instance of RackUnit from a dict
rack_unit_from_dict = RackUnit.from_dict(rack_unit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



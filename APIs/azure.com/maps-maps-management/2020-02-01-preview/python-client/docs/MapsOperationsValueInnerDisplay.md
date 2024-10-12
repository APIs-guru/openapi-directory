# MapsOperationsValueInnerDisplay

The human-readable description of the operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the operation. | [optional] [readonly] 
**operation** | **str** | The action that users can perform, based on their permission level. | [optional] [readonly] 
**provider** | **str** | Service provider: Microsoft Maps. | [optional] [readonly] 
**resource** | **str** | Resource on which the operation is performed. | [optional] [readonly] 

## Example

```python
from openapi_client.models.maps_operations_value_inner_display import MapsOperationsValueInnerDisplay

# TODO update the JSON string below
json = "{}"
# create an instance of MapsOperationsValueInnerDisplay from a JSON string
maps_operations_value_inner_display_instance = MapsOperationsValueInnerDisplay.from_json(json)
# print the JSON string representation of the object
print(MapsOperationsValueInnerDisplay.to_json())

# convert the object into a dict
maps_operations_value_inner_display_dict = maps_operations_value_inner_display_instance.to_dict()
# create an instance of MapsOperationsValueInnerDisplay from a dict
maps_operations_value_inner_display_from_dict = MapsOperationsValueInnerDisplay.from_dict(maps_operations_value_inner_display_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



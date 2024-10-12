# MapsOperationsValueInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | [**MapsOperationsValueInnerDisplay**](MapsOperationsValueInnerDisplay.md) |  | [optional] 
**name** | **str** | Operation name: {provider}/{resource}/{operation}. | [optional] [readonly] 
**origin** | **str** | The origin of the operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.maps_operations_value_inner import MapsOperationsValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of MapsOperationsValueInner from a JSON string
maps_operations_value_inner_instance = MapsOperationsValueInner.from_json(json)
# print the JSON string representation of the object
print(MapsOperationsValueInner.to_json())

# convert the object into a dict
maps_operations_value_inner_dict = maps_operations_value_inner_instance.to_dict()
# create an instance of MapsOperationsValueInner from a dict
maps_operations_value_inner_from_dict = MapsOperationsValueInner.from_dict(maps_operations_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



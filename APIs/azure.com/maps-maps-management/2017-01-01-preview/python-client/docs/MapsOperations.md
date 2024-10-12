# MapsOperations

The set of operations available for Maps.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[MapsOperationsValueInner]**](MapsOperationsValueInner.md) | An operation available for Maps. | [optional] [readonly] 

## Example

```python
from openapi_client.models.maps_operations import MapsOperations

# TODO update the JSON string below
json = "{}"
# create an instance of MapsOperations from a JSON string
maps_operations_instance = MapsOperations.from_json(json)
# print the JSON string representation of the object
print(MapsOperations.to_json())

# convert the object into a dict
maps_operations_dict = maps_operations_instance.to_dict()
# create an instance of MapsOperations from a dict
maps_operations_from_dict = MapsOperations.from_dict(maps_operations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



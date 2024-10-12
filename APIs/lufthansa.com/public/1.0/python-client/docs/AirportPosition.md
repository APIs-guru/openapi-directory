# AirportPosition

Physical location of an airport. This data section is optional and therefore not always present.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coordinate** | [**Coordinate**](Coordinate.md) |  | [optional] 

## Example

```python
from openapi_client.models.airport_position import AirportPosition

# TODO update the JSON string below
json = "{}"
# create an instance of AirportPosition from a JSON string
airport_position_instance = AirportPosition.from_json(json)
# print the JSON string representation of the object
print(AirportPosition.to_json())

# convert the object into a dict
airport_position_dict = airport_position_instance.to_dict()
# create an instance of AirportPosition from a dict
airport_position_from_dict = AirportPosition.from_dict(airport_position_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



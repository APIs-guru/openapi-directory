# DecimalPlaces

Indicates whether decimal places should be enforced, and how many digits it should show.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digits** | **int** | The number of digits after decimal to display | [optional] 
**is_enforced** | **bool** | Indicates whether decimal point setting should be enforced | [optional] 

## Example

```python
from openapi_client.models.decimal_places import DecimalPlaces

# TODO update the JSON string below
json = "{}"
# create an instance of DecimalPlaces from a JSON string
decimal_places_instance = DecimalPlaces.from_json(json)
# print the JSON string representation of the object
print(DecimalPlaces.to_json())

# convert the object into a dict
decimal_places_dict = decimal_places_instance.to_dict()
# create an instance of DecimalPlaces from a dict
decimal_places_from_dict = DecimalPlaces.from_dict(decimal_places_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



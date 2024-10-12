# AirportNames

Container for airport names.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | [**List[Name]**](Name.md) | Array: language specific full name of airport. | [optional] 

## Example

```python
from openapi_client.models.airport_names import AirportNames

# TODO update the JSON string below
json = "{}"
# create an instance of AirportNames from a JSON string
airport_names_instance = AirportNames.from_json(json)
# print the JSON string representation of the object
print(AirportNames.to_json())

# convert the object into a dict
airport_names_dict = airport_names_instance.to_dict()
# create an instance of AirportNames from a dict
airport_names_from_dict = AirportNames.from_dict(airport_names_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# Flight

Flight

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | **date** |  | [optional] 
**rate_or_cost** | **str** | Rate or cost of this flight. | [optional] 
**start_date** | **date** |  | [optional] 
**units** | **str** | Units of this flight. | [optional] 

## Example

```python
from openapi_client.models.flight import Flight

# TODO update the JSON string below
json = "{}"
# create an instance of Flight from a JSON string
flight_instance = Flight.from_json(json)
# print the JSON string representation of the object
print(Flight.to_json())

# convert the object into a dict
flight_dict = flight_instance.to_dict()
# create an instance of Flight from a dict
flight_from_dict = Flight.from_dict(flight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



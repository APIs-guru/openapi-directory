# AirportsAPIModelsAirportList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**airport_name** | **str** |  | [optional] 
**airport_type** | **str** |  | [optional] 
**iata_code** | **str** |  | [optional] 
**latitude** | **str** |  | [optional] 
**location** | **str** |  | [optional] 
**longitude** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.airports_api_models_airport_list import AirportsAPIModelsAirportList

# TODO update the JSON string below
json = "{}"
# create an instance of AirportsAPIModelsAirportList from a JSON string
airports_api_models_airport_list_instance = AirportsAPIModelsAirportList.from_json(json)
# print the JSON string representation of the object
print(AirportsAPIModelsAirportList.to_json())

# convert the object into a dict
airports_api_models_airport_list_dict = airports_api_models_airport_list_instance.to_dict()
# create an instance of AirportsAPIModelsAirportList from a dict
airports_api_models_airport_list_from_dict = AirportsAPIModelsAirportList.from_dict(airports_api_models_airport_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



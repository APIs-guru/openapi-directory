# AirportsAPIModelsAirport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | [**AirportsAPIModelsLocationCountry**](AirportsAPIModelsLocationCountry.md) |  | [optional] 
**frequency** | [**List[AirportsAPIModelsFrequency]**](AirportsAPIModelsFrequency.md) |  | [optional] 
**region** | [**AirportsAPIModelsLocationRegion**](AirportsAPIModelsLocationRegion.md) |  | [optional] 
**runway** | [**List[AirportsAPIModelsRunway]**](AirportsAPIModelsRunway.md) |  | [optional] 
**airport_name** | **str** |  | [optional] 
**airport_type** | **str** |  | [optional] 
**elevation_ft** | **str** |  | [optional] 
**gps_code** | **str** |  | [optional] 
**iata_code** | **str** |  | [optional] 
**latitude** | **str** |  | [optional] 
**local_code** | **str** |  | [optional] 
**location** | **str** |  | [optional] 
**logo_url** | **str** |  | [optional] 
**longitude** | **str** |  | [optional] 
**scheduled_service** | **bool** |  | [optional] 
**website** | **str** |  | [optional] 
**wikipedia** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.airports_api_models_airport import AirportsAPIModelsAirport

# TODO update the JSON string below
json = "{}"
# create an instance of AirportsAPIModelsAirport from a JSON string
airports_api_models_airport_instance = AirportsAPIModelsAirport.from_json(json)
# print the JSON string representation of the object
print(AirportsAPIModelsAirport.to_json())

# convert the object into a dict
airports_api_models_airport_dict = airports_api_models_airport_instance.to_dict()
# create an instance of AirportsAPIModelsAirport from a dict
airports_api_models_airport_from_dict = AirportsAPIModelsAirport.from_dict(airports_api_models_airport_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



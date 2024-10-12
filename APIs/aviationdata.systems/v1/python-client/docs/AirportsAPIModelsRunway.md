# AirportsAPIModelsRunway


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**closed** | **bool** |  | [optional] 
**h_e_latitude** | **str** |  | [optional] 
**h_e_longitude** | **str** |  | [optional] 
**he_displaced_threshold_ft** | **str** |  | [optional] 
**he_elevation_ft** | **str** |  | [optional] 
**he_heading_deg** | **str** |  | [optional] 
**le_displaced_threshold_ft** | **str** |  | [optional] 
**le_elevation_ft** | **str** |  | [optional] 
**le_heading_deg** | **str** |  | [optional] 
**le_latitude** | **str** |  | [optional] 
**le_longitude** | **str** |  | [optional] 
**length_ft** | **str** |  | [optional] 
**lighted** | **bool** |  | [optional] 
**surface_type** | **str** |  | [optional] 
**width_ft** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.airports_api_models_runway import AirportsAPIModelsRunway

# TODO update the JSON string below
json = "{}"
# create an instance of AirportsAPIModelsRunway from a JSON string
airports_api_models_runway_instance = AirportsAPIModelsRunway.from_json(json)
# print the JSON string representation of the object
print(AirportsAPIModelsRunway.to_json())

# convert the object into a dict
airports_api_models_runway_dict = airports_api_models_runway_instance.to_dict()
# create an instance of AirportsAPIModelsRunway from a dict
airports_api_models_runway_from_dict = AirportsAPIModelsRunway.from_dict(airports_api_models_runway_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



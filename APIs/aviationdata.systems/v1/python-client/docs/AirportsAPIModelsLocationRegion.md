# AirportsAPIModelsLocationRegion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**local_code** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**region_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.airports_api_models_location_region import AirportsAPIModelsLocationRegion

# TODO update the JSON string below
json = "{}"
# create an instance of AirportsAPIModelsLocationRegion from a JSON string
airports_api_models_location_region_instance = AirportsAPIModelsLocationRegion.from_json(json)
# print the JSON string representation of the object
print(AirportsAPIModelsLocationRegion.to_json())

# convert the object into a dict
airports_api_models_location_region_dict = airports_api_models_location_region_instance.to_dict()
# create an instance of AirportsAPIModelsLocationRegion from a dict
airports_api_models_location_region_from_dict = AirportsAPIModelsLocationRegion.from_dict(airports_api_models_location_region_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



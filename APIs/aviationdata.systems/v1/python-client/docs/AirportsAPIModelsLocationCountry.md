# AirportsAPIModelsLocationCountry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** |  | [optional] 
**flag_url** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.airports_api_models_location_country import AirportsAPIModelsLocationCountry

# TODO update the JSON string below
json = "{}"
# create an instance of AirportsAPIModelsLocationCountry from a JSON string
airports_api_models_location_country_instance = AirportsAPIModelsLocationCountry.from_json(json)
# print the JSON string representation of the object
print(AirportsAPIModelsLocationCountry.to_json())

# convert the object into a dict
airports_api_models_location_country_dict = airports_api_models_location_country_instance.to_dict()
# create an instance of AirportsAPIModelsLocationCountry from a dict
airports_api_models_location_country_from_dict = AirportsAPIModelsLocationCountry.from_dict(airports_api_models_location_country_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



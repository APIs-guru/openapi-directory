# AirportsAPIModelsFrequency


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**desc** | **str** |  | [optional] 
**frequency_mhz** | **str** |  | [optional] 
**frequency_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.airports_api_models_frequency import AirportsAPIModelsFrequency

# TODO update the JSON string below
json = "{}"
# create an instance of AirportsAPIModelsFrequency from a JSON string
airports_api_models_frequency_instance = AirportsAPIModelsFrequency.from_json(json)
# print the JSON string representation of the object
print(AirportsAPIModelsFrequency.to_json())

# convert the object into a dict
airports_api_models_frequency_dict = airports_api_models_frequency_instance.to_dict()
# create an instance of AirportsAPIModelsFrequency from a dict
airports_api_models_frequency_from_dict = AirportsAPIModelsFrequency.from_dict(airports_api_models_frequency_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



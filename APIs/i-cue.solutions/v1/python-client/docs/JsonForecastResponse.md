# JsonForecastResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PlanningLevelDataDto]**](PlanningLevelDataDto.md) |  | [optional] 
**planning_level_id** | **str** |  | [optional] 
**start_date** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.json_forecast_response import JsonForecastResponse

# TODO update the JSON string below
json = "{}"
# create an instance of JsonForecastResponse from a JSON string
json_forecast_response_instance = JsonForecastResponse.from_json(json)
# print the JSON string representation of the object
print(JsonForecastResponse.to_json())

# convert the object into a dict
json_forecast_response_dict = json_forecast_response_instance.to_dict()
# create an instance of JsonForecastResponse from a dict
json_forecast_response_from_dict = JsonForecastResponse.from_dict(json_forecast_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



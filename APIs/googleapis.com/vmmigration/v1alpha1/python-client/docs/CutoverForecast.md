# CutoverForecast

CutoverForecast holds information about future CutoverJobs of a MigratingVm.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**estimated_cutover_job_duration** | **str** | Output only. Estimation of the CutoverJob duration. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cutover_forecast import CutoverForecast

# TODO update the JSON string below
json = "{}"
# create an instance of CutoverForecast from a JSON string
cutover_forecast_instance = CutoverForecast.from_json(json)
# print the JSON string representation of the object
print(CutoverForecast.to_json())

# convert the object into a dict
cutover_forecast_dict = cutover_forecast_instance.to_dict()
# create an instance of CutoverForecast from a dict
cutover_forecast_from_dict = CutoverForecast.from_dict(cutover_forecast_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



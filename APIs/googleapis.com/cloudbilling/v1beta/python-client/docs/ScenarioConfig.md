# ScenarioConfig

Configuration for a CostScenario. Specifies how costs are calculated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**estimate_duration** | **str** | Time frame for the estimate. Workloads must specify usage for this duration. Duration must be at least 1 hour (3,600 seconds) and at most 10 years (315,360,000 seconds). The calculations for years and months are based on a 730-hour (2,628,000-second) month. For durations longer than one month (2,628,000 seconds), the duration is rounded up to the next month, so the estimate shows you the costs for full months. For example, a duration of 3,232,800 seconds (roughly 5 weeks) is rounded up to 2 months. | [optional] 

## Example

```python
from openapi_client.models.scenario_config import ScenarioConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ScenarioConfig from a JSON string
scenario_config_instance = ScenarioConfig.from_json(json)
# print the JSON string representation of the object
print(ScenarioConfig.to_json())

# convert the object into a dict
scenario_config_dict = scenario_config_instance.to_dict()
# create an instance of ScenarioConfig from a dict
scenario_config_from_dict = ScenarioConfig.from_dict(scenario_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



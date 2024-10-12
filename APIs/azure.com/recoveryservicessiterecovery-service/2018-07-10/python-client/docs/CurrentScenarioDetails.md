# CurrentScenarioDetails

Current scenario details of the protected entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **str** | ARM Id of the job being executed. | [optional] 
**scenario_name** | **str** | Scenario name. | [optional] 
**start_time** | **datetime** | Start time of the workflow. | [optional] 

## Example

```python
from openapi_client.models.current_scenario_details import CurrentScenarioDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CurrentScenarioDetails from a JSON string
current_scenario_details_instance = CurrentScenarioDetails.from_json(json)
# print the JSON string representation of the object
print(CurrentScenarioDetails.to_json())

# convert the object into a dict
current_scenario_details_dict = current_scenario_details_instance.to_dict()
# create an instance of CurrentScenarioDetails from a dict
current_scenario_details_from_dict = CurrentScenarioDetails.from_dict(current_scenario_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



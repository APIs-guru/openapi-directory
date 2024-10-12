# TestHarnessScenarioModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scenario_json** | **object** |  | [optional] 
**scenario_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.test_harness_scenario_model import TestHarnessScenarioModel

# TODO update the JSON string below
json = "{}"
# create an instance of TestHarnessScenarioModel from a JSON string
test_harness_scenario_model_instance = TestHarnessScenarioModel.from_json(json)
# print the JSON string representation of the object
print(TestHarnessScenarioModel.to_json())

# convert the object into a dict
test_harness_scenario_model_dict = test_harness_scenario_model_instance.to_dict()
# create an instance of TestHarnessScenarioModel from a dict
test_harness_scenario_model_from_dict = TestHarnessScenarioModel.from_dict(test_harness_scenario_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



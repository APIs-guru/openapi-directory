# OrchestratorVersionProfileListResult

The list of versions for supported orchestrators.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the orchestrator version profile list result. | [optional] [readonly] 
**name** | **str** | Name of the orchestrator version profile list result. | [optional] [readonly] 
**properties** | [**OrchestratorVersionProfileProperties**](OrchestratorVersionProfileProperties.md) |  | 
**type** | **str** | Type of the orchestrator version profile list result. | [optional] [readonly] 

## Example

```python
from openapi_client.models.orchestrator_version_profile_list_result import OrchestratorVersionProfileListResult

# TODO update the JSON string below
json = "{}"
# create an instance of OrchestratorVersionProfileListResult from a JSON string
orchestrator_version_profile_list_result_instance = OrchestratorVersionProfileListResult.from_json(json)
# print the JSON string representation of the object
print(OrchestratorVersionProfileListResult.to_json())

# convert the object into a dict
orchestrator_version_profile_list_result_dict = orchestrator_version_profile_list_result_instance.to_dict()
# create an instance of OrchestratorVersionProfileListResult from a dict
orchestrator_version_profile_list_result_from_dict = OrchestratorVersionProfileListResult.from_dict(orchestrator_version_profile_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



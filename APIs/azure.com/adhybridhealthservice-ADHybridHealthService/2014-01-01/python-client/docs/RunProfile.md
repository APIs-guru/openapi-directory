# RunProfile

Describes the run profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The run profile Id. | [optional] 
**name** | **str** | The run profile name | [optional] 
**run_steps** | [**List[RunStep]**](RunStep.md) | The run steps of the run profile. | [optional] 

## Example

```python
from openapi_client.models.run_profile import RunProfile

# TODO update the JSON string below
json = "{}"
# create an instance of RunProfile from a JSON string
run_profile_instance = RunProfile.from_json(json)
# print the JSON string representation of the object
print(RunProfile.to_json())

# convert the object into a dict
run_profile_dict = run_profile_instance.to_dict()
# create an instance of RunProfile from a dict
run_profile_from_dict = RunProfile.from_dict(run_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



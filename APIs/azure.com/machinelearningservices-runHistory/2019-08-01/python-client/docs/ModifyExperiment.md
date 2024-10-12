# ModifyExperiment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archive** | **bool** |  | [optional] 
**description** | **str** |  | [optional] 
**tags** | **Dict[str, str]** |  | [optional] 

## Example

```python
from openapi_client.models.modify_experiment import ModifyExperiment

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyExperiment from a JSON string
modify_experiment_instance = ModifyExperiment.from_json(json)
# print the JSON string representation of the object
print(ModifyExperiment.to_json())

# convert the object into a dict
modify_experiment_dict = modify_experiment_instance.to_dict()
# create an instance of ModifyExperiment from a dict
modify_experiment_from_dict = ModifyExperiment.from_dict(modify_experiment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



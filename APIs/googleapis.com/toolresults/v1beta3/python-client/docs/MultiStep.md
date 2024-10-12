# MultiStep

Details when multiple steps are run with the same configuration as a group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**multistep_number** | **int** | Unique int given to each step. Ranges from 0(inclusive) to total number of steps(exclusive). The primary step is 0. | [optional] 
**primary_step** | [**PrimaryStep**](PrimaryStep.md) |  | [optional] 
**primary_step_id** | **str** | Step Id of the primary (original) step, which might be this step. | [optional] 

## Example

```python
from openapi_client.models.multi_step import MultiStep

# TODO update the JSON string below
json = "{}"
# create an instance of MultiStep from a JSON string
multi_step_instance = MultiStep.from_json(json)
# print the JSON string representation of the object
print(MultiStep.to_json())

# convert the object into a dict
multi_step_dict = multi_step_instance.to_dict()
# create an instance of MultiStep from a dict
multi_step_from_dict = MultiStep.from_dict(multi_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



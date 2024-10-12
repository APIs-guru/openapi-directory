# BatchReleaseCriteria

The batch release criteria.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_size** | **int** | The batch size in bytes. | [optional] 
**message_count** | **int** | The message count. | [optional] 
**recurrence** | [**WorkflowTriggerRecurrence**](WorkflowTriggerRecurrence.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_release_criteria import BatchReleaseCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of BatchReleaseCriteria from a JSON string
batch_release_criteria_instance = BatchReleaseCriteria.from_json(json)
# print the JSON string representation of the object
print(BatchReleaseCriteria.to_json())

# convert the object into a dict
batch_release_criteria_dict = batch_release_criteria_instance.to_dict()
# create an instance of BatchReleaseCriteria from a dict
batch_release_criteria_from_dict = BatchReleaseCriteria.from_dict(batch_release_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



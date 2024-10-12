# ImportTaskHistory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | 
**next_state** | **str** |  | 
**prev_state** | **str** |  | 

## Example

```python
from openapi_client.models.import_task_history import ImportTaskHistory

# TODO update the JSON string below
json = "{}"
# create an instance of ImportTaskHistory from a JSON string
import_task_history_instance = ImportTaskHistory.from_json(json)
# print the JSON string representation of the object
print(ImportTaskHistory.to_json())

# convert the object into a dict
import_task_history_dict = import_task_history_instance.to_dict()
# create an instance of ImportTaskHistory from a dict
import_task_history_from_dict = ImportTaskHistory.from_dict(import_task_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



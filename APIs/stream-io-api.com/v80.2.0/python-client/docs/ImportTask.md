# ImportTask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | 
**history** | [**List[ImportTaskHistory]**](ImportTaskHistory.md) |  | 
**id** | **str** |  | 
**mode** | **str** |  | 
**path** | **str** |  | 
**result** | **object** |  | [optional] 
**size** | **int** |  | [optional] 
**state** | **str** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from openapi_client.models.import_task import ImportTask

# TODO update the JSON string below
json = "{}"
# create an instance of ImportTask from a JSON string
import_task_instance = ImportTask.from_json(json)
# print the JSON string representation of the object
print(ImportTask.to_json())

# convert the object into a dict
import_task_dict = import_task_instance.to_dict()
# create an instance of ImportTask from a dict
import_task_from_dict = ImportTask.from_dict(import_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



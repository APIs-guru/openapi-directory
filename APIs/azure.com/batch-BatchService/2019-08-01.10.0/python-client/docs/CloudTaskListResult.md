# CloudTaskListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_next_link** | **str** |  | [optional] 
**value** | [**List[CloudTask]**](CloudTask.md) |  | [optional] 

## Example

```python
from openapi_client.models.cloud_task_list_result import CloudTaskListResult

# TODO update the JSON string below
json = "{}"
# create an instance of CloudTaskListResult from a JSON string
cloud_task_list_result_instance = CloudTaskListResult.from_json(json)
# print the JSON string representation of the object
print(CloudTaskListResult.to_json())

# convert the object into a dict
cloud_task_list_result_dict = cloud_task_list_result_instance.to_dict()
# create an instance of CloudTaskListResult from a dict
cloud_task_list_result_from_dict = CloudTaskListResult.from_dict(cloud_task_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RepairTaskUpdateInfo

Describes the result of an operation that created or updated a repair task.  This type supports the Service Fabric platform; it is not meant to be used directly from your code. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **str** | The new version of the repair task. | 

## Example

```python
from openapi_client.models.repair_task_update_info import RepairTaskUpdateInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RepairTaskUpdateInfo from a JSON string
repair_task_update_info_instance = RepairTaskUpdateInfo.from_json(json)
# print the JSON string representation of the object
print(RepairTaskUpdateInfo.to_json())

# convert the object into a dict
repair_task_update_info_dict = repair_task_update_info_instance.to_dict()
# create an instance of RepairTaskUpdateInfo from a dict
repair_task_update_info_from_dict = RepairTaskUpdateInfo.from_dict(repair_task_update_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



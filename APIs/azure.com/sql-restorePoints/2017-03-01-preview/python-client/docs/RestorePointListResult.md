# RestorePointListResult

A list of long term retention backups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[RestorePoint]**](RestorePoint.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.restore_point_list_result import RestorePointListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RestorePointListResult from a JSON string
restore_point_list_result_instance = RestorePointListResult.from_json(json)
# print the JSON string representation of the object
print(RestorePointListResult.to_json())

# convert the object into a dict
restore_point_list_result_dict = restore_point_list_result_instance.to_dict()
# create an instance of RestorePointListResult from a dict
restore_point_list_result_from_dict = RestorePointListResult.from_dict(restore_point_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



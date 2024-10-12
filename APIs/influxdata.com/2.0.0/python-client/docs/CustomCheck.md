# CustomCheck


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] [readonly] 
**description** | **str** | An optional description of the check. | [optional] 
**id** | **str** |  | [optional] [readonly] 
**labels** | [**List[Label]**](Label.md) |  | [optional] 
**last_run_error** | **str** |  | [optional] [readonly] 
**last_run_status** | **str** |  | [optional] [readonly] 
**latest_completed** | **datetime** | Timestamp of latest scheduled, completed run, RFC3339. | [optional] [readonly] 
**links** | [**CheckBaseLinks**](CheckBaseLinks.md) |  | [optional] 
**name** | **str** |  | 
**org_id** | **str** | The ID of the organization that owns this check. | 
**owner_id** | **str** | The ID of creator used to create this check. | [optional] [readonly] 
**query** | [**DashboardQuery**](DashboardQuery.md) |  | 
**status** | [**TaskStatusType**](TaskStatusType.md) |  | [optional] 
**task_id** | **str** | The ID of the task associated with this check. | [optional] 
**updated_at** | **datetime** |  | [optional] [readonly] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.custom_check import CustomCheck

# TODO update the JSON string below
json = "{}"
# create an instance of CustomCheck from a JSON string
custom_check_instance = CustomCheck.from_json(json)
# print the JSON string representation of the object
print(CustomCheck.to_json())

# convert the object into a dict
custom_check_dict = custom_check_instance.to_dict()
# create an instance of CustomCheck from a dict
custom_check_from_dict = CustomCheck.from_dict(custom_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



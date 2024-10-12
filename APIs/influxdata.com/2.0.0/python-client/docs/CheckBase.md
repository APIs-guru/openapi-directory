# CheckBase


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

## Example

```python
from openapi_client.models.check_base import CheckBase

# TODO update the JSON string below
json = "{}"
# create an instance of CheckBase from a JSON string
check_base_instance = CheckBase.from_json(json)
# print the JSON string representation of the object
print(CheckBase.to_json())

# convert the object into a dict
check_base_dict = check_base_instance.to_dict()
# create an instance of CheckBase from a dict
check_base_from_dict = CheckBase.from_dict(check_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# Dashboard

Details of a dashboard.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automatic_refresh_ms** | **int** | The automatic refresh interval for the dashboard in milliseconds. | [optional] [readonly] 
**description** | **str** |  | [optional] 
**edit_permissions** | [**List[SharePermission]**](SharePermission.md) | The details of any edit share permissions for the dashboard. | [optional] [readonly] 
**id** | **str** | The ID of the dashboard. | [optional] [readonly] 
**is_favourite** | **bool** | Whether the dashboard is selected as a favorite by the user. | [optional] [readonly] 
**is_writable** | **bool** | Whether the current user has permission to edit the dashboard. | [optional] [readonly] 
**name** | **str** | The name of the dashboard. | [optional] [readonly] 
**owner** | [**UserBean**](UserBean.md) | The owner of the dashboard. | [optional] [readonly] 
**popularity** | **int** | The number of users who have this dashboard as a favorite. | [optional] [readonly] 
**rank** | **int** | The rank of this dashboard. | [optional] [readonly] 
**var_self** | **str** | The URL of these dashboard details. | [optional] [readonly] 
**share_permissions** | [**List[SharePermission]**](SharePermission.md) | The details of any view share permissions for the dashboard. | [optional] [readonly] 
**system_dashboard** | **bool** | Whether the current dashboard is system dashboard. | [optional] [readonly] 
**view** | **str** | The URL of the dashboard. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dashboard import Dashboard

# TODO update the JSON string below
json = "{}"
# create an instance of Dashboard from a JSON string
dashboard_instance = Dashboard.from_json(json)
# print the JSON string representation of the object
print(Dashboard.to_json())

# convert the object into a dict
dashboard_dict = dashboard_instance.to_dict()
# create an instance of Dashboard from a dict
dashboard_from_dict = Dashboard.from_dict(dashboard_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



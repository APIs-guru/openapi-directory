# DashboardDetails

Details of a dashboard.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the dashboard. | [optional] 
**edit_permissions** | [**List[SharePermission]**](SharePermission.md) | The edit permissions for the dashboard. | 
**name** | **str** | The name of the dashboard. | 
**share_permissions** | [**List[SharePermission]**](SharePermission.md) | The share permissions for the dashboard. | 

## Example

```python
from openapi_client.models.dashboard_details import DashboardDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DashboardDetails from a JSON string
dashboard_details_instance = DashboardDetails.from_json(json)
# print the JSON string representation of the object
print(DashboardDetails.to_json())

# convert the object into a dict
dashboard_details_dict = dashboard_details_instance.to_dict()
# create an instance of DashboardDetails from a dict
dashboard_details_from_dict = DashboardDetails.from_dict(dashboard_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



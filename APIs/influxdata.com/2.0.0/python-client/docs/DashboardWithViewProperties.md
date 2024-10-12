# DashboardWithViewProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The user-facing description of the dashboard. | [optional] 
**name** | **str** | The user-facing name of the dashboard. | 
**org_id** | **str** | The ID of the organization that owns the dashboard. | 
**cells** | [**List[CellWithViewProperties]**](CellWithViewProperties.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**labels** | [**List[Label]**](Label.md) |  | [optional] 
**links** | [**DashboardAllOfLinks**](DashboardAllOfLinks.md) |  | [optional] 
**meta** | [**DashboardAllOfMeta**](DashboardAllOfMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.dashboard_with_view_properties import DashboardWithViewProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DashboardWithViewProperties from a JSON string
dashboard_with_view_properties_instance = DashboardWithViewProperties.from_json(json)
# print the JSON string representation of the object
print(DashboardWithViewProperties.to_json())

# convert the object into a dict
dashboard_with_view_properties_dict = dashboard_with_view_properties_instance.to_dict()
# create an instance of DashboardWithViewProperties from a dict
dashboard_with_view_properties_from_dict = DashboardWithViewProperties.from_dict(dashboard_with_view_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



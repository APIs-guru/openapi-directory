# Dashboard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The user-facing description of the dashboard. | [optional] 
**name** | **str** | The user-facing name of the dashboard. | 
**org_id** | **str** | The ID of the organization that owns the dashboard. | 
**cells** | [**List[Cell]**](Cell.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**labels** | [**List[Label]**](Label.md) |  | [optional] 
**links** | [**DashboardAllOfLinks**](DashboardAllOfLinks.md) |  | [optional] 
**meta** | [**DashboardAllOfMeta**](DashboardAllOfMeta.md) |  | [optional] 

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



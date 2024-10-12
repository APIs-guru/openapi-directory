# PostDashboards201Response


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
from openapi_client.models.post_dashboards201_response import PostDashboards201Response

# TODO update the JSON string below
json = "{}"
# create an instance of PostDashboards201Response from a JSON string
post_dashboards201_response_instance = PostDashboards201Response.from_json(json)
# print the JSON string representation of the object
print(PostDashboards201Response.to_json())

# convert the object into a dict
post_dashboards201_response_dict = post_dashboards201_response_instance.to_dict()
# create an instance of PostDashboards201Response from a dict
post_dashboards201_response_from_dict = PostDashboards201Response.from_dict(post_dashboards201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



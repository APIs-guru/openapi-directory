# CreateDashboardRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The user-facing description of the dashboard. | [optional] 
**name** | **str** | The user-facing name of the dashboard. | 
**org_id** | **str** | The ID of the organization that owns the dashboard. | 

## Example

```python
from openapi_client.models.create_dashboard_request import CreateDashboardRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDashboardRequest from a JSON string
create_dashboard_request_instance = CreateDashboardRequest.from_json(json)
# print the JSON string representation of the object
print(CreateDashboardRequest.to_json())

# convert the object into a dict
create_dashboard_request_dict = create_dashboard_request_instance.to_dict()
# create an instance of CreateDashboardRequest from a dict
create_dashboard_request_from_dict = CreateDashboardRequest.from_dict(create_dashboard_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



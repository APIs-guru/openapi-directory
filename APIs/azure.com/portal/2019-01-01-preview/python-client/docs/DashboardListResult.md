# DashboardListResult

List of dashboards.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to use for getting the next set of results. | [optional] 
**value** | [**List[Dashboard]**](Dashboard.md) | The array of custom resource provider manifests. | [optional] 

## Example

```python
from openapi_client.models.dashboard_list_result import DashboardListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DashboardListResult from a JSON string
dashboard_list_result_instance = DashboardListResult.from_json(json)
# print the JSON string representation of the object
print(DashboardListResult.to_json())

# convert the object into a dict
dashboard_list_result_dict = dashboard_list_result_instance.to_dict()
# create an instance of DashboardListResult from a dict
dashboard_list_result_from_dict = DashboardListResult.from_dict(dashboard_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



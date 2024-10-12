# Dashboard

A Google Stackdriver dashboard. Dashboards define the content and layout of pages in the Stackdriver web application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_layout** | [**ColumnLayout**](ColumnLayout.md) |  | [optional] 
**dashboard_filters** | [**List[DashboardFilter]**](DashboardFilter.md) | Filters to reduce the amount of data charted based on the filter criteria. | [optional] 
**display_name** | **str** | Required. The mutable, human-readable name. | [optional] 
**etag** | **str** | etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. An etag is returned in the response to GetDashboard, and users are expected to put that etag in the request to UpdateDashboard to ensure that their change will be applied to the same version of the Dashboard configuration. The field should not be passed during dashboard creation. | [optional] 
**grid_layout** | [**GridLayout**](GridLayout.md) |  | [optional] 
**labels** | **Dict[str, str]** | Labels applied to the dashboard | [optional] 
**mosaic_layout** | [**MosaicLayout**](MosaicLayout.md) |  | [optional] 
**name** | **str** | Identifier. The resource name of the dashboard. | [optional] 
**row_layout** | [**RowLayout**](RowLayout.md) |  | [optional] 

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



# DashboardFilter

A filter to reduce the amount of data charted in relevant widgets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter_type** | **str** | The specified filter type | [optional] 
**label_key** | **str** | Required. The key for the label | [optional] 
**string_value** | **str** | A variable-length string value. | [optional] 
**template_variable** | **str** | The placeholder text that can be referenced in a filter string or MQL query. If omitted, the dashboard filter will be applied to all relevant widgets in the dashboard. | [optional] 

## Example

```python
from openapi_client.models.dashboard_filter import DashboardFilter

# TODO update the JSON string below
json = "{}"
# create an instance of DashboardFilter from a JSON string
dashboard_filter_instance = DashboardFilter.from_json(json)
# print the JSON string representation of the object
print(DashboardFilter.to_json())

# convert the object into a dict
dashboard_filter_dict = dashboard_filter_instance.to_dict()
# create an instance of DashboardFilter from a dict
dashboard_filter_from_dict = DashboardFilter.from_dict(dashboard_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



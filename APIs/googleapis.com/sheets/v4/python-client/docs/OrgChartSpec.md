# OrgChartSpec

An org chart. Org charts require a unique set of labels in labels and may optionally include parent_labels and tooltips. parent_labels contain, for each node, the label identifying the parent node. tooltips contain, for each node, an optional tooltip. For example, to describe an OrgChart with Alice as the CEO, Bob as the President (reporting to Alice) and Cathy as VP of Sales (also reporting to Alice), have labels contain \"Alice\", \"Bob\", \"Cathy\", parent_labels contain \"\", \"Alice\", \"Alice\" and tooltips contain \"CEO\", \"President\", \"VP Sales\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | [**ChartData**](ChartData.md) |  | [optional] 
**node_color** | [**Color**](Color.md) |  | [optional] 
**node_color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**node_size** | **str** | The size of the org chart nodes. | [optional] 
**parent_labels** | [**ChartData**](ChartData.md) |  | [optional] 
**selected_node_color** | [**Color**](Color.md) |  | [optional] 
**selected_node_color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**tooltips** | [**ChartData**](ChartData.md) |  | [optional] 

## Example

```python
from openapi_client.models.org_chart_spec import OrgChartSpec

# TODO update the JSON string below
json = "{}"
# create an instance of OrgChartSpec from a JSON string
org_chart_spec_instance = OrgChartSpec.from_json(json)
# print the JSON string representation of the object
print(OrgChartSpec.to_json())

# convert the object into a dict
org_chart_spec_dict = org_chart_spec_instance.to_dict()
# create an instance of OrgChartSpec from a dict
org_chart_spec_from_dict = OrgChartSpec.from_dict(org_chart_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



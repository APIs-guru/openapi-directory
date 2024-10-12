# UpdateNetworkTrafficAnalysisRequestCustomPieChartItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the custom pie chart item. | 
**type** | **str** |     The signature type for the custom pie chart item. Can be one of &#39;host&#39;, &#39;port&#39; or &#39;ipRange&#39;.  | 
**value** | **str** |     The value of the custom pie chart item. Valid syntax depends on the signature type of the chart item     (see sample request/response for more details).  | 

## Example

```python
from openapi_client.models.update_network_traffic_analysis_request_custom_pie_chart_items_inner import UpdateNetworkTrafficAnalysisRequestCustomPieChartItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkTrafficAnalysisRequestCustomPieChartItemsInner from a JSON string
update_network_traffic_analysis_request_custom_pie_chart_items_inner_instance = UpdateNetworkTrafficAnalysisRequestCustomPieChartItemsInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkTrafficAnalysisRequestCustomPieChartItemsInner.to_json())

# convert the object into a dict
update_network_traffic_analysis_request_custom_pie_chart_items_inner_dict = update_network_traffic_analysis_request_custom_pie_chart_items_inner_instance.to_dict()
# create an instance of UpdateNetworkTrafficAnalysisRequestCustomPieChartItemsInner from a dict
update_network_traffic_analysis_request_custom_pie_chart_items_inner_from_dict = UpdateNetworkTrafficAnalysisRequestCustomPieChartItemsInner.from_dict(update_network_traffic_analysis_request_custom_pie_chart_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



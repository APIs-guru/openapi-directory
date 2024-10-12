# UpdateNetworkTrafficAnalysisRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_pie_chart_items** | [**List[UpdateNetworkTrafficAnalysisRequestCustomPieChartItemsInner]**](UpdateNetworkTrafficAnalysisRequestCustomPieChartItemsInner.md) | The list of items that make up the custom pie chart for traffic reporting. | [optional] 
**mode** | **str** |     The traffic analysis mode for the network. Can be one of &#39;disabled&#39; (do not collect traffic types),     &#39;basic&#39; (collect generic traffic categories), or &#39;detailed&#39; (collect destination hostnames).  | [optional] 

## Example

```python
from openapi_client.models.update_network_traffic_analysis_request import UpdateNetworkTrafficAnalysisRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkTrafficAnalysisRequest from a JSON string
update_network_traffic_analysis_request_instance = UpdateNetworkTrafficAnalysisRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkTrafficAnalysisRequest.to_json())

# convert the object into a dict
update_network_traffic_analysis_request_dict = update_network_traffic_analysis_request_instance.to_dict()
# create an instance of UpdateNetworkTrafficAnalysisRequest from a dict
update_network_traffic_analysis_request_from_dict = UpdateNetworkTrafficAnalysisRequest.from_dict(update_network_traffic_analysis_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



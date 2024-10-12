# OutboundOverviewStatsResponse



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounce_rate** | **int** |  | [optional] 
**bounced** | **int** |  | [optional] 
**opens** | **int** |  | [optional] 
**smtpapi_errors** | **int** |  | [optional] 
**sent** | **int** |  | [optional] 
**spam_complaints** | **int** |  | [optional] 
**spam_complaints_rate** | **int** |  | [optional] 
**total_clicks** | **int** |  | [optional] 
**total_tracked_links_sent** | **int** |  | [optional] 
**tracked** | **int** |  | [optional] 
**unique_links_clicked** | **int** |  | [optional] 
**unique_opens** | **int** |  | [optional] 
**with_client_recorded** | **int** |  | [optional] 
**with_link_tracking** | **int** |  | [optional] 
**with_open_tracking** | **int** |  | [optional] 
**with_platform_recorded** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.outbound_overview_stats_response import OutboundOverviewStatsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OutboundOverviewStatsResponse from a JSON string
outbound_overview_stats_response_instance = OutboundOverviewStatsResponse.from_json(json)
# print the JSON string representation of the object
print(OutboundOverviewStatsResponse.to_json())

# convert the object into a dict
outbound_overview_stats_response_dict = outbound_overview_stats_response_instance.to_dict()
# create an instance of OutboundOverviewStatsResponse from a dict
outbound_overview_stats_response_from_dict = OutboundOverviewStatsResponse.from_dict(outbound_overview_stats_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



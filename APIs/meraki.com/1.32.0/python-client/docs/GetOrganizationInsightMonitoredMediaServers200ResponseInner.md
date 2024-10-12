# GetOrganizationInsightMonitoredMediaServers200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | The IP address (IPv4 only) or hostname of the media server to monitor | [optional] 
**best_effort_monitoring_enabled** | **bool** | Indicates that if the media server doesn&#39;t respond to ICMP pings, the nearest hop will be used in its stead | [optional] 
**id** | **str** | Monitored media server id | [optional] 
**name** | **str** | The name of the VoIP provider | [optional] 

## Example

```python
from openapi_client.models.get_organization_insight_monitored_media_servers200_response_inner import GetOrganizationInsightMonitoredMediaServers200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationInsightMonitoredMediaServers200ResponseInner from a JSON string
get_organization_insight_monitored_media_servers200_response_inner_instance = GetOrganizationInsightMonitoredMediaServers200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationInsightMonitoredMediaServers200ResponseInner.to_json())

# convert the object into a dict
get_organization_insight_monitored_media_servers200_response_inner_dict = get_organization_insight_monitored_media_servers200_response_inner_instance.to_dict()
# create an instance of GetOrganizationInsightMonitoredMediaServers200ResponseInner from a dict
get_organization_insight_monitored_media_servers200_response_inner_from_dict = GetOrganizationInsightMonitoredMediaServers200ResponseInner.from_dict(get_organization_insight_monitored_media_servers200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



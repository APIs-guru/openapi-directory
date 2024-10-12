# UpdateOrganizationInsightMonitoredMediaServerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | The IP address (IPv4 only) or hostname of the media server to monitor | [optional] 
**best_effort_monitoring_enabled** | **bool** | Indicates that if the media server doesn&#39;t respond to ICMP pings, the nearest hop will be used in its stead. | [optional] 
**name** | **str** | The name of the VoIP provider | [optional] 

## Example

```python
from openapi_client.models.update_organization_insight_monitored_media_server_request import UpdateOrganizationInsightMonitoredMediaServerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationInsightMonitoredMediaServerRequest from a JSON string
update_organization_insight_monitored_media_server_request_instance = UpdateOrganizationInsightMonitoredMediaServerRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationInsightMonitoredMediaServerRequest.to_json())

# convert the object into a dict
update_organization_insight_monitored_media_server_request_dict = update_organization_insight_monitored_media_server_request_instance.to_dict()
# create an instance of UpdateOrganizationInsightMonitoredMediaServerRequest from a dict
update_organization_insight_monitored_media_server_request_from_dict = UpdateOrganizationInsightMonitoredMediaServerRequest.from_dict(update_organization_insight_monitored_media_server_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



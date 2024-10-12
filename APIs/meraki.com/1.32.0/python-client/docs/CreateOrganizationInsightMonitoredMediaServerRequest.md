# CreateOrganizationInsightMonitoredMediaServerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | The IP address (IPv4 only) or hostname of the media server to monitor | 
**best_effort_monitoring_enabled** | **bool** | Indicates that if the media server doesn&#39;t respond to ICMP pings, the nearest hop will be used in its stead. | [optional] 
**name** | **str** | The name of the VoIP provider | 

## Example

```python
from openapi_client.models.create_organization_insight_monitored_media_server_request import CreateOrganizationInsightMonitoredMediaServerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationInsightMonitoredMediaServerRequest from a JSON string
create_organization_insight_monitored_media_server_request_instance = CreateOrganizationInsightMonitoredMediaServerRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationInsightMonitoredMediaServerRequest.to_json())

# convert the object into a dict
create_organization_insight_monitored_media_server_request_dict = create_organization_insight_monitored_media_server_request_instance.to_dict()
# create an instance of CreateOrganizationInsightMonitoredMediaServerRequest from a dict
create_organization_insight_monitored_media_server_request_from_dict = CreateOrganizationInsightMonitoredMediaServerRequest.from_dict(create_organization_insight_monitored_media_server_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# TransportMicrosoftTeamsGet

The TransportMicrosoftTeams resource is a collection of transports that carry dispatched alerts to the external Microsoft Teams service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**microsoft_teams_path** | **str** | The path (has the following format: &#39;webhookb2/{uuid}@{uuid}/IncomingWebhook/{id}/{uuid}&#39;) for the Microsoft Teams service. Stored in encrypted format. | 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_microsoft_teams_get import TransportMicrosoftTeamsGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportMicrosoftTeamsGet from a JSON string
transport_microsoft_teams_get_instance = TransportMicrosoftTeamsGet.from_json(json)
# print the JSON string representation of the object
print(TransportMicrosoftTeamsGet.to_json())

# convert the object into a dict
transport_microsoft_teams_get_dict = transport_microsoft_teams_get_instance.to_dict()
# create an instance of TransportMicrosoftTeamsGet from a dict
transport_microsoft_teams_get_from_dict = TransportMicrosoftTeamsGet.from_dict(transport_microsoft_teams_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# TransportMicrosoftTeamsPut

The TransportMicrosoftTeams resource is a collection of transports that carry dispatched alerts to the external Microsoft Teams service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**microsoft_teams_path** | **str** | The path (has the following format: &#39;webhookb2/{uuid}@{uuid}/IncomingWebhook/{id}/{uuid}&#39;) for the Microsoft Teams service. Stored in encrypted format. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_microsoft_teams_put import TransportMicrosoftTeamsPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportMicrosoftTeamsPut from a JSON string
transport_microsoft_teams_put_instance = TransportMicrosoftTeamsPut.from_json(json)
# print the JSON string representation of the object
print(TransportMicrosoftTeamsPut.to_json())

# convert the object into a dict
transport_microsoft_teams_put_dict = transport_microsoft_teams_put_instance.to_dict()
# create an instance of TransportMicrosoftTeamsPut from a dict
transport_microsoft_teams_put_from_dict = TransportMicrosoftTeamsPut.from_dict(transport_microsoft_teams_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



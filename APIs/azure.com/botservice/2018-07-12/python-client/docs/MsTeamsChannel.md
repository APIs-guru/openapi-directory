# MsTeamsChannel

Microsoft Teams channel definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MsTeamsChannelProperties**](MsTeamsChannelProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.ms_teams_channel import MsTeamsChannel

# TODO update the JSON string below
json = "{}"
# create an instance of MsTeamsChannel from a JSON string
ms_teams_channel_instance = MsTeamsChannel.from_json(json)
# print the JSON string representation of the object
print(MsTeamsChannel.to_json())

# convert the object into a dict
ms_teams_channel_dict = ms_teams_channel_instance.to_dict()
# create an instance of MsTeamsChannel from a dict
ms_teams_channel_from_dict = MsTeamsChannel.from_dict(ms_teams_channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



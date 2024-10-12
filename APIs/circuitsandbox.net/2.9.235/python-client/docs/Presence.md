# Presence


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dnd_until** | **float** | Timestamp until the DND state of the user is active | [optional] 
**is_opted_out** | **bool** | Indicates whether the user has opted out of their presence | [optional] 
**latitude** | **float** | The latitude of the geo location of the user | [optional] 
**location_text** | **str** | The geo location of the user in clear text | [optional] 
**longitude** | **float** | The longitude of the geo location of the user | [optional] 
**mobile** | **bool** | Identifies whether the presence state is based on the state information of a mobile device or not | [optional] 
**poor** | **bool** | n/a | [optional] 
**state** | **str** | The presence state of the user. It can be one of the following: AVAILABLE, OFFLINE, AWAY, BUSY, or DND (Do-Not-Disturb) | [optional] 
**status_message** | **str** | A free formed status message of the user | [optional] 
**time_zone_offset** | **float** | The timezone offset of the user compared to UTC | [optional] 
**user_id** | **str** | The ID of the user | [optional] 

## Example

```python
from openapi_client.models.presence import Presence

# TODO update the JSON string below
json = "{}"
# create an instance of Presence from a JSON string
presence_instance = Presence.from_json(json)
# print the JSON string representation of the object
print(Presence.to_json())

# convert the object into a dict
presence_dict = presence_instance.to_dict()
# create an instance of Presence from a dict
presence_from_dict = Presence.from_dict(presence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



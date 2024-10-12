# CustomEventInsert

Custom event to be inserted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cm_dimensions** | [**CampaignManagerIds**](CampaignManagerIds.md) |  | [optional] 
**dv3_dimensions** | [**DV3Ids**](DV3Ids.md) |  | [optional] 
**insert_event_type** | **str** | The type of event to insert. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#customEventInsert\&quot;. | [optional] 
**match_id** | **str** | The match ID field. A match ID is your own first-party identifier that has been synced with Google using the match ID feature in Floodlight. This field is mutually exclusive with mobileDeviceId, and at least one of the two fields is required. | [optional] 
**mobile_device_id** | **str** | The mobile device ID. This field is mutually exclusive with matchId, and at least one of the two fields is required. | [optional] 

## Example

```python
from openapi_client.models.custom_event_insert import CustomEventInsert

# TODO update the JSON string below
json = "{}"
# create an instance of CustomEventInsert from a JSON string
custom_event_insert_instance = CustomEventInsert.from_json(json)
# print the JSON string representation of the object
print(CustomEventInsert.to_json())

# convert the object into a dict
custom_event_insert_dict = custom_event_insert_instance.to_dict()
# create an instance of CustomEventInsert from a dict
custom_event_insert_from_dict = CustomEventInsert.from_dict(custom_event_insert_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



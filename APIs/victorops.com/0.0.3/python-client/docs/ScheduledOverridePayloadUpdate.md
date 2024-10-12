# ScheduledOverridePayloadUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **str** | The override end time (ISO 8601) | [optional] 
**policy_slug** | **str** |  | [optional] 
**start** | **str** | The override start time (ISO 8601) | [optional] 
**username** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.scheduled_override_payload_update import ScheduledOverridePayloadUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduledOverridePayloadUpdate from a JSON string
scheduled_override_payload_update_instance = ScheduledOverridePayloadUpdate.from_json(json)
# print the JSON string representation of the object
print(ScheduledOverridePayloadUpdate.to_json())

# convert the object into a dict
scheduled_override_payload_update_dict = scheduled_override_payload_update_instance.to_dict()
# create an instance of ScheduledOverridePayloadUpdate from a dict
scheduled_override_payload_update_from_dict = ScheduledOverridePayloadUpdate.from_dict(scheduled_override_payload_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



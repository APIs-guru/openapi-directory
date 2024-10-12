# ScheduledOverridePayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **str** | The override end time (ISO 8601) | [optional] 
**start** | **str** | The override start time (ISO 8601) | [optional] 
**timezone** | **str** |  | [optional] 
**username** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.scheduled_override_payload import ScheduledOverridePayload

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduledOverridePayload from a JSON string
scheduled_override_payload_instance = ScheduledOverridePayload.from_json(json)
# print the JSON string representation of the object
print(ScheduledOverridePayload.to_json())

# convert the object into a dict
scheduled_override_payload_dict = scheduled_override_payload_instance.to_dict()
# create an instance of ScheduledOverridePayload from a dict
scheduled_override_payload_from_dict = ScheduledOverridePayload.from_dict(scheduled_override_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



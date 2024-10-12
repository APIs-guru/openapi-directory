# ScheduledOverride


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignments** | [**List[Assignment]**](Assignment.md) |  | [optional] 
**end** | **str** | The override end time (ISO 8601) | [optional] 
**public_id** | **str** |  | [optional] 
**start** | **str** | The override start time (ISO 8601). | [optional] 
**timezone** | **str** |  | [optional] 
**user** | [**ScheduledUser**](ScheduledUser.md) |  | [optional] 

## Example

```python
from openapi_client.models.scheduled_override import ScheduledOverride

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduledOverride from a JSON string
scheduled_override_instance = ScheduledOverride.from_json(json)
# print the JSON string representation of the object
print(ScheduledOverride.to_json())

# convert the object into a dict
scheduled_override_dict = scheduled_override_instance.to_dict()
# create an instance of ScheduledOverride from a dict
scheduled_override_from_dict = ScheduledOverride.from_dict(scheduled_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



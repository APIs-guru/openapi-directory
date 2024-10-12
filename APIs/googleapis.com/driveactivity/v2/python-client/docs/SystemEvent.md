# SystemEvent

Event triggered by system operations instead of end users.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of the system event that may triggered activity. | [optional] 

## Example

```python
from openapi_client.models.system_event import SystemEvent

# TODO update the JSON string below
json = "{}"
# create an instance of SystemEvent from a JSON string
system_event_instance = SystemEvent.from_json(json)
# print the JSON string representation of the object
print(SystemEvent.to_json())

# convert the object into a dict
system_event_dict = system_event_instance.to_dict()
# create an instance of SystemEvent from a dict
system_event_from_dict = SystemEvent.from_dict(system_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



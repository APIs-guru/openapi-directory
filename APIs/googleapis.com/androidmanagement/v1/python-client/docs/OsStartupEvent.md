# OsStartupEvent

Device was started.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verified_boot_state** | **str** | Verified Boot state. | [optional] 
**verity_mode** | **str** | dm-verity mode. | [optional] 

## Example

```python
from openapi_client.models.os_startup_event import OsStartupEvent

# TODO update the JSON string below
json = "{}"
# create an instance of OsStartupEvent from a JSON string
os_startup_event_instance = OsStartupEvent.from_json(json)
# print the JSON string representation of the object
print(OsStartupEvent.to_json())

# convert the object into a dict
os_startup_event_dict = os_startup_event_instance.to_dict()
# create an instance of OsStartupEvent from a dict
os_startup_event_from_dict = OsStartupEvent.from_dict(os_startup_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AutoHealTriggers

AutoHealTriggers - describes the triggers for auto-heal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private_bytes_in_kb** | **int** | PrivateBytesInKB - Defines a rule based on private bytes | [optional] 
**requests** | [**RequestsBasedTrigger**](RequestsBasedTrigger.md) |  | [optional] 
**slow_requests** | [**SlowRequestsBasedTrigger**](SlowRequestsBasedTrigger.md) |  | [optional] 
**status_codes** | [**List[StatusCodesBasedTrigger]**](StatusCodesBasedTrigger.md) | StatusCodes - Defines a rule based on status codes | [optional] 

## Example

```python
from openapi_client.models.auto_heal_triggers import AutoHealTriggers

# TODO update the JSON string below
json = "{}"
# create an instance of AutoHealTriggers from a JSON string
auto_heal_triggers_instance = AutoHealTriggers.from_json(json)
# print the JSON string representation of the object
print(AutoHealTriggers.to_json())

# convert the object into a dict
auto_heal_triggers_dict = auto_heal_triggers_instance.to_dict()
# create an instance of AutoHealTriggers from a dict
auto_heal_triggers_from_dict = AutoHealTriggers.from_dict(auto_heal_triggers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



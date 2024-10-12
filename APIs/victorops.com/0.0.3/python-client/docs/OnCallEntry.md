# OnCallEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**on_call_type** | [**OnCallType**](OnCallType.md) |  | 
**on_call_user** | [**User**](User.md) |  | [optional] 
**override_on_call_user** | [**User**](User.md) |  | [optional] 
**rolls** | [**List[OnCallRoll]**](OnCallRoll.md) |  | 
**rotation_name** | **str** |  | [optional] 
**shift_name** | **str** |  | [optional] 
**shift_roll** | **str** | The shift roll time (ISO 8601) | [optional] 

## Example

```python
from openapi_client.models.on_call_entry import OnCallEntry

# TODO update the JSON string below
json = "{}"
# create an instance of OnCallEntry from a JSON string
on_call_entry_instance = OnCallEntry.from_json(json)
# print the JSON string representation of the object
print(OnCallEntry.to_json())

# convert the object into a dict
on_call_entry_dict = on_call_entry_instance.to_dict()
# create an instance of OnCallEntry from a dict
on_call_entry_from_dict = OnCallEntry.from_dict(on_call_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



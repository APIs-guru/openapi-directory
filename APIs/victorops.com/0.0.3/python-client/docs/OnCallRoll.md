# OnCallRoll


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **str** | The on-call period end time (ISO 8601) | 
**is_roll** | **bool** |  | 
**on_call_user** | [**User**](User.md) |  | [optional] 
**start** | **str** | The on-call period start time (ISO 8601) | 

## Example

```python
from openapi_client.models.on_call_roll import OnCallRoll

# TODO update the JSON string below
json = "{}"
# create an instance of OnCallRoll from a JSON string
on_call_roll_instance = OnCallRoll.from_json(json)
# print the JSON string representation of the object
print(OnCallRoll.to_json())

# convert the object into a dict
on_call_roll_dict = on_call_roll_instance.to_dict()
# create an instance of OnCallRoll from a dict
on_call_roll_from_dict = OnCallRoll.from_dict(on_call_roll_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



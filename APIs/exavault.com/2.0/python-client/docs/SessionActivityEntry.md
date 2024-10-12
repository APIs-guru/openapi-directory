# SessionActivityEntry

Single entry of session activity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**SessionActivityEntryAttributes**](SessionActivityEntryAttributes.md) |  | [optional] 
**id** | **int** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.session_activity_entry import SessionActivityEntry

# TODO update the JSON string below
json = "{}"
# create an instance of SessionActivityEntry from a JSON string
session_activity_entry_instance = SessionActivityEntry.from_json(json)
# print the JSON string representation of the object
print(SessionActivityEntry.to_json())

# convert the object into a dict
session_activity_entry_dict = session_activity_entry_instance.to_dict()
# create an instance of SessionActivityEntry from a dict
session_activity_entry_from_dict = SessionActivityEntry.from_dict(session_activity_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



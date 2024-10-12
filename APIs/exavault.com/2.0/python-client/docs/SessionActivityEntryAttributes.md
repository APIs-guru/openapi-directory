# SessionActivityEntryAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes_transferred** | **int** |  | [optional] 
**created** | **str** |  | [optional] 
**duration** | **int** |  | [optional] 
**file_name** | **str** |  | [optional] 
**file_source** | **str** |  | [optional] 
**ip_address** | **str** |  | [optional] 
**operation** | **str** |  | [optional] 
**protocol** | **str** |  | [optional] 
**session_id** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**username** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.session_activity_entry_attributes import SessionActivityEntryAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of SessionActivityEntryAttributes from a JSON string
session_activity_entry_attributes_instance = SessionActivityEntryAttributes.from_json(json)
# print the JSON string representation of the object
print(SessionActivityEntryAttributes.to_json())

# convert the object into a dict
session_activity_entry_attributes_dict = session_activity_entry_attributes_instance.to_dict()
# create an instance of SessionActivityEntryAttributes from a dict
session_activity_entry_attributes_from_dict = SessionActivityEntryAttributes.from_dict(session_activity_entry_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



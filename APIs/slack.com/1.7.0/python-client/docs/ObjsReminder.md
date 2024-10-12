# ObjsReminder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complete_ts** | **int** |  | [optional] 
**creator** | **str** |  | 
**id** | **str** |  | 
**recurring** | **bool** |  | 
**text** | **str** |  | 
**time** | **int** |  | [optional] 
**user** | **str** |  | 

## Example

```python
from openapi_client.models.objs_reminder import ObjsReminder

# TODO update the JSON string below
json = "{}"
# create an instance of ObjsReminder from a JSON string
objs_reminder_instance = ObjsReminder.from_json(json)
# print the JSON string representation of the object
print(ObjsReminder.to_json())

# convert the object into a dict
objs_reminder_dict = objs_reminder_instance.to_dict()
# create an instance of ObjsReminder from a dict
objs_reminder_from_dict = ObjsReminder.from_dict(objs_reminder_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



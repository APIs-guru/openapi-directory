# RemindersInfoSchema

Schema for successful response from reminders.info method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**reminder** | [**ObjsReminder**](ObjsReminder.md) |  | 

## Example

```python
from openapi_client.models.reminders_info_schema import RemindersInfoSchema

# TODO update the JSON string below
json = "{}"
# create an instance of RemindersInfoSchema from a JSON string
reminders_info_schema_instance = RemindersInfoSchema.from_json(json)
# print the JSON string representation of the object
print(RemindersInfoSchema.to_json())

# convert the object into a dict
reminders_info_schema_dict = reminders_info_schema_instance.to_dict()
# create an instance of RemindersInfoSchema from a dict
reminders_info_schema_from_dict = RemindersInfoSchema.from_dict(reminders_info_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



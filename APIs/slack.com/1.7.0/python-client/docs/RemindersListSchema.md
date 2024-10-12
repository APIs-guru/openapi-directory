# RemindersListSchema

Schema for successful response from reminders.list method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**reminders** | [**List[ObjsReminder]**](ObjsReminder.md) |  | 

## Example

```python
from openapi_client.models.reminders_list_schema import RemindersListSchema

# TODO update the JSON string below
json = "{}"
# create an instance of RemindersListSchema from a JSON string
reminders_list_schema_instance = RemindersListSchema.from_json(json)
# print the JSON string representation of the object
print(RemindersListSchema.to_json())

# convert the object into a dict
reminders_list_schema_dict = reminders_list_schema_instance.to_dict()
# create an instance of RemindersListSchema from a dict
reminders_list_schema_from_dict = RemindersListSchema.from_dict(reminders_list_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RemindersCompleteSchema

Schema for successful response from reminders.complete method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.reminders_complete_schema import RemindersCompleteSchema

# TODO update the JSON string below
json = "{}"
# create an instance of RemindersCompleteSchema from a JSON string
reminders_complete_schema_instance = RemindersCompleteSchema.from_json(json)
# print the JSON string representation of the object
print(RemindersCompleteSchema.to_json())

# convert the object into a dict
reminders_complete_schema_dict = reminders_complete_schema_instance.to_dict()
# create an instance of RemindersCompleteSchema from a dict
reminders_complete_schema_from_dict = RemindersCompleteSchema.from_dict(reminders_complete_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ErrorReportUsersEntries

The list of bad password log in attempt entries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ErrorReportUsersEntry]**](ErrorReportUsersEntry.md) | The value returned by the operation. | [optional] 

## Example

```python
from openapi_client.models.error_report_users_entries import ErrorReportUsersEntries

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorReportUsersEntries from a JSON string
error_report_users_entries_instance = ErrorReportUsersEntries.from_json(json)
# print the JSON string representation of the object
print(ErrorReportUsersEntries.to_json())

# convert the object into a dict
error_report_users_entries_dict = error_report_users_entries_instance.to_dict()
# create an instance of ErrorReportUsersEntries from a dict
error_report_users_entries_from_dict = ErrorReportUsersEntries.from_dict(error_report_users_entries_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



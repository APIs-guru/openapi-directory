# ErrorReportUsersEntry

The bad password login attempt details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | **str** | The Ip address corresponding to the last error event. | [optional] 
**last_updated** | **datetime** | The date and time when the last error event was logged. | [optional] 
**total_error_attempts** | **int** | The total count of specific error events. | [optional] 
**unique_ip_addresses** | **str** | The list of unique IP addresses. | [optional] 
**user_id** | **str** | The user ID value. | [optional] 

## Example

```python
from openapi_client.models.error_report_users_entry import ErrorReportUsersEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorReportUsersEntry from a JSON string
error_report_users_entry_instance = ErrorReportUsersEntry.from_json(json)
# print the JSON string representation of the object
print(ErrorReportUsersEntry.to_json())

# convert the object into a dict
error_report_users_entry_dict = error_report_users_entry_instance.to_dict()
# create an instance of ErrorReportUsersEntry from a dict
error_report_users_entry_from_dict = ErrorReportUsersEntry.from_dict(error_report_users_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



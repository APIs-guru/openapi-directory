# GoogleFirestoreAdminV1WeeklyRecurrence

Represents a recurring schedule that runs on a specified day of the week. The time zone is UTC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day** | **str** | The day of week to run. DAY_OF_WEEK_UNSPECIFIED is not allowed. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1_weekly_recurrence import GoogleFirestoreAdminV1WeeklyRecurrence

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1WeeklyRecurrence from a JSON string
google_firestore_admin_v1_weekly_recurrence_instance = GoogleFirestoreAdminV1WeeklyRecurrence.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1WeeklyRecurrence.to_json())

# convert the object into a dict
google_firestore_admin_v1_weekly_recurrence_dict = google_firestore_admin_v1_weekly_recurrence_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1WeeklyRecurrence from a dict
google_firestore_admin_v1_weekly_recurrence_from_dict = GoogleFirestoreAdminV1WeeklyRecurrence.from_dict(google_firestore_admin_v1_weekly_recurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



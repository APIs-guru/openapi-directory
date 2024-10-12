# ActivityAttendee


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_id** | **str** | The identifier for a related contact | [optional] [readonly] 
**created_at** | **datetime** | The time the attendee was created (ISO 8601) | [optional] [readonly] 
**email_address** | **str** | Email address of the attendee | [optional] 
**first_name** | **str** | First name of the attendee | [optional] 
**id** | **str** | Unique identifier for the attendee | [optional] [readonly] 
**is_organizer** | **bool** | Whether the attendee is the organizer of the activity | [optional] 
**last_name** | **str** | Last name of the attendee | [optional] 
**middle_name** | **str** | Middle name of the attendee | [optional] 
**name** | **str** | Full name of the attendee | [optional] 
**prefix** | **str** | Prefix of the attendee | [optional] 
**status** | **str** | Status of the attendee | [optional] 
**suffix** | **str** | Suffix of the attendee | [optional] 
**updated_at** | **datetime** | The last time the attendee was updated (ISO 8601) | [optional] [readonly] 
**user_id** | **str** | The identifier for a related user | [optional] [readonly] 

## Example

```python
from openapi_client.models.activity_attendee import ActivityAttendee

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityAttendee from a JSON string
activity_attendee_instance = ActivityAttendee.from_json(json)
# print the JSON string representation of the object
print(ActivityAttendee.to_json())

# convert the object into a dict
activity_attendee_dict = activity_attendee_instance.to_dict()
# create an instance of ActivityAttendee from a dict
activity_attendee_from_dict = ActivityAttendee.from_dict(activity_attendee_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



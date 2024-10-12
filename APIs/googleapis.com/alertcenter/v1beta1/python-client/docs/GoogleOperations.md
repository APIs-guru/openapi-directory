# GoogleOperations

An incident reported by Google Operations for a Google Workspace application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affected_user_emails** | **List[str]** | The list of emails which correspond to the users directly affected by the incident. | [optional] 
**attachment_data** | [**Attachment**](Attachment.md) |  | [optional] 
**description** | **str** | A detailed, freeform incident description. | [optional] 
**domain** | **str** | Customer domain for email template personalization. | [optional] 
**header** | **str** | A header to display above the incident message. Typically used to attach a localized notice on the timeline for followup comms translations. | [optional] 
**title** | **str** | A one-line incident description. | [optional] 

## Example

```python
from openapi_client.models.google_operations import GoogleOperations

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleOperations from a JSON string
google_operations_instance = GoogleOperations.from_json(json)
# print the JSON string representation of the object
print(GoogleOperations.to_json())

# convert the object into a dict
google_operations_dict = google_operations_instance.to_dict()
# create an instance of GoogleOperations from a dict
google_operations_from_dict = GoogleOperations.from_dict(google_operations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



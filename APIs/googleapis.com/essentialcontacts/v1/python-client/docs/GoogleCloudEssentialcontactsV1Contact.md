# GoogleCloudEssentialcontactsV1Contact

A contact that will receive notifications from Google Cloud.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Required. The email address to send notifications to. The email address does not need to be a Google Account. | [optional] 
**language_tag** | **str** | Required. The preferred language for notifications, as a ISO 639-1 language code. See [Supported languages](https://cloud.google.com/resource-manager/docs/managing-notification-contacts#supported-languages) for a list of supported languages. | [optional] 
**name** | **str** | Output only. The identifier for the contact. Format: {resource_type}/{resource_id}/contacts/{contact_id} | [optional] [readonly] 
**notification_category_subscriptions** | **List[str]** | Required. The categories of notifications that the contact will receive communications for. | [optional] 
**validate_time** | **str** | The last time the validation_state was updated, either manually or automatically. A contact is considered stale if its validation state was updated more than 1 year ago. | [optional] 
**validation_state** | **str** | The validity of the contact. A contact is considered valid if it is the correct recipient for notifications for a particular resource. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_essentialcontacts_v1_contact import GoogleCloudEssentialcontactsV1Contact

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudEssentialcontactsV1Contact from a JSON string
google_cloud_essentialcontacts_v1_contact_instance = GoogleCloudEssentialcontactsV1Contact.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudEssentialcontactsV1Contact.to_json())

# convert the object into a dict
google_cloud_essentialcontacts_v1_contact_dict = google_cloud_essentialcontacts_v1_contact_instance.to_dict()
# create an instance of GoogleCloudEssentialcontactsV1Contact from a dict
google_cloud_essentialcontacts_v1_contact_from_dict = GoogleCloudEssentialcontactsV1Contact.from_dict(google_cloud_essentialcontacts_v1_contact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



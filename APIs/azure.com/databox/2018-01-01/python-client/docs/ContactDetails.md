# ContactDetails

Contact Details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_name** | **str** | Contact name of the person. | 
**email_list** | **List[str]** | List of Email-ids to be notified about job progress. | 
**mobile** | **str** | Mobile number of the contact person. | [optional] 
**notification_preference** | [**List[NotificationPreference]**](NotificationPreference.md) | Notification preference for a job stage. | [optional] 
**phone** | **str** | Phone number of the contact person. | 
**phone_extension** | **str** | Phone extension number of the contact person. | [optional] 

## Example

```python
from openapi_client.models.contact_details import ContactDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ContactDetails from a JSON string
contact_details_instance = ContactDetails.from_json(json)
# print the JSON string representation of the object
print(ContactDetails.to_json())

# convert the object into a dict
contact_details_dict = contact_details_instance.to_dict()
# create an instance of ContactDetails from a dict
contact_details_from_dict = ContactDetails.from_dict(contact_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



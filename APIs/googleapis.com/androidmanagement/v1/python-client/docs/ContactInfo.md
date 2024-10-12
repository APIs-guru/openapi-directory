# ContactInfo

Contact details for managed Google Play enterprises.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_email** | **str** | Email address for a point of contact, which will be used to send important announcements related to managed Google Play. | [optional] 
**data_protection_officer_email** | **str** | The email of the data protection officer. The email is validated but not verified. | [optional] 
**data_protection_officer_name** | **str** | The name of the data protection officer. | [optional] 
**data_protection_officer_phone** | **str** | The phone number of the data protection officer The phone number is validated but not verified. | [optional] 
**eu_representative_email** | **str** | The email of the EU representative. The email is validated but not verified. | [optional] 
**eu_representative_name** | **str** | The name of the EU representative. | [optional] 
**eu_representative_phone** | **str** | The phone number of the EU representative. The phone number is validated but not verified. | [optional] 

## Example

```python
from openapi_client.models.contact_info import ContactInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ContactInfo from a JSON string
contact_info_instance = ContactInfo.from_json(json)
# print the JSON string representation of the object
print(ContactInfo.to_json())

# convert the object into a dict
contact_info_dict = contact_info_instance.to_dict()
# create an instance of ContactInfo from a dict
contact_info_from_dict = ContactInfo.from_dict(contact_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



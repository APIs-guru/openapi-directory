# ContactInfoInner

Communication device number or electronic address used for communication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_content** | **str** | Collection of information that identifies a phone/Fax number/ email, as defined by telecom services. | 
**contact_description** | **str** | Description of contact such as main phone number, alternate phone number, Fax number, alternate fax number, email and alternate email | [optional] 
**contact_type** | **str** | Contact type such Phone, Fax and email | 
**other_contact_type** | **object** | Other contact type which is not in the standard code list | [optional] 

## Example

```python
from openapi_client.models.contact_info_inner import ContactInfoInner

# TODO update the JSON string below
json = "{}"
# create an instance of ContactInfoInner from a JSON string
contact_info_inner_instance = ContactInfoInner.from_json(json)
# print the JSON string representation of the object
print(ContactInfoInner.to_json())

# convert the object into a dict
contact_info_inner_dict = contact_info_inner_instance.to_dict()
# create an instance of ContactInfoInner from a dict
contact_info_inner_from_dict = ContactInfoInner.from_dict(contact_info_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



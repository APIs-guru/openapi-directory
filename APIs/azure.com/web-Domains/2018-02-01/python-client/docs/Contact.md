# Contact

Contact information for domain registration. If 'Domain Privacy' option is not selected then the contact information is made publicly available through the Whois  directories as per ICANN requirements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_mailing** | [**Address**](Address.md) |  | [optional] 
**email** | **str** | Email address. | 
**fax** | **str** | Fax number. | [optional] 
**job_title** | **str** | Job title. | [optional] 
**name_first** | **str** | First name. | 
**name_last** | **str** | Last name. | 
**name_middle** | **str** | Middle name. | [optional] 
**organization** | **str** | Organization contact belongs to. | [optional] 
**phone** | **str** | Phone number. | 

## Example

```python
from openapi_client.models.contact import Contact

# TODO update the JSON string below
json = "{}"
# create an instance of Contact from a JSON string
contact_instance = Contact.from_json(json)
# print the JSON string representation of the object
print(Contact.to_json())

# convert the object into a dict
contact_dict = contact_instance.to_dict()
# create an instance of Contact from a dict
contact_from_dict = Contact.from_dict(contact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



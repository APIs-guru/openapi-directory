# ContactSettings

Defines the contact information associated with a `Registration`. [ICANN](https://icann.org/) requires all domain names to have associated contact information. The `registrant_contact` is considered the domain's legal owner, and often the other contacts are identical.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_contact** | [**Contact**](Contact.md) |  | [optional] 
**privacy** | **str** | Required. Privacy setting for the contacts associated with the &#x60;Registration&#x60;. | [optional] 
**registrant_contact** | [**Contact**](Contact.md) |  | [optional] 
**technical_contact** | [**Contact**](Contact.md) |  | [optional] 

## Example

```python
from openapi_client.models.contact_settings import ContactSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ContactSettings from a JSON string
contact_settings_instance = ContactSettings.from_json(json)
# print the JSON string representation of the object
print(ContactSettings.to_json())

# convert the object into a dict
contact_settings_dict = contact_settings_instance.to_dict()
# create an instance of ContactSettings from a dict
contact_settings_from_dict = ContactSettings.from_dict(contact_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



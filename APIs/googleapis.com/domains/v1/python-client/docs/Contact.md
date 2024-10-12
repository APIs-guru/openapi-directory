# Contact

Details required for a contact associated with a `Registration`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Required. Email address of the contact. | [optional] 
**fax_number** | **str** | Fax number of the contact in international format. For example, &#x60;\&quot;+1-800-555-0123\&quot;&#x60;. | [optional] 
**phone_number** | **str** | Required. Phone number of the contact in international format. For example, &#x60;\&quot;+1-800-555-0123\&quot;&#x60;. | [optional] 
**postal_address** | [**PostalAddress**](PostalAddress.md) |  | [optional] 

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



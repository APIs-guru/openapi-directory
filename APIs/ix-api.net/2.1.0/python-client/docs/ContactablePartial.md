# ContactablePartial

Contactable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role_assignments** | **List[str]** | A set of &#x60;RoleAssignment&#x60;s. See the documentation on the specific &#x60;required_contact_roles&#x60;, &#x60;nfc_required_contact_roles&#x60; or &#x60;nsc_required_contact_roles&#x60; on what &#x60;RoleAssignment&#x60;s to provide.  | [optional] 

## Example

```python
from openapi_client.models.contactable_partial import ContactablePartial

# TODO update the JSON string below
json = "{}"
# create an instance of ContactablePartial from a JSON string
contactable_partial_instance = ContactablePartial.from_json(json)
# print the JSON string representation of the object
print(ContactablePartial.to_json())

# convert the object into a dict
contactable_partial_dict = contactable_partial_instance.to_dict()
# create an instance of ContactablePartial from a dict
contactable_partial_from_dict = ContactablePartial.from_dict(contactable_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



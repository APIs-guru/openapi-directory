# ContactDetail

The contact detail class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The e-mail address of the contact. | [optional] 
**phone** | **str** | The phone number of the contact. | [optional] 
**role** | **str** | The role of the contact. | [optional] 

## Example

```python
from openapi_client.models.contact_detail import ContactDetail

# TODO update the JSON string below
json = "{}"
# create an instance of ContactDetail from a JSON string
contact_detail_instance = ContactDetail.from_json(json)
# print the JSON string representation of the object
print(ContactDetail.to_json())

# convert the object into a dict
contact_detail_dict = contact_detail_instance.to_dict()
# create an instance of ContactDetail from a dict
contact_detail_from_dict = ContactDetail.from_dict(contact_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



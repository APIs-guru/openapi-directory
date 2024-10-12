# Contact

This complex type contains contact information for an individual buyer or seller.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_name** | **str** | The company name with which the contact is associated. | [optional] 
**contact_address** | [**ContactAddress**](ContactAddress.md) |  | [optional] 
**full_name** | **str** | The contact&#39;s full name. | [optional] 
**primary_phone** | [**PhoneNumber**](PhoneNumber.md) |  | [optional] 

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



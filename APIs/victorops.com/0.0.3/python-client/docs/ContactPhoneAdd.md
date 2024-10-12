# ContactPhoneAdd

The contact phone

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** |  | 
**phone** | **str** |  | 
**rank** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.contact_phone_add import ContactPhoneAdd

# TODO update the JSON string below
json = "{}"
# create an instance of ContactPhoneAdd from a JSON string
contact_phone_add_instance = ContactPhoneAdd.from_json(json)
# print the JSON string representation of the object
print(ContactPhoneAdd.to_json())

# convert the object into a dict
contact_phone_add_dict = contact_phone_add_instance.to_dict()
# create an instance of ContactPhoneAdd from a dict
contact_phone_add_from_dict = ContactPhoneAdd.from_dict(contact_phone_add_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



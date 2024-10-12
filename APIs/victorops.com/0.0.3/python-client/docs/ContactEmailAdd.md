# ContactEmailAdd

The contact email

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | 
**label** | **str** |  | 
**rank** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.contact_email_add import ContactEmailAdd

# TODO update the JSON string below
json = "{}"
# create an instance of ContactEmailAdd from a JSON string
contact_email_add_instance = ContactEmailAdd.from_json(json)
# print the JSON string representation of the object
print(ContactEmailAdd.to_json())

# convert the object into a dict
contact_email_add_dict = contact_email_add_instance.to_dict()
# create an instance of ContactEmailAdd from a dict
contact_email_add_from_dict = ContactEmailAdd.from_dict(contact_email_add_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



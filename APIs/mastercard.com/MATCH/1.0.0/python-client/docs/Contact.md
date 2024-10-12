# Contact


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank_name** | **str** | The name of acquiring bank. | [optional] 
**email_address** | **str** | The Email address of primary contact of acquiring bank. The results may return information for more than one Contact. | [optional] 
**fax_number** | **str** | The Fax Number of primary contact of acquiring bank. The results may return information for more than one Contact. | [optional] 
**first_name** | **str** | The first name of primary contact of acquiring bank. The results may return information for more than one Contact. | [optional] 
**last_name** | **str** | The last name of primary contact of acquiring bank. The results may return information for more than one Contact. | [optional] 
**phone_number** | **str** | The Phone Number of primary contact of acquiring bank. The results may return information for more than one Contact. | [optional] 
**region** | **str** | The region of acquiring bank. The results may return information for more than one Contact. | [optional] 

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



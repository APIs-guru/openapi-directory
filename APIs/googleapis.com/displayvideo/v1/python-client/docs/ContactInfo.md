# ContactInfo

Contact information defining a Customer Match audience member.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** | Country code of the member. Must also be set with the following fields: * hashed_first_name * hashed_last_name * zip_codes | [optional] 
**hashed_emails** | **List[str]** | A list of SHA256 hashed email of the member. Before hashing, remove all whitespace and make sure the string is all lowercase. | [optional] 
**hashed_first_name** | **str** | SHA256 hashed first name of the member. Before hashing, remove all whitespace and make sure the string is all lowercase. Must also be set with the following fields: * country_code * hashed_last_name * zip_codes | [optional] 
**hashed_last_name** | **str** | SHA256 hashed last name of the member. Before hashing, remove all whitespace and make sure the string is all lowercase. Must also be set with the following fields: * country_code * hashed_first_name * zip_codes | [optional] 
**hashed_phone_numbers** | **List[str]** | A list of SHA256 hashed phone numbers of the member. Before hashing, all phone numbers must be formatted using the [E.164 format](//en.wikipedia.org/wiki/E.164) and include the country calling code. | [optional] 
**zip_codes** | **List[str]** | A list of zip codes of the member. Must also be set with the following fields: * country_code * hashed_first_name * hashed_last_name | [optional] 

## Example

```python
from openapi_client.models.contact_info import ContactInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ContactInfo from a JSON string
contact_info_instance = ContactInfo.from_json(json)
# print the JSON string representation of the object
print(ContactInfo.to_json())

# convert the object into a dict
contact_info_dict = contact_info_instance.to_dict()
# create an instance of ContactInfo from a dict
contact_info_from_dict = ContactInfo.from_dict(contact_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



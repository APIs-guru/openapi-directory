# Contact


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique 16 characters ID | [optional] 
**clientid** | **str** | Unique 16 characters ID of the client owner | [optional] 
**confirmed** | **datetime** | Date+time subscriber confirmed his/her list opt-in | [optional] 
**customfields** | **object** | Dictionnary of field key to value | [optional] 
**email** | **str** | Email address | [optional] 
**fullname** | **str** | Full name (Last name, First Name) of the subscriber  | [optional] 
**ip** | **str** | Subscriber&#39;s IP address when he/she confirmed list opt-in | [optional] 
**lang** | **str** | ISO 639-1 language code of the subscriber. When lang is one the supported system language, all communication will be in this language.   | [optional] 
**listid** | **str** | Unique 16 characters ID of the list owner | [optional] 
**status** | **int** | Status (   1- Active,   2- Unconfirmed,   3- Unsubscribed,   4- Deleted,   5- Cleaned because of hard bounce or spam complaint)  | [optional] 

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



# ContactsListResponse

A list of Contacts representing contacts. This is the response from the server to GET requests on the contacts collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Contact]**](Contact.md) | Contact list. | [optional] 
**kind** | **str** | The type of resource. This is always mirror#contacts. | [optional] [default to 'mirror#contacts']

## Example

```python
from openapi_client.models.contacts_list_response import ContactsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ContactsListResponse from a JSON string
contacts_list_response_instance = ContactsListResponse.from_json(json)
# print the JSON string representation of the object
print(ContactsListResponse.to_json())

# convert the object into a dict
contacts_list_response_dict = contacts_list_response_instance.to_dict()
# create an instance of ContactsListResponse from a dict
contacts_list_response_from_dict = ContactsListResponse.from_dict(contacts_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



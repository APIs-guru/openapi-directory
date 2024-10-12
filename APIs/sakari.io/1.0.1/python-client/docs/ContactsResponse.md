# ContactsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**PaginatedResponseError**](PaginatedResponseError.md) |  | [optional] 
**pagination** | [**PaginatedResponsePagination**](PaginatedResponsePagination.md) |  | [optional] 
**success** | **bool** |  | [optional] 
**data** | [**List[Contact]**](Contact.md) |  | [optional] 

## Example

```python
from openapi_client.models.contacts_response import ContactsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ContactsResponse from a JSON string
contacts_response_instance = ContactsResponse.from_json(json)
# print the JSON string representation of the object
print(ContactsResponse.to_json())

# convert the object into a dict
contacts_response_dict = contacts_response_instance.to_dict()
# create an instance of ContactsResponse from a dict
contacts_response_from_dict = ContactsResponse.from_dict(contacts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



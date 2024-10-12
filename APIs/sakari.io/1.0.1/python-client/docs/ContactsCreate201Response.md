# ContactsCreate201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**PaginatedResponseError**](PaginatedResponseError.md) |  | [optional] 
**pagination** | [**PaginatedResponsePagination**](PaginatedResponsePagination.md) |  | [optional] 
**success** | **bool** |  | [optional] [default to True]
**data** | [**ContactUploadResponseData**](ContactUploadResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.contacts_create201_response import ContactsCreate201Response

# TODO update the JSON string below
json = "{}"
# create an instance of ContactsCreate201Response from a JSON string
contacts_create201_response_instance = ContactsCreate201Response.from_json(json)
# print the JSON string representation of the object
print(ContactsCreate201Response.to_json())

# convert the object into a dict
contacts_create201_response_dict = contacts_create201_response_instance.to_dict()
# create an instance of ContactsCreate201Response from a dict
contacts_create201_response_from_dict = ContactsCreate201Response.from_dict(contacts_create201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



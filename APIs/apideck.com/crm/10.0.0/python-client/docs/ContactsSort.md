# ContactsSort


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**by** | **str** | The field on which to sort the Contacts | [optional] 
**direction** | [**SortDirection**](SortDirection.md) |  | [optional] [default to SortDirection.ASC]

## Example

```python
from openapi_client.models.contacts_sort import ContactsSort

# TODO update the JSON string below
json = "{}"
# create an instance of ContactsSort from a JSON string
contacts_sort_instance = ContactsSort.from_json(json)
# print the JSON string representation of the object
print(ContactsSort.to_json())

# convert the object into a dict
contacts_sort_dict = contacts_sort_instance.to_dict()
# create an instance of ContactsSort from a dict
contacts_sort_from_dict = ContactsSort.from_dict(contacts_sort_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ContactListPage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | [**List[ContactList]**](ContactList.md) | Array of ContactList for that page | [optional] 
**total** | **int** | Total number of items in query | [optional] 

## Example

```python
from openapi_client.models.contact_list_page import ContactListPage

# TODO update the JSON string below
json = "{}"
# create an instance of ContactListPage from a JSON string
contact_list_page_instance = ContactListPage.from_json(json)
# print the JSON string representation of the object
print(ContactListPage.to_json())

# convert the object into a dict
contact_list_page_dict = contact_list_page_instance.to_dict()
# create an instance of ContactListPage from a dict
contact_list_page_from_dict = ContactListPage.from_dict(contact_list_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



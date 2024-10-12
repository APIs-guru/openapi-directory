# ContactsFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_id** | **str** | Unique identifier for the associated company of the contact to filter on | [optional] 
**email** | **str** | Email of the contact to filter on | [optional] 
**first_name** | **str** | First name of the contact to filter on | [optional] 
**last_name** | **str** | Last name of the contact to filter on | [optional] 
**name** | **str** | Name of the contact to filter on | [optional] 

## Example

```python
from openapi_client.models.contacts_filter import ContactsFilter

# TODO update the JSON string below
json = "{}"
# create an instance of ContactsFilter from a JSON string
contacts_filter_instance = ContactsFilter.from_json(json)
# print the JSON string representation of the object
print(ContactsFilter.to_json())

# convert the object into a dict
contacts_filter_dict = contacts_filter_instance.to_dict()
# create an instance of ContactsFilter from a dict
contacts_filter_from_dict = ContactsFilter.from_dict(contacts_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



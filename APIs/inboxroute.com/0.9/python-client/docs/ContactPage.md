# ContactPage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | [**List[Contact]**](Contact.md) | Array of Contact for that page | [optional] 
**total** | **int** | Total number of items in query | [optional] 

## Example

```python
from openapi_client.models.contact_page import ContactPage

# TODO update the JSON string below
json = "{}"
# create an instance of ContactPage from a JSON string
contact_page_instance = ContactPage.from_json(json)
# print the JSON string representation of the object
print(ContactPage.to_json())

# convert the object into a dict
contact_page_dict = contact_page_instance.to_dict()
# create an instance of ContactPage from a dict
contact_page_from_dict = ContactPage.from_dict(contact_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



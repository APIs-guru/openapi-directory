# ContactListEventCustomization


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**redirecturl** | **str** | full url of the destination landing page | [optional] 
**type** | **int** | Type (   1- Subscribe confirmation request landing page   2- Subscribe opt-in landing page   3- Unsubscribe confirmation landing page )  | 

## Example

```python
from openapi_client.models.contact_list_event_customization import ContactListEventCustomization

# TODO update the JSON string below
json = "{}"
# create an instance of ContactListEventCustomization from a JSON string
contact_list_event_customization_instance = ContactListEventCustomization.from_json(json)
# print the JSON string representation of the object
print(ContactListEventCustomization.to_json())

# convert the object into a dict
contact_list_event_customization_dict = contact_list_event_customization_instance.to_dict()
# create an instance of ContactListEventCustomization from a dict
contact_list_event_customization_from_dict = ContactListEventCustomization.from_dict(contact_list_event_customization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



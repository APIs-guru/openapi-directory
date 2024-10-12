# ContactListUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customfields** | [**List[ContactCustomFieldSchema]**](ContactCustomFieldSchema.md) | Array of ContactCustomFieldSchema | [optional] 
**eventcustomizations** | [**List[ContactListEventCustomization]**](ContactListEventCustomization.md) | Array of ContactListEventCustomization | [optional] 
**name** | **str** | Name of the contact list | [optional] 

## Example

```python
from openapi_client.models.contact_list_update import ContactListUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ContactListUpdate from a JSON string
contact_list_update_instance = ContactListUpdate.from_json(json)
# print the JSON string representation of the object
print(ContactListUpdate.to_json())

# convert the object into a dict
contact_list_update_dict = contact_list_update_instance.to_dict()
# create an instance of ContactListUpdate from a dict
contact_list_update_from_dict = ContactListUpdate.from_dict(contact_list_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



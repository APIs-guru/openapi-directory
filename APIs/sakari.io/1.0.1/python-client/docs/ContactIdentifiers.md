# ContactIdentifiers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**mobile** | [**ContactIdentifiersMobile**](ContactIdentifiersMobile.md) |  | [optional] 

## Example

```python
from openapi_client.models.contact_identifiers import ContactIdentifiers

# TODO update the JSON string below
json = "{}"
# create an instance of ContactIdentifiers from a JSON string
contact_identifiers_instance = ContactIdentifiers.from_json(json)
# print the JSON string representation of the object
print(ContactIdentifiers.to_json())

# convert the object into a dict
contact_identifiers_dict = contact_identifiers_instance.to_dict()
# create an instance of ContactIdentifiers from a dict
contact_identifiers_from_dict = ContactIdentifiers.from_dict(contact_identifiers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



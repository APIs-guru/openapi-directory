# ContactIdentifiersMobile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** |  | [optional] 
**number** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.contact_identifiers_mobile import ContactIdentifiersMobile

# TODO update the JSON string below
json = "{}"
# create an instance of ContactIdentifiersMobile from a JSON string
contact_identifiers_mobile_instance = ContactIdentifiersMobile.from_json(json)
# print the JSON string representation of the object
print(ContactIdentifiersMobile.to_json())

# convert the object into a dict
contact_identifiers_mobile_dict = contact_identifiers_mobile_instance.to_dict()
# create an instance of ContactIdentifiersMobile from a dict
contact_identifiers_mobile_from_dict = ContactIdentifiersMobile.from_dict(contact_identifiers_mobile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



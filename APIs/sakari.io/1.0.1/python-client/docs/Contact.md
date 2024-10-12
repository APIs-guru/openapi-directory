# Contact


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**mobile** | [**ContactIdentifiersMobile**](ContactIdentifiersMobile.md) |  | [optional] 
**attributes** | **object** |  | [optional] 
**tags** | [**List[Tag]**](Tag.md) |  | [optional] 
**created** | [**Updated**](Updated.md) |  | [optional] 
**error** | [**Error**](Error.md) |  | [optional] 
**updated** | [**Updated**](Updated.md) |  | [optional] 
**valid** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.contact import Contact

# TODO update the JSON string below
json = "{}"
# create an instance of Contact from a JSON string
contact_instance = Contact.from_json(json)
# print the JSON string representation of the object
print(Contact.to_json())

# convert the object into a dict
contact_dict = contact_instance.to_dict()
# create an instance of Contact from a dict
contact_from_dict = Contact.from_dict(contact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



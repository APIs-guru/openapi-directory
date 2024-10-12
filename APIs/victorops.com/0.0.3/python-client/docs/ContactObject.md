# ContactObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | [**ContactDescription**](ContactDescription.md) |  | [optional] 
**type** | [**ContactType**](ContactType.md) |  | [optional] 

## Example

```python
from openapi_client.models.contact_object import ContactObject

# TODO update the JSON string below
json = "{}"
# create an instance of ContactObject from a JSON string
contact_object_instance = ContactObject.from_json(json)
# print the JSON string representation of the object
print(ContactObject.to_json())

# convert the object into a dict
contact_object_dict = contact_object_instance.to_dict()
# create an instance of ContactObject from a dict
contact_object_from_dict = ContactObject.from_dict(contact_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



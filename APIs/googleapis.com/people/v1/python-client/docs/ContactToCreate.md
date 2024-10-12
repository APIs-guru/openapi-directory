# ContactToCreate

A wrapper that contains the person data to populate a newly created source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_person** | [**Person**](Person.md) |  | [optional] 

## Example

```python
from openapi_client.models.contact_to_create import ContactToCreate

# TODO update the JSON string below
json = "{}"
# create an instance of ContactToCreate from a JSON string
contact_to_create_instance = ContactToCreate.from_json(json)
# print the JSON string representation of the object
print(ContactToCreate.to_json())

# convert the object into a dict
contact_to_create_dict = contact_to_create_instance.to_dict()
# create an instance of ContactToCreate from a dict
contact_to_create_from_dict = ContactToCreate.from_dict(contact_to_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



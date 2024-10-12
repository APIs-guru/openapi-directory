# ContactsGet422ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classification** | **str** | Type of error (ValidationError) | [optional] 
**message** | **str** | Human readable description of the error | [optional] 

## Example

```python
from openapi_client.models.contacts_get422_response_inner import ContactsGet422ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of ContactsGet422ResponseInner from a JSON string
contacts_get422_response_inner_instance = ContactsGet422ResponseInner.from_json(json)
# print the JSON string representation of the object
print(ContactsGet422ResponseInner.to_json())

# convert the object into a dict
contacts_get422_response_inner_dict = contacts_get422_response_inner_instance.to_dict()
# create an instance of ContactsGet422ResponseInner from a dict
contacts_get422_response_inner_from_dict = ContactsGet422ResponseInner.from_dict(contacts_get422_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



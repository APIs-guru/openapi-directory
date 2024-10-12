# ContactsGet401ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classification** | **str** | Type of error (AccesDenied) | [optional] 
**message** | **str** | Human readable description of the error | [optional] 

## Example

```python
from openapi_client.models.contacts_get401_response_inner import ContactsGet401ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of ContactsGet401ResponseInner from a JSON string
contacts_get401_response_inner_instance = ContactsGet401ResponseInner.from_json(json)
# print the JSON string representation of the object
print(ContactsGet401ResponseInner.to_json())

# convert the object into a dict
contacts_get401_response_inner_dict = contacts_get401_response_inner_instance.to_dict()
# create an instance of ContactsGet401ResponseInner from a dict
contacts_get401_response_inner_from_dict = ContactsGet401ResponseInner.from_dict(contacts_get401_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



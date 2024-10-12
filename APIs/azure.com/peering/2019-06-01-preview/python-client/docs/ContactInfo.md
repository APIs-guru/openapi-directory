# ContactInfo

The contact information of the peer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **List[str]** | The list of email addresses. | [optional] 
**phone** | **List[str]** | The list of contact numbers. | [optional] 

## Example

```python
from openapi_client.models.contact_info import ContactInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ContactInfo from a JSON string
contact_info_instance = ContactInfo.from_json(json)
# print the JSON string representation of the object
print(ContactInfo.to_json())

# convert the object into a dict
contact_info_dict = contact_info_instance.to_dict()
# create an instance of ContactInfo from a dict
contact_info_from_dict = ContactInfo.from_dict(contact_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ContactInfoList

Wrapper message for a list of contact information defining Customer Match audience members.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent** | [**Consent**](Consent.md) |  | [optional] 
**contact_infos** | [**List[ContactInfo]**](ContactInfo.md) | A list of ContactInfo objects defining Customer Match audience members. The size of members after splitting the contact_infos mustn&#39;t be greater than 500,000. | [optional] 

## Example

```python
from openapi_client.models.contact_info_list import ContactInfoList

# TODO update the JSON string below
json = "{}"
# create an instance of ContactInfoList from a JSON string
contact_info_list_instance = ContactInfoList.from_json(json)
# print the JSON string representation of the object
print(ContactInfoList.to_json())

# convert the object into a dict
contact_info_list_dict = contact_info_list_instance.to_dict()
# create an instance of ContactInfoList from a dict
contact_info_list_from_dict = ContactInfoList.from_dict(contact_info_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



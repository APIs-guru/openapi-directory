# SecurityContactList

List of security contacts response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[SecurityContact]**](SecurityContact.md) | List of security contacts | [optional] [readonly] 

## Example

```python
from openapi_client.models.security_contact_list import SecurityContactList

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityContactList from a JSON string
security_contact_list_instance = SecurityContactList.from_json(json)
# print the JSON string representation of the object
print(SecurityContactList.to_json())

# convert the object into a dict
security_contact_list_dict = security_contact_list_instance.to_dict()
# create an instance of SecurityContactList from a dict
security_contact_list_from_dict = SecurityContactList.from_dict(security_contact_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



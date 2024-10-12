# AclEntry

An entry for an Access Control list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_time** | **str** | The time when this access control entry expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example &#x60;2012-11-15T16:19:00.094Z&#x60;. | [optional] 
**kind** | **str** | This is always &#x60;sql#aclEntry&#x60;. | [optional] 
**name** | **str** | Optional. A label to identify this entry. | [optional] 
**value** | **str** | The allowlisted value for the access control list. | [optional] 

## Example

```python
from openapi_client.models.acl_entry import AclEntry

# TODO update the JSON string below
json = "{}"
# create an instance of AclEntry from a JSON string
acl_entry_instance = AclEntry.from_json(json)
# print the JSON string representation of the object
print(AclEntry.to_json())

# convert the object into a dict
acl_entry_dict = acl_entry_instance.to_dict()
# create an instance of AclEntry from a dict
acl_entry_from_dict = AclEntry.from_dict(acl_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



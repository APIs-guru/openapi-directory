# SqlAclEntry

An entry for an Access Control list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expire_time** | **str** | The time when this access control entry expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example: &#x60;2012-11-15T16:19:00.094Z&#x60;. | [optional] 
**label** | **str** | A label to identify this entry. | [optional] 
**ttl** | **str** | Input only. The time-to-leave of this access control entry. | [optional] 
**value** | **str** | The allowlisted value for the access control list. | [optional] 

## Example

```python
from openapi_client.models.sql_acl_entry import SqlAclEntry

# TODO update the JSON string below
json = "{}"
# create an instance of SqlAclEntry from a JSON string
sql_acl_entry_instance = SqlAclEntry.from_json(json)
# print the JSON string representation of the object
print(SqlAclEntry.to_json())

# convert the object into a dict
sql_acl_entry_dict = sql_acl_entry_instance.to_dict()
# create an instance of SqlAclEntry from a dict
sql_acl_entry_from_dict = SqlAclEntry.from_dict(sql_acl_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



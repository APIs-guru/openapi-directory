# AclList

A Data Lake Analytics catalog access control list (ACL).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Acl]**](Acl.md) | the access control list (ACL). | [optional] [readonly] 
**next_link** | **str** | the link to the next page of results. | [optional] 

## Example

```python
from openapi_client.models.acl_list import AclList

# TODO update the JSON string below
json = "{}"
# create an instance of AclList from a JSON string
acl_list_instance = AclList.from_json(json)
# print the JSON string representation of the object
print(AclList.to_json())

# convert the object into a dict
acl_list_dict = acl_list_instance.to_dict()
# create an instance of AclList from a dict
acl_list_from_dict = AclList.from_dict(acl_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



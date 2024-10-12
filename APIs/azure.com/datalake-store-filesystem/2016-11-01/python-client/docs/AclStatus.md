# AclStatus

Data Lake Store file or directory Access Control List information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | **List[str]** | the list of ACLSpec entries on a file or directory. | [optional] 
**group** | **str** | the group owner, an AAD Object ID. | [optional] 
**owner** | **str** | the user owner, an AAD Object ID. | [optional] 
**permission** | **str** | The octal representation of the unnamed user, mask and other permissions. | [optional] 
**sticky_bit** | **bool** | the indicator of whether the sticky bit is on or off. | [optional] [readonly] 

## Example

```python
from openapi_client.models.acl_status import AclStatus

# TODO update the JSON string below
json = "{}"
# create an instance of AclStatus from a JSON string
acl_status_instance = AclStatus.from_json(json)
# print the JSON string representation of the object
print(AclStatus.to_json())

# convert the object into a dict
acl_status_dict = acl_status_instance.to_dict()
# create an instance of AclStatus from a dict
acl_status_from_dict = AclStatus.from_dict(acl_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



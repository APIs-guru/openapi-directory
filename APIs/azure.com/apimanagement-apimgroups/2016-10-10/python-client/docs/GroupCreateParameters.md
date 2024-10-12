# GroupCreateParameters

Parameters supplied to the Create Group operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Group description. | [optional] 
**external_id** | **str** | Identifier of the external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory aad://&lt;tenant&gt;.onmicrosoft.com/groups/&lt;group object id&gt;; otherwise the value is null. | [optional] 
**name** | **str** | Group name. | 
**type** | **str** | Group type. | [optional] 

## Example

```python
from openapi_client.models.group_create_parameters import GroupCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of GroupCreateParameters from a JSON string
group_create_parameters_instance = GroupCreateParameters.from_json(json)
# print the JSON string representation of the object
print(GroupCreateParameters.to_json())

# convert the object into a dict
group_create_parameters_dict = group_create_parameters_instance.to_dict()
# create an instance of GroupCreateParameters from a dict
group_create_parameters_from_dict = GroupCreateParameters.from_dict(group_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



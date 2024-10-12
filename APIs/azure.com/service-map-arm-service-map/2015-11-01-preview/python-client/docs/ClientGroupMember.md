# ClientGroupMember

Represents a member of a client group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Resource properties. | [optional] 
**id** | **str** | Resource identifier. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.client_group_member import ClientGroupMember

# TODO update the JSON string below
json = "{}"
# create an instance of ClientGroupMember from a JSON string
client_group_member_instance = ClientGroupMember.from_json(json)
# print the JSON string representation of the object
print(ClientGroupMember.to_json())

# convert the object into a dict
client_group_member_dict = client_group_member_instance.to_dict()
# create an instance of ClientGroupMember from a dict
client_group_member_from_dict = ClientGroupMember.from_dict(client_group_member_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



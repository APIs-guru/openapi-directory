# ResourceMembers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**ResourceMembersLinks**](ResourceMembersLinks.md) |  | [optional] 
**users** | [**List[ResourceMember]**](ResourceMember.md) |  | [optional] 

## Example

```python
from openapi_client.models.resource_members import ResourceMembers

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceMembers from a JSON string
resource_members_instance = ResourceMembers.from_json(json)
# print the JSON string representation of the object
print(ResourceMembers.to_json())

# convert the object into a dict
resource_members_dict = resource_members_instance.to_dict()
# create an instance of ResourceMembers from a dict
resource_members_from_dict = ResourceMembers.from_dict(resource_members_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



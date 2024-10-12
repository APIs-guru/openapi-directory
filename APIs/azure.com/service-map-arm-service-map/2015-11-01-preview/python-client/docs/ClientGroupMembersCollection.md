# ClientGroupMembersCollection

Collection of ClientGroupMember resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to the next set of resources. | [optional] 
**value** | [**List[ClientGroupMember]**](ClientGroupMember.md) | Collection of ClientGroupMember resources. | [optional] 

## Example

```python
from openapi_client.models.client_group_members_collection import ClientGroupMembersCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ClientGroupMembersCollection from a JSON string
client_group_members_collection_instance = ClientGroupMembersCollection.from_json(json)
# print the JSON string representation of the object
print(ClientGroupMembersCollection.to_json())

# convert the object into a dict
client_group_members_collection_dict = client_group_members_collection_instance.to_dict()
# create an instance of ClientGroupMembersCollection from a dict
client_group_members_collection_from_dict = ClientGroupMembersCollection.from_dict(client_group_members_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



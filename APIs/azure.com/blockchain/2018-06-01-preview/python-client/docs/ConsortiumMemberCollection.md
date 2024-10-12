# ConsortiumMemberCollection

Collection of consortium payload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the URL, that the client should use to fetch the next page (per server side paging).  It&#39;s null for now, added for future use. | [optional] 
**value** | [**List[ConsortiumMember]**](ConsortiumMember.md) | Gets or sets the collection of consortiums. | [optional] 

## Example

```python
from openapi_client.models.consortium_member_collection import ConsortiumMemberCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ConsortiumMemberCollection from a JSON string
consortium_member_collection_instance = ConsortiumMemberCollection.from_json(json)
# print the JSON string representation of the object
print(ConsortiumMemberCollection.to_json())

# convert the object into a dict
consortium_member_collection_dict = consortium_member_collection_instance.to_dict()
# create an instance of ConsortiumMemberCollection from a dict
consortium_member_collection_from_dict = ConsortiumMemberCollection.from_dict(consortium_member_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



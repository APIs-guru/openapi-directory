# ClientGroupMembersCount

Specifies the number of members in a client group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accuracy** | [**Accuracy**](Accuracy.md) |  | 
**count** | **int** | Number of members in the client group. Use this value together with the value of &#x60;&#x60;&#x60;accuracy&#x60;&#x60;&#x60;. If accuracy is &#x60;exact&#x60; then the value represents the actual number of members in the cloud. When accuracy is &#x60;estimated&#x60;, the actual number of members is larger than the value of &#x60;&#x60;&#x60;count&#x60;&#x60;&#x60;. | 
**end_time** | **datetime** | Membership interval start time. | 
**group_id** | **str** | Client Group URI. | 
**start_time** | **datetime** | Membership interval start time. | 

## Example

```python
from openapi_client.models.client_group_members_count import ClientGroupMembersCount

# TODO update the JSON string below
json = "{}"
# create an instance of ClientGroupMembersCount from a JSON string
client_group_members_count_instance = ClientGroupMembersCount.from_json(json)
# print the JSON string representation of the object
print(ClientGroupMembersCount.to_json())

# convert the object into a dict
client_group_members_count_dict = client_group_members_count_instance.to_dict()
# create an instance of ClientGroupMembersCount from a dict
client_group_members_count_from_dict = ClientGroupMembersCount.from_dict(client_group_members_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



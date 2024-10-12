# GetMembershipGraphResponse

The response message for MembershipsService.GetMembershipGraph.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adjacency_list** | [**List[MembershipAdjacencyList]**](MembershipAdjacencyList.md) | The membership graph&#39;s path information represented as an adjacency list. | [optional] 
**groups** | [**List[Group]**](Group.md) | The resources representing each group in the adjacency list. Each group in this list can be correlated to a &#39;group&#39; of the MembershipAdjacencyList using the &#39;name&#39; of the Group resource. | [optional] 

## Example

```python
from openapi_client.models.get_membership_graph_response import GetMembershipGraphResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetMembershipGraphResponse from a JSON string
get_membership_graph_response_instance = GetMembershipGraphResponse.from_json(json)
# print the JSON string representation of the object
print(GetMembershipGraphResponse.to_json())

# convert the object into a dict
get_membership_graph_response_dict = get_membership_graph_response_instance.to_dict()
# create an instance of GetMembershipGraphResponse from a dict
get_membership_graph_response_from_dict = GetMembershipGraphResponse.from_dict(get_membership_graph_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



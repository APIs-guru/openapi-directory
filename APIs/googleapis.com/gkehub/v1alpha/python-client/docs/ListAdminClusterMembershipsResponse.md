# ListAdminClusterMembershipsResponse

Response message for the `GkeHub.ListAdminClusterMemberships` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_cluster_memberships** | [**List[Membership]**](Membership.md) | The list of matching Memberships of admin clusters. | [optional] 
**next_page_token** | **str** | A token to request the next page of resources from the &#x60;ListAdminClusterMemberships&#x60; method. The value of an empty string means that there are no more resources to return. | [optional] 
**unreachable** | **List[str]** | List of locations that could not be reached while fetching this list. | [optional] 

## Example

```python
from openapi_client.models.list_admin_cluster_memberships_response import ListAdminClusterMembershipsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAdminClusterMembershipsResponse from a JSON string
list_admin_cluster_memberships_response_instance = ListAdminClusterMembershipsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAdminClusterMembershipsResponse.to_json())

# convert the object into a dict
list_admin_cluster_memberships_response_dict = list_admin_cluster_memberships_response_instance.to_dict()
# create an instance of ListAdminClusterMembershipsResponse from a dict
list_admin_cluster_memberships_response_from_dict = ListAdminClusterMembershipsResponse.from_dict(list_admin_cluster_memberships_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



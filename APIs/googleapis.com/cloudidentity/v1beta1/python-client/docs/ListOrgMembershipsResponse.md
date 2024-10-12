# ListOrgMembershipsResponse

The response message for OrgMembershipsService.ListOrgMemberships.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is empty, there are no subsequent pages. | [optional] 
**org_memberships** | [**List[OrgMembership]**](OrgMembership.md) | The non-vacuous membership in an orgUnit. | [optional] 

## Example

```python
from openapi_client.models.list_org_memberships_response import ListOrgMembershipsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListOrgMembershipsResponse from a JSON string
list_org_memberships_response_instance = ListOrgMembershipsResponse.from_json(json)
# print the JSON string representation of the object
print(ListOrgMembershipsResponse.to_json())

# convert the object into a dict
list_org_memberships_response_dict = list_org_memberships_response_instance.to_dict()
# create an instance of ListOrgMembershipsResponse from a dict
list_org_memberships_response_from_dict = ListOrgMembershipsResponse.from_dict(list_org_memberships_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



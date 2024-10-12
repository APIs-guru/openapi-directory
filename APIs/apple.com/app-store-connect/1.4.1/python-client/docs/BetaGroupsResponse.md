# BetaGroupsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[BetaGroup]**](BetaGroup.md) |  | 
**included** | [**List[BetaGroupResponseIncludedInner]**](BetaGroupResponseIncludedInner.md) |  | [optional] 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.beta_groups_response import BetaGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BetaGroupsResponse from a JSON string
beta_groups_response_instance = BetaGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(BetaGroupsResponse.to_json())

# convert the object into a dict
beta_groups_response_dict = beta_groups_response_instance.to_dict()
# create an instance of BetaGroupsResponse from a dict
beta_groups_response_from_dict = BetaGroupsResponse.from_dict(beta_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



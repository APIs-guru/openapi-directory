# BetaGroupBuildsLinkagesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppRelationshipsBuildsDataInner]**](AppRelationshipsBuildsDataInner.md) |  | 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.beta_group_builds_linkages_response import BetaGroupBuildsLinkagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BetaGroupBuildsLinkagesResponse from a JSON string
beta_group_builds_linkages_response_instance = BetaGroupBuildsLinkagesResponse.from_json(json)
# print the JSON string representation of the object
print(BetaGroupBuildsLinkagesResponse.to_json())

# convert the object into a dict
beta_group_builds_linkages_response_dict = beta_group_builds_linkages_response_instance.to_dict()
# create an instance of BetaGroupBuildsLinkagesResponse from a dict
beta_group_builds_linkages_response_from_dict = BetaGroupBuildsLinkagesResponse.from_dict(beta_group_builds_linkages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



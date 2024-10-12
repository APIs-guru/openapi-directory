# BuildBetaGroupsLinkagesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppRelationshipsBetaGroupsDataInner]**](AppRelationshipsBetaGroupsDataInner.md) |  | 

## Example

```python
from openapi_client.models.build_beta_groups_linkages_request import BuildBetaGroupsLinkagesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBetaGroupsLinkagesRequest from a JSON string
build_beta_groups_linkages_request_instance = BuildBetaGroupsLinkagesRequest.from_json(json)
# print the JSON string representation of the object
print(BuildBetaGroupsLinkagesRequest.to_json())

# convert the object into a dict
build_beta_groups_linkages_request_dict = build_beta_groups_linkages_request_instance.to_dict()
# create an instance of BuildBetaGroupsLinkagesRequest from a dict
build_beta_groups_linkages_request_from_dict = BuildBetaGroupsLinkagesRequest.from_dict(build_beta_groups_linkages_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



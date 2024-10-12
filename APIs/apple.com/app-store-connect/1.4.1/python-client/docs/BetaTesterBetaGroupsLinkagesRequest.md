# BetaTesterBetaGroupsLinkagesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppRelationshipsBetaGroupsDataInner]**](AppRelationshipsBetaGroupsDataInner.md) |  | 

## Example

```python
from openapi_client.models.beta_tester_beta_groups_linkages_request import BetaTesterBetaGroupsLinkagesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BetaTesterBetaGroupsLinkagesRequest from a JSON string
beta_tester_beta_groups_linkages_request_instance = BetaTesterBetaGroupsLinkagesRequest.from_json(json)
# print the JSON string representation of the object
print(BetaTesterBetaGroupsLinkagesRequest.to_json())

# convert the object into a dict
beta_tester_beta_groups_linkages_request_dict = beta_tester_beta_groups_linkages_request_instance.to_dict()
# create an instance of BetaTesterBetaGroupsLinkagesRequest from a dict
beta_tester_beta_groups_linkages_request_from_dict = BetaTesterBetaGroupsLinkagesRequest.from_dict(beta_tester_beta_groups_linkages_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# BetaGroupBetaTestersLinkagesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppBetaTestersLinkagesRequestDataInner]**](AppBetaTestersLinkagesRequestDataInner.md) |  | 

## Example

```python
from openapi_client.models.beta_group_beta_testers_linkages_request import BetaGroupBetaTestersLinkagesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BetaGroupBetaTestersLinkagesRequest from a JSON string
beta_group_beta_testers_linkages_request_instance = BetaGroupBetaTestersLinkagesRequest.from_json(json)
# print the JSON string representation of the object
print(BetaGroupBetaTestersLinkagesRequest.to_json())

# convert the object into a dict
beta_group_beta_testers_linkages_request_dict = beta_group_beta_testers_linkages_request_instance.to_dict()
# create an instance of BetaGroupBetaTestersLinkagesRequest from a dict
beta_group_beta_testers_linkages_request_from_dict = BetaGroupBetaTestersLinkagesRequest.from_dict(beta_group_beta_testers_linkages_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



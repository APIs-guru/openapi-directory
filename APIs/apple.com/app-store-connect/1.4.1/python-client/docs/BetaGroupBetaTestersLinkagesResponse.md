# BetaGroupBetaTestersLinkagesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppBetaTestersLinkagesRequestDataInner]**](AppBetaTestersLinkagesRequestDataInner.md) |  | 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.beta_group_beta_testers_linkages_response import BetaGroupBetaTestersLinkagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BetaGroupBetaTestersLinkagesResponse from a JSON string
beta_group_beta_testers_linkages_response_instance = BetaGroupBetaTestersLinkagesResponse.from_json(json)
# print the JSON string representation of the object
print(BetaGroupBetaTestersLinkagesResponse.to_json())

# convert the object into a dict
beta_group_beta_testers_linkages_response_dict = beta_group_beta_testers_linkages_response_instance.to_dict()
# create an instance of BetaGroupBetaTestersLinkagesResponse from a dict
beta_group_beta_testers_linkages_response_from_dict = BetaGroupBetaTestersLinkagesResponse.from_dict(beta_group_beta_testers_linkages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



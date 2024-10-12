# BetaTesterBuildsLinkagesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppRelationshipsBuildsDataInner]**](AppRelationshipsBuildsDataInner.md) |  | 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.beta_tester_builds_linkages_response import BetaTesterBuildsLinkagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BetaTesterBuildsLinkagesResponse from a JSON string
beta_tester_builds_linkages_response_instance = BetaTesterBuildsLinkagesResponse.from_json(json)
# print the JSON string representation of the object
print(BetaTesterBuildsLinkagesResponse.to_json())

# convert the object into a dict
beta_tester_builds_linkages_response_dict = beta_tester_builds_linkages_response_instance.to_dict()
# create an instance of BetaTesterBuildsLinkagesResponse from a dict
beta_tester_builds_linkages_response_from_dict = BetaTesterBuildsLinkagesResponse.from_dict(beta_tester_builds_linkages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



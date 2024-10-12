# BuildIndividualTestersLinkagesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppBetaTestersLinkagesRequestDataInner]**](AppBetaTestersLinkagesRequestDataInner.md) |  | 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.build_individual_testers_linkages_response import BuildIndividualTestersLinkagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BuildIndividualTestersLinkagesResponse from a JSON string
build_individual_testers_linkages_response_instance = BuildIndividualTestersLinkagesResponse.from_json(json)
# print the JSON string representation of the object
print(BuildIndividualTestersLinkagesResponse.to_json())

# convert the object into a dict
build_individual_testers_linkages_response_dict = build_individual_testers_linkages_response_instance.to_dict()
# create an instance of BuildIndividualTestersLinkagesResponse from a dict
build_individual_testers_linkages_response_from_dict = BuildIndividualTestersLinkagesResponse.from_dict(build_individual_testers_linkages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



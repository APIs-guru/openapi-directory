# BuildIndividualTestersLinkagesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppBetaTestersLinkagesRequestDataInner]**](AppBetaTestersLinkagesRequestDataInner.md) |  | 

## Example

```python
from openapi_client.models.build_individual_testers_linkages_request import BuildIndividualTestersLinkagesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BuildIndividualTestersLinkagesRequest from a JSON string
build_individual_testers_linkages_request_instance = BuildIndividualTestersLinkagesRequest.from_json(json)
# print the JSON string representation of the object
print(BuildIndividualTestersLinkagesRequest.to_json())

# convert the object into a dict
build_individual_testers_linkages_request_dict = build_individual_testers_linkages_request_instance.to_dict()
# create an instance of BuildIndividualTestersLinkagesRequest from a dict
build_individual_testers_linkages_request_from_dict = BuildIndividualTestersLinkagesRequest.from_dict(build_individual_testers_linkages_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



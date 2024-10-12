# BetaTestersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[BetaTester]**](BetaTester.md) |  | 
**included** | [**List[BetaTesterResponseIncludedInner]**](BetaTesterResponseIncludedInner.md) |  | [optional] 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.beta_testers_response import BetaTestersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BetaTestersResponse from a JSON string
beta_testers_response_instance = BetaTestersResponse.from_json(json)
# print the JSON string representation of the object
print(BetaTestersResponse.to_json())

# convert the object into a dict
beta_testers_response_dict = beta_testers_response_instance.to_dict()
# create an instance of BetaTestersResponse from a dict
beta_testers_response_from_dict = BetaTestersResponse.from_dict(beta_testers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



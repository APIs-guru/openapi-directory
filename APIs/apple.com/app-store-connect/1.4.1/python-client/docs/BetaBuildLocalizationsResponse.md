# BetaBuildLocalizationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[BetaBuildLocalization]**](BetaBuildLocalization.md) |  | 
**included** | [**List[Build]**](Build.md) |  | [optional] 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.beta_build_localizations_response import BetaBuildLocalizationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BetaBuildLocalizationsResponse from a JSON string
beta_build_localizations_response_instance = BetaBuildLocalizationsResponse.from_json(json)
# print the JSON string representation of the object
print(BetaBuildLocalizationsResponse.to_json())

# convert the object into a dict
beta_build_localizations_response_dict = beta_build_localizations_response_instance.to_dict()
# create an instance of BetaBuildLocalizationsResponse from a dict
beta_build_localizations_response_from_dict = BetaBuildLocalizationsResponse.from_dict(beta_build_localizations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



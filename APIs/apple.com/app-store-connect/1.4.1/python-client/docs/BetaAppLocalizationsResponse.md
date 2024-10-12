# BetaAppLocalizationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[BetaAppLocalization]**](BetaAppLocalization.md) |  | 
**included** | [**List[App]**](App.md) |  | [optional] 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.beta_app_localizations_response import BetaAppLocalizationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BetaAppLocalizationsResponse from a JSON string
beta_app_localizations_response_instance = BetaAppLocalizationsResponse.from_json(json)
# print the JSON string representation of the object
print(BetaAppLocalizationsResponse.to_json())

# convert the object into a dict
beta_app_localizations_response_dict = beta_app_localizations_response_instance.to_dict()
# create an instance of BetaAppLocalizationsResponse from a dict
beta_app_localizations_response_from_dict = BetaAppLocalizationsResponse.from_dict(beta_app_localizations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



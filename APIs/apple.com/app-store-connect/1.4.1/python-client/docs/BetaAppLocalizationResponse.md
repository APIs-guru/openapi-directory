# BetaAppLocalizationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BetaAppLocalization**](BetaAppLocalization.md) |  | 
**included** | [**List[App]**](App.md) |  | [optional] 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.beta_app_localization_response import BetaAppLocalizationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BetaAppLocalizationResponse from a JSON string
beta_app_localization_response_instance = BetaAppLocalizationResponse.from_json(json)
# print the JSON string representation of the object
print(BetaAppLocalizationResponse.to_json())

# convert the object into a dict
beta_app_localization_response_dict = beta_app_localization_response_instance.to_dict()
# create an instance of BetaAppLocalizationResponse from a dict
beta_app_localization_response_from_dict = BetaAppLocalizationResponse.from_dict(beta_app_localization_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# BetaAppLocalization


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**BetaAppLocalizationAttributes**](BetaAppLocalizationAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**AppEncryptionDeclarationRelationships**](AppEncryptionDeclarationRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.beta_app_localization import BetaAppLocalization

# TODO update the JSON string below
json = "{}"
# create an instance of BetaAppLocalization from a JSON string
beta_app_localization_instance = BetaAppLocalization.from_json(json)
# print the JSON string representation of the object
print(BetaAppLocalization.to_json())

# convert the object into a dict
beta_app_localization_dict = beta_app_localization_instance.to_dict()
# create an instance of BetaAppLocalization from a dict
beta_app_localization_from_dict = BetaAppLocalization.from_dict(beta_app_localization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



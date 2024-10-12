# BetaBuildLocalizationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BetaBuildLocalization**](BetaBuildLocalization.md) |  | 
**included** | [**List[Build]**](Build.md) |  | [optional] 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.beta_build_localization_response import BetaBuildLocalizationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BetaBuildLocalizationResponse from a JSON string
beta_build_localization_response_instance = BetaBuildLocalizationResponse.from_json(json)
# print the JSON string representation of the object
print(BetaBuildLocalizationResponse.to_json())

# convert the object into a dict
beta_build_localization_response_dict = beta_build_localization_response_instance.to_dict()
# create an instance of BetaBuildLocalizationResponse from a dict
beta_build_localization_response_from_dict = BetaBuildLocalizationResponse.from_dict(beta_build_localization_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



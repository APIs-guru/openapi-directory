# BetaAppLocalizationUpdateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**BetaAppLocalizationUpdateRequestDataAttributes**](BetaAppLocalizationUpdateRequestDataAttributes.md) |  | [optional] 
**id** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.beta_app_localization_update_request_data import BetaAppLocalizationUpdateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of BetaAppLocalizationUpdateRequestData from a JSON string
beta_app_localization_update_request_data_instance = BetaAppLocalizationUpdateRequestData.from_json(json)
# print the JSON string representation of the object
print(BetaAppLocalizationUpdateRequestData.to_json())

# convert the object into a dict
beta_app_localization_update_request_data_dict = beta_app_localization_update_request_data_instance.to_dict()
# create an instance of BetaAppLocalizationUpdateRequestData from a dict
beta_app_localization_update_request_data_from_dict = BetaAppLocalizationUpdateRequestData.from_dict(beta_app_localization_update_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



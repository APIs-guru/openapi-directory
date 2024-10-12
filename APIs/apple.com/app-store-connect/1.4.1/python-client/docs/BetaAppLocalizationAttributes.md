# BetaAppLocalizationAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**feedback_email** | **str** |  | [optional] 
**locale** | **str** |  | [optional] 
**marketing_url** | **str** |  | [optional] 
**privacy_policy_url** | **str** |  | [optional] 
**tv_os_privacy_policy** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.beta_app_localization_attributes import BetaAppLocalizationAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of BetaAppLocalizationAttributes from a JSON string
beta_app_localization_attributes_instance = BetaAppLocalizationAttributes.from_json(json)
# print the JSON string representation of the object
print(BetaAppLocalizationAttributes.to_json())

# convert the object into a dict
beta_app_localization_attributes_dict = beta_app_localization_attributes_instance.to_dict()
# create an instance of BetaAppLocalizationAttributes from a dict
beta_app_localization_attributes_from_dict = BetaAppLocalizationAttributes.from_dict(beta_app_localization_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



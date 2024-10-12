# BetaAppLocalizationUpdateRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**feedback_email** | **str** |  | [optional] 
**marketing_url** | **str** |  | [optional] 
**privacy_policy_url** | **str** |  | [optional] 
**tv_os_privacy_policy** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.beta_app_localization_update_request_data_attributes import BetaAppLocalizationUpdateRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of BetaAppLocalizationUpdateRequestDataAttributes from a JSON string
beta_app_localization_update_request_data_attributes_instance = BetaAppLocalizationUpdateRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(BetaAppLocalizationUpdateRequestDataAttributes.to_json())

# convert the object into a dict
beta_app_localization_update_request_data_attributes_dict = beta_app_localization_update_request_data_attributes_instance.to_dict()
# create an instance of BetaAppLocalizationUpdateRequestDataAttributes from a dict
beta_app_localization_update_request_data_attributes_from_dict = BetaAppLocalizationUpdateRequestDataAttributes.from_dict(beta_app_localization_update_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



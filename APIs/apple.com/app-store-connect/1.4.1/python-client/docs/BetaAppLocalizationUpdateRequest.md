# BetaAppLocalizationUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BetaAppLocalizationUpdateRequestData**](BetaAppLocalizationUpdateRequestData.md) |  | 

## Example

```python
from openapi_client.models.beta_app_localization_update_request import BetaAppLocalizationUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BetaAppLocalizationUpdateRequest from a JSON string
beta_app_localization_update_request_instance = BetaAppLocalizationUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(BetaAppLocalizationUpdateRequest.to_json())

# convert the object into a dict
beta_app_localization_update_request_dict = beta_app_localization_update_request_instance.to_dict()
# create an instance of BetaAppLocalizationUpdateRequest from a dict
beta_app_localization_update_request_from_dict = BetaAppLocalizationUpdateRequest.from_dict(beta_app_localization_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



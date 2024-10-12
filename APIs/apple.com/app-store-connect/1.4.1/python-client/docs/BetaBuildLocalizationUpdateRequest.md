# BetaBuildLocalizationUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BetaBuildLocalizationUpdateRequestData**](BetaBuildLocalizationUpdateRequestData.md) |  | 

## Example

```python
from openapi_client.models.beta_build_localization_update_request import BetaBuildLocalizationUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BetaBuildLocalizationUpdateRequest from a JSON string
beta_build_localization_update_request_instance = BetaBuildLocalizationUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(BetaBuildLocalizationUpdateRequest.to_json())

# convert the object into a dict
beta_build_localization_update_request_dict = beta_build_localization_update_request_instance.to_dict()
# create an instance of BetaBuildLocalizationUpdateRequest from a dict
beta_build_localization_update_request_from_dict = BetaBuildLocalizationUpdateRequest.from_dict(beta_build_localization_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



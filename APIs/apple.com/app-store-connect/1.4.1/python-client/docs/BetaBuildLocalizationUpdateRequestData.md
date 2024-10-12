# BetaBuildLocalizationUpdateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**BetaBuildLocalizationUpdateRequestDataAttributes**](BetaBuildLocalizationUpdateRequestDataAttributes.md) |  | [optional] 
**id** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.beta_build_localization_update_request_data import BetaBuildLocalizationUpdateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of BetaBuildLocalizationUpdateRequestData from a JSON string
beta_build_localization_update_request_data_instance = BetaBuildLocalizationUpdateRequestData.from_json(json)
# print the JSON string representation of the object
print(BetaBuildLocalizationUpdateRequestData.to_json())

# convert the object into a dict
beta_build_localization_update_request_data_dict = beta_build_localization_update_request_data_instance.to_dict()
# create an instance of BetaBuildLocalizationUpdateRequestData from a dict
beta_build_localization_update_request_data_from_dict = BetaBuildLocalizationUpdateRequestData.from_dict(beta_build_localization_update_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



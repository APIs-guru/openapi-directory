# BetaAppLocalizationCreateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**BetaAppLocalizationCreateRequestDataAttributes**](BetaAppLocalizationCreateRequestDataAttributes.md) |  | 
**relationships** | [**AppPreOrderCreateRequestDataRelationships**](AppPreOrderCreateRequestDataRelationships.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.beta_app_localization_create_request_data import BetaAppLocalizationCreateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of BetaAppLocalizationCreateRequestData from a JSON string
beta_app_localization_create_request_data_instance = BetaAppLocalizationCreateRequestData.from_json(json)
# print the JSON string representation of the object
print(BetaAppLocalizationCreateRequestData.to_json())

# convert the object into a dict
beta_app_localization_create_request_data_dict = beta_app_localization_create_request_data_instance.to_dict()
# create an instance of BetaAppLocalizationCreateRequestData from a dict
beta_app_localization_create_request_data_from_dict = BetaAppLocalizationCreateRequestData.from_dict(beta_app_localization_create_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



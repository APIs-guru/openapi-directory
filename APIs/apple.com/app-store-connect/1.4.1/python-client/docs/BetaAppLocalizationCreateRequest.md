# BetaAppLocalizationCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BetaAppLocalizationCreateRequestData**](BetaAppLocalizationCreateRequestData.md) |  | 

## Example

```python
from openapi_client.models.beta_app_localization_create_request import BetaAppLocalizationCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BetaAppLocalizationCreateRequest from a JSON string
beta_app_localization_create_request_instance = BetaAppLocalizationCreateRequest.from_json(json)
# print the JSON string representation of the object
print(BetaAppLocalizationCreateRequest.to_json())

# convert the object into a dict
beta_app_localization_create_request_dict = beta_app_localization_create_request_instance.to_dict()
# create an instance of BetaAppLocalizationCreateRequest from a dict
beta_app_localization_create_request_from_dict = BetaAppLocalizationCreateRequest.from_dict(beta_app_localization_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



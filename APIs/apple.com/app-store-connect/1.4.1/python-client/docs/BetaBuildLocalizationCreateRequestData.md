# BetaBuildLocalizationCreateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**BetaBuildLocalizationCreateRequestDataAttributes**](BetaBuildLocalizationCreateRequestDataAttributes.md) |  | 
**relationships** | [**BetaAppReviewSubmissionCreateRequestDataRelationships**](BetaAppReviewSubmissionCreateRequestDataRelationships.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.beta_build_localization_create_request_data import BetaBuildLocalizationCreateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of BetaBuildLocalizationCreateRequestData from a JSON string
beta_build_localization_create_request_data_instance = BetaBuildLocalizationCreateRequestData.from_json(json)
# print the JSON string representation of the object
print(BetaBuildLocalizationCreateRequestData.to_json())

# convert the object into a dict
beta_build_localization_create_request_data_dict = beta_build_localization_create_request_data_instance.to_dict()
# create an instance of BetaBuildLocalizationCreateRequestData from a dict
beta_build_localization_create_request_data_from_dict = BetaBuildLocalizationCreateRequestData.from_dict(beta_build_localization_create_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



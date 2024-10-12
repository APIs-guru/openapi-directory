# BetaAppReviewDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppStoreReviewDetailAttributes**](AppStoreReviewDetailAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**AppEncryptionDeclarationRelationships**](AppEncryptionDeclarationRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.beta_app_review_detail import BetaAppReviewDetail

# TODO update the JSON string below
json = "{}"
# create an instance of BetaAppReviewDetail from a JSON string
beta_app_review_detail_instance = BetaAppReviewDetail.from_json(json)
# print the JSON string representation of the object
print(BetaAppReviewDetail.to_json())

# convert the object into a dict
beta_app_review_detail_dict = beta_app_review_detail_instance.to_dict()
# create an instance of BetaAppReviewDetail from a dict
beta_app_review_detail_from_dict = BetaAppReviewDetail.from_dict(beta_app_review_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



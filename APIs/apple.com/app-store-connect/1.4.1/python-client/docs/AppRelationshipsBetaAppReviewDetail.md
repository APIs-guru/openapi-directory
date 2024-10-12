# AppRelationshipsBetaAppReviewDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppRelationshipsBetaAppReviewDetailData**](AppRelationshipsBetaAppReviewDetailData.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_relationships_beta_app_review_detail import AppRelationshipsBetaAppReviewDetail

# TODO update the JSON string below
json = "{}"
# create an instance of AppRelationshipsBetaAppReviewDetail from a JSON string
app_relationships_beta_app_review_detail_instance = AppRelationshipsBetaAppReviewDetail.from_json(json)
# print the JSON string representation of the object
print(AppRelationshipsBetaAppReviewDetail.to_json())

# convert the object into a dict
app_relationships_beta_app_review_detail_dict = app_relationships_beta_app_review_detail_instance.to_dict()
# create an instance of AppRelationshipsBetaAppReviewDetail from a dict
app_relationships_beta_app_review_detail_from_dict = AppRelationshipsBetaAppReviewDetail.from_dict(app_relationships_beta_app_review_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



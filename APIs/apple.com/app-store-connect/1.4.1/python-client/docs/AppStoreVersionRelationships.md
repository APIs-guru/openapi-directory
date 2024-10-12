# AppStoreVersionRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age_rating_declaration** | [**AppStoreVersionRelationshipsAgeRatingDeclaration**](AppStoreVersionRelationshipsAgeRatingDeclaration.md) |  | [optional] 
**app** | [**AppEncryptionDeclarationRelationshipsApp**](AppEncryptionDeclarationRelationshipsApp.md) |  | [optional] 
**app_store_review_detail** | [**AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail**](AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail.md) |  | [optional] 
**app_store_version_localizations** | [**AppStoreVersionRelationshipsAppStoreVersionLocalizations**](AppStoreVersionRelationshipsAppStoreVersionLocalizations.md) |  | [optional] 
**app_store_version_phased_release** | [**AppStoreVersionRelationshipsAppStoreVersionPhasedRelease**](AppStoreVersionRelationshipsAppStoreVersionPhasedRelease.md) |  | [optional] 
**app_store_version_submission** | [**AppStoreVersionRelationshipsAppStoreVersionSubmission**](AppStoreVersionRelationshipsAppStoreVersionSubmission.md) |  | [optional] 
**build** | [**AppStoreVersionRelationshipsBuild**](AppStoreVersionRelationshipsBuild.md) |  | [optional] 
**idfa_declaration** | [**AppStoreVersionRelationshipsIdfaDeclaration**](AppStoreVersionRelationshipsIdfaDeclaration.md) |  | [optional] 
**routing_app_coverage** | [**AppStoreVersionRelationshipsRoutingAppCoverage**](AppStoreVersionRelationshipsRoutingAppCoverage.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_store_version_relationships import AppStoreVersionRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionRelationships from a JSON string
app_store_version_relationships_instance = AppStoreVersionRelationships.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionRelationships.to_json())

# convert the object into a dict
app_store_version_relationships_dict = app_store_version_relationships_instance.to_dict()
# create an instance of AppStoreVersionRelationships from a dict
app_store_version_relationships_from_dict = AppStoreVersionRelationships.from_dict(app_store_version_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



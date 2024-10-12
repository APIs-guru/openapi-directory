# BuildRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | [**AppEncryptionDeclarationRelationshipsApp**](AppEncryptionDeclarationRelationshipsApp.md) |  | [optional] 
**app_encryption_declaration** | [**BuildRelationshipsAppEncryptionDeclaration**](BuildRelationshipsAppEncryptionDeclaration.md) |  | [optional] 
**app_store_version** | [**AppStoreReviewDetailRelationshipsAppStoreVersion**](AppStoreReviewDetailRelationshipsAppStoreVersion.md) |  | [optional] 
**beta_app_review_submission** | [**BuildRelationshipsBetaAppReviewSubmission**](BuildRelationshipsBetaAppReviewSubmission.md) |  | [optional] 
**beta_build_localizations** | [**BuildRelationshipsBetaBuildLocalizations**](BuildRelationshipsBetaBuildLocalizations.md) |  | [optional] 
**build_beta_detail** | [**BuildRelationshipsBuildBetaDetail**](BuildRelationshipsBuildBetaDetail.md) |  | [optional] 
**icons** | [**BuildRelationshipsIcons**](BuildRelationshipsIcons.md) |  | [optional] 
**individual_testers** | [**BetaGroupRelationshipsBetaTesters**](BetaGroupRelationshipsBetaTesters.md) |  | [optional] 
**pre_release_version** | [**BuildRelationshipsPreReleaseVersion**](BuildRelationshipsPreReleaseVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.build_relationships import BuildRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of BuildRelationships from a JSON string
build_relationships_instance = BuildRelationships.from_json(json)
# print the JSON string representation of the object
print(BuildRelationships.to_json())

# convert the object into a dict
build_relationships_dict = build_relationships_instance.to_dict()
# create an instance of BuildRelationships from a dict
build_relationships_from_dict = BuildRelationships.from_dict(build_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



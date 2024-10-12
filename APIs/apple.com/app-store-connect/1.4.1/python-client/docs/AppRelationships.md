# AppRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_infos** | [**AppRelationshipsAppInfos**](AppRelationshipsAppInfos.md) |  | [optional] 
**app_store_versions** | [**AppRelationshipsAppStoreVersions**](AppRelationshipsAppStoreVersions.md) |  | [optional] 
**available_territories** | [**AppRelationshipsAvailableTerritories**](AppRelationshipsAvailableTerritories.md) |  | [optional] 
**beta_app_localizations** | [**AppRelationshipsBetaAppLocalizations**](AppRelationshipsBetaAppLocalizations.md) |  | [optional] 
**beta_app_review_detail** | [**AppRelationshipsBetaAppReviewDetail**](AppRelationshipsBetaAppReviewDetail.md) |  | [optional] 
**beta_groups** | [**AppRelationshipsBetaGroups**](AppRelationshipsBetaGroups.md) |  | [optional] 
**beta_license_agreement** | [**AppRelationshipsBetaLicenseAgreement**](AppRelationshipsBetaLicenseAgreement.md) |  | [optional] 
**builds** | [**AppRelationshipsBuilds**](AppRelationshipsBuilds.md) |  | [optional] 
**end_user_license_agreement** | [**AppRelationshipsEndUserLicenseAgreement**](AppRelationshipsEndUserLicenseAgreement.md) |  | [optional] 
**game_center_enabled_versions** | [**AppRelationshipsGameCenterEnabledVersions**](AppRelationshipsGameCenterEnabledVersions.md) |  | [optional] 
**in_app_purchases** | [**AppRelationshipsInAppPurchases**](AppRelationshipsInAppPurchases.md) |  | [optional] 
**pre_order** | [**AppRelationshipsPreOrder**](AppRelationshipsPreOrder.md) |  | [optional] 
**pre_release_versions** | [**AppRelationshipsPreReleaseVersions**](AppRelationshipsPreReleaseVersions.md) |  | [optional] 
**prices** | [**AppRelationshipsPrices**](AppRelationshipsPrices.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_relationships import AppRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of AppRelationships from a JSON string
app_relationships_instance = AppRelationships.from_json(json)
# print the JSON string representation of the object
print(AppRelationships.to_json())

# convert the object into a dict
app_relationships_dict = app_relationships_instance.to_dict()
# create an instance of AppRelationships from a dict
app_relationships_from_dict = AppRelationships.from_dict(app_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



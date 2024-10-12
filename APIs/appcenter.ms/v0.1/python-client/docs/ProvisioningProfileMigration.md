# ProvisioningProfileMigration

Describes the migration schema for a provisioning profile defined in HockeyApp.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_id** | **str** | The bundle/application identifier. | 
**expired_at** | **str** | The provisioning profile&#39;s expiration date in RFC 3339 format, i.e. 2017-07-21T17:32:28Z. | [optional] 
**is_appex** | **bool** | A boolean value that indicates whether the provisioning profile represents an app extension. | 
**name** | **str** | The name of the provisioning profile. | 
**team_identifier** | **str** | The team identifier. | 
**type** | **int** | The type of provisoning profile. | 
**udids** | **List[str]** | A list of UDIDs of provisioned devices. | [optional] 
**url** | **str** | A provisioning profile URL that indicates where to download it from. | [optional] 

## Example

```python
from openapi_client.models.provisioning_profile_migration import ProvisioningProfileMigration

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisioningProfileMigration from a JSON string
provisioning_profile_migration_instance = ProvisioningProfileMigration.from_json(json)
# print the JSON string representation of the object
print(ProvisioningProfileMigration.to_json())

# convert the object into a dict
provisioning_profile_migration_dict = provisioning_profile_migration_instance.to_dict()
# create an instance of ProvisioningProfileMigration from a dict
provisioning_profile_migration_from_dict = ProvisioningProfileMigration.from_dict(provisioning_profile_migration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



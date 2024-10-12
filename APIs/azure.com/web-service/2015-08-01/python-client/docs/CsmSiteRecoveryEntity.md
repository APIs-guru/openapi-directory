# CsmSiteRecoveryEntity

Class containing details about site recovery operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recover_config** | **bool** | If true, then the website&#39;s configuration will be reverted to its state at SnapshotTime | [optional] 
**site_name** | **str** | [Optional] Destination web app name into which web app should be recovered. This is case when new web app should be created instead. | [optional] 
**slot_name** | **str** | [Optional] Destination web app slot name into which web app should be recovered | [optional] 
**snapshot_time** | **datetime** | Point in time in which the site recover should be attempted. | [optional] 

## Example

```python
from openapi_client.models.csm_site_recovery_entity import CsmSiteRecoveryEntity

# TODO update the JSON string below
json = "{}"
# create an instance of CsmSiteRecoveryEntity from a JSON string
csm_site_recovery_entity_instance = CsmSiteRecoveryEntity.from_json(json)
# print the JSON string representation of the object
print(CsmSiteRecoveryEntity.to_json())

# convert the object into a dict
csm_site_recovery_entity_dict = csm_site_recovery_entity_instance.to_dict()
# create an instance of CsmSiteRecoveryEntity from a dict
csm_site_recovery_entity_from_dict = CsmSiteRecoveryEntity.from_dict(csm_site_recovery_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



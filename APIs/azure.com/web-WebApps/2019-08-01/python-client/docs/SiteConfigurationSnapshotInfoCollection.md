# SiteConfigurationSnapshotInfoCollection

Collection of metadata for the app configuration snapshots that can be restored.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[SiteConfigurationSnapshotInfo]**](SiteConfigurationSnapshotInfo.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.site_configuration_snapshot_info_collection import SiteConfigurationSnapshotInfoCollection

# TODO update the JSON string below
json = "{}"
# create an instance of SiteConfigurationSnapshotInfoCollection from a JSON string
site_configuration_snapshot_info_collection_instance = SiteConfigurationSnapshotInfoCollection.from_json(json)
# print the JSON string representation of the object
print(SiteConfigurationSnapshotInfoCollection.to_json())

# convert the object into a dict
site_configuration_snapshot_info_collection_dict = site_configuration_snapshot_info_collection_instance.to_dict()
# create an instance of SiteConfigurationSnapshotInfoCollection from a dict
site_configuration_snapshot_info_collection_from_dict = SiteConfigurationSnapshotInfoCollection.from_dict(site_configuration_snapshot_info_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



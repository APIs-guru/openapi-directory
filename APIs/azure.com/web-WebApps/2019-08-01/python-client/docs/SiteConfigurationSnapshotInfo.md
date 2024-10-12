# SiteConfigurationSnapshotInfo

A snapshot of a web app configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | SiteConfigurationSnapshotInfo resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.site_configuration_snapshot_info import SiteConfigurationSnapshotInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SiteConfigurationSnapshotInfo from a JSON string
site_configuration_snapshot_info_instance = SiteConfigurationSnapshotInfo.from_json(json)
# print the JSON string representation of the object
print(SiteConfigurationSnapshotInfo.to_json())

# convert the object into a dict
site_configuration_snapshot_info_dict = site_configuration_snapshot_info_instance.to_dict()
# create an instance of SiteConfigurationSnapshotInfo from a dict
site_configuration_snapshot_info_from_dict = SiteConfigurationSnapshotInfo.from_dict(site_configuration_snapshot_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



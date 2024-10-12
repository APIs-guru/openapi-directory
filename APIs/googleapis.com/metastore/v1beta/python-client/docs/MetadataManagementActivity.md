# MetadataManagementActivity

The metadata management activities of the metastore service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata_exports** | [**List[MetadataExport]**](MetadataExport.md) | Output only. The latest metadata exports of the metastore service. | [optional] [readonly] 
**restores** | [**List[Restore]**](Restore.md) | Output only. The latest restores of the metastore service. | [optional] [readonly] 

## Example

```python
from openapi_client.models.metadata_management_activity import MetadataManagementActivity

# TODO update the JSON string below
json = "{}"
# create an instance of MetadataManagementActivity from a JSON string
metadata_management_activity_instance = MetadataManagementActivity.from_json(json)
# print the JSON string representation of the object
print(MetadataManagementActivity.to_json())

# convert the object into a dict
metadata_management_activity_dict = metadata_management_activity_instance.to_dict()
# create an instance of MetadataManagementActivity from a dict
metadata_management_activity_from_dict = MetadataManagementActivity.from_dict(metadata_management_activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



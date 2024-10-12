# Export

An export. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_storage_sink** | [**CloudStorageSink**](CloudStorageSink.md) |  | [optional] 
**create_time** | **str** | Output only. The time when the export was created. | [optional] 
**export_options** | [**ExportOptions**](ExportOptions.md) |  | [optional] 
**id** | **str** | Output only. The generated export ID. | [optional] 
**matter_id** | **str** | Output only. The matter ID. | [optional] 
**name** | **str** | The export name. Don&#39;t use special characters (~!$&#39;(),;@:/?) in the name, they can prevent you from downloading exports. | [optional] 
**parent_export_id** | **str** | Output only. Identifies the parent export that spawned this child export. This is only set on child exports. | [optional] [readonly] 
**query** | [**Query**](Query.md) |  | [optional] 
**requester** | [**UserInfo**](UserInfo.md) |  | [optional] 
**stats** | [**ExportStats**](ExportStats.md) |  | [optional] 
**status** | **str** | Output only. The status of the export. | [optional] 

## Example

```python
from openapi_client.models.export import Export

# TODO update the JSON string below
json = "{}"
# create an instance of Export from a JSON string
export_instance = Export.from_json(json)
# print the JSON string representation of the object
print(Export.to_json())

# convert the object into a dict
export_dict = export_instance.to_dict()
# create an instance of Export from a dict
export_from_dict = Export.from_dict(export_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



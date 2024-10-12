# Export

A property containing information about the blobs to be exported for an export job. This property is required for export jobs, but must not be specified for import jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_list** | [**ExportBlobList**](ExportBlobList.md) |  | [optional] 
**blob_listblob_path** | **str** | The relative URI to the block blob that contains the list of blob paths or blob path prefixes as defined above, beginning with the container name. If the blob is in root container, the URI must begin with $root.  | [optional] 

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



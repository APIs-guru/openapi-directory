# ExportBlobList

A list of the blobs to be exported.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_path** | **List[str]** | A collection of blob-path strings. | [optional] 
**blob_path_prefix** | **List[str]** | A collection of blob-prefix strings. | [optional] 

## Example

```python
from openapi_client.models.export_blob_list import ExportBlobList

# TODO update the JSON string below
json = "{}"
# create an instance of ExportBlobList from a JSON string
export_blob_list_instance = ExportBlobList.from_json(json)
# print the JSON string representation of the object
print(ExportBlobList.to_json())

# convert the object into a dict
export_blob_list_dict = export_blob_list_instance.to_dict()
# create an instance of ExportBlobList from a dict
export_blob_list_from_dict = ExportBlobList.from_dict(export_blob_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



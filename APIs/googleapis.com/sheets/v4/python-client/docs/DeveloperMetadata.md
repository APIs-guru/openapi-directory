# DeveloperMetadata

Developer metadata associated with a location or object in a spreadsheet. Developer metadata may be used to associate arbitrary data with various parts of a spreadsheet and will remain associated at those locations as they move around and the spreadsheet is edited. For example, if developer metadata is associated with row 5 and another row is then subsequently inserted above row 5, that original metadata will still be associated with the row it was first associated with (what is now row 6). If the associated object is deleted its metadata is deleted too.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | [**DeveloperMetadataLocation**](DeveloperMetadataLocation.md) |  | [optional] 
**metadata_id** | **int** | The spreadsheet-scoped unique ID that identifies the metadata. IDs may be specified when metadata is created, otherwise one will be randomly generated and assigned. Must be positive. | [optional] 
**metadata_key** | **str** | The metadata key. There may be multiple metadata in a spreadsheet with the same key. Developer metadata must always have a key specified. | [optional] 
**metadata_value** | **str** | Data associated with the metadata&#39;s key. | [optional] 
**visibility** | **str** | The metadata visibility. Developer metadata must always have a visibility specified. | [optional] 

## Example

```python
from openapi_client.models.developer_metadata import DeveloperMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperMetadata from a JSON string
developer_metadata_instance = DeveloperMetadata.from_json(json)
# print the JSON string representation of the object
print(DeveloperMetadata.to_json())

# convert the object into a dict
developer_metadata_dict = developer_metadata_instance.to_dict()
# create an instance of DeveloperMetadata from a dict
developer_metadata_from_dict = DeveloperMetadata.from_dict(developer_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



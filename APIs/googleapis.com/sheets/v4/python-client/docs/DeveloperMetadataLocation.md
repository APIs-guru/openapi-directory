# DeveloperMetadataLocation

A location where metadata may be associated in a spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_range** | [**DimensionRange**](DimensionRange.md) |  | [optional] 
**location_type** | **str** | The type of location this object represents. This field is read-only. | [optional] 
**sheet_id** | **int** | The ID of the sheet when metadata is associated with an entire sheet. | [optional] 
**spreadsheet** | **bool** | True when metadata is associated with an entire spreadsheet. | [optional] 

## Example

```python
from openapi_client.models.developer_metadata_location import DeveloperMetadataLocation

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperMetadataLocation from a JSON string
developer_metadata_location_instance = DeveloperMetadataLocation.from_json(json)
# print the JSON string representation of the object
print(DeveloperMetadataLocation.to_json())

# convert the object into a dict
developer_metadata_location_dict = developer_metadata_location_instance.to_dict()
# create an instance of DeveloperMetadataLocation from a dict
developer_metadata_location_from_dict = DeveloperMetadataLocation.from_dict(developer_metadata_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



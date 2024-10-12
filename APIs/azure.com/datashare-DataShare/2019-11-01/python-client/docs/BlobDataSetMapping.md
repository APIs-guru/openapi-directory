# BlobDataSetMapping

A Blob data set mapping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BlobMappingProperties**](BlobMappingProperties.md) |  | 
**kind** | **str** | Kind of data set mapping. | 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.blob_data_set_mapping import BlobDataSetMapping

# TODO update the JSON string below
json = "{}"
# create an instance of BlobDataSetMapping from a JSON string
blob_data_set_mapping_instance = BlobDataSetMapping.from_json(json)
# print the JSON string representation of the object
print(BlobDataSetMapping.to_json())

# convert the object into a dict
blob_data_set_mapping_dict = blob_data_set_mapping_instance.to_dict()
# create an instance of BlobDataSetMapping from a dict
blob_data_set_mapping_from_dict = BlobDataSetMapping.from_dict(blob_data_set_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



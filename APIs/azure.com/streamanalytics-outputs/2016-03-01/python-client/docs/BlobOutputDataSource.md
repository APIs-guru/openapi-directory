# BlobOutputDataSource

Describes a blob output data source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BlobOutputDataSourceProperties**](BlobOutputDataSourceProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.blob_output_data_source import BlobOutputDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of BlobOutputDataSource from a JSON string
blob_output_data_source_instance = BlobOutputDataSource.from_json(json)
# print the JSON string representation of the object
print(BlobOutputDataSource.to_json())

# convert the object into a dict
blob_output_data_source_dict = blob_output_data_source_instance.to_dict()
# create an instance of BlobOutputDataSource from a dict
blob_output_data_source_from_dict = BlobOutputDataSource.from_dict(blob_output_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



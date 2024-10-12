# BlobStreamInputDataSource

Describes a blob input data source that contains stream data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BlobStreamInputDataSourceProperties**](BlobStreamInputDataSourceProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.blob_stream_input_data_source import BlobStreamInputDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of BlobStreamInputDataSource from a JSON string
blob_stream_input_data_source_instance = BlobStreamInputDataSource.from_json(json)
# print the JSON string representation of the object
print(BlobStreamInputDataSource.to_json())

# convert the object into a dict
blob_stream_input_data_source_dict = blob_stream_input_data_source_instance.to_dict()
# create an instance of BlobStreamInputDataSource from a dict
blob_stream_input_data_source_from_dict = BlobStreamInputDataSource.from_dict(blob_stream_input_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



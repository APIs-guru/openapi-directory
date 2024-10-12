# BlobReferenceInputDataSource

Describes a blob input data source that contains reference data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BlobReferenceInputDataSourceProperties**](BlobReferenceInputDataSourceProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.blob_reference_input_data_source import BlobReferenceInputDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of BlobReferenceInputDataSource from a JSON string
blob_reference_input_data_source_instance = BlobReferenceInputDataSource.from_json(json)
# print the JSON string representation of the object
print(BlobReferenceInputDataSource.to_json())

# convert the object into a dict
blob_reference_input_data_source_dict = blob_reference_input_data_source_instance.to_dict()
# create an instance of BlobReferenceInputDataSource from a dict
blob_reference_input_data_source_from_dict = BlobReferenceInputDataSource.from_dict(blob_reference_input_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



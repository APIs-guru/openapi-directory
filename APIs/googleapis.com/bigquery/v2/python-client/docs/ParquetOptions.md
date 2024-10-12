# ParquetOptions

Parquet Options for load and make external tables.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_list_inference** | **bool** | Optional. Indicates whether to use schema inference specifically for Parquet LIST logical type. | [optional] 
**enum_as_string** | **bool** | Optional. Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default. | [optional] 

## Example

```python
from openapi_client.models.parquet_options import ParquetOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ParquetOptions from a JSON string
parquet_options_instance = ParquetOptions.from_json(json)
# print the JSON string representation of the object
print(ParquetOptions.to_json())

# convert the object into a dict
parquet_options_dict = parquet_options_instance.to_dict()
# create an instance of ParquetOptions from a dict
parquet_options_from_dict = ParquetOptions.from_dict(parquet_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



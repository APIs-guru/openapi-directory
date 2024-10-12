# GoogleCloudDataplexV1StorageFormat

Describes the format of the data within its storage location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compression_format** | **str** | Optional. The compression type associated with the stored data. If unspecified, the data is uncompressed. | [optional] 
**csv** | [**GoogleCloudDataplexV1StorageFormatCsvOptions**](GoogleCloudDataplexV1StorageFormatCsvOptions.md) |  | [optional] 
**format** | **str** | Output only. The data format associated with the stored data, which represents content type values. The value is inferred from mime type. | [optional] [readonly] 
**iceberg** | [**GoogleCloudDataplexV1StorageFormatIcebergOptions**](GoogleCloudDataplexV1StorageFormatIcebergOptions.md) |  | [optional] 
**var_json** | [**GoogleCloudDataplexV1StorageFormatJsonOptions**](GoogleCloudDataplexV1StorageFormatJsonOptions.md) |  | [optional] 
**mime_type** | **str** | Required. The mime type descriptor for the data. Must match the pattern {type}/{subtype}. Supported values: application/x-parquet application/x-avro application/x-orc application/x-tfrecord application/x-parquet+iceberg application/x-avro+iceberg application/x-orc+iceberg application/json application/{subtypes} text/csv text/ image/{image subtype} video/{video subtype} audio/{audio subtype} | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_storage_format import GoogleCloudDataplexV1StorageFormat

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1StorageFormat from a JSON string
google_cloud_dataplex_v1_storage_format_instance = GoogleCloudDataplexV1StorageFormat.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1StorageFormat.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_storage_format_dict = google_cloud_dataplex_v1_storage_format_instance.to_dict()
# create an instance of GoogleCloudDataplexV1StorageFormat from a dict
google_cloud_dataplex_v1_storage_format_from_dict = GoogleCloudDataplexV1StorageFormat.from_dict(google_cloud_dataplex_v1_storage_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



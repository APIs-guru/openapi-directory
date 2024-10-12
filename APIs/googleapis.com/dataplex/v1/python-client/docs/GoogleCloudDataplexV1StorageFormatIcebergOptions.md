# GoogleCloudDataplexV1StorageFormatIcebergOptions

Describes Iceberg data format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata_location** | **str** | Optional. The location of where the iceberg metadata is present, must be within the table path | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_storage_format_iceberg_options import GoogleCloudDataplexV1StorageFormatIcebergOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1StorageFormatIcebergOptions from a JSON string
google_cloud_dataplex_v1_storage_format_iceberg_options_instance = GoogleCloudDataplexV1StorageFormatIcebergOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1StorageFormatIcebergOptions.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_storage_format_iceberg_options_dict = google_cloud_dataplex_v1_storage_format_iceberg_options_instance.to_dict()
# create an instance of GoogleCloudDataplexV1StorageFormatIcebergOptions from a dict
google_cloud_dataplex_v1_storage_format_iceberg_options_from_dict = GoogleCloudDataplexV1StorageFormatIcebergOptions.from_dict(google_cloud_dataplex_v1_storage_format_iceberg_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



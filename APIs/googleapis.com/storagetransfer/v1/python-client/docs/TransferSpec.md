# TransferSpec

Configuration for running a transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aws_s3_compatible_data_source** | [**AwsS3CompatibleData**](AwsS3CompatibleData.md) |  | [optional] 
**aws_s3_data_source** | [**AwsS3Data**](AwsS3Data.md) |  | [optional] 
**azure_blob_storage_data_source** | [**AzureBlobStorageData**](AzureBlobStorageData.md) |  | [optional] 
**gcs_data_sink** | [**GcsData**](GcsData.md) |  | [optional] 
**gcs_data_source** | [**GcsData**](GcsData.md) |  | [optional] 
**gcs_intermediate_data_location** | [**GcsData**](GcsData.md) |  | [optional] 
**hdfs_data_source** | [**HdfsData**](HdfsData.md) |  | [optional] 
**http_data_source** | [**HttpData**](HttpData.md) |  | [optional] 
**object_conditions** | [**ObjectConditions**](ObjectConditions.md) |  | [optional] 
**posix_data_sink** | [**PosixFilesystem**](PosixFilesystem.md) |  | [optional] 
**posix_data_source** | [**PosixFilesystem**](PosixFilesystem.md) |  | [optional] 
**sink_agent_pool_name** | **str** | Specifies the agent pool name associated with the posix data sink. When unspecified, the default name is used. | [optional] 
**source_agent_pool_name** | **str** | Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used. | [optional] 
**transfer_manifest** | [**TransferManifest**](TransferManifest.md) |  | [optional] 
**transfer_options** | [**TransferOptions**](TransferOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.transfer_spec import TransferSpec

# TODO update the JSON string below
json = "{}"
# create an instance of TransferSpec from a JSON string
transfer_spec_instance = TransferSpec.from_json(json)
# print the JSON string representation of the object
print(TransferSpec.to_json())

# convert the object into a dict
transfer_spec_dict = transfer_spec_instance.to_dict()
# create an instance of TransferSpec from a dict
transfer_spec_from_dict = TransferSpec.from_dict(transfer_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



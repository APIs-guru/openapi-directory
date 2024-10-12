# BlobStreamInputDataSourceProperties

The properties that are associated with a blob input containing stream data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_partition_count** | **int** | The partition count of the blob input data source. Range 1 - 256. | [optional] 
**container** | **str** | The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests. | [optional] 
**date_format** | **str** | The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead. | [optional] 
**path_pattern** | **str** | The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example. | [optional] 
**storage_accounts** | [**List[StorageAccount]**](StorageAccount.md) | A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests. | [optional] 
**time_format** | **str** | The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead. | [optional] 

## Example

```python
from openapi_client.models.blob_stream_input_data_source_properties import BlobStreamInputDataSourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BlobStreamInputDataSourceProperties from a JSON string
blob_stream_input_data_source_properties_instance = BlobStreamInputDataSourceProperties.from_json(json)
# print the JSON string representation of the object
print(BlobStreamInputDataSourceProperties.to_json())

# convert the object into a dict
blob_stream_input_data_source_properties_dict = blob_stream_input_data_source_properties_instance.to_dict()
# create an instance of BlobStreamInputDataSourceProperties from a dict
blob_stream_input_data_source_properties_from_dict = BlobStreamInputDataSourceProperties.from_dict(blob_stream_input_data_source_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



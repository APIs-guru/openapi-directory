# LoadQueryStatistics

Statistics for a LOAD query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bad_records** | **str** | Output only. The number of bad records encountered while processing a LOAD query. Note that if the job has failed because of more bad records encountered than the maximum allowed in the load job configuration, then this number can be less than the total number of bad records present in the input data. | [optional] [readonly] 
**bytes_transferred** | **str** | Output only. This field is deprecated. The number of bytes of source data copied over the network for a &#x60;LOAD&#x60; query. &#x60;transferred_bytes&#x60; has the canonical value for physical transferred bytes, which is used for BigQuery Omni billing. | [optional] [readonly] 
**input_file_bytes** | **str** | Output only. Number of bytes of source data in a LOAD query. | [optional] [readonly] 
**input_files** | **str** | Output only. Number of source files in a LOAD query. | [optional] [readonly] 
**output_bytes** | **str** | Output only. Size of the loaded data in bytes. Note that while a LOAD query is in the running state, this value may change. | [optional] [readonly] 
**output_rows** | **str** | Output only. Number of rows imported in a LOAD query. Note that while a LOAD query is in the running state, this value may change. | [optional] [readonly] 

## Example

```python
from openapi_client.models.load_query_statistics import LoadQueryStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of LoadQueryStatistics from a JSON string
load_query_statistics_instance = LoadQueryStatistics.from_json(json)
# print the JSON string representation of the object
print(LoadQueryStatistics.to_json())

# convert the object into a dict
load_query_statistics_dict = load_query_statistics_instance.to_dict()
# create an instance of LoadQueryStatistics from a dict
load_query_statistics_from_dict = LoadQueryStatistics.from_dict(load_query_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



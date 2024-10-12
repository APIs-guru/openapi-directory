# DataStatistics

The additional details related to the data related statistics of a job. Currently applicable only for Backup, Clone and Restore jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_data** | **int** | The number of bytes of data written to cloud, as part of the job. | [optional] 
**processed_data** | **int** | The number of bytes of data processed till now, as part of the job. | [optional] 
**throughput** | **int** | The average throughput of data processed(bytes/sec), as part of the job. | [optional] 
**total_data** | **int** | The total bytes of data to be processed, as part of the job. | [optional] 

## Example

```python
from openapi_client.models.data_statistics import DataStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of DataStatistics from a JSON string
data_statistics_instance = DataStatistics.from_json(json)
# print the JSON string representation of the object
print(DataStatistics.to_json())

# convert the object into a dict
data_statistics_dict = data_statistics_instance.to_dict()
# create an instance of DataStatistics from a dict
data_statistics_from_dict = DataStatistics.from_dict(data_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



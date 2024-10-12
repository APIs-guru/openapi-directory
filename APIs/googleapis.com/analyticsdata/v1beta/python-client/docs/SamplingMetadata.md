# SamplingMetadata

If this report results is [sampled](https://support.google.com/analytics/answer/13331292), this describes the percentage of events used in this report. Sampling is the practice of analyzing a subset of all data in order to uncover the meaningful information in the larger data set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**samples_read_count** | **str** | The total number of events read in this sampled report for a date range. This is the size of the subset this property&#39;s data that was analyzed in this report. | [optional] 
**sampling_space_size** | **str** | The total number of events present in this property&#39;s data that could have been analyzed in this report for a date range. Sampling uncovers the meaningful information about the larger data set, and this is the size of the larger data set. To calculate the percentage of available data that was used in this report, compute &#x60;samplesReadCount/samplingSpaceSize&#x60;. | [optional] 

## Example

```python
from openapi_client.models.sampling_metadata import SamplingMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SamplingMetadata from a JSON string
sampling_metadata_instance = SamplingMetadata.from_json(json)
# print the JSON string representation of the object
print(SamplingMetadata.to_json())

# convert the object into a dict
sampling_metadata_dict = sampling_metadata_instance.to_dict()
# create an instance of SamplingMetadata from a dict
sampling_metadata_from_dict = SamplingMetadata.from_dict(sampling_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# DateTimeDownloadReleaseCounts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counts** | [**List[DateTimeDownloadReleaseCountsCountsInner]**](DateTimeDownloadReleaseCountsCountsInner.md) | Release counts per day. | [optional] 
**total** | **int** |  | [optional] 
**unique** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.date_time_download_release_counts import DateTimeDownloadReleaseCounts

# TODO update the JSON string below
json = "{}"
# create an instance of DateTimeDownloadReleaseCounts from a JSON string
date_time_download_release_counts_instance = DateTimeDownloadReleaseCounts.from_json(json)
# print the JSON string representation of the object
print(DateTimeDownloadReleaseCounts.to_json())

# convert the object into a dict
date_time_download_release_counts_dict = date_time_download_release_counts_instance.to_dict()
# create an instance of DateTimeDownloadReleaseCounts from a dict
date_time_download_release_counts_from_dict = DateTimeDownloadReleaseCounts.from_dict(date_time_download_release_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



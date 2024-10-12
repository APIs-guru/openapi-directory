# DateTimeDownloadReleaseCount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **str** | The ISO 8601 datetime. | [optional] 
**total** | **int** |  | [optional] 
**unique** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.date_time_download_release_count import DateTimeDownloadReleaseCount

# TODO update the JSON string below
json = "{}"
# create an instance of DateTimeDownloadReleaseCount from a JSON string
date_time_download_release_count_instance = DateTimeDownloadReleaseCount.from_json(json)
# print the JSON string representation of the object
print(DateTimeDownloadReleaseCount.to_json())

# convert the object into a dict
date_time_download_release_count_dict = date_time_download_release_count_instance.to_dict()
# create an instance of DateTimeDownloadReleaseCount from a dict
date_time_download_release_count_from_dict = DateTimeDownloadReleaseCount.from_dict(date_time_download_release_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



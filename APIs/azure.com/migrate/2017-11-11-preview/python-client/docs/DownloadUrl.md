# DownloadUrl

Download URL for assessment report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assessment_report_url** | **str** | Hyperlink to download report. | [optional] [readonly] 
**expiration_time** | **datetime** | Expiry date of download url. | [optional] [readonly] 

## Example

```python
from openapi_client.models.download_url import DownloadUrl

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadUrl from a JSON string
download_url_instance = DownloadUrl.from_json(json)
# print the JSON string representation of the object
print(DownloadUrl.to_json())

# convert the object into a dict
download_url_dict = download_url_instance.to_dict()
# create an instance of DownloadUrl from a dict
download_url_from_dict = DownloadUrl.from_dict(download_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



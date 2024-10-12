# UrlDownloadSize

The URL-level breakdown for the download size.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_size_kb** | **int** | Download size of the URL in kilobytes. | [optional] 
**normalized_url** | **str** | The normalized URL with query parameters and fragment removed. | [optional] 

## Example

```python
from openapi_client.models.url_download_size import UrlDownloadSize

# TODO update the JSON string below
json = "{}"
# create an instance of UrlDownloadSize from a JSON string
url_download_size_instance = UrlDownloadSize.from_json(json)
# print the JSON string representation of the object
print(UrlDownloadSize.to_json())

# convert the object into a dict
url_download_size_dict = url_download_size_instance.to_dict()
# create an instance of UrlDownloadSize from a dict
url_download_size_from_dict = UrlDownloadSize.from_dict(url_download_size_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



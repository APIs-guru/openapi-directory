# PostExternalDownloadUrl

Set the download URL of an external build

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_url** | **str** | The new download URL | [optional] 

## Example

```python
from openapi_client.models.post_external_download_url import PostExternalDownloadUrl

# TODO update the JSON string below
json = "{}"
# create an instance of PostExternalDownloadUrl from a JSON string
post_external_download_url_instance = PostExternalDownloadUrl.from_json(json)
# print the JSON string representation of the object
print(PostExternalDownloadUrl.to_json())

# convert the object into a dict
post_external_download_url_dict = post_external_download_url_instance.to_dict()
# create an instance of PostExternalDownloadUrl from a dict
post_external_download_url_from_dict = PostExternalDownloadUrl.from_dict(post_external_download_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GenerateDownloadUrlRequest

Request of `GenerateDownloadUrl` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version_id** | **str** | The optional version of function. If not set, default, current version is used. | [optional] 

## Example

```python
from openapi_client.models.generate_download_url_request import GenerateDownloadUrlRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateDownloadUrlRequest from a JSON string
generate_download_url_request_instance = GenerateDownloadUrlRequest.from_json(json)
# print the JSON string representation of the object
print(GenerateDownloadUrlRequest.to_json())

# convert the object into a dict
generate_download_url_request_dict = generate_download_url_request_instance.to_dict()
# create an instance of GenerateDownloadUrlRequest from a dict
generate_download_url_request_from_dict = GenerateDownloadUrlRequest.from_dict(generate_download_url_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



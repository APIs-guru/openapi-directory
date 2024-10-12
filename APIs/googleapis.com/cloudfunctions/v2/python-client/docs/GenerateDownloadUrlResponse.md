# GenerateDownloadUrlResponse

Response of `GenerateDownloadUrl` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_url** | **str** | The generated Google Cloud Storage signed URL that should be used for function source code download. | [optional] 

## Example

```python
from openapi_client.models.generate_download_url_response import GenerateDownloadUrlResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateDownloadUrlResponse from a JSON string
generate_download_url_response_instance = GenerateDownloadUrlResponse.from_json(json)
# print the JSON string representation of the object
print(GenerateDownloadUrlResponse.to_json())

# convert the object into a dict
generate_download_url_response_dict = generate_download_url_response_instance.to_dict()
# create an instance of GenerateDownloadUrlResponse from a dict
generate_download_url_response_from_dict = GenerateDownloadUrlResponse.from_dict(generate_download_url_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



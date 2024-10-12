# GenerateUploadUriResponse

Response body for generating an upload URI.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**upload_uri** | **str** | The upload URI for the VHD. | [optional] 

## Example

```python
from openapi_client.models.generate_upload_uri_response import GenerateUploadUriResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateUploadUriResponse from a JSON string
generate_upload_uri_response_instance = GenerateUploadUriResponse.from_json(json)
# print the JSON string representation of the object
print(GenerateUploadUriResponse.to_json())

# convert the object into a dict
generate_upload_uri_response_dict = generate_upload_uri_response_instance.to_dict()
# create an instance of GenerateUploadUriResponse from a dict
generate_upload_uri_response_from_dict = GenerateUploadUriResponse.from_dict(generate_upload_uri_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



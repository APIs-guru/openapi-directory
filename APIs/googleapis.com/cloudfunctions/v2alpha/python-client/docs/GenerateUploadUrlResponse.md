# GenerateUploadUrlResponse

Response of `GenerateSourceUploadUrl` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storage_source** | [**StorageSource**](StorageSource.md) |  | [optional] 
**upload_url** | **str** | The generated Google Cloud Storage signed URL that should be used for a function source code upload. The uploaded file should be a zip archive which contains a function. | [optional] 

## Example

```python
from openapi_client.models.generate_upload_url_response import GenerateUploadUrlResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateUploadUrlResponse from a JSON string
generate_upload_url_response_instance = GenerateUploadUrlResponse.from_json(json)
# print the JSON string representation of the object
print(GenerateUploadUrlResponse.to_json())

# convert the object into a dict
generate_upload_url_response_dict = generate_upload_url_response_instance.to_dict()
# create an instance of GenerateUploadUrlResponse from a dict
generate_upload_url_response_from_dict = GenerateUploadUrlResponse.from_dict(generate_upload_url_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



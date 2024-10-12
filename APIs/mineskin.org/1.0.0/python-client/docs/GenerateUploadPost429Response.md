# GenerateUploadPost429Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delay** | **int** | The API&#39;s current delay in seconds | [optional] 
**error** | **str** | Error message | 
**next_request** | **int** | Unix timestamp when the next request is allowed | [optional] 

## Example

```python
from openapi_client.models.generate_upload_post429_response import GenerateUploadPost429Response

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateUploadPost429Response from a JSON string
generate_upload_post429_response_instance = GenerateUploadPost429Response.from_json(json)
# print the JSON string representation of the object
print(GenerateUploadPost429Response.to_json())

# convert the object into a dict
generate_upload_post429_response_dict = generate_upload_post429_response_instance.to_dict()
# create an instance of GenerateUploadPost429Response from a dict
generate_upload_post429_response_from_dict = GenerateUploadPost429Response.from_dict(generate_upload_post429_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



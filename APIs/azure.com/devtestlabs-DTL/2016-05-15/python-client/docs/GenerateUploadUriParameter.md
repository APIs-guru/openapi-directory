# GenerateUploadUriParameter

Properties for generating an upload URI.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_name** | **str** | The blob name of the upload URI. | [optional] 

## Example

```python
from openapi_client.models.generate_upload_uri_parameter import GenerateUploadUriParameter

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateUploadUriParameter from a JSON string
generate_upload_uri_parameter_instance = GenerateUploadUriParameter.from_json(json)
# print the JSON string representation of the object
print(GenerateUploadUriParameter.to_json())

# convert the object into a dict
generate_upload_uri_parameter_dict = generate_upload_uri_parameter_instance.to_dict()
# create an instance of GenerateUploadUriParameter from a dict
generate_upload_uri_parameter_from_dict = GenerateUploadUriParameter.from_dict(generate_upload_uri_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



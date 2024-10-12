# HasBuildUploadedResponse

The response for the build uploaded check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_build_uploaded** | **bool** | true if a build has been uploaded, false otherwise | [optional] 

## Example

```python
from openapi_client.models.has_build_uploaded_response import HasBuildUploadedResponse

# TODO update the JSON string below
json = "{}"
# create an instance of HasBuildUploadedResponse from a JSON string
has_build_uploaded_response_instance = HasBuildUploadedResponse.from_json(json)
# print the JSON string representation of the object
print(HasBuildUploadedResponse.to_json())

# convert the object into a dict
has_build_uploaded_response_dict = has_build_uploaded_response_instance.to_dict()
# create an instance of HasBuildUploadedResponse from a dict
has_build_uploaded_response_from_dict = HasBuildUploadedResponse.from_dict(has_build_uploaded_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# QuickBuildRequest

The queue build request parameters for a quick build.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_arguments** | [**List[BuildArgument]**](BuildArgument.md) | The collection of build arguments to be used. | [optional] 
**docker_file_path** | **str** | The Docker file path relative to the source location. | 
**image_names** | **List[str]** | The fully qualified image names including the repository and tag. | [optional] 
**is_push_enabled** | **bool** | The value of this property indicates whether the image built should be pushed to the registry or not. | [optional] [default to True]
**no_cache** | **bool** | The value of this property indicates whether the image cache is enabled or not. | [optional] [default to False]
**platform** | [**PlatformProperties**](PlatformProperties.md) |  | 
**source_location** | **str** | The URL(absolute or relative) of the source that needs to be built. For Docker build, it can be an URL to a tar or github repository as supported by Docker.  If it is relative URL, the relative path should be obtained from calling getSourceUploadUrl API. | 
**timeout** | **int** | Build timeout in seconds. | [optional] [default to 3600]

## Example

```python
from openapi_client.models.quick_build_request import QuickBuildRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QuickBuildRequest from a JSON string
quick_build_request_instance = QuickBuildRequest.from_json(json)
# print the JSON string representation of the object
print(QuickBuildRequest.to_json())

# convert the object into a dict
quick_build_request_dict = quick_build_request_instance.to_dict()
# create an instance of QuickBuildRequest from a dict
quick_build_request_from_dict = QuickBuildRequest.from_dict(quick_build_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# PublishContainerVersionResponse

Publish container version response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compiler_error** | **bool** | Compiler errors or not. | [optional] 
**container_version** | [**ContainerVersion**](ContainerVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.publish_container_version_response import PublishContainerVersionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PublishContainerVersionResponse from a JSON string
publish_container_version_response_instance = PublishContainerVersionResponse.from_json(json)
# print the JSON string representation of the object
print(PublishContainerVersionResponse.to_json())

# convert the object into a dict
publish_container_version_response_dict = publish_container_version_response_instance.to_dict()
# create an instance of PublishContainerVersionResponse from a dict
publish_container_version_response_from_dict = PublishContainerVersionResponse.from_dict(publish_container_version_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



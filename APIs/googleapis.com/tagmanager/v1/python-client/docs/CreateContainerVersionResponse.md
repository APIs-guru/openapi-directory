# CreateContainerVersionResponse

Create container versions response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compiler_error** | **bool** | Compiler errors or not. | [optional] 
**container_version** | [**ContainerVersion**](ContainerVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_container_version_response import CreateContainerVersionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateContainerVersionResponse from a JSON string
create_container_version_response_instance = CreateContainerVersionResponse.from_json(json)
# print the JSON string representation of the object
print(CreateContainerVersionResponse.to_json())

# convert the object into a dict
create_container_version_response_dict = create_container_version_response_instance.to_dict()
# create an instance of CreateContainerVersionResponse from a dict
create_container_version_response_from_dict = CreateContainerVersionResponse.from_dict(create_container_version_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



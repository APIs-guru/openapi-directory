# BaseImageDependency

Properties that describe a base image dependency.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digest** | **str** | The sha256-based digest of the image manifest. | [optional] 
**registry** | **str** | The registry login server. | [optional] 
**repository** | **str** | The repository name. | [optional] 
**tag** | **str** | The tag name. | [optional] 
**type** | **str** | The type of the base image dependency. | [optional] 

## Example

```python
from openapi_client.models.base_image_dependency import BaseImageDependency

# TODO update the JSON string below
json = "{}"
# create an instance of BaseImageDependency from a JSON string
base_image_dependency_instance = BaseImageDependency.from_json(json)
# print the JSON string representation of the object
print(BaseImageDependency.to_json())

# convert the object into a dict
base_image_dependency_dict = base_image_dependency_instance.to_dict()
# create an instance of BaseImageDependency from a dict
base_image_dependency_from_dict = BaseImageDependency.from_dict(base_image_dependency_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



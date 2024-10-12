# PathOverride

PathOverride. Path message defines path override for HTTP targets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | The URI path (e.g., /users/1234). Default is an empty string. | [optional] 

## Example

```python
from openapi_client.models.path_override import PathOverride

# TODO update the JSON string below
json = "{}"
# create an instance of PathOverride from a JSON string
path_override_instance = PathOverride.from_json(json)
# print the JSON string representation of the object
print(PathOverride.to_json())

# convert the object into a dict
path_override_dict = path_override_instance.to_dict()
# create an instance of PathOverride from a dict
path_override_from_dict = PathOverride.from_dict(path_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



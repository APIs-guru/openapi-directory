# IgnoreIgnorePath

The path that should be ignored. Wildcards can be specified with a `*`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **str** | The timestamp that the issue was ignored. | [optional] 
**disregard_if_fixable** | **bool** | Only ignore the issue if no upgrade or patch is available. | [optional] 
**expires** | **str** | The timestamp that the issue will no longer be ignored. | [optional] 
**ignored_by** | [**IgnoreIgnorePathIgnoredBy**](IgnoreIgnorePathIgnoredBy.md) |  | [optional] 
**reason** | **str** | The reason that the issue was ignored. | [optional] 
**reason_type** | **str** | The classification of the ignore. | [optional] 

## Example

```python
from openapi_client.models.ignore_ignore_path import IgnoreIgnorePath

# TODO update the JSON string below
json = "{}"
# create an instance of IgnoreIgnorePath from a JSON string
ignore_ignore_path_instance = IgnoreIgnorePath.from_json(json)
# print the JSON string representation of the object
print(IgnoreIgnorePath.to_json())

# convert the object into a dict
ignore_ignore_path_dict = ignore_ignore_path_instance.to_dict()
# create an instance of IgnoreIgnorePath from a dict
ignore_ignore_path_from_dict = IgnoreIgnorePath.from_dict(ignore_ignore_path_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



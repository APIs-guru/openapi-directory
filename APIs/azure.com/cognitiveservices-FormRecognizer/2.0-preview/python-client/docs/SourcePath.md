# SourcePath

Uri or local path to source data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **str** | File source path. | [optional] 

## Example

```python
from openapi_client.models.source_path import SourcePath

# TODO update the JSON string below
json = "{}"
# create an instance of SourcePath from a JSON string
source_path_instance = SourcePath.from_json(json)
# print the JSON string representation of the object
print(SourcePath.to_json())

# convert the object into a dict
source_path_dict = source_path_instance.to_dict()
# create an instance of SourcePath from a dict
source_path_from_dict = SourcePath.from_dict(source_path_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



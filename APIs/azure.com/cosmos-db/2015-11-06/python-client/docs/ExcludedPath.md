# ExcludedPath


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) | [optional] 

## Example

```python
from openapi_client.models.excluded_path import ExcludedPath

# TODO update the JSON string below
json = "{}"
# create an instance of ExcludedPath from a JSON string
excluded_path_instance = ExcludedPath.from_json(json)
# print the JSON string representation of the object
print(ExcludedPath.to_json())

# convert the object into a dict
excluded_path_dict = excluded_path_instance.to_dict()
# create an instance of ExcludedPath from a dict
excluded_path_from_dict = ExcludedPath.from_dict(excluded_path_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



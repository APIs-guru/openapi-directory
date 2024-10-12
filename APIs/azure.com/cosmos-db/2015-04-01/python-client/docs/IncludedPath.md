# IncludedPath

The paths that are included in indexing

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**indexes** | [**List[Indexes]**](Indexes.md) | List of indexes for this path | [optional] 
**path** | **str** | The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) | [optional] 

## Example

```python
from openapi_client.models.included_path import IncludedPath

# TODO update the JSON string below
json = "{}"
# create an instance of IncludedPath from a JSON string
included_path_instance = IncludedPath.from_json(json)
# print the JSON string representation of the object
print(IncludedPath.to_json())

# convert the object into a dict
included_path_dict = included_path_instance.to_dict()
# create an instance of IncludedPath from a dict
included_path_from_dict = IncludedPath.from_dict(included_path_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



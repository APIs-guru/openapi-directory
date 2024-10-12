# CompositePath


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | **str** | Sort order for composite paths. | [optional] 
**path** | **str** | The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) | [optional] 

## Example

```python
from openapi_client.models.composite_path import CompositePath

# TODO update the JSON string below
json = "{}"
# create an instance of CompositePath from a JSON string
composite_path_instance = CompositePath.from_json(json)
# print the JSON string representation of the object
print(CompositePath.to_json())

# convert the object into a dict
composite_path_dict = composite_path_instance.to_dict()
# create an instance of CompositePath from a dict
composite_path_from_dict = CompositePath.from_dict(composite_path_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



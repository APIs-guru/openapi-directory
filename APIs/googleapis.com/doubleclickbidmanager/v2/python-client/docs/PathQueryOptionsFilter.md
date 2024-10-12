# PathQueryOptionsFilter

Dimension filter on path events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | Dimension the filter is applied to. | [optional] 
**match** | **str** | Match logic of the filter. | [optional] 
**values** | **List[str]** | Values to filter on. | [optional] 

## Example

```python
from openapi_client.models.path_query_options_filter import PathQueryOptionsFilter

# TODO update the JSON string below
json = "{}"
# create an instance of PathQueryOptionsFilter from a JSON string
path_query_options_filter_instance = PathQueryOptionsFilter.from_json(json)
# print the JSON string representation of the object
print(PathQueryOptionsFilter.to_json())

# convert the object into a dict
path_query_options_filter_dict = path_query_options_filter_instance.to_dict()
# create an instance of PathQueryOptionsFilter from a dict
path_query_options_filter_from_dict = PathQueryOptionsFilter.from_dict(path_query_options_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



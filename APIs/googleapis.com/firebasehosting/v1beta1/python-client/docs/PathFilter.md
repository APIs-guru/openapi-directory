# PathFilter

A representation of filter path.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**regexes** | **List[str]** | An array of RegEx values by which to filter. | [optional] 

## Example

```python
from openapi_client.models.path_filter import PathFilter

# TODO update the JSON string below
json = "{}"
# create an instance of PathFilter from a JSON string
path_filter_instance = PathFilter.from_json(json)
# print the JSON string representation of the object
print(PathFilter.to_json())

# convert the object into a dict
path_filter_dict = path_filter_instance.to_dict()
# create an instance of PathFilter from a dict
path_filter_from_dict = PathFilter.from_dict(path_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



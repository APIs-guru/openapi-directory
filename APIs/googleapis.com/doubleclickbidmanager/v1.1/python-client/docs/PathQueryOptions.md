# PathQueryOptions

Path Query Options for Report Options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_grouping** | [**ChannelGrouping**](ChannelGrouping.md) |  | [optional] 
**path_filters** | [**List[PathFilter]**](PathFilter.md) | Path Filters. There is a limit of 100 path filters that can be set per report. | [optional] 

## Example

```python
from openapi_client.models.path_query_options import PathQueryOptions

# TODO update the JSON string below
json = "{}"
# create an instance of PathQueryOptions from a JSON string
path_query_options_instance = PathQueryOptions.from_json(json)
# print the JSON string representation of the object
print(PathQueryOptions.to_json())

# convert the object into a dict
path_query_options_dict = path_query_options_instance.to_dict()
# create an instance of PathQueryOptions from a dict
path_query_options_from_dict = PathQueryOptions.from_dict(path_query_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



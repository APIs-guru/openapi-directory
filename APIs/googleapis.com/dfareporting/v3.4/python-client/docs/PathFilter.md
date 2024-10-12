# PathFilter

Represents a DfaReporting path filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_filters** | [**List[EventFilter]**](EventFilter.md) | Event filters in path report. | [optional] 
**kind** | **str** | The kind of resource this is, in this case dfareporting#pathFilter. | [optional] 
**path_match_position** | **str** | Determines how the &#39;value&#39; field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, &#39;*&#39; is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions (&#39;dfa:paidSearch*&#39;) allow a matchType other than EXACT. | [optional] 

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



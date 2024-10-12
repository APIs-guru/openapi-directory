# SortRangeRequest

Sorts data in rows based on a sort order per column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**range** | [**GridRange**](GridRange.md) |  | [optional] 
**sort_specs** | [**List[SortSpec]**](SortSpec.md) | The sort order per column. Later specifications are used when values are equal in the earlier specifications. | [optional] 

## Example

```python
from openapi_client.models.sort_range_request import SortRangeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SortRangeRequest from a JSON string
sort_range_request_instance = SortRangeRequest.from_json(json)
# print the JSON string representation of the object
print(SortRangeRequest.to_json())

# convert the object into a dict
sort_range_request_dict = sort_range_request_instance.to_dict()
# create an instance of SortRangeRequest from a dict
sort_range_request_from_dict = SortRangeRequest.from_dict(sort_range_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



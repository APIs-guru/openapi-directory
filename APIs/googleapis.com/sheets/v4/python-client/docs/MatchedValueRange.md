# MatchedValueRange

A value range that was matched by one or more data filers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_filters** | [**List[DataFilter]**](DataFilter.md) | The DataFilters from the request that matched the range of values. | [optional] 
**value_range** | [**ValueRange**](ValueRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.matched_value_range import MatchedValueRange

# TODO update the JSON string below
json = "{}"
# create an instance of MatchedValueRange from a JSON string
matched_value_range_instance = MatchedValueRange.from_json(json)
# print the JSON string representation of the object
print(MatchedValueRange.to_json())

# convert the object into a dict
matched_value_range_dict = matched_value_range_instance.to_dict()
# create an instance of MatchedValueRange from a dict
matched_value_range_from_dict = MatchedValueRange.from_dict(matched_value_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



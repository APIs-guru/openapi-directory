# FilteredBidCreativeRow

The number of filtered bids with the specified dimension values that have the specified creative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bid_count** | [**MetricValue**](MetricValue.md) |  | [optional] 
**creative_id** | **str** | The ID of the creative. | [optional] 
**row_dimensions** | [**RowDimensions**](RowDimensions.md) |  | [optional] 

## Example

```python
from openapi_client.models.filtered_bid_creative_row import FilteredBidCreativeRow

# TODO update the JSON string below
json = "{}"
# create an instance of FilteredBidCreativeRow from a JSON string
filtered_bid_creative_row_instance = FilteredBidCreativeRow.from_json(json)
# print the JSON string representation of the object
print(FilteredBidCreativeRow.to_json())

# convert the object into a dict
filtered_bid_creative_row_dict = filtered_bid_creative_row_instance.to_dict()
# create an instance of FilteredBidCreativeRow from a dict
filtered_bid_creative_row_from_dict = FilteredBidCreativeRow.from_dict(filtered_bid_creative_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



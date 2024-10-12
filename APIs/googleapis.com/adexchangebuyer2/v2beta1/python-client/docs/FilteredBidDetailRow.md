# FilteredBidDetailRow

The number of filtered bids with the specified dimension values, among those filtered due to the requested filtering reason (for example, creative status), that have the specified detail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bid_count** | [**MetricValue**](MetricValue.md) |  | [optional] 
**detail** | **str** | The ID of the detail, can be numeric or text. The associated value can be looked up in the dictionary file corresponding to the DetailType in the response message. | [optional] 
**detail_id** | **int** | Note: this field will be deprecated, use \&quot;detail\&quot; field instead. When \&quot;detail\&quot; field represents an integer value, this field is populated as the same integer value \&quot;detail\&quot; field represents, otherwise this field will be 0. The ID of the detail. The associated value can be looked up in the dictionary file corresponding to the DetailType in the response message. | [optional] 
**row_dimensions** | [**RowDimensions**](RowDimensions.md) |  | [optional] 

## Example

```python
from openapi_client.models.filtered_bid_detail_row import FilteredBidDetailRow

# TODO update the JSON string below
json = "{}"
# create an instance of FilteredBidDetailRow from a JSON string
filtered_bid_detail_row_instance = FilteredBidDetailRow.from_json(json)
# print the JSON string representation of the object
print(FilteredBidDetailRow.to_json())

# convert the object into a dict
filtered_bid_detail_row_dict = filtered_bid_detail_row_instance.to_dict()
# create an instance of FilteredBidDetailRow from a dict
filtered_bid_detail_row_from_dict = FilteredBidDetailRow.from_dict(filtered_bid_detail_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



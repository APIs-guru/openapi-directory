# CreativeStatusRow

The number of bids with the specified dimension values that did not win the auction (either were filtered pre-auction or lost the auction), as described by the specified creative status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bid_count** | [**MetricValue**](MetricValue.md) |  | [optional] 
**creative_status_id** | **int** | The ID of the creative status. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes). | [optional] 
**row_dimensions** | [**RowDimensions**](RowDimensions.md) |  | [optional] 

## Example

```python
from openapi_client.models.creative_status_row import CreativeStatusRow

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeStatusRow from a JSON string
creative_status_row_instance = CreativeStatusRow.from_json(json)
# print the JSON string representation of the object
print(CreativeStatusRow.to_json())

# convert the object into a dict
creative_status_row_dict = creative_status_row_instance.to_dict()
# create an instance of CreativeStatusRow from a dict
creative_status_row_from_dict = CreativeStatusRow.from_dict(creative_status_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



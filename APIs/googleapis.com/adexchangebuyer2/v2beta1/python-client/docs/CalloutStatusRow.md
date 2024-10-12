# CalloutStatusRow

The number of impressions with the specified dimension values where the corresponding bid request or bid response was not successful, as described by the specified callout status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callout_status_id** | **int** | The ID of the callout status. See [callout-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/callout-status-codes). | [optional] 
**impression_count** | [**MetricValue**](MetricValue.md) |  | [optional] 
**row_dimensions** | [**RowDimensions**](RowDimensions.md) |  | [optional] 

## Example

```python
from openapi_client.models.callout_status_row import CalloutStatusRow

# TODO update the JSON string below
json = "{}"
# create an instance of CalloutStatusRow from a JSON string
callout_status_row_instance = CalloutStatusRow.from_json(json)
# print the JSON string representation of the object
print(CalloutStatusRow.to_json())

# convert the object into a dict
callout_status_row_dict = callout_status_row_instance.to_dict()
# create an instance of CalloutStatusRow from a dict
callout_status_row_from_dict = CalloutStatusRow.from_dict(callout_status_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# PivotHeaderEntry

The headers for the each of the metric column corresponding to the metrics requested in the pivots section of the response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_names** | **List[str]** | The name of the dimensions in the pivot response. | [optional] 
**dimension_values** | **List[str]** | The values for the dimensions in the pivot. | [optional] 
**metric** | [**MetricHeaderEntry**](MetricHeaderEntry.md) |  | [optional] 

## Example

```python
from openapi_client.models.pivot_header_entry import PivotHeaderEntry

# TODO update the JSON string below
json = "{}"
# create an instance of PivotHeaderEntry from a JSON string
pivot_header_entry_instance = PivotHeaderEntry.from_json(json)
# print the JSON string representation of the object
print(PivotHeaderEntry.to_json())

# convert the object into a dict
pivot_header_entry_dict = pivot_header_entry_instance.to_dict()
# create an instance of PivotHeaderEntry from a dict
pivot_header_entry_from_dict = PivotHeaderEntry.from_dict(pivot_header_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



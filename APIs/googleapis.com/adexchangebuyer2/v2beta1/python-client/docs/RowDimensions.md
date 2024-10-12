# RowDimensions

A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**publisher_identifier** | **str** | The publisher identifier for this row, if a breakdown by [BreakdownDimension.PUBLISHER_IDENTIFIER](https://developers.google.com/authorized-buyers/apis/reference/rest/v2beta1/bidders.accounts.filterSets#FilterSet.BreakdownDimension) was requested. | [optional] 
**time_interval** | [**TimeInterval**](TimeInterval.md) |  | [optional] 

## Example

```python
from openapi_client.models.row_dimensions import RowDimensions

# TODO update the JSON string below
json = "{}"
# create an instance of RowDimensions from a JSON string
row_dimensions_instance = RowDimensions.from_json(json)
# print the JSON string representation of the object
print(RowDimensions.to_json())

# convert the object into a dict
row_dimensions_dict = row_dimensions_instance.to_dict()
# create an instance of RowDimensions from a dict
row_dimensions_from_dict = RowDimensions.from_dict(row_dimensions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ListBreakdownValuesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[BreakdownValue]**](BreakdownValue.md) |  | [optional] 
**timeframe** | **List[int]** |  | [optional] 
**total_row_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.list_breakdown_values_response import ListBreakdownValuesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBreakdownValuesResponse from a JSON string
list_breakdown_values_response_instance = ListBreakdownValuesResponse.from_json(json)
# print the JSON string representation of the object
print(ListBreakdownValuesResponse.to_json())

# convert the object into a dict
list_breakdown_values_response_dict = list_breakdown_values_response_instance.to_dict()
# create an instance of ListBreakdownValuesResponse from a dict
list_breakdown_values_response_from_dict = ListBreakdownValuesResponse.from_dict(list_breakdown_values_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



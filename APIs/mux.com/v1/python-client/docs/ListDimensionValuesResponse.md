# ListDimensionValuesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[DimensionValue]**](DimensionValue.md) |  | [optional] 
**timeframe** | **List[int]** |  | [optional] 
**total_row_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.list_dimension_values_response import ListDimensionValuesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDimensionValuesResponse from a JSON string
list_dimension_values_response_instance = ListDimensionValuesResponse.from_json(json)
# print the JSON string representation of the object
print(ListDimensionValuesResponse.to_json())

# convert the object into a dict
list_dimension_values_response_dict = list_dimension_values_response_instance.to_dict()
# create an instance of ListDimensionValuesResponse from a dict
list_dimension_values_response_from_dict = ListDimensionValuesResponse.from_dict(list_dimension_values_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



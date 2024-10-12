# ListFilterValuesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[FilterValue]**](FilterValue.md) |  | [optional] 
**timeframe** | **List[int]** |  | [optional] 
**total_row_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.list_filter_values_response import ListFilterValuesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListFilterValuesResponse from a JSON string
list_filter_values_response_instance = ListFilterValuesResponse.from_json(json)
# print the JSON string representation of the object
print(ListFilterValuesResponse.to_json())

# convert the object into a dict
list_filter_values_response_dict = list_filter_values_response_instance.to_dict()
# create an instance of ListFilterValuesResponse from a dict
list_filter_values_response_from_dict = ListFilterValuesResponse.from_dict(list_filter_values_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GetOverallValuesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**OverallValues**](OverallValues.md) |  | [optional] 
**timeframe** | **List[int]** |  | [optional] 
**total_row_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.get_overall_values_response import GetOverallValuesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetOverallValuesResponse from a JSON string
get_overall_values_response_instance = GetOverallValuesResponse.from_json(json)
# print the JSON string representation of the object
print(GetOverallValuesResponse.to_json())

# convert the object into a dict
get_overall_values_response_dict = get_overall_values_response_instance.to_dict()
# create an instance of GetOverallValuesResponse from a dict
get_overall_values_response_from_dict = GetOverallValuesResponse.from_dict(get_overall_values_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



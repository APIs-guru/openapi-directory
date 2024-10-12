# ListAllMetricValuesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Score]**](Score.md) |  | [optional] 
**timeframe** | **List[int]** |  | [optional] 
**total_row_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.list_all_metric_values_response import ListAllMetricValuesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllMetricValuesResponse from a JSON string
list_all_metric_values_response_instance = ListAllMetricValuesResponse.from_json(json)
# print the JSON string representation of the object
print(ListAllMetricValuesResponse.to_json())

# convert the object into a dict
list_all_metric_values_response_dict = list_all_metric_values_response_instance.to_dict()
# create an instance of ListAllMetricValuesResponse from a dict
list_all_metric_values_response_from_dict = ListAllMetricValuesResponse.from_dict(list_all_metric_values_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



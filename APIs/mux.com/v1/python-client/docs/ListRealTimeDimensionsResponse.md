# ListRealTimeDimensionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ListMonitoringDimensionsResponseDataInner]**](ListMonitoringDimensionsResponseDataInner.md) |  | [optional] 
**timeframe** | **List[int]** |  | [optional] 
**total_row_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.list_real_time_dimensions_response import ListRealTimeDimensionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListRealTimeDimensionsResponse from a JSON string
list_real_time_dimensions_response_instance = ListRealTimeDimensionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListRealTimeDimensionsResponse.to_json())

# convert the object into a dict
list_real_time_dimensions_response_dict = list_real_time_dimensions_response_instance.to_dict()
# create an instance of ListRealTimeDimensionsResponse from a dict
list_real_time_dimensions_response_from_dict = ListRealTimeDimensionsResponse.from_dict(list_real_time_dimensions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



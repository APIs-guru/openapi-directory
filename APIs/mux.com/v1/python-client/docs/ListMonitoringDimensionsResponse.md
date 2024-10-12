# ListMonitoringDimensionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ListMonitoringDimensionsResponseDataInner]**](ListMonitoringDimensionsResponseDataInner.md) |  | [optional] 
**timeframe** | **List[int]** |  | [optional] 
**total_row_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.list_monitoring_dimensions_response import ListMonitoringDimensionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListMonitoringDimensionsResponse from a JSON string
list_monitoring_dimensions_response_instance = ListMonitoringDimensionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListMonitoringDimensionsResponse.to_json())

# convert the object into a dict
list_monitoring_dimensions_response_dict = list_monitoring_dimensions_response_instance.to_dict()
# create an instance of ListMonitoringDimensionsResponse from a dict
list_monitoring_dimensions_response_from_dict = ListMonitoringDimensionsResponse.from_dict(list_monitoring_dimensions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



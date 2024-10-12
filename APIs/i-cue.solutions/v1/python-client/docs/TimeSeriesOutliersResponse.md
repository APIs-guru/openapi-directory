# TimeSeriesOutliersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**outliers** | [**List[OutlierResponse]**](OutlierResponse.md) |  | [optional] 
**time_series_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.time_series_outliers_response import TimeSeriesOutliersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeriesOutliersResponse from a JSON string
time_series_outliers_response_instance = TimeSeriesOutliersResponse.from_json(json)
# print the JSON string representation of the object
print(TimeSeriesOutliersResponse.to_json())

# convert the object into a dict
time_series_outliers_response_dict = time_series_outliers_response_instance.to_dict()
# create an instance of TimeSeriesOutliersResponse from a dict
time_series_outliers_response_from_dict = TimeSeriesOutliersResponse.from_dict(time_series_outliers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



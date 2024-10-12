# ListTimeSeriesResponse

The ListTimeSeries response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_errors** | [**List[Status]**](Status.md) | Query execution errors that may have caused the time series data returned to be incomplete. | [optional] 
**next_page_token** | **str** | If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. | [optional] 
**time_series** | [**List[TimeSeries]**](TimeSeries.md) | One or more time series that match the filter included in the request. | [optional] 
**unit** | **str** | The unit in which all time_series point values are reported. unit follows the UCUM format for units as seen in https://unitsofmeasure.org/ucum.html. If different time_series have different units (for example, because they come from different metric types, or a unit is absent), then unit will be \&quot;{not_a_unit}\&quot;. | [optional] 

## Example

```python
from openapi_client.models.list_time_series_response import ListTimeSeriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTimeSeriesResponse from a JSON string
list_time_series_response_instance = ListTimeSeriesResponse.from_json(json)
# print the JSON string representation of the object
print(ListTimeSeriesResponse.to_json())

# convert the object into a dict
list_time_series_response_dict = list_time_series_response_instance.to_dict()
# create an instance of ListTimeSeriesResponse from a dict
list_time_series_response_from_dict = ListTimeSeriesResponse.from_dict(list_time_series_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



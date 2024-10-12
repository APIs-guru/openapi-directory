# TimeSeriesInformation

The time series info needed for calculating the baseline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sensitivities** | **List[str]** | the list of sensitivities for calculating the baseline. | 
**timestamps** | **List[datetime]** | the array of timestamps of the baselines. | [optional] 
**values** | **List[float]** | The metric values to calculate the baseline. | 

## Example

```python
from openapi_client.models.time_series_information import TimeSeriesInformation

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeriesInformation from a JSON string
time_series_information_instance = TimeSeriesInformation.from_json(json)
# print the JSON string representation of the object
print(TimeSeriesInformation.to_json())

# convert the object into a dict
time_series_information_dict = time_series_information_instance.to_dict()
# create an instance of TimeSeriesInformation from a dict
time_series_information_from_dict = TimeSeriesInformation.from_dict(time_series_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



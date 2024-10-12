# TimeseriesPercentiles

Percentiles contains synthetic values of a metric at a given statistical percentile. These are used for estimating a metric's value as experienced by a percentage of users out of the total number of users.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**p75s** | **List[object]** | 75% of users experienced the given metric at or below this value. The length of this list of densities is equal to the length of the CollectionPeriods field in the HistoryRecord message, which describes when the density was observed in the field. | [optional] 

## Example

```python
from openapi_client.models.timeseries_percentiles import TimeseriesPercentiles

# TODO update the JSON string below
json = "{}"
# create an instance of TimeseriesPercentiles from a JSON string
timeseries_percentiles_instance = TimeseriesPercentiles.from_json(json)
# print the JSON string representation of the object
print(TimeseriesPercentiles.to_json())

# convert the object into a dict
timeseries_percentiles_dict = timeseries_percentiles_instance.to_dict()
# create an instance of TimeseriesPercentiles from a dict
timeseries_percentiles_from_dict = TimeseriesPercentiles.from_dict(timeseries_percentiles_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# FractionTimeseries

For enum metrics, provides fraction timeseries which add up to approximately 1.0 per entry (k-th element into the repeated fractions field for any k <= len) across fraction_timeseries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fractions** | **List[float]** | Values between 0.0 and 1.0 (inclusive) and NaN. | [optional] 

## Example

```python
from openapi_client.models.fraction_timeseries import FractionTimeseries

# TODO update the JSON string below
json = "{}"
# create an instance of FractionTimeseries from a JSON string
fraction_timeseries_instance = FractionTimeseries.from_json(json)
# print the JSON string representation of the object
print(FractionTimeseries.to_json())

# convert the object into a dict
fraction_timeseries_dict = fraction_timeseries_instance.to_dict()
# create an instance of FractionTimeseries from a dict
fraction_timeseries_from_dict = FractionTimeseries.from_dict(fraction_timeseries_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



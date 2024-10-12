# XPSCorrelationStats

A correlation statistics between two series of DataType values. The series may have differing DataType-s, but within a single series the DataType must be the same.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cramers_v** | **float** | The correlation value using the Cramer&#39;s V measure. | [optional] 

## Example

```python
from openapi_client.models.xps_correlation_stats import XPSCorrelationStats

# TODO update the JSON string below
json = "{}"
# create an instance of XPSCorrelationStats from a JSON string
xps_correlation_stats_instance = XPSCorrelationStats.from_json(json)
# print the JSON string representation of the object
print(XPSCorrelationStats.to_json())

# convert the object into a dict
xps_correlation_stats_dict = xps_correlation_stats_instance.to_dict()
# create an instance of XPSCorrelationStats from a dict
xps_correlation_stats_from_dict = XPSCorrelationStats.from_dict(xps_correlation_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



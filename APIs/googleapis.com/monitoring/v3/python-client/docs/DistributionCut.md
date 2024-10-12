# DistributionCut

A DistributionCut defines a TimeSeries and thresholds used for measuring good service and total service. The TimeSeries must have ValueType = DISTRIBUTION and MetricKind = DELTA or MetricKind = CUMULATIVE. The computed good_service will be the estimated count of values in the Distribution that fall within the specified min and max.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distribution_filter** | **str** | A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries aggregating values. Must have ValueType &#x3D; DISTRIBUTION and MetricKind &#x3D; DELTA or MetricKind &#x3D; CUMULATIVE. | [optional] 
**range** | [**GoogleMonitoringV3Range**](GoogleMonitoringV3Range.md) |  | [optional] 

## Example

```python
from openapi_client.models.distribution_cut import DistributionCut

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionCut from a JSON string
distribution_cut_instance = DistributionCut.from_json(json)
# print the JSON string representation of the object
print(DistributionCut.to_json())

# convert the object into a dict
distribution_cut_dict = distribution_cut_instance.to_dict()
# create an instance of DistributionCut from a dict
distribution_cut_from_dict = DistributionCut.from_dict(distribution_cut_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



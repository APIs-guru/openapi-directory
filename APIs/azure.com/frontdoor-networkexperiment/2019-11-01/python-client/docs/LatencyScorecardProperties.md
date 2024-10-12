# LatencyScorecardProperties

Defines a the properties of a Latency Scorecard

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The country associated with the Latency Scorecard. Values are country ISO codes as specified here- https://www.iso.org/iso-3166-country-codes.html | [optional] [readonly] 
**description** | **str** | The description of the Latency Scorecard | [optional] [readonly] 
**end_date_time_utc** | **datetime** | The end time of the Latency Scorecard in UTC | [optional] [readonly] 
**endpoint_a** | **str** | The A endpoint in the scorecard | [optional] [readonly] 
**endpoint_b** | **str** | The B endpoint in the scorecard | [optional] [readonly] 
**id** | **str** | The unique identifier of the Latency Scorecard | [optional] [readonly] 
**latency_metrics** | [**List[LatencyMetric]**](LatencyMetric.md) | The latency metrics of the Latency Scorecard | [optional] 
**name** | **str** | The name of the Latency Scorecard | [optional] [readonly] 
**start_date_time_utc** | **datetime** | The start time of the Latency Scorecard in UTC | [optional] [readonly] 

## Example

```python
from openapi_client.models.latency_scorecard_properties import LatencyScorecardProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LatencyScorecardProperties from a JSON string
latency_scorecard_properties_instance = LatencyScorecardProperties.from_json(json)
# print the JSON string representation of the object
print(LatencyScorecardProperties.to_json())

# convert the object into a dict
latency_scorecard_properties_dict = latency_scorecard_properties_instance.to_dict()
# create an instance of LatencyScorecardProperties from a dict
latency_scorecard_properties_from_dict = LatencyScorecardProperties.from_dict(latency_scorecard_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



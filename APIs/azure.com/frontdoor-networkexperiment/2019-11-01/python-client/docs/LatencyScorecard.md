# LatencyScorecard

Defines the LatencyScorecard

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LatencyScorecardProperties**](LatencyScorecardProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.latency_scorecard import LatencyScorecard

# TODO update the JSON string below
json = "{}"
# create an instance of LatencyScorecard from a JSON string
latency_scorecard_instance = LatencyScorecard.from_json(json)
# print the JSON string representation of the object
print(LatencyScorecard.to_json())

# convert the object into a dict
latency_scorecard_dict = latency_scorecard_instance.to_dict()
# create an instance of LatencyScorecard from a dict
latency_scorecard_from_dict = LatencyScorecard.from_dict(latency_scorecard_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



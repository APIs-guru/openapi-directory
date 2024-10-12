# Usage

The usage data for a usage request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **float** | Current value for this metric. | [optional] [readonly] 
**limit** | **float** | Maximum value for this metric. | [optional] [readonly] 
**name** | [**MetricName**](MetricName.md) |  | [optional] 
**next_reset_time** | **str** | Next reset time for current quota. | [optional] [readonly] 
**quota_period** | **str** | The quota period used to summarize the usage values. | [optional] [readonly] 
**status** | **str** | Cognitive Services account quota usage status. | [optional] 
**unit** | [**UnitType**](UnitType.md) |  | [optional] 

## Example

```python
from openapi_client.models.usage import Usage

# TODO update the JSON string below
json = "{}"
# create an instance of Usage from a JSON string
usage_instance = Usage.from_json(json)
# print the JSON string representation of the object
print(Usage.to_json())

# convert the object into a dict
usage_dict = usage_instance.to_dict()
# create an instance of Usage from a dict
usage_from_dict = Usage.from_dict(usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



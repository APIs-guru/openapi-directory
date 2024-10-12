# CounterUpdate

An update to a Counter sent from a worker.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boolean** | **bool** | Boolean value for And, Or. | [optional] 
**cumulative** | **bool** | True if this counter is reported as the total cumulative aggregate value accumulated since the worker started working on this WorkItem. By default this is false, indicating that this counter is reported as a delta. | [optional] 
**distribution** | [**DistributionUpdate**](DistributionUpdate.md) |  | [optional] 
**floating_point** | **float** | Floating point value for Sum, Max, Min. | [optional] 
**floating_point_list** | [**FloatingPointList**](FloatingPointList.md) |  | [optional] 
**floating_point_mean** | [**FloatingPointMean**](FloatingPointMean.md) |  | [optional] 
**integer** | [**SplitInt64**](SplitInt64.md) |  | [optional] 
**integer_gauge** | [**IntegerGauge**](IntegerGauge.md) |  | [optional] 
**integer_list** | [**IntegerList**](IntegerList.md) |  | [optional] 
**integer_mean** | [**IntegerMean**](IntegerMean.md) |  | [optional] 
**internal** | **object** | Value for internally-defined counters used by the Dataflow service. | [optional] 
**name_and_kind** | [**NameAndKind**](NameAndKind.md) |  | [optional] 
**short_id** | **str** | The service-generated short identifier for this counter. The short_id -&gt; (name, metadata) mapping is constant for the lifetime of a job. | [optional] 
**string_list** | [**StringList**](StringList.md) |  | [optional] 
**structured_name_and_metadata** | [**CounterStructuredNameAndMetadata**](CounterStructuredNameAndMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.counter_update import CounterUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of CounterUpdate from a JSON string
counter_update_instance = CounterUpdate.from_json(json)
# print the JSON string representation of the object
print(CounterUpdate.to_json())

# convert the object into a dict
counter_update_dict = counter_update_instance.to_dict()
# create an instance of CounterUpdate from a dict
counter_update_from_dict = CounterUpdate.from_dict(counter_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



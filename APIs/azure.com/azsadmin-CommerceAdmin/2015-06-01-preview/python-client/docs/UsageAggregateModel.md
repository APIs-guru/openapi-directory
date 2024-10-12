# UsageAggregateModel

Properties for aggregate usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_data** | **str** | Key-value pairs of instance details represented as a string. | [optional] 
**meter_id** | **str** | Unique ID for the resource that was consumed (aka ResourceID). | [optional] 
**quantity** | **str** | The amount of the resource consumption that occurred in this time frame. | [optional] 
**subscription_id** | **str** | Subscription id of tenant using plan. | [optional] 
**usage_end_time** | **datetime** | UTC end time for the usage bucket to which this usage aggregate belongs. | [optional] 
**usage_start_time** | **datetime** | UTC start time for the usage bucket to which this usage aggregate belongs. | [optional] 

## Example

```python
from openapi_client.models.usage_aggregate_model import UsageAggregateModel

# TODO update the JSON string below
json = "{}"
# create an instance of UsageAggregateModel from a JSON string
usage_aggregate_model_instance = UsageAggregateModel.from_json(json)
# print the JSON string representation of the object
print(UsageAggregateModel.to_json())

# convert the object into a dict
usage_aggregate_model_dict = usage_aggregate_model_instance.to_dict()
# create an instance of UsageAggregateModel from a dict
usage_aggregate_model_from_dict = UsageAggregateModel.from_dict(usage_aggregate_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# UsageAggregate

Aggregate usage values for resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UsageAggregateModel**](UsageAggregateModel.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | Location where resource is location. | [optional] [readonly] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key-value pairs. | [optional] [readonly] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.usage_aggregate import UsageAggregate

# TODO update the JSON string below
json = "{}"
# create an instance of UsageAggregate from a JSON string
usage_aggregate_instance = UsageAggregate.from_json(json)
# print the JSON string representation of the object
print(UsageAggregate.to_json())

# convert the object into a dict
usage_aggregate_dict = usage_aggregate_instance.to_dict()
# create an instance of UsageAggregate from a dict
usage_aggregate_from_dict = UsageAggregate.from_dict(usage_aggregate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



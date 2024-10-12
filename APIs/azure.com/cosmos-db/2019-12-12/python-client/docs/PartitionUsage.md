# PartitionUsage

The partition level usage data for a usage request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_id** | **str** | The partition id (GUID identifier) of the usages. | [optional] [readonly] 
**partition_key_range_id** | **str** | The partition key range id (integer identifier) of the usages. | [optional] [readonly] 
**current_value** | **int** | Current value for this metric | [optional] [readonly] 
**limit** | **int** | Maximum value for this metric | [optional] [readonly] 
**name** | [**MetricName**](MetricName.md) |  | [optional] 
**quota_period** | **str** | The quota period used to summarize the usage values. | [optional] [readonly] 
**unit** | [**UnitType**](UnitType.md) |  | [optional] 

## Example

```python
from openapi_client.models.partition_usage import PartitionUsage

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionUsage from a JSON string
partition_usage_instance = PartitionUsage.from_json(json)
# print the JSON string representation of the object
print(PartitionUsage.to_json())

# convert the object into a dict
partition_usage_dict = partition_usage_instance.to_dict()
# create an instance of PartitionUsage from a dict
partition_usage_from_dict = PartitionUsage.from_dict(partition_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



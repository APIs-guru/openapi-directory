# PartitionHealthReport

The report of the partition health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**var_property** | **str** |  | [optional] 
**remove_when_expired** | **bool** |  | [optional] 
**sequence_number** | **str** |  | [optional] 
**source_id** | **str** |  | [optional] 
**time_to_live_in_milli_seconds** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.partition_health_report import PartitionHealthReport

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionHealthReport from a JSON string
partition_health_report_instance = PartitionHealthReport.from_json(json)
# print the JSON string representation of the object
print(PartitionHealthReport.to_json())

# convert the object into a dict
partition_health_report_dict = partition_health_report_instance.to_dict()
# create an instance of PartitionHealthReport from a dict
partition_health_report_from_dict = PartitionHealthReport.from_dict(partition_health_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



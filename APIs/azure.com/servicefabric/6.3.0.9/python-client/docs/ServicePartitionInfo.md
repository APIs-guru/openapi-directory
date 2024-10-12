# ServicePartitionInfo

Information about a partition of a Service Fabric service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**partition_information** | [**PartitionInformation**](PartitionInformation.md) |  | [optional] 
**partition_status** | [**ServicePartitionStatus**](ServicePartitionStatus.md) |  | [optional] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | 

## Example

```python
from openapi_client.models.service_partition_info import ServicePartitionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ServicePartitionInfo from a JSON string
service_partition_info_instance = ServicePartitionInfo.from_json(json)
# print the JSON string representation of the object
print(ServicePartitionInfo.to_json())

# convert the object into a dict
service_partition_info_dict = service_partition_info_instance.to_dict()
# create an instance of ServicePartitionInfo from a dict
service_partition_info_from_dict = ServicePartitionInfo.from_dict(service_partition_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



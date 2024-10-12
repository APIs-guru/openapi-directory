# PartitionLoadInformation

Represents load information for a partition, which contains the primary and secondary reported load metrics. In case there is no load reported, PartitionLoadInformation will contain the default load for the service of the partition. For default loads, LoadMetricReport's LastReportedUtc is set to 0.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_id** | **str** | An internal ID used by Service Fabric to uniquely identify a partition. This is a randomly generated GUID when the service was created. The partition ID is unique and does not change for the lifetime of the service. If the same service was deleted and recreated the IDs of its partitions would be different. | [optional] 
**primary_load_metric_reports** | [**List[LoadMetricReport]**](LoadMetricReport.md) | Array of load reports from the primary replica for this partition. | [optional] 
**secondary_load_metric_reports** | [**List[LoadMetricReport]**](LoadMetricReport.md) | Array of aggregated load reports from all secondary replicas for this partition. Array only contains the latest reported load for each metric. | [optional] 

## Example

```python
from openapi_client.models.partition_load_information import PartitionLoadInformation

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionLoadInformation from a JSON string
partition_load_information_instance = PartitionLoadInformation.from_json(json)
# print the JSON string representation of the object
print(PartitionLoadInformation.to_json())

# convert the object into a dict
partition_load_information_dict = partition_load_information_instance.to_dict()
# create an instance of PartitionLoadInformation from a dict
partition_load_information_from_dict = PartitionLoadInformation.from_dict(partition_load_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



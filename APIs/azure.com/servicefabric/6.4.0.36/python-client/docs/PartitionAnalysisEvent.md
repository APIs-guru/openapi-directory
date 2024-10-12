# PartitionAnalysisEvent

Represents the base for all Partition Analysis Events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**AnalysisEventMetadata**](AnalysisEventMetadata.md) |  | 

## Example

```python
from openapi_client.models.partition_analysis_event import PartitionAnalysisEvent

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionAnalysisEvent from a JSON string
partition_analysis_event_instance = PartitionAnalysisEvent.from_json(json)
# print the JSON string representation of the object
print(PartitionAnalysisEvent.to_json())

# convert the object into a dict
partition_analysis_event_dict = partition_analysis_event_instance.to_dict()
# create an instance of PartitionAnalysisEvent from a dict
partition_analysis_event_from_dict = PartitionAnalysisEvent.from_dict(partition_analysis_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



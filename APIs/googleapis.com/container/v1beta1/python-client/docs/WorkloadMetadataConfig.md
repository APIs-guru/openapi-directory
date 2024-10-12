# WorkloadMetadataConfig

WorkloadMetadataConfig defines the metadata configuration to expose to workloads on the node pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **str** | Mode is the configuration for how to expose metadata to workloads running on the node pool. | [optional] 
**node_metadata** | **str** | NodeMetadata is the configuration for how to expose metadata to the workloads running on the node. | [optional] 

## Example

```python
from openapi_client.models.workload_metadata_config import WorkloadMetadataConfig

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadMetadataConfig from a JSON string
workload_metadata_config_instance = WorkloadMetadataConfig.from_json(json)
# print the JSON string representation of the object
print(WorkloadMetadataConfig.to_json())

# convert the object into a dict
workload_metadata_config_dict = workload_metadata_config_instance.to_dict()
# create an instance of WorkloadMetadataConfig from a dict
workload_metadata_config_from_dict = WorkloadMetadataConfig.from_dict(workload_metadata_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



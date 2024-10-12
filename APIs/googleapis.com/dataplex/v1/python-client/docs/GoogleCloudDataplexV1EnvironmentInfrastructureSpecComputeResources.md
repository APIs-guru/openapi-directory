# GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources

Compute resources associated with the analyze interactive workloads.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_size_gb** | **int** | Optional. Size in GB of the disk. Default is 100 GB. | [optional] 
**max_node_count** | **int** | Optional. Max configurable nodes. If max_node_count &gt; node_count, then auto-scaling is enabled. | [optional] 
**node_count** | **int** | Optional. Total number of nodes in the sessions created for this environment. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_environment_infrastructure_spec_compute_resources import GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources from a JSON string
google_cloud_dataplex_v1_environment_infrastructure_spec_compute_resources_instance = GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_environment_infrastructure_spec_compute_resources_dict = google_cloud_dataplex_v1_environment_infrastructure_spec_compute_resources_instance.to_dict()
# create an instance of GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources from a dict
google_cloud_dataplex_v1_environment_infrastructure_spec_compute_resources_from_dict = GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources.from_dict(google_cloud_dataplex_v1_environment_infrastructure_spec_compute_resources_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



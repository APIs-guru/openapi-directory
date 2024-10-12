# GoogleCloudDataplexV1TaskInfrastructureSpec

Configuration for the underlying infrastructure used to run workloads.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch** | [**GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources**](GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources.md) |  | [optional] 
**container_image** | [**GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime**](GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime.md) |  | [optional] 
**vpc_network** | [**GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork**](GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_task_infrastructure_spec import GoogleCloudDataplexV1TaskInfrastructureSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1TaskInfrastructureSpec from a JSON string
google_cloud_dataplex_v1_task_infrastructure_spec_instance = GoogleCloudDataplexV1TaskInfrastructureSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1TaskInfrastructureSpec.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_task_infrastructure_spec_dict = google_cloud_dataplex_v1_task_infrastructure_spec_instance.to_dict()
# create an instance of GoogleCloudDataplexV1TaskInfrastructureSpec from a dict
google_cloud_dataplex_v1_task_infrastructure_spec_from_dict = GoogleCloudDataplexV1TaskInfrastructureSpec.from_dict(google_cloud_dataplex_v1_task_infrastructure_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



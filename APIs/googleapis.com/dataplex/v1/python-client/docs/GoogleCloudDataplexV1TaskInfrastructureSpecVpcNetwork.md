# GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork

Cloud VPC Network used to run the infrastructure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **str** | Optional. The Cloud VPC network in which the job is run. By default, the Cloud VPC network named Default within the project is used. | [optional] 
**network_tags** | **List[str]** | Optional. List of network tags to apply to the job. | [optional] 
**sub_network** | **str** | Optional. The Cloud VPC sub-network in which the job is run. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_task_infrastructure_spec_vpc_network import GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork from a JSON string
google_cloud_dataplex_v1_task_infrastructure_spec_vpc_network_instance = GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_task_infrastructure_spec_vpc_network_dict = google_cloud_dataplex_v1_task_infrastructure_spec_vpc_network_instance.to_dict()
# create an instance of GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork from a dict
google_cloud_dataplex_v1_task_infrastructure_spec_vpc_network_from_dict = GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork.from_dict(google_cloud_dataplex_v1_task_infrastructure_spec_vpc_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



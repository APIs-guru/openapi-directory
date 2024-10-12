# AzureWorkloadContainerExtendedInfo

Extended information of the container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_server_name** | **str** | Host Os Name in case of Stand Alone and Cluster Name in case of distributed container. | [optional] 
**inquiry_info** | [**InquiryInfo**](InquiryInfo.md) |  | [optional] 
**nodes_list** | [**List[DistributedNodesInfo]**](DistributedNodesInfo.md) | List of the nodes in case of distributed container. | [optional] 

## Example

```python
from openapi_client.models.azure_workload_container_extended_info import AzureWorkloadContainerExtendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AzureWorkloadContainerExtendedInfo from a JSON string
azure_workload_container_extended_info_instance = AzureWorkloadContainerExtendedInfo.from_json(json)
# print the JSON string representation of the object
print(AzureWorkloadContainerExtendedInfo.to_json())

# convert the object into a dict
azure_workload_container_extended_info_dict = azure_workload_container_extended_info_instance.to_dict()
# create an instance of AzureWorkloadContainerExtendedInfo from a dict
azure_workload_container_extended_info_from_dict = AzureWorkloadContainerExtendedInfo.from_dict(azure_workload_container_extended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



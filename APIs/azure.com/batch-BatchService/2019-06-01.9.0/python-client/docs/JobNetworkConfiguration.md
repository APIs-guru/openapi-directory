# JobNetworkConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subnet_id** | **str** | The virtual network must be in the same region and subscription as the Azure Batch Account. The specified subnet should have enough free IP addresses to accommodate the number of Compute Nodes which will run Tasks from the Job. This can be up to the number of Compute Nodes in the Pool. The &#39;MicrosoftAzureBatch&#39; service principal must have the &#39;Classic Virtual Machine Contributor&#39; Role-Based Access Control (RBAC) role for the specified VNet so that Azure Batch service can schedule Tasks on the Nodes. This can be verified by checking if the specified VNet has any associated Network Security Groups (NSG). If communication to the Nodes in the specified subnet is denied by an NSG, then the Batch service will set the state of the Compute Nodes to unusable. This is of the form /subscriptions/{subscription}/resourceGroups/{group}/providers/{provider}/virtualNetworks/{network}/subnets/{subnet}. If the specified VNet has any associated Network Security Groups (NSG), then a few reserved system ports must be enabled for inbound communication from the Azure Batch service. For Pools created with a Virtual Machine configuration, enable ports 29876 and 29877, as well as port 22 for Linux and port 3389 for Windows. Port 443 is also required to be open for outbound connections for communications to Azure Storage. For more details see: https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration | 

## Example

```python
from openapi_client.models.job_network_configuration import JobNetworkConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of JobNetworkConfiguration from a JSON string
job_network_configuration_instance = JobNetworkConfiguration.from_json(json)
# print the JSON string representation of the object
print(JobNetworkConfiguration.to_json())

# convert the object into a dict
job_network_configuration_dict = job_network_configuration_instance.to_dict()
# create an instance of JobNetworkConfiguration from a dict
job_network_configuration_from_dict = JobNetworkConfiguration.from_dict(job_network_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



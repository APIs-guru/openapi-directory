# JobNetworkConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subnet_id** | **str** | This is only supported for jobs running on VirtualMachineConfiguration pools. This is of the form /subscriptions/{subscription}/resourceGroups/{group}/providers/{provider}/virtualNetworks/{network}/subnets/{subnet}. The virtual network must be in the same region and subscription as the Azure Batch account. The specified subnet should have enough free IP addresses to accommodate the number of nodes which will run tasks from the job. For more details, see https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration. | 

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



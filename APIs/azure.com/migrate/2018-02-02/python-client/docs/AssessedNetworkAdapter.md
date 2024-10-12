# AssessedNetworkAdapter

A network adapter assessed for an assessment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_addresses** | **List[str]** | List of IP Addresses on the network adapter. | [optional] [readonly] 
**mac_address** | **str** | MAC Address of the network adapter. | [optional] [readonly] 
**megabytes_per_second_of_read_data_points_received** | **int** | Received data points for incoming traffic in MegaBytes per second. | [optional] [readonly] 
**megabytes_per_second_received** | **float** | Adapter throughput for incoming traffic in MegaBytes per second. | [optional] [readonly] 
**megabytes_per_second_received_data_points_expected** | **int** | Expected data points for incoming traffic in MegaBytes per second. | [optional] [readonly] 
**megabytes_per_second_transmitted** | **float** | Adapter throughput for outgoing traffic in MegaBytes per second. | [optional] [readonly] 
**megabytes_per_second_transmitted_data_points_expected** | **int** | Expected data points for outgoing traffic in MegaBytes per second. | [optional] [readonly] 
**megabytes_per_second_transmitted_data_points_received** | **int** | Received data points for outgoing traffic in MegaBytes per second. | [optional] [readonly] 
**monthly_bandwidth_costs** | **float** | Monthly cost estimate for network bandwidth used by this network adapter. | [optional] [readonly] 
**net_gigabytes_transmitted_per_month** | **float** | Gigabytes transmitted through this adapter each month. | [optional] 
**suitability** | **str** | Whether this adapter is suitable for Azure. | [optional] [readonly] 
**suitability_explanation** | **str** | If network adapter is suitable, this explains the reasons and mitigation steps. | [optional] [readonly] 

## Example

```python
from openapi_client.models.assessed_network_adapter import AssessedNetworkAdapter

# TODO update the JSON string below
json = "{}"
# create an instance of AssessedNetworkAdapter from a JSON string
assessed_network_adapter_instance = AssessedNetworkAdapter.from_json(json)
# print the JSON string representation of the object
print(AssessedNetworkAdapter.to_json())

# convert the object into a dict
assessed_network_adapter_dict = assessed_network_adapter_instance.to_dict()
# create an instance of AssessedNetworkAdapter from a dict
assessed_network_adapter_from_dict = AssessedNetworkAdapter.from_dict(assessed_network_adapter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



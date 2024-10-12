# SqlVirtualMachineGroupProperties

The properties of a SQL virtual machine group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_configuration** | **str** | Cluster type. | [optional] [readonly] 
**cluster_manager_type** | **str** | Type of cluster manager: Windows Server Failover Cluster (WSFC), implied by the scale type of the group and the OS type. | [optional] [readonly] 
**provisioning_state** | **str** | Provisioning state to track the async operation status. | [optional] [readonly] 
**scale_type** | **str** | Scale type. | [optional] [readonly] 
**sql_image_offer** | **str** | SQL image offer. Examples may include SQL2016-WS2016, SQL2017-WS2016. | [optional] 
**sql_image_sku** | **str** | SQL image sku. | [optional] 
**wsfc_domain_profile** | [**WsfcDomainProfile**](WsfcDomainProfile.md) |  | [optional] 

## Example

```python
from openapi_client.models.sql_virtual_machine_group_properties import SqlVirtualMachineGroupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SqlVirtualMachineGroupProperties from a JSON string
sql_virtual_machine_group_properties_instance = SqlVirtualMachineGroupProperties.from_json(json)
# print the JSON string representation of the object
print(SqlVirtualMachineGroupProperties.to_json())

# convert the object into a dict
sql_virtual_machine_group_properties_dict = sql_virtual_machine_group_properties_instance.to_dict()
# create an instance of SqlVirtualMachineGroupProperties from a dict
sql_virtual_machine_group_properties_from_dict = SqlVirtualMachineGroupProperties.from_dict(sql_virtual_machine_group_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



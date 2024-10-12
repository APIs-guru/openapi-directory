# VCenterProperties

vCenter properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discovery_status** | **str** | The VCenter discovery status. | [optional] 
**fabric_arm_resource_name** | **str** | The ARM resource name of the fabric containing this VCenter. | [optional] 
**friendly_name** | **str** | Friendly name of the vCenter. | [optional] 
**infrastructure_id** | **str** | The infrastructure Id of vCenter. | [optional] 
**internal_id** | **str** | VCenter internal ID. | [optional] 
**ip_address** | **str** | The IP address of the vCenter. | [optional] 
**last_heartbeat** | **datetime** | The time when the last heartbeat was received by vCenter. | [optional] 
**port** | **str** | The port number for discovery. | [optional] 
**process_server_id** | **str** | The process server Id. | [optional] 
**run_as_account_id** | **str** | The account Id which has privileges to discover the vCenter. | [optional] 

## Example

```python
from openapi_client.models.v_center_properties import VCenterProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VCenterProperties from a JSON string
v_center_properties_instance = VCenterProperties.from_json(json)
# print the JSON string representation of the object
print(VCenterProperties.to_json())

# convert the object into a dict
v_center_properties_dict = v_center_properties_instance.to_dict()
# create an instance of VCenterProperties from a dict
v_center_properties_from_dict = VCenterProperties.from_dict(v_center_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



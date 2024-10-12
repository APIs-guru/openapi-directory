# FabricLocationModel

All properties of a fabric location resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclusive_admin_operation_name** | **str** | Name of the running exclusive admin operation. | [optional] 
**exclusive_admin_operation_running** | **bool** | Value for whether an exclusive admin operation is running. | [optional] 
**external_dnsip_address01** | **str** | First external IP address of the DNS server. | [optional] 
**external_dnsip_address02** | **str** | Second external IP Address of the DNS server. | [optional] 
**pep_ip_addresses** | **List[str]** | The IP addresses of the privileged endpoints. | [optional] 
**shut_down_action_plan_end_time** | **datetime** | Last known stamp stop time for the shut down action plan. | [optional] 
**shut_down_action_plan_start_time** | **datetime** | Last known stamp start time for the shut down action plan | [optional] 
**stamp_information_id** | **str** | The deployment id of the stamp. | [optional] 
**start_up_action_plan_end_time** | **datetime** | Last known stamp stop time for the start up action plan. | [optional] 
**start_up_action_plan_start_time** | **datetime** | Last known stamp start time for the start up action plan. | [optional] 
**time_server** | **str** | The IP address of the time server. | [optional] 

## Example

```python
from openapi_client.models.fabric_location_model import FabricLocationModel

# TODO update the JSON string below
json = "{}"
# create an instance of FabricLocationModel from a JSON string
fabric_location_model_instance = FabricLocationModel.from_json(json)
# print the JSON string representation of the object
print(FabricLocationModel.to_json())

# convert the object into a dict
fabric_location_model_dict = fabric_location_model_instance.to_dict()
# create an instance of FabricLocationModel from a dict
fabric_location_model_from_dict = FabricLocationModel.from_dict(fabric_location_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# UpdateVCenterRequestProperties

The properties of an update vCenter request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**friendly_name** | **str** | The friendly name of the vCenter. | [optional] 
**ip_address** | **str** | The IP address of the vCenter to be discovered. | [optional] 
**port** | **str** | The port number for discovery. | [optional] 
**process_server_id** | **str** | The process server Id from where the update can be orchestrated. | [optional] 
**run_as_account_id** | **str** | The CS account Id which has privileges to update the vCenter. | [optional] 

## Example

```python
from openapi_client.models.update_v_center_request_properties import UpdateVCenterRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateVCenterRequestProperties from a JSON string
update_v_center_request_properties_instance = UpdateVCenterRequestProperties.from_json(json)
# print the JSON string representation of the object
print(UpdateVCenterRequestProperties.to_json())

# convert the object into a dict
update_v_center_request_properties_dict = update_v_center_request_properties_instance.to_dict()
# create an instance of UpdateVCenterRequestProperties from a dict
update_v_center_request_properties_from_dict = UpdateVCenterRequestProperties.from_dict(update_v_center_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



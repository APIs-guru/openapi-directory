# AddVCenterRequestProperties

The properties of an add vCenter request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**friendly_name** | **str** | The friendly name of the vCenter. | [optional] 
**ip_address** | **str** | The IP address of the vCenter to be discovered. | [optional] 
**port** | **str** | The port number for discovery. | [optional] 
**process_server_id** | **str** | The process server Id from where the discovery is orchestrated. | [optional] 
**run_as_account_id** | **str** | The account Id which has privileges to discover the vCenter. | [optional] 

## Example

```python
from openapi_client.models.add_v_center_request_properties import AddVCenterRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AddVCenterRequestProperties from a JSON string
add_v_center_request_properties_instance = AddVCenterRequestProperties.from_json(json)
# print the JSON string representation of the object
print(AddVCenterRequestProperties.to_json())

# convert the object into a dict
add_v_center_request_properties_dict = add_v_center_request_properties_instance.to_dict()
# create an instance of AddVCenterRequestProperties from a dict
add_v_center_request_properties_from_dict = AddVCenterRequestProperties.from_dict(add_v_center_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



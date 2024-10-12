# UpdateDeviceSwitchWarmSpareRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enable or disable warm spare for a switch | 
**spare_serial** | **str** | Serial number of the warm spare switch | [optional] 

## Example

```python
from openapi_client.models.update_device_switch_warm_spare_request import UpdateDeviceSwitchWarmSpareRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceSwitchWarmSpareRequest from a JSON string
update_device_switch_warm_spare_request_instance = UpdateDeviceSwitchWarmSpareRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceSwitchWarmSpareRequest.to_json())

# convert the object into a dict
update_device_switch_warm_spare_request_dict = update_device_switch_warm_spare_request_instance.to_dict()
# create an instance of UpdateDeviceSwitchWarmSpareRequest from a dict
update_device_switch_warm_spare_request_from_dict = UpdateDeviceSwitchWarmSpareRequest.from_dict(update_device_switch_warm_spare_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



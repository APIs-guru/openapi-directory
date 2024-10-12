# CreateDeviceApplianceVmxAuthenticationToken201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires_at** | **str** | The expiration time for the token, in ISO 8601 format | [optional] 
**token** | **str** | The newly generated authentication token for the vMX instance | [optional] 

## Example

```python
from openapi_client.models.create_device_appliance_vmx_authentication_token201_response import CreateDeviceApplianceVmxAuthenticationToken201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDeviceApplianceVmxAuthenticationToken201Response from a JSON string
create_device_appliance_vmx_authentication_token201_response_instance = CreateDeviceApplianceVmxAuthenticationToken201Response.from_json(json)
# print the JSON string representation of the object
print(CreateDeviceApplianceVmxAuthenticationToken201Response.to_json())

# convert the object into a dict
create_device_appliance_vmx_authentication_token201_response_dict = create_device_appliance_vmx_authentication_token201_response_instance.to_dict()
# create an instance of CreateDeviceApplianceVmxAuthenticationToken201Response from a dict
create_device_appliance_vmx_authentication_token201_response_from_dict = CreateDeviceApplianceVmxAuthenticationToken201Response.from_dict(create_device_appliance_vmx_authentication_token201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



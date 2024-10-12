# GetNetworkSmDeviceDeviceProfiles200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** | The Meraki managed device Id. | [optional] 
**id** | **str** | The numerical Meraki Id of the profile. | [optional] 
**is_encrypted** | **bool** | A boolean indicating if the profile is encrypted. | [optional] 
**is_managed** | **bool** | Whether or not the profile is managed by Meraki. | [optional] 
**name** | **str** | The name of the profile. | [optional] 
**profile_data** | **str** | A string containing a JSON object with the profile data. | [optional] 
**profile_identifier** | **str** | The identifier of the profile. | [optional] 
**version** | **str** | The verison of the profile. | [optional] 

## Example

```python
from openapi_client.models.get_network_sm_device_device_profiles200_response_inner import GetNetworkSmDeviceDeviceProfiles200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSmDeviceDeviceProfiles200ResponseInner from a JSON string
get_network_sm_device_device_profiles200_response_inner_instance = GetNetworkSmDeviceDeviceProfiles200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSmDeviceDeviceProfiles200ResponseInner.to_json())

# convert the object into a dict
get_network_sm_device_device_profiles200_response_inner_dict = get_network_sm_device_device_profiles200_response_inner_instance.to_dict()
# create an instance of GetNetworkSmDeviceDeviceProfiles200ResponseInner from a dict
get_network_sm_device_device_profiles200_response_inner_from_dict = GetNetworkSmDeviceDeviceProfiles200ResponseInner.from_dict(get_network_sm_device_device_profiles200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



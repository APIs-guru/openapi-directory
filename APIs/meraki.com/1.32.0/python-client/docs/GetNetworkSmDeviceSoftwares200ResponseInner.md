# GetNetworkSmDeviceSoftwares200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | The Meraki managed application Id for this record on a particular device. | [optional] 
**bundle_size** | **int** | The size of the software bundle. | [optional] 
**created_at** | **str** | When the Meraki record for the software was created. | [optional] 
**device_id** | **str** | The Meraki managed device Id. | [optional] 
**dynamic_size** | **int** | The size of the data stored in the application. | [optional] 
**id** | **str** | The Meraki software Id. | [optional] 
**identifier** | **str** | Software bundle identifier. | [optional] 
**installed_at** | **str** | When the Software was installed on the device. | [optional] 
**ios_redemption_code** | **bool** | A boolean indicating whether or not an iOS redemption code was used. | [optional] 
**is_managed** | **bool** | A boolean indicating whether or not the software is managed by Meraki. | [optional] 
**itunes_id** | **str** | The itunes numerical identifier. | [optional] 
**license_key** | **str** | The license key associated with this software installation. | [optional] 
**name** | **str** | The name of the software. | [optional] 
**path** | **str** | The path on the device where the software record is located. | [optional] 
**redemption_code** | **int** | The redemption code used for this software. | [optional] 
**short_version** | **str** | Short version notation for the software. | [optional] 
**status** | **str** | The management status of the software. | [optional] 
**to_install** | **bool** | A boolean indicating this software record should be installed on the associated device. | [optional] 
**to_uninstall** | **bool** | A boolean indicating this software record should be uninstalled on the associated device. | [optional] 
**uninstalled_at** | **str** | When the record was uninstalled from the device. | [optional] 
**updated_at** | **str** | When the record was last updated by Meraki. | [optional] 
**vendor** | **str** | The vendor of the software. | [optional] 
**version** | **str** | Full version notation for the software. | [optional] 

## Example

```python
from openapi_client.models.get_network_sm_device_softwares200_response_inner import GetNetworkSmDeviceSoftwares200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSmDeviceSoftwares200ResponseInner from a JSON string
get_network_sm_device_softwares200_response_inner_instance = GetNetworkSmDeviceSoftwares200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSmDeviceSoftwares200ResponseInner.to_json())

# convert the object into a dict
get_network_sm_device_softwares200_response_inner_dict = get_network_sm_device_softwares200_response_inner_instance.to_dict()
# create an instance of GetNetworkSmDeviceSoftwares200ResponseInner from a dict
get_network_sm_device_softwares200_response_inner_from_dict = GetNetworkSmDeviceSoftwares200ResponseInner.from_dict(get_network_sm_device_softwares200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



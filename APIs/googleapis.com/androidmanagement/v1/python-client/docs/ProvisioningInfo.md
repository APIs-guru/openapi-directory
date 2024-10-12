# ProvisioningInfo

Information about a device that is available during setup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_level** | **int** | The API level of the Android platform version running on the device. | [optional] 
**brand** | **str** | The brand of the device. For example, Google. | [optional] 
**enterprise** | **str** | The name of the enterprise in the form enterprises/{enterprise}. | [optional] 
**management_mode** | **str** | The management mode of the device or profile. | [optional] 
**model** | **str** | The model of the device. For example, Asus Nexus 7. | [optional] 
**name** | **str** | The name of this resource in the form provisioningInfo/{provisioning_info}. | [optional] 
**ownership** | **str** | Ownership of the managed device. | [optional] 

## Example

```python
from openapi_client.models.provisioning_info import ProvisioningInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisioningInfo from a JSON string
provisioning_info_instance = ProvisioningInfo.from_json(json)
# print the JSON string representation of the object
print(ProvisioningInfo.to_json())

# convert the object into a dict
provisioning_info_dict = provisioning_info_instance.to_dict()
# create an instance of ProvisioningInfo from a dict
provisioning_info_from_dict = ProvisioningInfo.from_dict(provisioning_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



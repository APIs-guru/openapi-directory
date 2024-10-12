# CloudApplianceConfigurationProperties

The properties of cloud appliance configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acs_configuration** | [**AcsConfiguration**](AcsConfiguration.md) |  | 
**cloud_platform** | **str** | The cloud platform. | 
**model_number** | **str** | The model number. | 
**supported_regions** | **List[str]** | The supported regions. | 
**supported_storage_account_types** | **List[str]** | The supported storage account types. | 
**supported_vm_images** | [**List[VmImage]**](VmImage.md) | The supported virtual machine images. | 
**supported_vm_types** | **List[str]** | The supported virtual machine types. | 

## Example

```python
from openapi_client.models.cloud_appliance_configuration_properties import CloudApplianceConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CloudApplianceConfigurationProperties from a JSON string
cloud_appliance_configuration_properties_instance = CloudApplianceConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(CloudApplianceConfigurationProperties.to_json())

# convert the object into a dict
cloud_appliance_configuration_properties_dict = cloud_appliance_configuration_properties_instance.to_dict()
# create an instance of CloudApplianceConfigurationProperties from a dict
cloud_appliance_configuration_properties_from_dict = CloudApplianceConfigurationProperties.from_dict(cloud_appliance_configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



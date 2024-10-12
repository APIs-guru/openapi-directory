# ManagementConfigurationProperties

ManagementConfiguration properties supported by the OperationsManagement resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **str** | The applicationId of the appliance for this Management. | [optional] 
**parameters** | [**List[ArmTemplateParameter]**](ArmTemplateParameter.md) | Parameters to run the ARM template | 
**parent_resource_type** | **str** | The type of the parent resource. | 
**provisioning_state** | **str** | The provisioning state for the ManagementConfiguration. | [optional] [readonly] 
**template** | **object** | The Json object containing the ARM template to deploy | 

## Example

```python
from openapi_client.models.management_configuration_properties import ManagementConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementConfigurationProperties from a JSON string
management_configuration_properties_instance = ManagementConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(ManagementConfigurationProperties.to_json())

# convert the object into a dict
management_configuration_properties_dict = management_configuration_properties_instance.to_dict()
# create an instance of ManagementConfigurationProperties from a dict
management_configuration_properties_from_dict = ManagementConfigurationProperties.from_dict(management_configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



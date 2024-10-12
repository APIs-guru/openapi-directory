# IotDpsPropertiesDescription


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocation_policy** | **str** | Allocation policy to be used by this provisioning service. | [optional] 
**authorization_policies** | [**List[SharedAccessSignatureAuthorizationRuleAccessRightsDescription]**](SharedAccessSignatureAuthorizationRuleAccessRightsDescription.md) |  | [optional] 
**device_provisioning_host_name** | **str** | Device endpoint for this provisioning service. | [optional] [readonly] 
**id_scope** | **str** | Unique identifier of this provisioning service. | [optional] [readonly] 
**iot_hubs** | [**List[IotHubDefinitionDescription]**](IotHubDefinitionDescription.md) | List of IoT hubs assosciated with this provisioning service. | [optional] 
**provisioning_state** | **str** | The ARM provisioning state of the provisioning service. | [optional] 
**service_operations_host_name** | **str** | Service endpoint for provisioning service. | [optional] [readonly] 
**state** | **str** | Current state of the provisioning service. | [optional] 

## Example

```python
from openapi_client.models.iot_dps_properties_description import IotDpsPropertiesDescription

# TODO update the JSON string below
json = "{}"
# create an instance of IotDpsPropertiesDescription from a JSON string
iot_dps_properties_description_instance = IotDpsPropertiesDescription.from_json(json)
# print the JSON string representation of the object
print(IotDpsPropertiesDescription.to_json())

# convert the object into a dict
iot_dps_properties_description_dict = iot_dps_properties_description_instance.to_dict()
# create an instance of IotDpsPropertiesDescription from a dict
iot_dps_properties_description_from_dict = IotDpsPropertiesDescription.from_dict(iot_dps_properties_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



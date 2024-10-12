# DdosProtectionPlanPropertiesFormat

DDoS protection plan properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**resource_guid** | **str** | The resource GUID property of the DDoS protection plan resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups. | [optional] [readonly] 
**virtual_networks** | [**List[DdosProtectionPlanPropertiesFormatVirtualNetworksInner]**](DdosProtectionPlanPropertiesFormatVirtualNetworksInner.md) | The list of virtual networks associated with the DDoS protection plan resource. This list is read-only. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ddos_protection_plan_properties_format import DdosProtectionPlanPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of DdosProtectionPlanPropertiesFormat from a JSON string
ddos_protection_plan_properties_format_instance = DdosProtectionPlanPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(DdosProtectionPlanPropertiesFormat.to_json())

# convert the object into a dict
ddos_protection_plan_properties_format_dict = ddos_protection_plan_properties_format_instance.to_dict()
# create an instance of DdosProtectionPlanPropertiesFormat from a dict
ddos_protection_plan_properties_format_from_dict = DdosProtectionPlanPropertiesFormat.from_dict(ddos_protection_plan_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



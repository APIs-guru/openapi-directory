# DedicatedHostProperties

Properties of the dedicated host.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_replace_on_failure** | **bool** | Specifies whether the dedicated host should be replaced automatically in case of a failure. The value is defaulted to &#39;true&#39; when not provided. | [optional] 
**host_id** | **str** | A unique id generated and assigned to the dedicated host by the platform. &lt;br&gt;&lt;br&gt; Does not change throughout the lifetime of the host. | [optional] [readonly] 
**instance_view** | [**DedicatedHostInstanceView**](DedicatedHostInstanceView.md) |  | [optional] 
**license_type** | [**DedicatedHostLicenseType**](DedicatedHostLicenseType.md) |  | [optional] 
**platform_fault_domain** | **int** | Fault domain of the dedicated host within a dedicated host group. | [optional] 
**provisioning_state** | **str** | The provisioning state, which only appears in the response. | [optional] [readonly] 
**provisioning_time** | **datetime** | The date when the host was first provisioned. | [optional] [readonly] 
**virtual_machines** | [**List[SubResourceReadOnly]**](SubResourceReadOnly.md) | A list of references to all virtual machines in the Dedicated Host. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dedicated_host_properties import DedicatedHostProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedHostProperties from a JSON string
dedicated_host_properties_instance = DedicatedHostProperties.from_json(json)
# print the JSON string representation of the object
print(DedicatedHostProperties.to_json())

# convert the object into a dict
dedicated_host_properties_dict = dedicated_host_properties_instance.to_dict()
# create an instance of DedicatedHostProperties from a dict
dedicated_host_properties_from_dict = DedicatedHostProperties.from_dict(dedicated_host_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# DedicatedHsmProperties

Properties of the dedicated hsm

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_profile** | [**NetworkProfile**](NetworkProfile.md) |  | [optional] 
**provisioning_state** | **str** | Provisioning state. | [optional] [readonly] 
**stamp_id** | **str** | This field will be used when RP does not support Availability zones. | [optional] 
**status_message** | **str** | Resource Status Message. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dedicated_hsm_properties import DedicatedHsmProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedHsmProperties from a JSON string
dedicated_hsm_properties_instance = DedicatedHsmProperties.from_json(json)
# print the JSON string representation of the object
print(DedicatedHsmProperties.to_json())

# convert the object into a dict
dedicated_hsm_properties_dict = dedicated_hsm_properties_instance.to_dict()
# create an instance of DedicatedHsmProperties from a dict
dedicated_hsm_properties_from_dict = DedicatedHsmProperties.from_dict(dedicated_hsm_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



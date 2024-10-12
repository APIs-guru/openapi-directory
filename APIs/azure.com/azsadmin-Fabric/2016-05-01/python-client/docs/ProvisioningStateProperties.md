# ProvisioningStateProperties

Provisioning status of the resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | Provisioning status of the resource. | [optional] 

## Example

```python
from openapi_client.models.provisioning_state_properties import ProvisioningStateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisioningStateProperties from a JSON string
provisioning_state_properties_instance = ProvisioningStateProperties.from_json(json)
# print the JSON string representation of the object
print(ProvisioningStateProperties.to_json())

# convert the object into a dict
provisioning_state_properties_dict = provisioning_state_properties_instance.to_dict()
# create an instance of ProvisioningStateProperties from a dict
provisioning_state_properties_from_dict = ProvisioningStateProperties.from_dict(provisioning_state_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



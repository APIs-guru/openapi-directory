# ProvisioningState

Provisioning status of the resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ProvisioningStateProperties**](ProvisioningStateProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.provisioning_state import ProvisioningState

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisioningState from a JSON string
provisioning_state_instance = ProvisioningState.from_json(json)
# print the JSON string representation of the object
print(ProvisioningState.to_json())

# convert the object into a dict
provisioning_state_dict = provisioning_state_instance.to_dict()
# create an instance of ProvisioningState from a dict
provisioning_state_from_dict = ProvisioningState.from_dict(provisioning_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



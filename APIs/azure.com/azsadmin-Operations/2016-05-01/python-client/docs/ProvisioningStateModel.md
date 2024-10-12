# ProvisioningStateModel

The state of the operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The state of the operation. | [optional] 

## Example

```python
from openapi_client.models.provisioning_state_model import ProvisioningStateModel

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisioningStateModel from a JSON string
provisioning_state_model_instance = ProvisioningStateModel.from_json(json)
# print the JSON string representation of the object
print(ProvisioningStateModel.to_json())

# convert the object into a dict
provisioning_state_model_dict = provisioning_state_model_instance.to_dict()
# create an instance of ProvisioningStateModel from a dict
provisioning_state_model_from_dict = ProvisioningStateModel.from_dict(provisioning_state_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



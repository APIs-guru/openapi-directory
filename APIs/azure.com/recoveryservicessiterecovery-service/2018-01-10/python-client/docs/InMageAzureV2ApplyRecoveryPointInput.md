# InMageAzureV2ApplyRecoveryPointInput

ApplyRecoveryPoint input specific to InMageAzureV2 provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vault_location** | **str** | The vault location where the recovery Vm resides. | [optional] 

## Example

```python
from openapi_client.models.in_mage_azure_v2_apply_recovery_point_input import InMageAzureV2ApplyRecoveryPointInput

# TODO update the JSON string below
json = "{}"
# create an instance of InMageAzureV2ApplyRecoveryPointInput from a JSON string
in_mage_azure_v2_apply_recovery_point_input_instance = InMageAzureV2ApplyRecoveryPointInput.from_json(json)
# print the JSON string representation of the object
print(InMageAzureV2ApplyRecoveryPointInput.to_json())

# convert the object into a dict
in_mage_azure_v2_apply_recovery_point_input_dict = in_mage_azure_v2_apply_recovery_point_input_instance.to_dict()
# create an instance of InMageAzureV2ApplyRecoveryPointInput from a dict
in_mage_azure_v2_apply_recovery_point_input_from_dict = InMageAzureV2ApplyRecoveryPointInput.from_dict(in_mage_azure_v2_apply_recovery_point_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# InMageAzureV2RecoveryPointDetails

InMage Azure V2 provider specific recovery point details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_multi_vm_sync_point** | **str** | A value indicating whether the recovery point is multi VM consistent. | [optional] 

## Example

```python
from openapi_client.models.in_mage_azure_v2_recovery_point_details import InMageAzureV2RecoveryPointDetails

# TODO update the JSON string below
json = "{}"
# create an instance of InMageAzureV2RecoveryPointDetails from a JSON string
in_mage_azure_v2_recovery_point_details_instance = InMageAzureV2RecoveryPointDetails.from_json(json)
# print the JSON string representation of the object
print(InMageAzureV2RecoveryPointDetails.to_json())

# convert the object into a dict
in_mage_azure_v2_recovery_point_details_dict = in_mage_azure_v2_recovery_point_details_instance.to_dict()
# create an instance of InMageAzureV2RecoveryPointDetails from a dict
in_mage_azure_v2_recovery_point_details_from_dict = InMageAzureV2RecoveryPointDetails.from_dict(in_mage_azure_v2_recovery_point_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



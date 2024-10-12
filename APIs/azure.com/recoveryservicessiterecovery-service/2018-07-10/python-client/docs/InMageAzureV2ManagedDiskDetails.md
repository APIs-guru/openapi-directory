# InMageAzureV2ManagedDiskDetails

InMageAzureV2 Managed disk details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_id** | **str** | The disk id. | [optional] 
**replica_disk_type** | **str** | The replica disk type. | [optional] 
**seed_managed_disk_id** | **str** | Seed managed disk Id. | [optional] 

## Example

```python
from openapi_client.models.in_mage_azure_v2_managed_disk_details import InMageAzureV2ManagedDiskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of InMageAzureV2ManagedDiskDetails from a JSON string
in_mage_azure_v2_managed_disk_details_instance = InMageAzureV2ManagedDiskDetails.from_json(json)
# print the JSON string representation of the object
print(InMageAzureV2ManagedDiskDetails.to_json())

# convert the object into a dict
in_mage_azure_v2_managed_disk_details_dict = in_mage_azure_v2_managed_disk_details_instance.to_dict()
# create an instance of InMageAzureV2ManagedDiskDetails from a dict
in_mage_azure_v2_managed_disk_details_from_dict = InMageAzureV2ManagedDiskDetails.from_dict(in_mage_azure_v2_managed_disk_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# InMageAzureV2DiskInputDetails

Disk input details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_encryption_set_id** | **str** | The DiskEncryptionSet ARM ID. | [optional] 
**disk_id** | **str** | The DiskId. | [optional] 
**disk_type** | **str** | The DiskType. | [optional] 
**log_storage_account_id** | **str** | The LogStorageAccountId. | [optional] 

## Example

```python
from openapi_client.models.in_mage_azure_v2_disk_input_details import InMageAzureV2DiskInputDetails

# TODO update the JSON string below
json = "{}"
# create an instance of InMageAzureV2DiskInputDetails from a JSON string
in_mage_azure_v2_disk_input_details_instance = InMageAzureV2DiskInputDetails.from_json(json)
# print the JSON string representation of the object
print(InMageAzureV2DiskInputDetails.to_json())

# convert the object into a dict
in_mage_azure_v2_disk_input_details_dict = in_mage_azure_v2_disk_input_details_instance.to_dict()
# create an instance of InMageAzureV2DiskInputDetails from a dict
in_mage_azure_v2_disk_input_details_from_dict = InMageAzureV2DiskInputDetails.from_dict(in_mage_azure_v2_disk_input_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



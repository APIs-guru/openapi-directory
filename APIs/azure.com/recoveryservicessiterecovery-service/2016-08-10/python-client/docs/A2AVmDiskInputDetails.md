# A2AVmDiskInputDetails

Azure VM disk input details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_uri** | **str** | The disk Uri. | [optional] 
**primary_staging_azure_storage_account_id** | **str** | The primary staging storage account Id. | [optional] 
**recovery_azure_storage_account_id** | **str** | The recovery VHD storage account Id. | [optional] 

## Example

```python
from openapi_client.models.a2_avm_disk_input_details import A2AVmDiskInputDetails

# TODO update the JSON string below
json = "{}"
# create an instance of A2AVmDiskInputDetails from a JSON string
a2_avm_disk_input_details_instance = A2AVmDiskInputDetails.from_json(json)
# print the JSON string representation of the object
print(A2AVmDiskInputDetails.to_json())

# convert the object into a dict
a2_avm_disk_input_details_dict = a2_avm_disk_input_details_instance.to_dict()
# create an instance of A2AVmDiskInputDetails from a dict
a2_avm_disk_input_details_from_dict = A2AVmDiskInputDetails.from_dict(a2_avm_disk_input_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



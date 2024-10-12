# AzureFileShareProvisionILRRequest

Update snapshot Uri with the correct friendly Name of the source Azure file share.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recovery_point_id** | **str** | Recovery point ID. | [optional] 
**source_resource_id** | **str** | Source Storage account ARM Id | [optional] 

## Example

```python
from openapi_client.models.azure_file_share_provision_ilr_request import AzureFileShareProvisionILRRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFileShareProvisionILRRequest from a JSON string
azure_file_share_provision_ilr_request_instance = AzureFileShareProvisionILRRequest.from_json(json)
# print the JSON string representation of the object
print(AzureFileShareProvisionILRRequest.to_json())

# convert the object into a dict
azure_file_share_provision_ilr_request_dict = azure_file_share_provision_ilr_request_instance.to_dict()
# create an instance of AzureFileShareProvisionILRRequest from a dict
azure_file_share_provision_ilr_request_from_dict = AzureFileShareProvisionILRRequest.from_dict(azure_file_share_provision_ilr_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



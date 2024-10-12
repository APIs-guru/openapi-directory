# AzureSourceDetails

AzureSourceDetails message describes a specific source details for the Azure source type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_location** | **str** | Immutable. The Azure location (region) that the source VMs will be migrated from. | [optional] 
**client_secret_creds** | [**ClientSecretCredentials**](ClientSecretCredentials.md) |  | [optional] 
**error** | [**Status**](Status.md) |  | [optional] 
**migration_resources_user_tags** | **Dict[str, str]** | User specified tags to add to every M2VM generated resource in Azure. These tags will be set in addition to the default tags that are set as part of the migration process. The tags must not begin with the reserved prefix &#x60;m4ce&#x60; or &#x60;m2vm&#x60;. | [optional] 
**resource_group_id** | **str** | Output only. The ID of the Azure resource group that contains all resources related to the migration process of this source. | [optional] [readonly] 
**state** | **str** | Output only. State of the source as determined by the health check. | [optional] [readonly] 
**subscription_id** | **str** | Immutable. Azure subscription ID. | [optional] 

## Example

```python
from openapi_client.models.azure_source_details import AzureSourceDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AzureSourceDetails from a JSON string
azure_source_details_instance = AzureSourceDetails.from_json(json)
# print the JSON string representation of the object
print(AzureSourceDetails.to_json())

# convert the object into a dict
azure_source_details_dict = azure_source_details_instance.to_dict()
# create an instance of AzureSourceDetails from a dict
azure_source_details_from_dict = AzureSourceDetails.from_dict(azure_source_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



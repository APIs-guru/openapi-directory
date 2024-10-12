# AzureActiveDirectory

The settings to enable AAD authentication on the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_application** | **str** | Azure active directory client application id. | [optional] 
**cluster_application** | **str** | Azure active directory cluster application id. | [optional] 
**tenant_id** | **str** | Azure active directory tenant id. | [optional] 

## Example

```python
from openapi_client.models.azure_active_directory import AzureActiveDirectory

# TODO update the JSON string below
json = "{}"
# create an instance of AzureActiveDirectory from a JSON string
azure_active_directory_instance = AzureActiveDirectory.from_json(json)
# print the JSON string representation of the object
print(AzureActiveDirectory.to_json())

# convert the object into a dict
azure_active_directory_dict = azure_active_directory_instance.to_dict()
# create an instance of AzureActiveDirectory from a dict
azure_active_directory_from_dict = AzureActiveDirectory.from_dict(azure_active_directory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AzureCliScript

Object model for the Azure CLI script.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AzureCliScriptProperties**](AzureCliScriptProperties.md) |  | 
**identity** | [**ManagedServiceIdentity**](ManagedServiceIdentity.md) |  | 
**kind** | **str** | Type of the script. | 
**location** | **str** | The location of the ACI and the storage account for the deployment script. | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | String Id used to locate any resource on Azure. | [optional] [readonly] 
**name** | **str** | Name of this resource. | [optional] [readonly] 
**type** | **str** | Type of this resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.azure_cli_script import AzureCliScript

# TODO update the JSON string below
json = "{}"
# create an instance of AzureCliScript from a JSON string
azure_cli_script_instance = AzureCliScript.from_json(json)
# print the JSON string representation of the object
print(AzureCliScript.to_json())

# convert the object into a dict
azure_cli_script_dict = azure_cli_script_instance.to_dict()
# create an instance of AzureCliScript from a dict
azure_cli_script_from_dict = AzureCliScript.from_dict(azure_cli_script_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



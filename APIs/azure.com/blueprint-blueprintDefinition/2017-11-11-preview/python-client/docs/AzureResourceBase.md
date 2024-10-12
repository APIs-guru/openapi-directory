# AzureResourceBase

Common properties for all Azure resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | String Id used to locate any resource on Azure. | [optional] [readonly] 
**name** | **str** | Name of this resource. | [optional] [readonly] 
**type** | **str** | Type of this resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.azure_resource_base import AzureResourceBase

# TODO update the JSON string below
json = "{}"
# create an instance of AzureResourceBase from a JSON string
azure_resource_base_instance = AzureResourceBase.from_json(json)
# print the JSON string representation of the object
print(AzureResourceBase.to_json())

# convert the object into a dict
azure_resource_base_dict = azure_resource_base_instance.to_dict()
# create an instance of AzureResourceBase from a dict
azure_resource_base_from_dict = AzureResourceBase.from_dict(azure_resource_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AzureResourceManagerError

Error code and message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code. | [optional] 
**message** | **str** | Error message. | [optional] 

## Example

```python
from openapi_client.models.azure_resource_manager_error import AzureResourceManagerError

# TODO update the JSON string below
json = "{}"
# create an instance of AzureResourceManagerError from a JSON string
azure_resource_manager_error_instance = AzureResourceManagerError.from_json(json)
# print the JSON string representation of the object
print(AzureResourceManagerError.to_json())

# convert the object into a dict
azure_resource_manager_error_dict = azure_resource_manager_error_instance.to_dict()
# create an instance of AzureResourceManagerError from a dict
azure_resource_manager_error_from_dict = AzureResourceManagerError.from_dict(azure_resource_manager_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



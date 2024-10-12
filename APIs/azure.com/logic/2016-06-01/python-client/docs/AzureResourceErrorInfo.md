# AzureResourceErrorInfo

The azure resource error info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | [**List[AzureResourceErrorInfo]**](AzureResourceErrorInfo.md) | The error details. | [optional] 
**message** | **str** | The error message. | 
**code** | **str** | The error code. | 

## Example

```python
from openapi_client.models.azure_resource_error_info import AzureResourceErrorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AzureResourceErrorInfo from a JSON string
azure_resource_error_info_instance = AzureResourceErrorInfo.from_json(json)
# print the JSON string representation of the object
print(AzureResourceErrorInfo.to_json())

# convert the object into a dict
azure_resource_error_info_dict = azure_resource_error_info_instance.to_dict()
# create an instance of AzureResourceErrorInfo from a dict
azure_resource_error_info_from_dict = AzureResourceErrorInfo.from_dict(azure_resource_error_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



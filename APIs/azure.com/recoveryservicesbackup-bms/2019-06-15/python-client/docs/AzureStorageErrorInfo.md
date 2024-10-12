# AzureStorageErrorInfo

Azure storage specific error information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **int** | Error code. | [optional] 
**error_string** | **str** | Localized error string. | [optional] 
**recommendations** | **List[str]** | List of localized recommendations for above error code. | [optional] 

## Example

```python
from openapi_client.models.azure_storage_error_info import AzureStorageErrorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AzureStorageErrorInfo from a JSON string
azure_storage_error_info_instance = AzureStorageErrorInfo.from_json(json)
# print the JSON string representation of the object
print(AzureStorageErrorInfo.to_json())

# convert the object into a dict
azure_storage_error_info_dict = azure_storage_error_info_instance.to_dict()
# create an instance of AzureStorageErrorInfo from a dict
azure_storage_error_info_from_dict = AzureStorageErrorInfo.from_dict(azure_storage_error_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



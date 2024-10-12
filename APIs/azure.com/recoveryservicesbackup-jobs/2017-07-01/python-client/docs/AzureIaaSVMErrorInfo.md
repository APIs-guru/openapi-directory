# AzureIaaSVMErrorInfo

Azure IaaS VM workload-specific error information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **int** | Error code. | [optional] 
**error_string** | **str** | Localized error string. | [optional] 
**error_title** | **str** | Title: Typically, the entity that the error pertains to. | [optional] 
**recommendations** | **List[str]** | List of localized recommendations for above error code. | [optional] 

## Example

```python
from openapi_client.models.azure_iaa_svm_error_info import AzureIaaSVMErrorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AzureIaaSVMErrorInfo from a JSON string
azure_iaa_svm_error_info_instance = AzureIaaSVMErrorInfo.from_json(json)
# print the JSON string representation of the object
print(AzureIaaSVMErrorInfo.to_json())

# convert the object into a dict
azure_iaa_svm_error_info_dict = azure_iaa_svm_error_info_instance.to_dict()
# create an instance of AzureIaaSVMErrorInfo from a dict
azure_iaa_svm_error_info_from_dict = AzureIaaSVMErrorInfo.from_dict(azure_iaa_svm_error_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



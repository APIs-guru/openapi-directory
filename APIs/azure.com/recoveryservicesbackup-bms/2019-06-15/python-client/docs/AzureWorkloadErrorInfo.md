# AzureWorkloadErrorInfo

Azure storage specific error information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_details** | **str** | Additional details for above error code. | [optional] 
**error_code** | **int** | Error code. | [optional] 
**error_string** | **str** | Localized error string. | [optional] 
**error_title** | **str** | Title: Typically, the entity that the error pertains to. | [optional] 
**recommendations** | **List[str]** | List of localized recommendations for above error code. | [optional] 

## Example

```python
from openapi_client.models.azure_workload_error_info import AzureWorkloadErrorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AzureWorkloadErrorInfo from a JSON string
azure_workload_error_info_instance = AzureWorkloadErrorInfo.from_json(json)
# print the JSON string representation of the object
print(AzureWorkloadErrorInfo.to_json())

# convert the object into a dict
azure_workload_error_info_dict = azure_workload_error_info_instance.to_dict()
# create an instance of AzureWorkloadErrorInfo from a dict
azure_workload_error_info_from_dict = AzureWorkloadErrorInfo.from_dict(azure_workload_error_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



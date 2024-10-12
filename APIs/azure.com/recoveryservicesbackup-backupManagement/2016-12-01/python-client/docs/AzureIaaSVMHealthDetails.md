# AzureIaaSVMHealthDetails

Azure IaaS VM workload-specific Health Details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** | Health Code | [optional] 
**message** | **str** | Health Message | [optional] 
**recommendations** | **List[str]** | Health Recommended Actions | [optional] 
**title** | **str** | Health Title | [optional] 

## Example

```python
from openapi_client.models.azure_iaa_svm_health_details import AzureIaaSVMHealthDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AzureIaaSVMHealthDetails from a JSON string
azure_iaa_svm_health_details_instance = AzureIaaSVMHealthDetails.from_json(json)
# print the JSON string representation of the object
print(AzureIaaSVMHealthDetails.to_json())

# convert the object into a dict
azure_iaa_svm_health_details_dict = azure_iaa_svm_health_details_instance.to_dict()
# create an instance of AzureIaaSVMHealthDetails from a dict
azure_iaa_svm_health_details_from_dict = AzureIaaSVMHealthDetails.from_dict(azure_iaa_svm_health_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



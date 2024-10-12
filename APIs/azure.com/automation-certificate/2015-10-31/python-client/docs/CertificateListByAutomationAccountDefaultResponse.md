# CertificateListByAutomationAccountDefaultResponse

Error response of an operation failure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.certificate_list_by_automation_account_default_response import CertificateListByAutomationAccountDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateListByAutomationAccountDefaultResponse from a JSON string
certificate_list_by_automation_account_default_response_instance = CertificateListByAutomationAccountDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(CertificateListByAutomationAccountDefaultResponse.to_json())

# convert the object into a dict
certificate_list_by_automation_account_default_response_dict = certificate_list_by_automation_account_default_response_instance.to_dict()
# create an instance of CertificateListByAutomationAccountDefaultResponse from a dict
certificate_list_by_automation_account_default_response_from_dict = CertificateListByAutomationAccountDefaultResponse.from_dict(certificate_list_by_automation_account_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# Python2PackageListByAutomationAccountDefaultResponse

Error response of an operation failure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.python2_package_list_by_automation_account_default_response import Python2PackageListByAutomationAccountDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of Python2PackageListByAutomationAccountDefaultResponse from a JSON string
python2_package_list_by_automation_account_default_response_instance = Python2PackageListByAutomationAccountDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(Python2PackageListByAutomationAccountDefaultResponse.to_json())

# convert the object into a dict
python2_package_list_by_automation_account_default_response_dict = python2_package_list_by_automation_account_default_response_instance.to_dict()
# create an instance of Python2PackageListByAutomationAccountDefaultResponse from a dict
python2_package_list_by_automation_account_default_response_from_dict = Python2PackageListByAutomationAccountDefaultResponse.from_dict(python2_package_list_by_automation_account_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



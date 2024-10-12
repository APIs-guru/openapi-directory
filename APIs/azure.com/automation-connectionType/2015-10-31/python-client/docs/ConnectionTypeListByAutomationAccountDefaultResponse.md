# ConnectionTypeListByAutomationAccountDefaultResponse

Error response of an operation failure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.connection_type_list_by_automation_account_default_response import ConnectionTypeListByAutomationAccountDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionTypeListByAutomationAccountDefaultResponse from a JSON string
connection_type_list_by_automation_account_default_response_instance = ConnectionTypeListByAutomationAccountDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(ConnectionTypeListByAutomationAccountDefaultResponse.to_json())

# convert the object into a dict
connection_type_list_by_automation_account_default_response_dict = connection_type_list_by_automation_account_default_response_instance.to_dict()
# create an instance of ConnectionTypeListByAutomationAccountDefaultResponse from a dict
connection_type_list_by_automation_account_default_response_from_dict = ConnectionTypeListByAutomationAccountDefaultResponse.from_dict(connection_type_list_by_automation_account_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



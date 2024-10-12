# UpdateAutoRenewOperationSummary

Summary of cancel product operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UpdateAutoRenewOperationSummaryProperties**](UpdateAutoRenewOperationSummaryProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_auto_renew_operation_summary import UpdateAutoRenewOperationSummary

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAutoRenewOperationSummary from a JSON string
update_auto_renew_operation_summary_instance = UpdateAutoRenewOperationSummary.from_json(json)
# print the JSON string representation of the object
print(UpdateAutoRenewOperationSummary.to_json())

# convert the object into a dict
update_auto_renew_operation_summary_dict = update_auto_renew_operation_summary_instance.to_dict()
# create an instance of UpdateAutoRenewOperationSummary from a dict
update_auto_renew_operation_summary_from_dict = UpdateAutoRenewOperationSummary.from_dict(update_auto_renew_operation_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



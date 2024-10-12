# BillPayResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bill_pay_account_validation** | [**BillPayAccountValidation**](BillPayAccountValidation.md) |  | [optional] 

## Example

```python
from openapi_client.models.bill_pay_response import BillPayResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BillPayResponse from a JSON string
bill_pay_response_instance = BillPayResponse.from_json(json)
# print the JSON string representation of the object
print(BillPayResponse.to_json())

# convert the object into a dict
bill_pay_response_dict = bill_pay_response_instance.to_dict()
# create an instance of BillPayResponse from a dict
bill_pay_response_from_dict = BillPayResponse.from_dict(bill_pay_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



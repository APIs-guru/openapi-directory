# BillPayRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bill_pay_account_validation** | [**BillPayAccountValidation**](BillPayAccountValidation.md) |  | [optional] 

## Example

```python
from openapi_client.models.bill_pay_request import BillPayRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BillPayRequest from a JSON string
bill_pay_request_instance = BillPayRequest.from_json(json)
# print the JSON string representation of the object
print(BillPayRequest.to_json())

# convert the object into a dict
bill_pay_request_dict = bill_pay_request_instance.to_dict()
# create an instance of BillPayRequest from a dict
bill_pay_request_from_dict = BillPayRequest.from_dict(bill_pay_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



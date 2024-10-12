# PaymentDefault


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abn** | **str** |  | [optional] 
**account_additional_abn** | **str** |  | [optional] 
**account_verified_date** | **datetime** |  | [optional] 
**amount_outstanding** | **float** |  | [optional] 
**approved_date** | **datetime** |  | [optional] 
**company** | **str** |  | [optional] 
**default_settled** | **bool** |  | [optional] 
**doctype** | **str** |  | [optional] 
**document_type** | **str** |  | [optional] 
**last_updated** | **datetime** |  | [optional] 
**original_invoice_date** | **datetime** |  | [optional] 
**part_payment_made** | **bool** |  | [optional] 
**partpayment** | **bool** |  | [optional] 
**payment_due_date** | **datetime** |  | [optional] 
**poster_abn** | **str** |  | [optional] 
**poster_name** | **str** |  | [optional] 
**settled** | **bool** |  | [optional] 
**uploaded_date** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.payment_default import PaymentDefault

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentDefault from a JSON string
payment_default_instance = PaymentDefault.from_json(json)
# print the JSON string representation of the object
print(PaymentDefault.to_json())

# convert the object into a dict
payment_default_dict = payment_default_instance.to_dict()
# create an instance of PaymentDefault from a dict
payment_default_from_dict = PaymentDefault.from_dict(payment_default_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



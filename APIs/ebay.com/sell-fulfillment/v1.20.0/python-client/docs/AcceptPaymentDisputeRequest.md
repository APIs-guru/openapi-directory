# AcceptPaymentDisputeRequest

This type is used by base request of the <strong>acceptPaymentDispute</strong> method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**return_address** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] 
**revision** | **int** | This integer value indicates the revision number of the payment dispute. This field is required. The current &lt;strong&gt;revision&lt;/strong&gt; number for a payment dispute can be retrieved with the &lt;strong&gt;getPaymentDispute&lt;/strong&gt; method. Each time an action is taken against a payment dispute, this integer value increases by 1. | [optional] 

## Example

```python
from openapi_client.models.accept_payment_dispute_request import AcceptPaymentDisputeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AcceptPaymentDisputeRequest from a JSON string
accept_payment_dispute_request_instance = AcceptPaymentDisputeRequest.from_json(json)
# print the JSON string representation of the object
print(AcceptPaymentDisputeRequest.to_json())

# convert the object into a dict
accept_payment_dispute_request_dict = accept_payment_dispute_request_instance.to_dict()
# create an instance of AcceptPaymentDisputeRequest from a dict
accept_payment_dispute_request_from_dict = AcceptPaymentDisputeRequest.from_dict(accept_payment_dispute_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



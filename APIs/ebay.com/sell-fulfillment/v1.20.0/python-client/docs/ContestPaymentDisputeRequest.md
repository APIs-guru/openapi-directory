# ContestPaymentDisputeRequest

This type is used by the request payload of the <strong>contestPaymentDispute</strong> method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**note** | **str** | This field shows information that the seller provides about the dispute, such as the basis for the dispute, any relevant evidence, tracking numbers, and so forth.&lt;br&gt;&lt;br&gt;This field is limited to 1000 characters. | [optional] 
**return_address** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] 
**revision** | **int** | This integer value indicates the revision number of the payment dispute. This field is required. The current &lt;strong&gt;revision&lt;/strong&gt; number for a payment dispute can be retrieved with the &lt;strong&gt;getPaymentDispute&lt;/strong&gt; method. Each time an action is taken against a payment dispute, this integer value increases by 1. | [optional] 

## Example

```python
from openapi_client.models.contest_payment_dispute_request import ContestPaymentDisputeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ContestPaymentDisputeRequest from a JSON string
contest_payment_dispute_request_instance = ContestPaymentDisputeRequest.from_json(json)
# print the JSON string representation of the object
print(ContestPaymentDisputeRequest.to_json())

# convert the object into a dict
contest_payment_dispute_request_dict = contest_payment_dispute_request_instance.to_dict()
# create an instance of ContestPaymentDisputeRequest from a dict
contest_payment_dispute_request_from_dict = ContestPaymentDisputeRequest.from_dict(contest_payment_dispute_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



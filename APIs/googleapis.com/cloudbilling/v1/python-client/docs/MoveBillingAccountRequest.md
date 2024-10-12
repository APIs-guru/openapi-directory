# MoveBillingAccountRequest

Request message for `MoveBillingAccount` RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_parent** | **str** | Required. The resource name of the Organization to move the billing account under. Must be of the form &#x60;organizations/{organization_id}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.move_billing_account_request import MoveBillingAccountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MoveBillingAccountRequest from a JSON string
move_billing_account_request_instance = MoveBillingAccountRequest.from_json(json)
# print the JSON string representation of the object
print(MoveBillingAccountRequest.to_json())

# convert the object into a dict
move_billing_account_request_dict = move_billing_account_request_instance.to_dict()
# create an instance of MoveBillingAccountRequest from a dict
move_billing_account_request_from_dict = MoveBillingAccountRequest.from_dict(move_billing_account_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



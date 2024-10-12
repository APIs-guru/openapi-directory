# BillingAccountUpdateRequest

The request properties of the billing account that can be updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BillingAccountProperties**](BillingAccountProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.billing_account_update_request import BillingAccountUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BillingAccountUpdateRequest from a JSON string
billing_account_update_request_instance = BillingAccountUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(BillingAccountUpdateRequest.to_json())

# convert the object into a dict
billing_account_update_request_dict = billing_account_update_request_instance.to_dict()
# create an instance of BillingAccountUpdateRequest from a dict
billing_account_update_request_from_dict = BillingAccountUpdateRequest.from_dict(billing_account_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



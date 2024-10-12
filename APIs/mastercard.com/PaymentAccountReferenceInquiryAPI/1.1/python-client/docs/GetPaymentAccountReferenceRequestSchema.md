# GetPaymentAccountReferenceRequestSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encrypted_payload** | [**EncryptedPayloadData**](EncryptedPayloadData.md) |  | 
**request_id** | **str** | The id of the request submitted. | 

## Example

```python
from openapi_client.models.get_payment_account_reference_request_schema import GetPaymentAccountReferenceRequestSchema

# TODO update the JSON string below
json = "{}"
# create an instance of GetPaymentAccountReferenceRequestSchema from a JSON string
get_payment_account_reference_request_schema_instance = GetPaymentAccountReferenceRequestSchema.from_json(json)
# print the JSON string representation of the object
print(GetPaymentAccountReferenceRequestSchema.to_json())

# convert the object into a dict
get_payment_account_reference_request_schema_dict = get_payment_account_reference_request_schema_instance.to_dict()
# create an instance of GetPaymentAccountReferenceRequestSchema from a dict
get_payment_account_reference_request_schema_from_dict = GetPaymentAccountReferenceRequestSchema.from_dict(get_payment_account_reference_request_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



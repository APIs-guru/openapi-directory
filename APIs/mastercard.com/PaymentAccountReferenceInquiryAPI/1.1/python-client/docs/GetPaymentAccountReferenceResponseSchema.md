# GetPaymentAccountReferenceResponseSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encrypted_payload** | [**EncryptedPayloadOut**](EncryptedPayloadOut.md) |  | [optional] 
**response_id** | **str** | The id of the response sent. Required. | [optional] 

## Example

```python
from openapi_client.models.get_payment_account_reference_response_schema import GetPaymentAccountReferenceResponseSchema

# TODO update the JSON string below
json = "{}"
# create an instance of GetPaymentAccountReferenceResponseSchema from a JSON string
get_payment_account_reference_response_schema_instance = GetPaymentAccountReferenceResponseSchema.from_json(json)
# print the JSON string representation of the object
print(GetPaymentAccountReferenceResponseSchema.to_json())

# convert the object into a dict
get_payment_account_reference_response_schema_dict = get_payment_account_reference_response_schema_instance.to_dict()
# create an instance of GetPaymentAccountReferenceResponseSchema from a dict
get_payment_account_reference_response_schema_from_dict = GetPaymentAccountReferenceResponseSchema.from_dict(get_payment_account_reference_response_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



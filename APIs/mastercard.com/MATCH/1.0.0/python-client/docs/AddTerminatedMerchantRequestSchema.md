# AddTerminatedMerchantRequestSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_merchant_request** | [**AddMerchantRequest**](AddMerchantRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_terminated_merchant_request_schema import AddTerminatedMerchantRequestSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AddTerminatedMerchantRequestSchema from a JSON string
add_terminated_merchant_request_schema_instance = AddTerminatedMerchantRequestSchema.from_json(json)
# print the JSON string representation of the object
print(AddTerminatedMerchantRequestSchema.to_json())

# convert the object into a dict
add_terminated_merchant_request_schema_dict = add_terminated_merchant_request_schema_instance.to_dict()
# create an instance of AddTerminatedMerchantRequestSchema from a dict
add_terminated_merchant_request_schema_from_dict = AddTerminatedMerchantRequestSchema.from_dict(add_terminated_merchant_request_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



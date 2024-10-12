# DeleteMerchantResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UnifiedId**](UnifiedId.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.delete_merchant_response import DeleteMerchantResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteMerchantResponse from a JSON string
delete_merchant_response_instance = DeleteMerchantResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteMerchantResponse.to_json())

# convert the object into a dict
delete_merchant_response_dict = delete_merchant_response_instance.to_dict()
# create an instance of DeleteMerchantResponse from a dict
delete_merchant_response_from_dict = DeleteMerchantResponse.from_dict(delete_merchant_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



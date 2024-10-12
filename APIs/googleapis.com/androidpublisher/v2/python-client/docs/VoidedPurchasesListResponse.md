# VoidedPurchasesListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_info** | [**PageInfo**](PageInfo.md) |  | [optional] 
**token_pagination** | [**TokenPagination**](TokenPagination.md) |  | [optional] 
**voided_purchases** | [**List[VoidedPurchase]**](VoidedPurchase.md) |  | [optional] 

## Example

```python
from openapi_client.models.voided_purchases_list_response import VoidedPurchasesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VoidedPurchasesListResponse from a JSON string
voided_purchases_list_response_instance = VoidedPurchasesListResponse.from_json(json)
# print the JSON string representation of the object
print(VoidedPurchasesListResponse.to_json())

# convert the object into a dict
voided_purchases_list_response_dict = voided_purchases_list_response_instance.to_dict()
# create an instance of VoidedPurchasesListResponse from a dict
voided_purchases_list_response_from_dict = VoidedPurchasesListResponse.from_dict(voided_purchases_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



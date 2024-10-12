# InAppPurchasesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[InAppPurchase]**](InAppPurchase.md) |  | 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.in_app_purchases_response import InAppPurchasesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InAppPurchasesResponse from a JSON string
in_app_purchases_response_instance = InAppPurchasesResponse.from_json(json)
# print the JSON string representation of the object
print(InAppPurchasesResponse.to_json())

# convert the object into a dict
in_app_purchases_response_dict = in_app_purchases_response_instance.to_dict()
# create an instance of InAppPurchasesResponse from a dict
in_app_purchases_response_from_dict = InAppPurchasesResponse.from_dict(in_app_purchases_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



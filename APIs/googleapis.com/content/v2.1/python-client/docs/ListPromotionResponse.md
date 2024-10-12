# ListPromotionResponse

Response message for Promotions.List method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**promotions** | [**List[Promotion]**](Promotion.md) | List of all available promotions for the merchant. | [optional] 

## Example

```python
from openapi_client.models.list_promotion_response import ListPromotionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPromotionResponse from a JSON string
list_promotion_response_instance = ListPromotionResponse.from_json(json)
# print the JSON string representation of the object
print(ListPromotionResponse.to_json())

# convert the object into a dict
list_promotion_response_dict = list_promotion_response_instance.to_dict()
# create an instance of ListPromotionResponse from a dict
list_promotion_response_from_dict = ListPromotionResponse.from_dict(list_promotion_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GiftCardClassListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**Pagination**](Pagination.md) |  | [optional] 
**resources** | [**List[GiftCardClass]**](GiftCardClass.md) | Resources corresponding to the list request. | [optional] 

## Example

```python
from openapi_client.models.gift_card_class_list_response import GiftCardClassListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GiftCardClassListResponse from a JSON string
gift_card_class_list_response_instance = GiftCardClassListResponse.from_json(json)
# print the JSON string representation of the object
print(GiftCardClassListResponse.to_json())

# convert the object into a dict
gift_card_class_list_response_dict = gift_card_class_list_response_instance.to_dict()
# create an instance of GiftCardClassListResponse from a dict
gift_card_class_list_response_from_dict = GiftCardClassListResponse.from_dict(gift_card_class_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



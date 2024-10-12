# GiftCardObjectListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**Pagination**](Pagination.md) |  | [optional] 
**resources** | [**List[GiftCardObject]**](GiftCardObject.md) | Resources corresponding to the list request. | [optional] 

## Example

```python
from openapi_client.models.gift_card_object_list_response import GiftCardObjectListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GiftCardObjectListResponse from a JSON string
gift_card_object_list_response_instance = GiftCardObjectListResponse.from_json(json)
# print the JSON string representation of the object
print(GiftCardObjectListResponse.to_json())

# convert the object into a dict
gift_card_object_list_response_dict = gift_card_object_list_response_instance.to_dict()
# create an instance of GiftCardObjectListResponse from a dict
gift_card_object_list_response_from_dict = GiftCardObjectListResponse.from_dict(gift_card_object_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



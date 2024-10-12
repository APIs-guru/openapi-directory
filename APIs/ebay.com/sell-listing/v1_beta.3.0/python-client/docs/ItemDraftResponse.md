# ItemDraftResponse

The type that defines the field for the createItemDraft response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_draft_id** | **str** | The eBay generated ID of the listing draft. | [optional] 
**sell_flow_native_uri** | **str** | The URI the Partner uses to send the seller to their listing draft that was created on the eBay site. From there the seller can change, update, and publish the item on eBay. This is returned when the seller is using a mobile app. | [optional] 
**sell_flow_url** | **str** | The web URL the Partner uses to send the seller to the listing draft that was created on the eBay site. From there the seller can change, update, and publish the item on eBay. This is returned when the seller is using mobile web (mweb) or the desktop web. Note: You must construct the URL using the URL returned in this field and a session token. For example: sellFlowUrl?id_token&#x3D;session_token | [optional] 

## Example

```python
from openapi_client.models.item_draft_response import ItemDraftResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ItemDraftResponse from a JSON string
item_draft_response_instance = ItemDraftResponse.from_json(json)
# print the JSON string representation of the object
print(ItemDraftResponse.to_json())

# convert the object into a dict
item_draft_response_dict = item_draft_response_instance.to_dict()
# create an instance of ItemDraftResponse from a dict
item_draft_response_from_dict = ItemDraftResponse.from_dict(item_draft_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



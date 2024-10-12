# RemoteShopcartResponse

The type that defines the fields and containers for the member's eBay cart information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cart_items** | [**List[CartItem]**](CartItem.md) | An array of the items in the member&#39;s eBay cart. | [optional] 
**cart_subtotal** | [**Amount**](Amount.md) |  | [optional] 
**cart_web_url** | **str** | The URL of the member&#39;s eBay cart. | [optional] 
**unavailable_cart_items** | [**List[CartItem]**](CartItem.md) | An array of items in the cart that are unavailable. This can be for a variety of reasons such as, when the listing has ended or the item is out of stock. Because a cart never expires, these items will remain in the cart until they are removed. | [optional] 
**warnings** | [**List[Error]**](Error.md) | An array of warning messages. These type of errors do not prevent the call from executing but should be checked. | [optional] 

## Example

```python
from openapi_client.models.remote_shopcart_response import RemoteShopcartResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RemoteShopcartResponse from a JSON string
remote_shopcart_response_instance = RemoteShopcartResponse.from_json(json)
# print the JSON string representation of the object
print(RemoteShopcartResponse.to_json())

# convert the object into a dict
remote_shopcart_response_dict = remote_shopcart_response_instance.to_dict()
# create an instance of RemoteShopcartResponse from a dict
remote_shopcart_response_from_dict = RemoteShopcartResponse.from_dict(remote_shopcart_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



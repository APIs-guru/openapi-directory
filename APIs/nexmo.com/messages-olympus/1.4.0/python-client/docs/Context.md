# Context

This is only present for the Inbound Message where the user is quoting another message, or for a `product` message where the user has selected the 'Message Business'  option. It provides information about the quoted message and/or the product message being responded to.  

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_from** | **str** | The phone number of the **original sender** of the message being quoted in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Not present in a &#x60;context&#x60; object which is the result of a user selecting &#39;Message Business&#39; in a &#x60;product&#x60; message. | 
**message_uuid** | **str** | The UUID of the message being quoted. Not present in a &#x60;context&#x60; object which is the result of a user selecting &#39;Message Business&#39; in a &#x60;product&#x60; message. | 
**whatsapp_referred_product** | [**ContextWhatsappReferredProduct**](ContextWhatsappReferredProduct.md) |  | [optional] 

## Example

```python
from openapi_client.models.context import Context

# TODO update the JSON string below
json = "{}"
# create an instance of Context from a JSON string
context_instance = Context.from_json(json)
# print the JSON string representation of the object
print(Context.to_json())

# convert the object into a dict
context_dict = context_instance.to_dict()
# create an instance of Context from a dict
context_from_dict = Context.from_dict(context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



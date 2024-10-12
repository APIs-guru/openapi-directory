# ConnectAmazonBuyShippingRequestBody

An Amazon account information request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | An email address. | 
**merchant_seller_id** | **str** |  | 
**mws_auth_token** | **str** |  | 
**nickname** | **str** | Nickname to be associated with the account connection | 

## Example

```python
from openapi_client.models.connect_amazon_buy_shipping_request_body import ConnectAmazonBuyShippingRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectAmazonBuyShippingRequestBody from a JSON string
connect_amazon_buy_shipping_request_body_instance = ConnectAmazonBuyShippingRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectAmazonBuyShippingRequestBody.to_json())

# convert the object into a dict
connect_amazon_buy_shipping_request_body_dict = connect_amazon_buy_shipping_request_body_instance.to_dict()
# create an instance of ConnectAmazonBuyShippingRequestBody from a dict
connect_amazon_buy_shipping_request_body_from_dict = ConnectAmazonBuyShippingRequestBody.from_dict(connect_amazon_buy_shipping_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



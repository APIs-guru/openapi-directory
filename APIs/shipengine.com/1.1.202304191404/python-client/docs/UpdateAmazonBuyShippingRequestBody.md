# UpdateAmazonBuyShippingRequestBody

An amazon buy shipping account settings request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email | [optional] 

## Example

```python
from openapi_client.models.update_amazon_buy_shipping_request_body import UpdateAmazonBuyShippingRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAmazonBuyShippingRequestBody from a JSON string
update_amazon_buy_shipping_request_body_instance = UpdateAmazonBuyShippingRequestBody.from_json(json)
# print the JSON string representation of the object
print(UpdateAmazonBuyShippingRequestBody.to_json())

# convert the object into a dict
update_amazon_buy_shipping_request_body_dict = update_amazon_buy_shipping_request_body_instance.to_dict()
# create an instance of UpdateAmazonBuyShippingRequestBody from a dict
update_amazon_buy_shipping_request_body_from_dict = UpdateAmazonBuyShippingRequestBody.from_dict(update_amazon_buy_shipping_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



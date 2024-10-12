# UpdatePriceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**definitions** | **object** |  | [optional] 
**offer_id** | **str** | This is applicable only for promotions | [optional] 
**pricing** | [**List[UpdatePriceRequestPricingInner]**](UpdatePriceRequestPricingInner.md) |  | 
**replace_all** | **str** | This is applicable only for promotions | [optional] 
**sku** | **str** |  | 

## Example

```python
from openapi_client.models.update_price_request import UpdatePriceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePriceRequest from a JSON string
update_price_request_instance = UpdatePriceRequest.from_json(json)
# print the JSON string representation of the object
print(UpdatePriceRequest.to_json())

# convert the object into a dict
update_price_request_dict = update_price_request_instance.to_dict()
# create an instance of UpdatePriceRequest from a dict
update_price_request_from_dict = UpdatePriceRequest.from_dict(update_price_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



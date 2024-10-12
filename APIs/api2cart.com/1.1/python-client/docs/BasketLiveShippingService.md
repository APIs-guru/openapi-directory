# BasketLiveShippingService


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**callback** | **str** |  | [optional] 
**callback_err_cnt** | **int** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**enabled_on_store** | **bool** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.basket_live_shipping_service import BasketLiveShippingService

# TODO update the JSON string below
json = "{}"
# create an instance of BasketLiveShippingService from a JSON string
basket_live_shipping_service_instance = BasketLiveShippingService.from_json(json)
# print the JSON string representation of the object
print(BasketLiveShippingService.to_json())

# convert the object into a dict
basket_live_shipping_service_dict = basket_live_shipping_service_instance.to_dict()
# create an instance of BasketLiveShippingService from a dict
basket_live_shipping_service_from_dict = BasketLiveShippingService.from_dict(basket_live_shipping_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



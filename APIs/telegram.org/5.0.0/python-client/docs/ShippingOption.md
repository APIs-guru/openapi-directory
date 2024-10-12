# ShippingOption

This object represents one shipping option.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Shipping option identifier | 
**prices** | [**List[LabeledPrice]**](LabeledPrice.md) | List of price portions | 
**title** | **str** | Option title | 

## Example

```python
from openapi_client.models.shipping_option import ShippingOption

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingOption from a JSON string
shipping_option_instance = ShippingOption.from_json(json)
# print the JSON string representation of the object
print(ShippingOption.to_json())

# convert the object into a dict
shipping_option_dict = shipping_option_instance.to_dict()
# create an instance of ShippingOption from a dict
shipping_option_from_dict = ShippingOption.from_dict(shipping_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



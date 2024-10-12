# ShippingOptionsBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**models** | [**List[ModelPrint]**](ModelPrint.md) |  | [optional] 
**shipping_address** | [**ShippingAddress**](ShippingAddress.md) |  | [optional] 

## Example

```python
from openapi_client.models.shipping_options_body import ShippingOptionsBody

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingOptionsBody from a JSON string
shipping_options_body_instance = ShippingOptionsBody.from_json(json)
# print the JSON string representation of the object
print(ShippingOptionsBody.to_json())

# convert the object into a dict
shipping_options_body_dict = shipping_options_body_instance.to_dict()
# create an instance of ShippingOptionsBody from a dict
shipping_options_body_from_dict = ShippingOptionsBody.from_dict(shipping_options_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



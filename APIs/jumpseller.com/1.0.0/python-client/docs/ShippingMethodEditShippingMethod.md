# ShippingMethodEditShippingMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback_url** | **str** | URL that receives the shipping data and returns rates | [optional] 
**city** | **str** | City/Municipality name of origin | [optional] 
**fetch_services_url** | **str** | URL that returns available shipping services | [optional] 
**name** | **str** | Name of the Shipping Method | [optional] 
**postal** | **str** | Postal/Zipcode of origin | [optional] 
**state** | **str** | State/Region code of origin | [optional] 
**token** | **str** | Token used to authentica on the the fetch_services_url | [optional] 

## Example

```python
from openapi_client.models.shipping_method_edit_shipping_method import ShippingMethodEditShippingMethod

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingMethodEditShippingMethod from a JSON string
shipping_method_edit_shipping_method_instance = ShippingMethodEditShippingMethod.from_json(json)
# print the JSON string representation of the object
print(ShippingMethodEditShippingMethod.to_json())

# convert the object into a dict
shipping_method_edit_shipping_method_dict = shipping_method_edit_shipping_method_instance.to_dict()
# create an instance of ShippingMethodEditShippingMethod from a dict
shipping_method_edit_shipping_method_from_dict = ShippingMethodEditShippingMethod.from_dict(shipping_method_edit_shipping_method_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



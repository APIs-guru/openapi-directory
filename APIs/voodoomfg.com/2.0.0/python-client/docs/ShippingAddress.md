# ShippingAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** |  | [optional] 
**country** | **str** |  | [optional] 
**email** | **str** | Contact email address for the recipient. | [optional] 
**name** | **str** | Name of the recipient. | [optional] 
**state** | **str** |  | [optional] 
**street1** | **str** | First line of the street address. | [optional] 
**street2** | **str** | Second line of the street address (Apartment or Suite number, etc). Optional. | [optional] 
**zip** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.shipping_address import ShippingAddress

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingAddress from a JSON string
shipping_address_instance = ShippingAddress.from_json(json)
# print the JSON string representation of the object
print(ShippingAddress.to_json())

# convert the object into a dict
shipping_address_dict = shipping_address_instance.to_dict()
# create an instance of ShippingAddress from a dict
shipping_address_from_dict = ShippingAddress.from_dict(shipping_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



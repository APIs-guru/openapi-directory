# PartialShippingAddress

A complete or partial mailing address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instructions** | **str** | Additional text about how to handle the shipment at this address.  | [optional] 

## Example

```python
from openapi_client.models.partial_shipping_address import PartialShippingAddress

# TODO update the JSON string below
json = "{}"
# create an instance of PartialShippingAddress from a JSON string
partial_shipping_address_instance = PartialShippingAddress.from_json(json)
# print the JSON string representation of the object
print(PartialShippingAddress.to_json())

# convert the object into a dict
partial_shipping_address_dict = partial_shipping_address_instance.to_dict()
# create an instance of PartialShippingAddress from a dict
partial_shipping_address_from_dict = PartialShippingAddress.from_dict(partial_shipping_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ShippingInformation

Contains information about the Microsoft datacenter to which the drives should be shipped.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | The city name to use when returning the drives. | 
**country_or_region** | **str** | The country or region to use when returning the drives.  | 
**phone** | **str** | Phone number of the recipient of the returned drives. | [optional] 
**postal_code** | **str** | The postal code to use when returning the drives. | 
**recipient_name** | **str** | The name of the recipient who will receive the hard drives when they are returned.  | 
**state_or_province** | **str** | The state or province to use when returning the drives. | 
**street_address1** | **str** | The first line of the street address to use when returning the drives.  | 
**street_address2** | **str** | The second line of the street address to use when returning the drives.  | [optional] 

## Example

```python
from openapi_client.models.shipping_information import ShippingInformation

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingInformation from a JSON string
shipping_information_instance = ShippingInformation.from_json(json)
# print the JSON string representation of the object
print(ShippingInformation.to_json())

# convert the object into a dict
shipping_information_dict = shipping_information_instance.to_dict()
# create an instance of ShippingInformation from a dict
shipping_information_from_dict = ShippingInformation.from_dict(shipping_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



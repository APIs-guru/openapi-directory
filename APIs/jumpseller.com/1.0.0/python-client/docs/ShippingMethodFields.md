# ShippingMethodFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback_url** | **str** | URL that receives the shipping data and returns rates | [optional] 
**city** | **str** | City/Municipality name of origin | [optional] 
**fetch_services_url** | **str** | URL that returns available shipping services | [optional] 
**id** | **int** | Unique identifier of the Shipping Method | [optional] 
**name** | **str** | Name of the Shipping Method | [optional] 
**postal** | **str** | Postal/Zipcode of origin | [optional] 
**services** | [**List[ShippingService]**](ShippingService.md) |  | [optional] 
**state** | **str** | State/Region code of origin | [optional] 
**type** | **str** | Type of the Shipping Method | [optional] 

## Example

```python
from openapi_client.models.shipping_method_fields import ShippingMethodFields

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingMethodFields from a JSON string
shipping_method_fields_instance = ShippingMethodFields.from_json(json)
# print the JSON string representation of the object
print(ShippingMethodFields.to_json())

# convert the object into a dict
shipping_method_fields_dict = shipping_method_fields_instance.to_dict()
# create an instance of ShippingMethodFields from a dict
shipping_method_fields_from_dict = ShippingMethodFields.from_dict(shipping_method_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



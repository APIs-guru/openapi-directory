# ShippingService


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Unique identifier of the Shipping Service | [optional] 
**name** | **str** | Name of the Shipping Service | [optional] 
**service_code** | **str** | Code of the Shipping Service | [optional] 

## Example

```python
from openapi_client.models.shipping_service import ShippingService

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingService from a JSON string
shipping_service_instance = ShippingService.from_json(json)
# print the JSON string representation of the object
print(ShippingService.to_json())

# convert the object into a dict
shipping_service_dict = shipping_service_instance.to_dict()
# create an instance of ShippingService from a dict
shipping_service_from_dict = ShippingService.from_dict(shipping_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



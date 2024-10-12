# BillbeeInterfacesShippingProductService


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_be_configured** | **bool** |  | [optional] [readonly] 
**display_name** | **str** |  | [optional] [readonly] 
**display_value** | **str** |  | [optional] [readonly] 
**possible_value_lists** | [**List[SystemCollectionsGenericKeyValuePairSystemStringSystemCollectionsGenericListSystemCollectionsGenericKeyValuePairSystemInt32SystemString]**](SystemCollectionsGenericKeyValuePairSystemStringSystemCollectionsGenericListSystemCollectionsGenericKeyValuePairSystemInt32SystemString.md) |  | [optional] [readonly] 
**requires_user_input** | **bool** |  | [optional] [readonly] 
**service_name** | **str** |  | [optional] [readonly] 
**type_name** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.billbee_interfaces_shipping_product_service import BillbeeInterfacesShippingProductService

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesShippingProductService from a JSON string
billbee_interfaces_shipping_product_service_instance = BillbeeInterfacesShippingProductService.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesShippingProductService.to_json())

# convert the object into a dict
billbee_interfaces_shipping_product_service_dict = billbee_interfaces_shipping_product_service_instance.to_dict()
# create an instance of BillbeeInterfacesShippingProductService from a dict
billbee_interfaces_shipping_product_service_from_dict = BillbeeInterfacesShippingProductService.from_dict(billbee_interfaces_shipping_product_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



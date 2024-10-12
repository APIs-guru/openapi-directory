# RechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel

Data of the shipment to be created

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_id** | **int** | Optional the id of a shipping carrier that should be assigend to the shipment  Will override the carrier from the shipment product.  Please use the integer value from this Enumeration:  {Billbee.Interfaces.Shipping.Enums.ShippingCarrier} | [optional] 
**comment** | **str** | Optional a text stored with the shipment | [optional] 
**order_id** | **str** | Optional a differing order number of the shipment if available | [optional] 
**shipment_type** | **int** | 0 if Shipment, 1 if Retoure  {Billbee.Interfaces.Shipping.Enums.ShipmentTypeEnum} | [optional] 
**shipping_id** | **str** | The id of the shipment (Sendungsnummer/trackingid) | [optional] 
**shipping_provider_id** | **int** | Optional the id of a shipping provider existing in the billbee account that should be assigned to the shipment | [optional] 
**shipping_provider_product_id** | **int** | Optional the id of a shipping provider product that should be assigend to the shipment | [optional] 

## Example

```python
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_add_shipment_to_order_model import RechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel

# TODO update the JSON string below
json = "{}"
# create an instance of RechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel from a JSON string
rechnungsdruck_web_app_controllers_api_api_add_shipment_to_order_model_instance = RechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel.from_json(json)
# print the JSON string representation of the object
print(RechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel.to_json())

# convert the object into a dict
rechnungsdruck_web_app_controllers_api_api_add_shipment_to_order_model_dict = rechnungsdruck_web_app_controllers_api_api_add_shipment_to_order_model_instance.to_dict()
# create an instance of RechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel from a dict
rechnungsdruck_web_app_controllers_api_api_add_shipment_to_order_model_from_dict = RechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel.from_dict(rechnungsdruck_web_app_controllers_api_api_add_shipment_to_order_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



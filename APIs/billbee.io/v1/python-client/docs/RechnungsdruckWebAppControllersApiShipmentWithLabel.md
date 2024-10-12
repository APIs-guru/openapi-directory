# RechnungsdruckWebAppControllersApiShipmentWithLabel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change_state_to_send** | **bool** | Optional parameter to automatically change the orderstate to sent after creating the shipment | [optional] 
**client_reference** | **str** | Optional specify a reference text to be included on the label. Works not with all carriers | [optional] 
**dimension** | [**BillbeeInterfacesShippingShipmentDataDimensions**](BillbeeInterfacesShippingShipmentDataDimensions.md) |  | [optional] 
**order_id** | **int** | The Billbee internal id of the order to ship | [optional] 
**printer_name** | **str** | Optional the name of a connected cloudprinter to send the label to | [optional] 
**product_id** | **int** | the id of the shipping provider product to be used | [optional] 
**provider_id** | **int** | The id of the provider. You can query all providers with the shippingproviders endpoint | [optional] 
**ship_date** | **datetime** | Optional specify the shipdate to be transmitted to the carrier | [optional] 
**weight_in_gram** | **int** | Optional the shipments weight in gram to override the calculated weight | [optional] 

## Example

```python
from openapi_client.models.rechnungsdruck_web_app_controllers_api_shipment_with_label import RechnungsdruckWebAppControllersApiShipmentWithLabel

# TODO update the JSON string below
json = "{}"
# create an instance of RechnungsdruckWebAppControllersApiShipmentWithLabel from a JSON string
rechnungsdruck_web_app_controllers_api_shipment_with_label_instance = RechnungsdruckWebAppControllersApiShipmentWithLabel.from_json(json)
# print the JSON string representation of the object
print(RechnungsdruckWebAppControllersApiShipmentWithLabel.to_json())

# convert the object into a dict
rechnungsdruck_web_app_controllers_api_shipment_with_label_dict = rechnungsdruck_web_app_controllers_api_shipment_with_label_instance.to_dict()
# create an instance of RechnungsdruckWebAppControllersApiShipmentWithLabel from a dict
rechnungsdruck_web_app_controllers_api_shipment_with_label_from_dict = RechnungsdruckWebAppControllersApiShipmentWithLabel.from_dict(rechnungsdruck_web_app_controllers_api_shipment_with_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



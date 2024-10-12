# BillbeeInterfacesBillbeeAPIModelCreateShipmentApiModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_reference** | **str** | Optional specify a text to be included on the label. Not possible with all carriers | [optional] 
**content** | **str** | Optional specify a text describing the content of the shipment. Used for export shipments | [optional] 
**customer_number** | **str** | Not used anymore | [optional] 
**dimension** | [**BillbeeInterfacesShippingShipmentDataDimensions**](BillbeeInterfacesShippingShipmentDataDimensions.md) |  | [optional] 
**order_currency_code** | **str** | The Currency if the ordersum | [optional] 
**order_sum** | **float** | The value of the shipments content | [optional] 
**printer_id_for_export_docs** | **int** | The id of a connected Cloudprinter to sent the export docs to | [optional] 
**printer_name** | **str** | The name of a connected Cloudprinter to sent the label to | [optional] 
**product_code** | **str** | The productcode to be used when creating the shipment. Values depends on the carrier used | [optional] 
**provider_name** | **str** | The name of the provider as specified in the billbee account | [optional] 
**receiver_address** | [**BillbeeInterfacesBillbeeAPIModelShipmentAddressApiModel**](BillbeeInterfacesBillbeeAPIModelShipmentAddressApiModel.md) |  | [optional] 
**services** | [**List[BillbeeInterfacesShippingProductService]**](BillbeeInterfacesShippingProductService.md) | A list of services to be used when creating the shipment | [optional] 
**ship_date** | **datetime** | Optional overwrite the shipdate to be transferred to the carrier | [optional] 
**total_net** | **float** | The value of the shipments content (net) | [optional] 
**weight_in_gram** | **float** | Optional specify the weight in gram of the shipment | [optional] 
**shipping_carrier** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_billbee_api_model_create_shipment_api_model import BillbeeInterfacesBillbeeAPIModelCreateShipmentApiModel

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesBillbeeAPIModelCreateShipmentApiModel from a JSON string
billbee_interfaces_billbee_api_model_create_shipment_api_model_instance = BillbeeInterfacesBillbeeAPIModelCreateShipmentApiModel.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesBillbeeAPIModelCreateShipmentApiModel.to_json())

# convert the object into a dict
billbee_interfaces_billbee_api_model_create_shipment_api_model_dict = billbee_interfaces_billbee_api_model_create_shipment_api_model_instance.to_dict()
# create an instance of BillbeeInterfacesBillbeeAPIModelCreateShipmentApiModel from a dict
billbee_interfaces_billbee_api_model_create_shipment_api_model_from_dict = BillbeeInterfacesBillbeeAPIModelCreateShipmentApiModel.from_dict(billbee_interfaces_billbee_api_model_create_shipment_api_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



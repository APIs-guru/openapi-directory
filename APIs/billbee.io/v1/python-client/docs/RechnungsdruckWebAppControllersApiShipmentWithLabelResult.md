# RechnungsdruckWebAppControllersApiShipmentWithLabelResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier** | **str** |  | [optional] 
**export_docs_pdf** | **bytearray** |  | [optional] 
**label_data_pdf** | **bytearray** |  | [optional] 
**order_id** | **int** |  | [optional] 
**order_reference** | **str** |  | [optional] 
**shipping_date** | **datetime** |  | [optional] 
**shipping_id** | **str** |  | [optional] 
**tracking_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.rechnungsdruck_web_app_controllers_api_shipment_with_label_result import RechnungsdruckWebAppControllersApiShipmentWithLabelResult

# TODO update the JSON string below
json = "{}"
# create an instance of RechnungsdruckWebAppControllersApiShipmentWithLabelResult from a JSON string
rechnungsdruck_web_app_controllers_api_shipment_with_label_result_instance = RechnungsdruckWebAppControllersApiShipmentWithLabelResult.from_json(json)
# print the JSON string representation of the object
print(RechnungsdruckWebAppControllersApiShipmentWithLabelResult.to_json())

# convert the object into a dict
rechnungsdruck_web_app_controllers_api_shipment_with_label_result_dict = rechnungsdruck_web_app_controllers_api_shipment_with_label_result_instance.to_dict()
# create an instance of RechnungsdruckWebAppControllersApiShipmentWithLabelResult from a dict
rechnungsdruck_web_app_controllers_api_shipment_with_label_result_from_dict = RechnungsdruckWebAppControllersApiShipmentWithLabelResult.from_dict(rechnungsdruck_web_app_controllers_api_shipment_with_label_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



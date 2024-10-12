# PurchaseLabelWithoutShipment

A purchase label without shipment resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_scheme** | [**DisplayScheme**](DisplayScheme.md) | The display format that the label should be shown in. | [optional] 
**label_download_type** | [**LabelDownloadType**](LabelDownloadType.md) |  | [optional] 
**label_format** | [**LabelFormat**](LabelFormat.md) |  | [optional] 
**label_layout** | [**LabelLayout**](LabelLayout.md) |  | [optional] 
**validate_address** | [**ValidateAddress**](ValidateAddress.md) |  | [optional] 

## Example

```python
from openapi_client.models.purchase_label_without_shipment import PurchaseLabelWithoutShipment

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseLabelWithoutShipment from a JSON string
purchase_label_without_shipment_instance = PurchaseLabelWithoutShipment.from_json(json)
# print the JSON string representation of the object
print(PurchaseLabelWithoutShipment.to_json())

# convert the object into a dict
purchase_label_without_shipment_dict = purchase_label_without_shipment_instance.to_dict()
# create an instance of PurchaseLabelWithoutShipment from a dict
purchase_label_without_shipment_from_dict = PurchaseLabelWithoutShipment.from_dict(purchase_label_without_shipment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



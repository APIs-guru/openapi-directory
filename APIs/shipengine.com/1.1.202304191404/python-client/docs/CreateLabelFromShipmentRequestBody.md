# CreateLabelFromShipmentRequestBody

A purchase label without shipment request body

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
from openapi_client.models.create_label_from_shipment_request_body import CreateLabelFromShipmentRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of CreateLabelFromShipmentRequestBody from a JSON string
create_label_from_shipment_request_body_instance = CreateLabelFromShipmentRequestBody.from_json(json)
# print the JSON string representation of the object
print(CreateLabelFromShipmentRequestBody.to_json())

# convert the object into a dict
create_label_from_shipment_request_body_dict = create_label_from_shipment_request_body_instance.to_dict()
# create an instance of CreateLabelFromShipmentRequestBody from a dict
create_label_from_shipment_request_body_from_dict = CreateLabelFromShipmentRequestBody.from_dict(create_label_from_shipment_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



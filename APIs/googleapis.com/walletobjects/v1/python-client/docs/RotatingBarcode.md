# RotatingBarcode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_text** | **str** | An optional text that will override the default text that shows under the barcode. This field is intended for a human readable equivalent of the barcode value, used when the barcode cannot be scanned. | [optional] 
**initial_rotating_barcode_values** | [**RotatingBarcodeValues**](RotatingBarcodeValues.md) |  | [optional] 
**render_encoding** | **str** | The render encoding for the barcode. When specified, barcode is rendered in the given encoding. Otherwise best known encoding is chosen by Google. | [optional] 
**show_code_text** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**totp_details** | [**RotatingBarcodeTotpDetails**](RotatingBarcodeTotpDetails.md) |  | [optional] 
**type** | **str** | The type of this barcode. | [optional] 
**value_pattern** | **str** | String encoded barcode value. This string supports the following substitutions: * {totp_value_n}: Replaced with the TOTP value (see TotpDetails.parameters). * {totp_timestamp_millis}: Replaced with the timestamp (millis since epoch) at which the barcode was generated. * {totp_timestamp_seconds}: Replaced with the timestamp (seconds since epoch) at which the barcode was generated. | [optional] 

## Example

```python
from openapi_client.models.rotating_barcode import RotatingBarcode

# TODO update the JSON string below
json = "{}"
# create an instance of RotatingBarcode from a JSON string
rotating_barcode_instance = RotatingBarcode.from_json(json)
# print the JSON string representation of the object
print(RotatingBarcode.to_json())

# convert the object into a dict
rotating_barcode_dict = rotating_barcode_instance.to_dict()
# create an instance of RotatingBarcode from a dict
rotating_barcode_from_dict = RotatingBarcode.from_dict(rotating_barcode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RotatingBarcodeTotpDetailsTotpParameters

Configuration for the key and value length. See https://www.rfc-editor.org/rfc/rfc4226#section-5.3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The secret key used for the TOTP value generation, encoded as a Base16 string. | [optional] 
**value_length** | **int** | The length of the TOTP value in decimal digits. | [optional] 

## Example

```python
from openapi_client.models.rotating_barcode_totp_details_totp_parameters import RotatingBarcodeTotpDetailsTotpParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RotatingBarcodeTotpDetailsTotpParameters from a JSON string
rotating_barcode_totp_details_totp_parameters_instance = RotatingBarcodeTotpDetailsTotpParameters.from_json(json)
# print the JSON string representation of the object
print(RotatingBarcodeTotpDetailsTotpParameters.to_json())

# convert the object into a dict
rotating_barcode_totp_details_totp_parameters_dict = rotating_barcode_totp_details_totp_parameters_instance.to_dict()
# create an instance of RotatingBarcodeTotpDetailsTotpParameters from a dict
rotating_barcode_totp_details_totp_parameters_from_dict = RotatingBarcodeTotpDetailsTotpParameters.from_dict(rotating_barcode_totp_details_totp_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



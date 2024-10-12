# RotatingBarcodeTotpDetails

Configuration for the time-based OTP substitutions. See https://tools.ietf.org/html/rfc6238

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | The TOTP algorithm used to generate the OTP. | [optional] 
**parameters** | [**List[RotatingBarcodeTotpDetailsTotpParameters]**](RotatingBarcodeTotpDetailsTotpParameters.md) | The TOTP parameters for each of the {totp_value_*} substitutions. The TotpParameters at index n is used for the {totp_value_n} substitution. | [optional] 
**period_millis** | **str** | The time interval used for the TOTP value generation, in milliseconds. | [optional] 

## Example

```python
from openapi_client.models.rotating_barcode_totp_details import RotatingBarcodeTotpDetails

# TODO update the JSON string below
json = "{}"
# create an instance of RotatingBarcodeTotpDetails from a JSON string
rotating_barcode_totp_details_instance = RotatingBarcodeTotpDetails.from_json(json)
# print the JSON string representation of the object
print(RotatingBarcodeTotpDetails.to_json())

# convert the object into a dict
rotating_barcode_totp_details_dict = rotating_barcode_totp_details_instance.to_dict()
# create an instance of RotatingBarcodeTotpDetails from a dict
rotating_barcode_totp_details_from_dict = RotatingBarcodeTotpDetails.from_dict(rotating_barcode_totp_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



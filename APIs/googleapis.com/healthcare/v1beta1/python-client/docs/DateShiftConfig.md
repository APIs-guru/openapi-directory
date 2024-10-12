# DateShiftConfig

Shift a date forward or backward in time by a random amount which is consistent for a given patient and crypto key combination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crypto_key** | **bytearray** | An AES 128/192/256 bit key. The date shift is computed based on this key and the patient ID. If the patient ID is empty for a DICOM resource, the date shift is computed based on this key and the study instance UID. If crypto_key is not set, then kms_wrapped is used to calculate the date shift. If neither is set, a default key is generated for each de-identify operation. Must not be set if kms_wrapped is set. | [optional] 
**kms_wrapped** | [**KmsWrappedCryptoKey**](KmsWrappedCryptoKey.md) |  | [optional] 

## Example

```python
from openapi_client.models.date_shift_config import DateShiftConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DateShiftConfig from a JSON string
date_shift_config_instance = DateShiftConfig.from_json(json)
# print the JSON string representation of the object
print(DateShiftConfig.to_json())

# convert the object into a dict
date_shift_config_dict = date_shift_config_instance.to_dict()
# create an instance of DateShiftConfig from a dict
date_shift_config_from_dict = DateShiftConfig.from_dict(date_shift_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



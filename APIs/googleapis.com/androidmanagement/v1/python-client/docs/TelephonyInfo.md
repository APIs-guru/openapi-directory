# TelephonyInfo

Telephony information associated with a given SIM card on the device. Only supported on fully managed devices starting from Android API level 23.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_name** | **str** | The carrier name associated with this SIM card. | [optional] 
**phone_number** | **str** | The phone number associated with this SIM card. | [optional] 

## Example

```python
from openapi_client.models.telephony_info import TelephonyInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TelephonyInfo from a JSON string
telephony_info_instance = TelephonyInfo.from_json(json)
# print the JSON string representation of the object
print(TelephonyInfo.to_json())

# convert the object into a dict
telephony_info_dict = telephony_info_instance.to_dict()
# create an instance of TelephonyInfo from a dict
telephony_info_from_dict = TelephonyInfo.from_dict(telephony_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



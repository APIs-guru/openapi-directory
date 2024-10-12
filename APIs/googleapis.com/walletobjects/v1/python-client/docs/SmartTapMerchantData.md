# SmartTapMerchantData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication_keys** | [**List[AuthenticationKey]**](AuthenticationKey.md) | Available only to Smart Tap enabled partners. Contact support for additional guidance. | [optional] 
**smart_tap_merchant_id** | **str** | Available only to Smart Tap enabled partners. Contact support for additional guidance. | [optional] 

## Example

```python
from openapi_client.models.smart_tap_merchant_data import SmartTapMerchantData

# TODO update the JSON string below
json = "{}"
# create an instance of SmartTapMerchantData from a JSON string
smart_tap_merchant_data_instance = SmartTapMerchantData.from_json(json)
# print the JSON string representation of the object
print(SmartTapMerchantData.to_json())

# convert the object into a dict
smart_tap_merchant_data_dict = smart_tap_merchant_data_instance.to_dict()
# create an instance of SmartTapMerchantData from a dict
smart_tap_merchant_data_from_dict = SmartTapMerchantData.from_dict(smart_tap_merchant_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



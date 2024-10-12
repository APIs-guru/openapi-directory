# DoubleVerifyFraudInvalidTraffic

DoubleVerify Fraud & Invalid Traffic settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avoid_insufficient_option** | **bool** | Insufficient Historical Fraud &amp; IVT Stats. | [optional] 
**avoided_fraud_option** | **str** | Avoid Sites and Apps with historical Fraud &amp; IVT. | [optional] 

## Example

```python
from openapi_client.models.double_verify_fraud_invalid_traffic import DoubleVerifyFraudInvalidTraffic

# TODO update the JSON string below
json = "{}"
# create an instance of DoubleVerifyFraudInvalidTraffic from a JSON string
double_verify_fraud_invalid_traffic_instance = DoubleVerifyFraudInvalidTraffic.from_json(json)
# print the JSON string representation of the object
print(DoubleVerifyFraudInvalidTraffic.to_json())

# convert the object into a dict
double_verify_fraud_invalid_traffic_dict = double_verify_fraud_invalid_traffic_instance.to_dict()
# create an instance of DoubleVerifyFraudInvalidTraffic from a dict
double_verify_fraud_invalid_traffic_from_dict = DoubleVerifyFraudInvalidTraffic.from_dict(double_verify_fraud_invalid_traffic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



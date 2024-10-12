# X12OneWayAgreement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protocol_settings** | [**X12ProtocolSettings**](X12ProtocolSettings.md) |  | [optional] 
**receiver_business_identity** | [**BusinessIdentity**](BusinessIdentity.md) |  | [optional] 
**sender_business_identity** | [**BusinessIdentity**](BusinessIdentity.md) |  | [optional] 

## Example

```python
from openapi_client.models.x12_one_way_agreement import X12OneWayAgreement

# TODO update the JSON string below
json = "{}"
# create an instance of X12OneWayAgreement from a JSON string
x12_one_way_agreement_instance = X12OneWayAgreement.from_json(json)
# print the JSON string representation of the object
print(X12OneWayAgreement.to_json())

# convert the object into a dict
x12_one_way_agreement_dict = x12_one_way_agreement_instance.to_dict()
# create an instance of X12OneWayAgreement from a dict
x12_one_way_agreement_from_dict = X12OneWayAgreement.from_dict(x12_one_way_agreement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



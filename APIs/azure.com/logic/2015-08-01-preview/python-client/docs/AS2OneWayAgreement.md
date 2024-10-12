# AS2OneWayAgreement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protocol_settings** | [**AS2ProtocolSettings**](AS2ProtocolSettings.md) |  | [optional] 
**receiver_business_identity** | [**BusinessIdentity**](BusinessIdentity.md) |  | [optional] 
**sender_business_identity** | [**BusinessIdentity**](BusinessIdentity.md) |  | [optional] 

## Example

```python
from openapi_client.models.as2_one_way_agreement import AS2OneWayAgreement

# TODO update the JSON string below
json = "{}"
# create an instance of AS2OneWayAgreement from a JSON string
as2_one_way_agreement_instance = AS2OneWayAgreement.from_json(json)
# print the JSON string representation of the object
print(AS2OneWayAgreement.to_json())

# convert the object into a dict
as2_one_way_agreement_dict = as2_one_way_agreement_instance.to_dict()
# create an instance of AS2OneWayAgreement from a dict
as2_one_way_agreement_from_dict = AS2OneWayAgreement.from_dict(as2_one_way_agreement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



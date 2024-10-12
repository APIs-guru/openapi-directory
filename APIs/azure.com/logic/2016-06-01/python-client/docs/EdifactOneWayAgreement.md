# EdifactOneWayAgreement

The Edifact one way agreement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protocol_settings** | [**EdifactProtocolSettings**](EdifactProtocolSettings.md) |  | 
**receiver_business_identity** | [**BusinessIdentity**](BusinessIdentity.md) |  | 
**sender_business_identity** | [**BusinessIdentity**](BusinessIdentity.md) |  | 

## Example

```python
from openapi_client.models.edifact_one_way_agreement import EdifactOneWayAgreement

# TODO update the JSON string below
json = "{}"
# create an instance of EdifactOneWayAgreement from a JSON string
edifact_one_way_agreement_instance = EdifactOneWayAgreement.from_json(json)
# print the JSON string representation of the object
print(EdifactOneWayAgreement.to_json())

# convert the object into a dict
edifact_one_way_agreement_dict = edifact_one_way_agreement_instance.to_dict()
# create an instance of EdifactOneWayAgreement from a dict
edifact_one_way_agreement_from_dict = EdifactOneWayAgreement.from_dict(edifact_one_way_agreement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



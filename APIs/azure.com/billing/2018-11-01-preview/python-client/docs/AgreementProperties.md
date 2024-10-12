# AgreementProperties

The properties of the agreement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agreement_link** | **str** | The link to the agreement. | [optional] [readonly] 
**effective_date** | **datetime** | Effective date. | [optional] [readonly] 
**expiration_date** | **datetime** | Expiration date. | [optional] [readonly] 
**participants** | [**List[Participants]**](Participants.md) | Participants or signer of the agreement. | [optional] 
**status** | **str** | The agreement status | [optional] [readonly] 

## Example

```python
from openapi_client.models.agreement_properties import AgreementProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AgreementProperties from a JSON string
agreement_properties_instance = AgreementProperties.from_json(json)
# print the JSON string representation of the object
print(AgreementProperties.to_json())

# convert the object into a dict
agreement_properties_dict = agreement_properties_instance.to_dict()
# create an instance of AgreementProperties from a dict
agreement_properties_from_dict = AgreementProperties.from_dict(agreement_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



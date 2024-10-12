# TldLegalAgreement

Legal agreement for a top level domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agreement_key** | **str** | Unique identifier for the agreement. | 
**content** | **str** | Agreement details. | 
**title** | **str** | Agreement title. | 
**url** | **str** | URL where a copy of the agreement details is hosted. | [optional] 

## Example

```python
from openapi_client.models.tld_legal_agreement import TldLegalAgreement

# TODO update the JSON string below
json = "{}"
# create an instance of TldLegalAgreement from a JSON string
tld_legal_agreement_instance = TldLegalAgreement.from_json(json)
# print the JSON string representation of the object
print(TldLegalAgreement.to_json())

# convert the object into a dict
tld_legal_agreement_dict = tld_legal_agreement_instance.to_dict()
# create an instance of TldLegalAgreement from a dict
tld_legal_agreement_from_dict = TldLegalAgreement.from_dict(tld_legal_agreement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



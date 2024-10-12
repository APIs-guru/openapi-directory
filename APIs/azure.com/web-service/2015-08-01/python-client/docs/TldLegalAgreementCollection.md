# TldLegalAgreementCollection

Collection of Tld Legal Agreements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources | [optional] 
**value** | [**List[TldLegalAgreement]**](TldLegalAgreement.md) | Collection of resources | [optional] 

## Example

```python
from openapi_client.models.tld_legal_agreement_collection import TldLegalAgreementCollection

# TODO update the JSON string below
json = "{}"
# create an instance of TldLegalAgreementCollection from a JSON string
tld_legal_agreement_collection_instance = TldLegalAgreementCollection.from_json(json)
# print the JSON string representation of the object
print(TldLegalAgreementCollection.to_json())

# convert the object into a dict
tld_legal_agreement_collection_dict = tld_legal_agreement_collection_instance.to_dict()
# create an instance of TldLegalAgreementCollection from a dict
tld_legal_agreement_collection_from_dict = TldLegalAgreementCollection.from_dict(tld_legal_agreement_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AgreementTerms

Terms properties for provided Publisher/Offer/Plan tuple

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AgreementProperties**](AgreementProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.agreement_terms import AgreementTerms

# TODO update the JSON string below
json = "{}"
# create an instance of AgreementTerms from a JSON string
agreement_terms_instance = AgreementTerms.from_json(json)
# print the JSON string representation of the object
print(AgreementTerms.to_json())

# convert the object into a dict
agreement_terms_dict = agreement_terms_instance.to_dict()
# create an instance of AgreementTerms from a dict
agreement_terms_from_dict = AgreementTerms.from_dict(agreement_terms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



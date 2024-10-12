# PII

Personal Identifier Information details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**List[Address]**](Address.md) |  | [optional] 
**email** | [**List[Email]**](Email.md) |  | [optional] 
**ipa** | [**List[IPA]**](IPA.md) |  | [optional] 
**phone** | [**List[Phone]**](Phone.md) |  | [optional] 
**ssn** | [**List[SSN]**](SSN.md) |  | [optional] 

## Example

```python
from openapi_client.models.pii import PII

# TODO update the JSON string below
json = "{}"
# create an instance of PII from a JSON string
pii_instance = PII.from_json(json)
# print the JSON string representation of the object
print(PII.to_json())

# convert the object into a dict
pii_dict = pii_instance.to_dict()
# create an instance of PII from a dict
pii_from_dict = PII.from_dict(pii_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



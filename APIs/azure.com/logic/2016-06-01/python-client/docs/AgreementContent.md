# AgreementContent

The integration account agreement content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**a_s2** | [**AS2AgreementContent**](AS2AgreementContent.md) |  | [optional] 
**edifact** | [**EdifactAgreementContent**](EdifactAgreementContent.md) |  | [optional] 
**x12** | [**X12AgreementContent**](X12AgreementContent.md) |  | [optional] 

## Example

```python
from openapi_client.models.agreement_content import AgreementContent

# TODO update the JSON string below
json = "{}"
# create an instance of AgreementContent from a JSON string
agreement_content_instance = AgreementContent.from_json(json)
# print the JSON string representation of the object
print(AgreementContent.to_json())

# convert the object into a dict
agreement_content_dict = agreement_content_instance.to_dict()
# create an instance of AgreementContent from a dict
agreement_content_from_dict = AgreementContent.from_dict(agreement_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



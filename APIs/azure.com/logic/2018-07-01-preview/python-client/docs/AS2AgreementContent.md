# AS2AgreementContent

The integration account AS2 agreement content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**receive_agreement** | [**AS2OneWayAgreement**](AS2OneWayAgreement.md) |  | 
**send_agreement** | [**AS2OneWayAgreement**](AS2OneWayAgreement.md) |  | 

## Example

```python
from openapi_client.models.as2_agreement_content import AS2AgreementContent

# TODO update the JSON string below
json = "{}"
# create an instance of AS2AgreementContent from a JSON string
as2_agreement_content_instance = AS2AgreementContent.from_json(json)
# print the JSON string representation of the object
print(AS2AgreementContent.to_json())

# convert the object into a dict
as2_agreement_content_dict = as2_agreement_content_instance.to_dict()
# create an instance of AS2AgreementContent from a dict
as2_agreement_content_from_dict = AS2AgreementContent.from_dict(as2_agreement_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



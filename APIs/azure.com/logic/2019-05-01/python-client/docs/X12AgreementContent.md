# X12AgreementContent

The X12 agreement content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**receive_agreement** | [**X12OneWayAgreement**](X12OneWayAgreement.md) |  | 
**send_agreement** | [**X12OneWayAgreement**](X12OneWayAgreement.md) |  | 

## Example

```python
from openapi_client.models.x12_agreement_content import X12AgreementContent

# TODO update the JSON string below
json = "{}"
# create an instance of X12AgreementContent from a JSON string
x12_agreement_content_instance = X12AgreementContent.from_json(json)
# print the JSON string representation of the object
print(X12AgreementContent.to_json())

# convert the object into a dict
x12_agreement_content_dict = x12_agreement_content_instance.to_dict()
# create an instance of X12AgreementContent from a dict
x12_agreement_content_from_dict = X12AgreementContent.from_dict(x12_agreement_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



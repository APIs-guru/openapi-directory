# EdifactAgreementContent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**receive_agreement** | [**EdifactOneWayAgreement**](EdifactOneWayAgreement.md) |  | [optional] 
**send_agreement** | [**EdifactOneWayAgreement**](EdifactOneWayAgreement.md) |  | [optional] 

## Example

```python
from openapi_client.models.edifact_agreement_content import EdifactAgreementContent

# TODO update the JSON string below
json = "{}"
# create an instance of EdifactAgreementContent from a JSON string
edifact_agreement_content_instance = EdifactAgreementContent.from_json(json)
# print the JSON string representation of the object
print(EdifactAgreementContent.to_json())

# convert the object into a dict
edifact_agreement_content_dict = edifact_agreement_content_instance.to_dict()
# create an instance of EdifactAgreementContent from a dict
edifact_agreement_content_from_dict = EdifactAgreementContent.from_dict(edifact_agreement_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



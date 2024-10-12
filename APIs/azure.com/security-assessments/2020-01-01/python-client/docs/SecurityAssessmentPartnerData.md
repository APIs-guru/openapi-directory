# SecurityAssessmentPartnerData

Data regarding 3rd party partner integration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret** | **str** | secret to authenticate the partner - write only | [optional] 

## Example

```python
from openapi_client.models.security_assessment_partner_data import SecurityAssessmentPartnerData

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityAssessmentPartnerData from a JSON string
security_assessment_partner_data_instance = SecurityAssessmentPartnerData.from_json(json)
# print the JSON string representation of the object
print(SecurityAssessmentPartnerData.to_json())

# convert the object into a dict
security_assessment_partner_data_dict = security_assessment_partner_data_instance.to_dict()
# create an instance of SecurityAssessmentPartnerData from a dict
security_assessment_partner_data_from_dict = SecurityAssessmentPartnerData.from_dict(security_assessment_partner_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



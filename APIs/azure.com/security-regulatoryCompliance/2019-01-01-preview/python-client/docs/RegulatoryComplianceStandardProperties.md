# RegulatoryComplianceStandardProperties

Regulatory compliance standard data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed_controls** | **int** | The number of supported regulatory compliance controls of the given standard with a failed state | [optional] [readonly] 
**passed_controls** | **int** | The number of supported regulatory compliance controls of the given standard with a passed state | [optional] [readonly] 
**skipped_controls** | **int** | The number of supported regulatory compliance controls of the given standard with a skipped state | [optional] [readonly] 
**state** | **str** | Aggregative state based on the standard&#39;s supported controls states | [optional] 
**unsupported_controls** | **int** | The number of regulatory compliance controls of the given standard which are unsupported by automated assessments | [optional] [readonly] 

## Example

```python
from openapi_client.models.regulatory_compliance_standard_properties import RegulatoryComplianceStandardProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RegulatoryComplianceStandardProperties from a JSON string
regulatory_compliance_standard_properties_instance = RegulatoryComplianceStandardProperties.from_json(json)
# print the JSON string representation of the object
print(RegulatoryComplianceStandardProperties.to_json())

# convert the object into a dict
regulatory_compliance_standard_properties_dict = regulatory_compliance_standard_properties_instance.to_dict()
# create an instance of RegulatoryComplianceStandardProperties from a dict
regulatory_compliance_standard_properties_from_dict = RegulatoryComplianceStandardProperties.from_dict(regulatory_compliance_standard_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RegulatoryComplianceControlProperties

Regulatory compliance control data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the regulatory compliance control | [optional] [readonly] 
**failed_assessments** | **int** | The number of supported regulatory compliance assessments of the given control with a failed state | [optional] [readonly] 
**passed_assessments** | **int** | The number of supported regulatory compliance assessments of the given control with a passed state | [optional] [readonly] 
**skipped_assessments** | **int** | The number of supported regulatory compliance assessments of the given control with a skipped state | [optional] [readonly] 
**state** | **str** | Aggregative state based on the control&#39;s supported assessments states | [optional] 

## Example

```python
from openapi_client.models.regulatory_compliance_control_properties import RegulatoryComplianceControlProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RegulatoryComplianceControlProperties from a JSON string
regulatory_compliance_control_properties_instance = RegulatoryComplianceControlProperties.from_json(json)
# print the JSON string representation of the object
print(RegulatoryComplianceControlProperties.to_json())

# convert the object into a dict
regulatory_compliance_control_properties_dict = regulatory_compliance_control_properties_instance.to_dict()
# create an instance of RegulatoryComplianceControlProperties from a dict
regulatory_compliance_control_properties_from_dict = RegulatoryComplianceControlProperties.from_dict(regulatory_compliance_control_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



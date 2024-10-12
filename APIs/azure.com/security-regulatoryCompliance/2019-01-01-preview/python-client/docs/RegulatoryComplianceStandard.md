# RegulatoryComplianceStandard

Regulatory compliance standard details and state

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RegulatoryComplianceStandardProperties**](RegulatoryComplianceStandardProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.regulatory_compliance_standard import RegulatoryComplianceStandard

# TODO update the JSON string below
json = "{}"
# create an instance of RegulatoryComplianceStandard from a JSON string
regulatory_compliance_standard_instance = RegulatoryComplianceStandard.from_json(json)
# print the JSON string representation of the object
print(RegulatoryComplianceStandard.to_json())

# convert the object into a dict
regulatory_compliance_standard_dict = regulatory_compliance_standard_instance.to_dict()
# create an instance of RegulatoryComplianceStandard from a dict
regulatory_compliance_standard_from_dict = RegulatoryComplianceStandard.from_dict(regulatory_compliance_standard_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



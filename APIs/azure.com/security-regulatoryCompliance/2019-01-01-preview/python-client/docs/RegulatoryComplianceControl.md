# RegulatoryComplianceControl

Regulatory compliance control details and state

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RegulatoryComplianceControlProperties**](RegulatoryComplianceControlProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.regulatory_compliance_control import RegulatoryComplianceControl

# TODO update the JSON string below
json = "{}"
# create an instance of RegulatoryComplianceControl from a JSON string
regulatory_compliance_control_instance = RegulatoryComplianceControl.from_json(json)
# print the JSON string representation of the object
print(RegulatoryComplianceControl.to_json())

# convert the object into a dict
regulatory_compliance_control_dict = regulatory_compliance_control_instance.to_dict()
# create an instance of RegulatoryComplianceControl from a dict
regulatory_compliance_control_from_dict = RegulatoryComplianceControl.from_dict(regulatory_compliance_control_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



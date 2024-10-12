# RegulatoryComplianceStandardsListDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**RegulatoryComplianceStandardsListDefaultResponseError**](RegulatoryComplianceStandardsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.regulatory_compliance_standards_list_default_response import RegulatoryComplianceStandardsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RegulatoryComplianceStandardsListDefaultResponse from a JSON string
regulatory_compliance_standards_list_default_response_instance = RegulatoryComplianceStandardsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(RegulatoryComplianceStandardsListDefaultResponse.to_json())

# convert the object into a dict
regulatory_compliance_standards_list_default_response_dict = regulatory_compliance_standards_list_default_response_instance.to_dict()
# create an instance of RegulatoryComplianceStandardsListDefaultResponse from a dict
regulatory_compliance_standards_list_default_response_from_dict = RegulatoryComplianceStandardsListDefaultResponse.from_dict(regulatory_compliance_standards_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



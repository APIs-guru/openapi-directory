# RegulatoryComplianceStandardList

List of regulatory compliance standards response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[RegulatoryComplianceStandard]**](RegulatoryComplianceStandard.md) |  | 

## Example

```python
from openapi_client.models.regulatory_compliance_standard_list import RegulatoryComplianceStandardList

# TODO update the JSON string below
json = "{}"
# create an instance of RegulatoryComplianceStandardList from a JSON string
regulatory_compliance_standard_list_instance = RegulatoryComplianceStandardList.from_json(json)
# print the JSON string representation of the object
print(RegulatoryComplianceStandardList.to_json())

# convert the object into a dict
regulatory_compliance_standard_list_dict = regulatory_compliance_standard_list_instance.to_dict()
# create an instance of RegulatoryComplianceStandardList from a dict
regulatory_compliance_standard_list_from_dict = RegulatoryComplianceStandardList.from_dict(regulatory_compliance_standard_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



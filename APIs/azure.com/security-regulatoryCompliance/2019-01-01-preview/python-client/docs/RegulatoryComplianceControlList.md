# RegulatoryComplianceControlList

List of regulatory compliance controls response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[RegulatoryComplianceControl]**](RegulatoryComplianceControl.md) | List of regulatory compliance controls | 

## Example

```python
from openapi_client.models.regulatory_compliance_control_list import RegulatoryComplianceControlList

# TODO update the JSON string below
json = "{}"
# create an instance of RegulatoryComplianceControlList from a JSON string
regulatory_compliance_control_list_instance = RegulatoryComplianceControlList.from_json(json)
# print the JSON string representation of the object
print(RegulatoryComplianceControlList.to_json())

# convert the object into a dict
regulatory_compliance_control_list_dict = regulatory_compliance_control_list_instance.to_dict()
# create an instance of RegulatoryComplianceControlList from a dict
regulatory_compliance_control_list_from_dict = RegulatoryComplianceControlList.from_dict(regulatory_compliance_control_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



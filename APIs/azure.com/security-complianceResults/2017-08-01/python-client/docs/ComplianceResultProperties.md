# ComplianceResultProperties

Compliance result data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_status** | **str** | The status of the resource regarding a single assessment | [optional] [readonly] 

## Example

```python
from openapi_client.models.compliance_result_properties import ComplianceResultProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceResultProperties from a JSON string
compliance_result_properties_instance = ComplianceResultProperties.from_json(json)
# print the JSON string representation of the object
print(ComplianceResultProperties.to_json())

# convert the object into a dict
compliance_result_properties_dict = compliance_result_properties_instance.to_dict()
# create an instance of ComplianceResultProperties from a dict
compliance_result_properties_from_dict = ComplianceResultProperties.from_dict(compliance_result_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



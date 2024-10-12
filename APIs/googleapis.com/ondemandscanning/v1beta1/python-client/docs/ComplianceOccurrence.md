# ComplianceOccurrence

An indication that the compliance checks in the associated ComplianceNote were not satisfied for particular resources or a specified reason.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**non_compliance_reason** | **str** |  | [optional] 
**non_compliant_files** | [**List[NonCompliantFile]**](NonCompliantFile.md) |  | [optional] 

## Example

```python
from openapi_client.models.compliance_occurrence import ComplianceOccurrence

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceOccurrence from a JSON string
compliance_occurrence_instance = ComplianceOccurrence.from_json(json)
# print the JSON string representation of the object
print(ComplianceOccurrence.to_json())

# convert the object into a dict
compliance_occurrence_dict = compliance_occurrence_instance.to_dict()
# create an instance of ComplianceOccurrence from a dict
compliance_occurrence_from_dict = ComplianceOccurrence.from_dict(compliance_occurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



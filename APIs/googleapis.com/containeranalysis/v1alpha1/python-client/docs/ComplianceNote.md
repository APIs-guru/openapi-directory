# ComplianceNote

ComplianceNote encapsulates all information about a specific compliance check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cis_benchmark** | [**CisBenchmark**](CisBenchmark.md) |  | [optional] 
**description** | **str** | A description about this compliance check. | [optional] 
**rationale** | **str** | A rationale for the existence of this compliance check. | [optional] 
**remediation** | **str** | A description of remediation steps if the compliance check fails. | [optional] 
**scan_instructions** | **bytearray** | Serialized scan instructions with a predefined format. | [optional] 
**title** | **str** | The title that identifies this compliance check. | [optional] 
**version** | [**List[ComplianceVersion]**](ComplianceVersion.md) | The OS and config versions the benchmark applies to. | [optional] 

## Example

```python
from openapi_client.models.compliance_note import ComplianceNote

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceNote from a JSON string
compliance_note_instance = ComplianceNote.from_json(json)
# print the JSON string representation of the object
print(ComplianceNote.to_json())

# convert the object into a dict
compliance_note_dict = compliance_note_instance.to_dict()
# create an instance of ComplianceNote from a dict
compliance_note_from_dict = ComplianceNote.from_dict(compliance_note_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ComplianceSegment

A segment of a compliance assessment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percentage** | **float** | The size (%) of the segment. | [optional] [readonly] 
**segment_type** | **str** | The segment type, e.g. compliant, non-compliance, insufficient coverage, N/A, etc. | [optional] [readonly] 

## Example

```python
from openapi_client.models.compliance_segment import ComplianceSegment

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceSegment from a JSON string
compliance_segment_instance = ComplianceSegment.from_json(json)
# print the JSON string representation of the object
print(ComplianceSegment.to_json())

# convert the object into a dict
compliance_segment_dict = compliance_segment_instance.to_dict()
# create an instance of ComplianceSegment from a dict
compliance_segment_from_dict = ComplianceSegment.from_dict(compliance_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



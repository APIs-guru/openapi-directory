# SecurityAssessmentMetadata

Security assessment metadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SecurityAssessmentMetadataProperties**](SecurityAssessmentMetadataProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.security_assessment_metadata import SecurityAssessmentMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityAssessmentMetadata from a JSON string
security_assessment_metadata_instance = SecurityAssessmentMetadata.from_json(json)
# print the JSON string representation of the object
print(SecurityAssessmentMetadata.to_json())

# convert the object into a dict
security_assessment_metadata_dict = security_assessment_metadata_instance.to_dict()
# create an instance of SecurityAssessmentMetadata from a dict
security_assessment_metadata_from_dict = SecurityAssessmentMetadata.from_dict(security_assessment_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



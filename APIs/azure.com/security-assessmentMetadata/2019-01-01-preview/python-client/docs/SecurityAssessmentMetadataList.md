# SecurityAssessmentMetadataList

List of security assessment metadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[SecurityAssessmentMetadata]**](SecurityAssessmentMetadata.md) |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.security_assessment_metadata_list import SecurityAssessmentMetadataList

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityAssessmentMetadataList from a JSON string
security_assessment_metadata_list_instance = SecurityAssessmentMetadataList.from_json(json)
# print the JSON string representation of the object
print(SecurityAssessmentMetadataList.to_json())

# convert the object into a dict
security_assessment_metadata_list_dict = security_assessment_metadata_list_instance.to_dict()
# create an instance of SecurityAssessmentMetadataList from a dict
security_assessment_metadata_list_from_dict = SecurityAssessmentMetadataList.from_dict(security_assessment_metadata_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AssessmentsMetadataListDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**AssessmentsMetadataListDefaultResponseError**](AssessmentsMetadataListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.assessments_metadata_list_default_response import AssessmentsMetadataListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AssessmentsMetadataListDefaultResponse from a JSON string
assessments_metadata_list_default_response_instance = AssessmentsMetadataListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(AssessmentsMetadataListDefaultResponse.to_json())

# convert the object into a dict
assessments_metadata_list_default_response_dict = assessments_metadata_list_default_response_instance.to_dict()
# create an instance of AssessmentsMetadataListDefaultResponse from a dict
assessments_metadata_list_default_response_from_dict = AssessmentsMetadataListDefaultResponse.from_dict(assessments_metadata_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



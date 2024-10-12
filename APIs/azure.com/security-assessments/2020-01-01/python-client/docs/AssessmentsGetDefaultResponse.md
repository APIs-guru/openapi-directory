# AssessmentsGetDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**AssessmentsGetDefaultResponseError**](AssessmentsGetDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.assessments_get_default_response import AssessmentsGetDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AssessmentsGetDefaultResponse from a JSON string
assessments_get_default_response_instance = AssessmentsGetDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(AssessmentsGetDefaultResponse.to_json())

# convert the object into a dict
assessments_get_default_response_dict = assessments_get_default_response_instance.to_dict()
# create an instance of AssessmentsGetDefaultResponse from a dict
assessments_get_default_response_from_dict = AssessmentsGetDefaultResponse.from_dict(assessments_get_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



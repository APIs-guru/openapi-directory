# SubAssessmentsListDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**SubAssessmentsListDefaultResponseError**](SubAssessmentsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.sub_assessments_list_default_response import SubAssessmentsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubAssessmentsListDefaultResponse from a JSON string
sub_assessments_list_default_response_instance = SubAssessmentsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(SubAssessmentsListDefaultResponse.to_json())

# convert the object into a dict
sub_assessments_list_default_response_dict = sub_assessments_list_default_response_instance.to_dict()
# create an instance of SubAssessmentsListDefaultResponse from a dict
sub_assessments_list_default_response_from_dict = SubAssessmentsListDefaultResponse.from_dict(sub_assessments_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



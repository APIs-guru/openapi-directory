# CreateCombinedSubmissionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**combined_submission** | [**CombinedSubmission**](CombinedSubmission.md) |  | 
**errors** | **List[str]** |  | [optional] 
**status** | **str** |  | 

## Example

```python
from openapi_client.models.create_combined_submission_response import CreateCombinedSubmissionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCombinedSubmissionResponse from a JSON string
create_combined_submission_response_instance = CreateCombinedSubmissionResponse.from_json(json)
# print the JSON string representation of the object
print(CreateCombinedSubmissionResponse.to_json())

# convert the object into a dict
create_combined_submission_response_dict = create_combined_submission_response_instance.to_dict()
# create an instance of CreateCombinedSubmissionResponse from a dict
create_combined_submission_response_from_dict = CreateCombinedSubmissionResponse.from_dict(create_combined_submission_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



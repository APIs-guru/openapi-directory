# CreateSubmissionResponse1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | **List[str]** |  | [optional] 
**status** | **str** |  | 
**submission** | [**Submission**](Submission.md) |  | 

## Example

```python
from openapi_client.models.create_submission_response1 import CreateSubmissionResponse1

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSubmissionResponse1 from a JSON string
create_submission_response1_instance = CreateSubmissionResponse1.from_json(json)
# print the JSON string representation of the object
print(CreateSubmissionResponse1.to_json())

# convert the object into a dict
create_submission_response1_dict = create_submission_response1_instance.to_dict()
# create an instance of CreateSubmissionResponse1 from a dict
create_submission_response1_from_dict = CreateSubmissionResponse1.from_dict(create_submission_response1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



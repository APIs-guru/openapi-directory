# MicrosoftGraphSubmission

A Microsoft Teams submission

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_link** | **str** | Absolute link to this submission in the Microsoft Teams web UI | [optional] 
**id** | **str** | Identifier of the submission assigned by Microsoft Teams | [optional] 
**state** | **str** | State of the submission | [optional] 

## Example

```python
from openapi_client.models.microsoft_graph_submission import MicrosoftGraphSubmission

# TODO update the JSON string below
json = "{}"
# create an instance of MicrosoftGraphSubmission from a JSON string
microsoft_graph_submission_instance = MicrosoftGraphSubmission.from_json(json)
# print the JSON string representation of the object
print(MicrosoftGraphSubmission.to_json())

# convert the object into a dict
microsoft_graph_submission_dict = microsoft_graph_submission_instance.to_dict()
# create an instance of MicrosoftGraphSubmission from a dict
microsoft_graph_submission_from_dict = MicrosoftGraphSubmission.from_dict(microsoft_graph_submission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



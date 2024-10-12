# FormResponse

A form response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answers** | [**Dict[str, Answer]**](Answer.md) | Output only. The actual answers to the questions, keyed by question_id. | [optional] [readonly] 
**create_time** | **str** | Output only. Timestamp for the first time the response was submitted. | [optional] [readonly] 
**form_id** | **str** | Output only. The form ID. | [optional] [readonly] 
**last_submitted_time** | **str** | Output only. Timestamp for the most recent time the response was submitted. Does not track changes to grades. | [optional] [readonly] 
**respondent_email** | **str** | Output only. The email address (if collected) for the respondent. | [optional] [readonly] 
**response_id** | **str** | Output only. The response ID. | [optional] [readonly] 
**total_score** | **float** | Output only. The total number of points the respondent received for their submission Only set if the form was a quiz and the response was graded. This includes points automatically awarded via autograding adjusted by any manual corrections entered by the form owner. | [optional] [readonly] 

## Example

```python
from openapi_client.models.form_response import FormResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FormResponse from a JSON string
form_response_instance = FormResponse.from_json(json)
# print the JSON string representation of the object
print(FormResponse.to_json())

# convert the object into a dict
form_response_dict = form_response_instance.to_dict()
# create an instance of FormResponse from a dict
form_response_from_dict = FormResponse.from_dict(form_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CreateSubmissionDataRequestTokenResponseToken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_request_url** | **str** |  | 
**expires_at** | **str** |  | 
**id** | **str** |  | 
**secret** | **str** |  | 

## Example

```python
from openapi_client.models.create_submission_data_request_token_response_token import CreateSubmissionDataRequestTokenResponseToken

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSubmissionDataRequestTokenResponseToken from a JSON string
create_submission_data_request_token_response_token_instance = CreateSubmissionDataRequestTokenResponseToken.from_json(json)
# print the JSON string representation of the object
print(CreateSubmissionDataRequestTokenResponseToken.to_json())

# convert the object into a dict
create_submission_data_request_token_response_token_dict = create_submission_data_request_token_response_token_instance.to_dict()
# create an instance of CreateSubmissionDataRequestTokenResponseToken from a dict
create_submission_data_request_token_response_token_from_dict = CreateSubmissionDataRequestTokenResponseToken.from_dict(create_submission_data_request_token_response_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



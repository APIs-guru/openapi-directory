# CreateSubmissionDataRequestTokenResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | **List[str]** |  | [optional] 
**status** | **str** |  | 
**token** | [**CreateSubmissionDataRequestTokenResponseToken**](CreateSubmissionDataRequestTokenResponseToken.md) |  | 

## Example

```python
from openapi_client.models.create_submission_data_request_token_response import CreateSubmissionDataRequestTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSubmissionDataRequestTokenResponse from a JSON string
create_submission_data_request_token_response_instance = CreateSubmissionDataRequestTokenResponse.from_json(json)
# print the JSON string representation of the object
print(CreateSubmissionDataRequestTokenResponse.to_json())

# convert the object into a dict
create_submission_data_request_token_response_dict = create_submission_data_request_token_response_instance.to_dict()
# create an instance of CreateSubmissionDataRequestTokenResponse from a dict
create_submission_data_request_token_response_from_dict = CreateSubmissionDataRequestTokenResponse.from_dict(create_submission_data_request_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



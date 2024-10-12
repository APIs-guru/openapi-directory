# ListEnrollmentTokensResponse

Response to a request to list enrollment tokens for a given enterprise.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enrollment_tokens** | [**List[EnrollmentToken]**](EnrollmentToken.md) | The list of enrollment tokens. | [optional] 
**next_page_token** | **str** | If there are more results, a token to retrieve next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_enrollment_tokens_response import ListEnrollmentTokensResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListEnrollmentTokensResponse from a JSON string
list_enrollment_tokens_response_instance = ListEnrollmentTokensResponse.from_json(json)
# print the JSON string representation of the object
print(ListEnrollmentTokensResponse.to_json())

# convert the object into a dict
list_enrollment_tokens_response_dict = list_enrollment_tokens_response_instance.to_dict()
# create an instance of ListEnrollmentTokensResponse from a dict
list_enrollment_tokens_response_from_dict = ListEnrollmentTokensResponse.from_dict(list_enrollment_tokens_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



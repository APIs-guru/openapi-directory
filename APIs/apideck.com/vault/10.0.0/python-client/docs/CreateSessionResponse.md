# CreateSessionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateSessionResponseData**](CreateSessionResponseData.md) |  | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.create_session_response import CreateSessionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSessionResponse from a JSON string
create_session_response_instance = CreateSessionResponse.from_json(json)
# print the JSON string representation of the object
print(CreateSessionResponse.to_json())

# convert the object into a dict
create_session_response_dict = create_session_response_instance.to_dict()
# create an instance of CreateSessionResponse from a dict
create_session_response_from_dict = CreateSessionResponse.from_dict(create_session_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



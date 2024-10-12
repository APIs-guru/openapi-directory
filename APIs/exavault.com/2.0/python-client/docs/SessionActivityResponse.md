# SessionActivityResponse

Session activity list response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[SessionActivityEntry]**](SessionActivityEntry.md) |  | [optional] 
**response_status** | **int** |  | [optional] 
**returned_results** | **int** |  | [optional] 
**total_results** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.session_activity_response import SessionActivityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SessionActivityResponse from a JSON string
session_activity_response_instance = SessionActivityResponse.from_json(json)
# print the JSON string representation of the object
print(SessionActivityResponse.to_json())

# convert the object into a dict
session_activity_response_dict = session_activity_response_instance.to_dict()
# create an instance of SessionActivityResponse from a dict
session_activity_response_from_dict = SessionActivityResponse.from_dict(session_activity_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



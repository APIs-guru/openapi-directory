# PollForTheAccessTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** |  | [optional] 
**client_secret** | **str** |  | [optional] 
**code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.poll_for_the_access_token_request import PollForTheAccessTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PollForTheAccessTokenRequest from a JSON string
poll_for_the_access_token_request_instance = PollForTheAccessTokenRequest.from_json(json)
# print the JSON string representation of the object
print(PollForTheAccessTokenRequest.to_json())

# convert the object into a dict
poll_for_the_access_token_request_dict = poll_for_the_access_token_request_instance.to_dict()
# create an instance of PollForTheAccessTokenRequest from a dict
poll_for_the_access_token_request_from_dict = PollForTheAccessTokenRequest.from_dict(poll_for_the_access_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



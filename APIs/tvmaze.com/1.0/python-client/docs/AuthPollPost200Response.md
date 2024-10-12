# AuthPollPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apikey** | **str** | The user&#39;s API key | [optional] 
**username** | **str** | The user&#39;s username | [optional] 

## Example

```python
from openapi_client.models.auth_poll_post200_response import AuthPollPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AuthPollPost200Response from a JSON string
auth_poll_post200_response_instance = AuthPollPost200Response.from_json(json)
# print the JSON string representation of the object
print(AuthPollPost200Response.to_json())

# convert the object into a dict
auth_poll_post200_response_dict = auth_poll_post200_response_instance.to_dict()
# create an instance of AuthPollPost200Response from a dict
auth_poll_post200_response_from_dict = AuthPollPost200Response.from_dict(auth_poll_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



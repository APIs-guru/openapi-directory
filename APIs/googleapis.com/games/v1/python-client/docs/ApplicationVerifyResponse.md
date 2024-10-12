# ApplicationVerifyResponse

A third party application verification response resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_player_id** | **str** | An alternate ID that was once used for the player that was issued the auth token used in this request. (This field is not normally populated.) | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#applicationVerifyResponse&#x60;. | [optional] 
**player_id** | **str** | The ID of the player that was issued the auth token used in this request. | [optional] 

## Example

```python
from openapi_client.models.application_verify_response import ApplicationVerifyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationVerifyResponse from a JSON string
application_verify_response_instance = ApplicationVerifyResponse.from_json(json)
# print the JSON string representation of the object
print(ApplicationVerifyResponse.to_json())

# convert the object into a dict
application_verify_response_dict = application_verify_response_instance.to_dict()
# create an instance of ApplicationVerifyResponse from a dict
application_verify_response_from_dict = ApplicationVerifyResponse.from_dict(application_verify_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



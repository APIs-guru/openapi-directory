# ModerationResponseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | [optional] 
**automod_response** | **object** |  | [optional] 
**explicit** | **float** |  | [optional] 
**spam** | **float** |  | [optional] 
**toxic** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.moderation_response_request import ModerationResponseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ModerationResponseRequest from a JSON string
moderation_response_request_instance = ModerationResponseRequest.from_json(json)
# print the JSON string representation of the object
print(ModerationResponseRequest.to_json())

# convert the object into a dict
moderation_response_request_dict = moderation_response_request_instance.to_dict()
# create an instance of ModerationResponseRequest from a dict
moderation_response_request_from_dict = ModerationResponseRequest.from_dict(moderation_response_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



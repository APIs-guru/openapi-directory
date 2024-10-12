# ModerationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | 
**automod_response** | **object** |  | 
**explicit** | **float** |  | 
**spam** | **float** |  | 
**toxic** | **float** |  | 

## Example

```python
from openapi_client.models.moderation_response import ModerationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ModerationResponse from a JSON string
moderation_response_instance = ModerationResponse.from_json(json)
# print the JSON string representation of the object
print(ModerationResponse.to_json())

# convert the object into a dict
moderation_response_dict = moderation_response_instance.to_dict()
# create an instance of ModerationResponse from a dict
moderation_response_from_dict = ModerationResponse.from_dict(moderation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



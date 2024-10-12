# GetPublishingUserDefaultResponse

App Service error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**GetPublishingUserDefaultResponseError**](GetPublishingUserDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_publishing_user_default_response import GetPublishingUserDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetPublishingUserDefaultResponse from a JSON string
get_publishing_user_default_response_instance = GetPublishingUserDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(GetPublishingUserDefaultResponse.to_json())

# convert the object into a dict
get_publishing_user_default_response_dict = get_publishing_user_default_response_instance.to_dict()
# create an instance of GetPublishingUserDefaultResponse from a dict
get_publishing_user_default_response_from_dict = GetPublishingUserDefaultResponse.from_dict(get_publishing_user_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



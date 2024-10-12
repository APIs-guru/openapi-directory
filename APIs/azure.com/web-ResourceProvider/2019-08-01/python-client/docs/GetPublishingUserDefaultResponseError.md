# GetPublishingUserDefaultResponseError

Error model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Standardized string to programmatically identify the error. | [optional] [readonly] 
**details** | [**List[GetPublishingUserDefaultResponseErrorDetailsInner]**](GetPublishingUserDefaultResponseErrorDetailsInner.md) |  | [optional] 
**innererror** | **str** | More information to debug error. | [optional] [readonly] 
**message** | **str** | Detailed error description and debugging information. | [optional] [readonly] 
**target** | **str** | Detailed error description and debugging information. | [optional] [readonly] 

## Example

```python
from openapi_client.models.get_publishing_user_default_response_error import GetPublishingUserDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of GetPublishingUserDefaultResponseError from a JSON string
get_publishing_user_default_response_error_instance = GetPublishingUserDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(GetPublishingUserDefaultResponseError.to_json())

# convert the object into a dict
get_publishing_user_default_response_error_dict = get_publishing_user_default_response_error_instance.to_dict()
# create an instance of GetPublishingUserDefaultResponseError from a dict
get_publishing_user_default_response_error_from_dict = GetPublishingUserDefaultResponseError.from_dict(get_publishing_user_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GetPublishingUserDefaultResponseErrorDetailsInner

Detailed errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Standardized string to programmatically identify the error. | [optional] [readonly] 
**message** | **str** | Detailed error description and debugging information. | [optional] [readonly] 
**target** | **str** | Detailed error description and debugging information. | [optional] [readonly] 

## Example

```python
from openapi_client.models.get_publishing_user_default_response_error_details_inner import GetPublishingUserDefaultResponseErrorDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetPublishingUserDefaultResponseErrorDetailsInner from a JSON string
get_publishing_user_default_response_error_details_inner_instance = GetPublishingUserDefaultResponseErrorDetailsInner.from_json(json)
# print the JSON string representation of the object
print(GetPublishingUserDefaultResponseErrorDetailsInner.to_json())

# convert the object into a dict
get_publishing_user_default_response_error_details_inner_dict = get_publishing_user_default_response_error_details_inner_instance.to_dict()
# create an instance of GetPublishingUserDefaultResponseErrorDetailsInner from a dict
get_publishing_user_default_response_error_details_inner_from_dict = GetPublishingUserDefaultResponseErrorDetailsInner.from_dict(get_publishing_user_default_response_error_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



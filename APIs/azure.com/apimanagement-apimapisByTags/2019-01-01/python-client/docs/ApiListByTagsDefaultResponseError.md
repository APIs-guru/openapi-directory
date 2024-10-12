# ApiListByTagsDefaultResponseError

Error Body contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response. | [optional] 
**details** | [**List[ApiListByTagsDefaultResponseErrorDetailsInner]**](ApiListByTagsDefaultResponseErrorDetailsInner.md) | The list of invalid fields send in request, in case of validation error. | [optional] 
**message** | **str** | Human-readable representation of the error. | [optional] 

## Example

```python
from openapi_client.models.api_list_by_tags_default_response_error import ApiListByTagsDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of ApiListByTagsDefaultResponseError from a JSON string
api_list_by_tags_default_response_error_instance = ApiListByTagsDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(ApiListByTagsDefaultResponseError.to_json())

# convert the object into a dict
api_list_by_tags_default_response_error_dict = api_list_by_tags_default_response_error_instance.to_dict()
# create an instance of ApiListByTagsDefaultResponseError from a dict
api_list_by_tags_default_response_error_from_dict = ApiListByTagsDefaultResponseError.from_dict(api_list_by_tags_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ContentKeyPoliciesListDefaultResponseError

Information about an error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | A language-independent error name. | [optional] 
**details** | **List[object]** | The error details. | [optional] 
**message** | **str** | The error message. | [optional] 
**target** | **str** | The target of the error (for example, the name of the property in error). | [optional] 

## Example

```python
from openapi_client.models.content_key_policies_list_default_response_error import ContentKeyPoliciesListDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of ContentKeyPoliciesListDefaultResponseError from a JSON string
content_key_policies_list_default_response_error_instance = ContentKeyPoliciesListDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(ContentKeyPoliciesListDefaultResponseError.to_json())

# convert the object into a dict
content_key_policies_list_default_response_error_dict = content_key_policies_list_default_response_error_instance.to_dict()
# create an instance of ContentKeyPoliciesListDefaultResponseError from a dict
content_key_policies_list_default_response_error_from_dict = ContentKeyPoliciesListDefaultResponseError.from_dict(content_key_policies_list_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



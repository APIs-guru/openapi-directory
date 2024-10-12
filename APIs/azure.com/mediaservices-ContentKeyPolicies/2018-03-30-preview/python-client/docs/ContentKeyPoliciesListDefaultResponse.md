# ContentKeyPoliciesListDefaultResponse

The API error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ContentKeyPoliciesListDefaultResponseError**](ContentKeyPoliciesListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.content_key_policies_list_default_response import ContentKeyPoliciesListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ContentKeyPoliciesListDefaultResponse from a JSON string
content_key_policies_list_default_response_instance = ContentKeyPoliciesListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(ContentKeyPoliciesListDefaultResponse.to_json())

# convert the object into a dict
content_key_policies_list_default_response_dict = content_key_policies_list_default_response_instance.to_dict()
# create an instance of ContentKeyPoliciesListDefaultResponse from a dict
content_key_policies_list_default_response_from_dict = ContentKeyPoliciesListDefaultResponse.from_dict(content_key_policies_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



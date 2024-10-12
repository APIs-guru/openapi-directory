# ResponsePoliciesPatchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | [**ResponseHeader**](ResponseHeader.md) |  | [optional] 
**response_policy** | [**ResponsePolicy**](ResponsePolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.response_policies_patch_response import ResponsePoliciesPatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ResponsePoliciesPatchResponse from a JSON string
response_policies_patch_response_instance = ResponsePoliciesPatchResponse.from_json(json)
# print the JSON string representation of the object
print(ResponsePoliciesPatchResponse.to_json())

# convert the object into a dict
response_policies_patch_response_dict = response_policies_patch_response_instance.to_dict()
# create an instance of ResponsePoliciesPatchResponse from a dict
response_policies_patch_response_from_dict = ResponsePoliciesPatchResponse.from_dict(response_policies_patch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



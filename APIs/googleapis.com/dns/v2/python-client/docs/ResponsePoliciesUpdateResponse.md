# ResponsePoliciesUpdateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | [**ResponseHeader**](ResponseHeader.md) |  | [optional] 
**response_policy** | [**ResponsePolicy**](ResponsePolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.response_policies_update_response import ResponsePoliciesUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ResponsePoliciesUpdateResponse from a JSON string
response_policies_update_response_instance = ResponsePoliciesUpdateResponse.from_json(json)
# print the JSON string representation of the object
print(ResponsePoliciesUpdateResponse.to_json())

# convert the object into a dict
response_policies_update_response_dict = response_policies_update_response_instance.to_dict()
# create an instance of ResponsePoliciesUpdateResponse from a dict
response_policies_update_response_from_dict = ResponsePoliciesUpdateResponse.from_dict(response_policies_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



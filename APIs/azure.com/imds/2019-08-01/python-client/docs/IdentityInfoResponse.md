# IdentityInfoResponse

This is the response from the Identity_GetInfo operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenant_id** | **str** | This is the AAD tenantId of the identity of the caller. | [optional] 

## Example

```python
from openapi_client.models.identity_info_response import IdentityInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityInfoResponse from a JSON string
identity_info_response_instance = IdentityInfoResponse.from_json(json)
# print the JSON string representation of the object
print(IdentityInfoResponse.to_json())

# convert the object into a dict
identity_info_response_dict = identity_info_response_instance.to_dict()
# create an instance of IdentityInfoResponse from a dict
identity_info_response_from_dict = IdentityInfoResponse.from_dict(identity_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# V1GenerateDefaultIdentityResponse

Response message for the `GenerateDefaultIdentity` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attach_status** | **str** | Status of the role attachment. Under development (go/si-attach-role), currently always return ATTACH_STATUS_UNSPECIFIED) | [optional] 
**identity** | [**V1DefaultIdentity**](V1DefaultIdentity.md) |  | [optional] 
**role** | **str** | Role attached to consumer project. Empty if not attached in this request. (Under development, currently always return empty.) | [optional] 

## Example

```python
from openapi_client.models.v1_generate_default_identity_response import V1GenerateDefaultIdentityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V1GenerateDefaultIdentityResponse from a JSON string
v1_generate_default_identity_response_instance = V1GenerateDefaultIdentityResponse.from_json(json)
# print the JSON string representation of the object
print(V1GenerateDefaultIdentityResponse.to_json())

# convert the object into a dict
v1_generate_default_identity_response_dict = v1_generate_default_identity_response_instance.to_dict()
# create an instance of V1GenerateDefaultIdentityResponse from a dict
v1_generate_default_identity_response_from_dict = V1GenerateDefaultIdentityResponse.from_dict(v1_generate_default_identity_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



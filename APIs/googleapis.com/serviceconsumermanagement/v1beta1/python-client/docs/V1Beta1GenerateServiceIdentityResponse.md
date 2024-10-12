# V1Beta1GenerateServiceIdentityResponse

Response message for the `GenerateServiceIdentity` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**V1Beta1ServiceIdentity**](V1Beta1ServiceIdentity.md) |  | [optional] 

## Example

```python
from openapi_client.models.v1_beta1_generate_service_identity_response import V1Beta1GenerateServiceIdentityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V1Beta1GenerateServiceIdentityResponse from a JSON string
v1_beta1_generate_service_identity_response_instance = V1Beta1GenerateServiceIdentityResponse.from_json(json)
# print the JSON string representation of the object
print(V1Beta1GenerateServiceIdentityResponse.to_json())

# convert the object into a dict
v1_beta1_generate_service_identity_response_dict = v1_beta1_generate_service_identity_response_instance.to_dict()
# create an instance of V1Beta1GenerateServiceIdentityResponse from a dict
v1_beta1_generate_service_identity_response_from_dict = V1Beta1GenerateServiceIdentityResponse.from_dict(v1_beta1_generate_service_identity_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



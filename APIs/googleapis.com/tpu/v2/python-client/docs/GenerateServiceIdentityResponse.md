# GenerateServiceIdentityResponse

Response for GenerateServiceIdentity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**ServiceIdentity**](ServiceIdentity.md) |  | [optional] 

## Example

```python
from openapi_client.models.generate_service_identity_response import GenerateServiceIdentityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateServiceIdentityResponse from a JSON string
generate_service_identity_response_instance = GenerateServiceIdentityResponse.from_json(json)
# print the JSON string representation of the object
print(GenerateServiceIdentityResponse.to_json())

# convert the object into a dict
generate_service_identity_response_dict = generate_service_identity_response_instance.to_dict()
# create an instance of GenerateServiceIdentityResponse from a dict
generate_service_identity_response_from_dict = GenerateServiceIdentityResponse.from_dict(generate_service_identity_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



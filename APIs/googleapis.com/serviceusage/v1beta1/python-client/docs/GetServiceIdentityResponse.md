# GetServiceIdentityResponse

Response message for getting service identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**ServiceIdentity**](ServiceIdentity.md) |  | [optional] 
**state** | **str** | Service identity state. | [optional] 

## Example

```python
from openapi_client.models.get_service_identity_response import GetServiceIdentityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetServiceIdentityResponse from a JSON string
get_service_identity_response_instance = GetServiceIdentityResponse.from_json(json)
# print the JSON string representation of the object
print(GetServiceIdentityResponse.to_json())

# convert the object into a dict
get_service_identity_response_dict = get_service_identity_response_instance.to_dict()
# create an instance of GetServiceIdentityResponse from a dict
get_service_identity_response_from_dict = GetServiceIdentityResponse.from_dict(get_service_identity_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



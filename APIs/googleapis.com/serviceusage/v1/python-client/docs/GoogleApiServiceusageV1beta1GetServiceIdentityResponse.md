# GoogleApiServiceusageV1beta1GetServiceIdentityResponse

Response message for getting service identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**GoogleApiServiceusageV1beta1ServiceIdentity**](GoogleApiServiceusageV1beta1ServiceIdentity.md) |  | [optional] 
**state** | **str** | Service identity state. | [optional] 

## Example

```python
from openapi_client.models.google_api_serviceusage_v1beta1_get_service_identity_response import GoogleApiServiceusageV1beta1GetServiceIdentityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleApiServiceusageV1beta1GetServiceIdentityResponse from a JSON string
google_api_serviceusage_v1beta1_get_service_identity_response_instance = GoogleApiServiceusageV1beta1GetServiceIdentityResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleApiServiceusageV1beta1GetServiceIdentityResponse.to_json())

# convert the object into a dict
google_api_serviceusage_v1beta1_get_service_identity_response_dict = google_api_serviceusage_v1beta1_get_service_identity_response_instance.to_dict()
# create an instance of GoogleApiServiceusageV1beta1GetServiceIdentityResponse from a dict
google_api_serviceusage_v1beta1_get_service_identity_response_from_dict = GoogleApiServiceusageV1beta1GetServiceIdentityResponse.from_dict(google_api_serviceusage_v1beta1_get_service_identity_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



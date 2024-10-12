# GoogleCloudIntegrationsV1alphaJwt

Represents JSON web token(JWT), which is a compact, URL-safe means of representing claims to be transferred between two parties, enabling the claims to be digitally signed or integrity protected.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jwt** | **str** | The token calculated by the header, payload and signature. | [optional] 
**jwt_header** | **str** | Identifies which algorithm is used to generate the signature. | [optional] 
**jwt_payload** | **str** | Contains a set of claims. The JWT specification defines seven Registered Claim Names which are the standard fields commonly included in tokens. Custom claims are usually also included, depending on the purpose of the token. | [optional] 
**secret** | **str** | User&#39;s pre-shared secret to sign the token. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_jwt import GoogleCloudIntegrationsV1alphaJwt

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaJwt from a JSON string
google_cloud_integrations_v1alpha_jwt_instance = GoogleCloudIntegrationsV1alphaJwt.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaJwt.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_jwt_dict = google_cloud_integrations_v1alpha_jwt_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaJwt from a dict
google_cloud_integrations_v1alpha_jwt_from_dict = GoogleCloudIntegrationsV1alphaJwt.from_dict(google_cloud_integrations_v1alpha_jwt_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



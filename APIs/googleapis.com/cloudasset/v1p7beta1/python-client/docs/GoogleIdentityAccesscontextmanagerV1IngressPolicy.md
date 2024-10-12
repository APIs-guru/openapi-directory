# GoogleIdentityAccesscontextmanagerV1IngressPolicy

Policy for ingress into ServicePerimeter. IngressPolicies match requests based on `ingress_from` and `ingress_to` stanzas. For an ingress policy to match, both the `ingress_from` and `ingress_to` stanzas must be matched. If an IngressPolicy matches a request, the request is allowed through the perimeter boundary from outside the perimeter. For example, access from the internet can be allowed either based on an AccessLevel or, for traffic hosted on Google Cloud, the project of the source network. For access from private networks, using the project of the hosting network is required. Individual ingress policies can be limited by restricting which services and/or actions they match using the `ingress_to` field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingress_from** | [**GoogleIdentityAccesscontextmanagerV1IngressFrom**](GoogleIdentityAccesscontextmanagerV1IngressFrom.md) |  | [optional] 
**ingress_to** | [**GoogleIdentityAccesscontextmanagerV1IngressTo**](GoogleIdentityAccesscontextmanagerV1IngressTo.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_identity_accesscontextmanager_v1_ingress_policy import GoogleIdentityAccesscontextmanagerV1IngressPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIdentityAccesscontextmanagerV1IngressPolicy from a JSON string
google_identity_accesscontextmanager_v1_ingress_policy_instance = GoogleIdentityAccesscontextmanagerV1IngressPolicy.from_json(json)
# print the JSON string representation of the object
print(GoogleIdentityAccesscontextmanagerV1IngressPolicy.to_json())

# convert the object into a dict
google_identity_accesscontextmanager_v1_ingress_policy_dict = google_identity_accesscontextmanager_v1_ingress_policy_instance.to_dict()
# create an instance of GoogleIdentityAccesscontextmanagerV1IngressPolicy from a dict
google_identity_accesscontextmanager_v1_ingress_policy_from_dict = GoogleIdentityAccesscontextmanagerV1IngressPolicy.from_dict(google_identity_accesscontextmanager_v1_ingress_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



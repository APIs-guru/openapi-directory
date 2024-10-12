# GoogleIdentityAccesscontextmanagerV1IngressFrom

Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identities** | **List[str]** | A list of identities that are allowed access through this ingress policy. Should be in the format of email address. The email address should represent individual user or service account only. | [optional] 
**identity_type** | **str** | Specifies the type of identities that are allowed access from outside the perimeter. If left unspecified, then members of &#x60;identities&#x60; field will be allowed access. | [optional] 
**sources** | [**List[GoogleIdentityAccesscontextmanagerV1IngressSource]**](GoogleIdentityAccesscontextmanagerV1IngressSource.md) | Sources that this IngressPolicy authorizes access from. | [optional] 

## Example

```python
from openapi_client.models.google_identity_accesscontextmanager_v1_ingress_from import GoogleIdentityAccesscontextmanagerV1IngressFrom

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIdentityAccesscontextmanagerV1IngressFrom from a JSON string
google_identity_accesscontextmanager_v1_ingress_from_instance = GoogleIdentityAccesscontextmanagerV1IngressFrom.from_json(json)
# print the JSON string representation of the object
print(GoogleIdentityAccesscontextmanagerV1IngressFrom.to_json())

# convert the object into a dict
google_identity_accesscontextmanager_v1_ingress_from_dict = google_identity_accesscontextmanager_v1_ingress_from_instance.to_dict()
# create an instance of GoogleIdentityAccesscontextmanagerV1IngressFrom from a dict
google_identity_accesscontextmanager_v1_ingress_from_from_dict = GoogleIdentityAccesscontextmanagerV1IngressFrom.from_dict(google_identity_accesscontextmanager_v1_ingress_from_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



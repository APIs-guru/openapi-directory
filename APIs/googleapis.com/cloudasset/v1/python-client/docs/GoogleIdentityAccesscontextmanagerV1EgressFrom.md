# GoogleIdentityAccesscontextmanagerV1EgressFrom

Defines the conditions under which an EgressPolicy matches a request. Conditions based on information about the source of the request. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identities** | **List[str]** | A list of identities that are allowed access through this [EgressPolicy], in the format of &#x60;user:{email_id}&#x60; or &#x60;serviceAccount:{email_id}&#x60;. | [optional] 
**identity_type** | **str** | Specifies the type of identities that are allowed access to outside the perimeter. If left unspecified, then members of &#x60;identities&#x60; field will be allowed access. | [optional] 
**source_restriction** | **str** | Whether to enforce traffic restrictions based on &#x60;sources&#x60; field. If the &#x60;sources&#x60; fields is non-empty, then this field must be set to &#x60;SOURCE_RESTRICTION_ENABLED&#x60;. | [optional] 
**sources** | [**List[GoogleIdentityAccesscontextmanagerV1EgressSource]**](GoogleIdentityAccesscontextmanagerV1EgressSource.md) | Sources that this EgressPolicy authorizes access from. If this field is not empty, then &#x60;source_restriction&#x60; must be set to &#x60;SOURCE_RESTRICTION_ENABLED&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_identity_accesscontextmanager_v1_egress_from import GoogleIdentityAccesscontextmanagerV1EgressFrom

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIdentityAccesscontextmanagerV1EgressFrom from a JSON string
google_identity_accesscontextmanager_v1_egress_from_instance = GoogleIdentityAccesscontextmanagerV1EgressFrom.from_json(json)
# print the JSON string representation of the object
print(GoogleIdentityAccesscontextmanagerV1EgressFrom.to_json())

# convert the object into a dict
google_identity_accesscontextmanager_v1_egress_from_dict = google_identity_accesscontextmanager_v1_egress_from_instance.to_dict()
# create an instance of GoogleIdentityAccesscontextmanagerV1EgressFrom from a dict
google_identity_accesscontextmanager_v1_egress_from_from_dict = GoogleIdentityAccesscontextmanagerV1EgressFrom.from_dict(google_identity_accesscontextmanager_v1_egress_from_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleIdentityAccesscontextmanagerV1IngressSource

The source that IngressPolicy authorizes access from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_level** | **str** | An AccessLevel resource name that allow resources within the ServicePerimeters to be accessed from the internet. AccessLevels listed must be in the same policy as this ServicePerimeter. Referencing a nonexistent AccessLevel will cause an error. If no AccessLevel names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. Example: &#x60;accessPolicies/MY_POLICY/accessLevels/MY_LEVEL&#x60;. If a single &#x60;*&#x60; is specified for &#x60;access_level&#x60;, then all IngressSources will be allowed. | [optional] 
**resource** | **str** | A Google Cloud resource that is allowed to ingress the perimeter. Requests from these resources will be allowed to access perimeter data. Currently only projects are allowed. Format: &#x60;projects/{project_number}&#x60; The project may be in any Google Cloud organization, not just the organization that the perimeter is defined in. &#x60;*&#x60; is not allowed, the case of allowing all Google Cloud resources only is not supported. | [optional] 

## Example

```python
from openapi_client.models.google_identity_accesscontextmanager_v1_ingress_source import GoogleIdentityAccesscontextmanagerV1IngressSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIdentityAccesscontextmanagerV1IngressSource from a JSON string
google_identity_accesscontextmanager_v1_ingress_source_instance = GoogleIdentityAccesscontextmanagerV1IngressSource.from_json(json)
# print the JSON string representation of the object
print(GoogleIdentityAccesscontextmanagerV1IngressSource.to_json())

# convert the object into a dict
google_identity_accesscontextmanager_v1_ingress_source_dict = google_identity_accesscontextmanager_v1_ingress_source_instance.to_dict()
# create an instance of GoogleIdentityAccesscontextmanagerV1IngressSource from a dict
google_identity_accesscontextmanager_v1_ingress_source_from_dict = GoogleIdentityAccesscontextmanagerV1IngressSource.from_dict(google_identity_accesscontextmanager_v1_ingress_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



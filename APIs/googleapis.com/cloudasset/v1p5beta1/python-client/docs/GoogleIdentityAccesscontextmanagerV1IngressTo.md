# GoogleIdentityAccesscontextmanagerV1IngressTo

Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the target resource of the request. The request must satisfy what is defined in `operations` AND `resources` in order to match.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operations** | [**List[GoogleIdentityAccesscontextmanagerV1ApiOperation]**](GoogleIdentityAccesscontextmanagerV1ApiOperation.md) | A list of ApiOperations allowed to be performed by the sources specified in corresponding IngressFrom in this ServicePerimeter. | [optional] 
**resources** | **List[str]** | A list of resources, currently only projects in the form &#x60;projects/&#x60;, protected by this ServicePerimeter that are allowed to be accessed by sources defined in the corresponding IngressFrom. If a single &#x60;*&#x60; is specified, then access to all resources inside the perimeter are allowed. | [optional] 

## Example

```python
from openapi_client.models.google_identity_accesscontextmanager_v1_ingress_to import GoogleIdentityAccesscontextmanagerV1IngressTo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIdentityAccesscontextmanagerV1IngressTo from a JSON string
google_identity_accesscontextmanager_v1_ingress_to_instance = GoogleIdentityAccesscontextmanagerV1IngressTo.from_json(json)
# print the JSON string representation of the object
print(GoogleIdentityAccesscontextmanagerV1IngressTo.to_json())

# convert the object into a dict
google_identity_accesscontextmanager_v1_ingress_to_dict = google_identity_accesscontextmanager_v1_ingress_to_instance.to_dict()
# create an instance of GoogleIdentityAccesscontextmanagerV1IngressTo from a dict
google_identity_accesscontextmanager_v1_ingress_to_from_dict = GoogleIdentityAccesscontextmanagerV1IngressTo.from_dict(google_identity_accesscontextmanager_v1_ingress_to_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



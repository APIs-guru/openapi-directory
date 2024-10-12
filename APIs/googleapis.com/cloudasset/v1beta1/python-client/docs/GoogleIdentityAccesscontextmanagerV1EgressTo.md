# GoogleIdentityAccesscontextmanagerV1EgressTo

Defines the conditions under which an EgressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the `resources` specified. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. The request must match `operations` AND `resources` fields in order to be allowed egress out of the perimeter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_resources** | **List[str]** | A list of external resources that are allowed to be accessed. Only AWS and Azure resources are supported. For Amazon S3, the supported format is s3://BUCKET_NAME. For Azure Storage, the supported format is azure://myaccount.blob.core.windows.net/CONTAINER_NAME. A request matches if it contains an external resource in this list (Example: s3://bucket/path). Currently &#39;*&#39; is not allowed. | [optional] 
**operations** | [**List[GoogleIdentityAccesscontextmanagerV1ApiOperation]**](GoogleIdentityAccesscontextmanagerV1ApiOperation.md) | A list of ApiOperations allowed to be performed by the sources specified in the corresponding EgressFrom. A request matches if it uses an operation/service in this list. | [optional] 
**resources** | **List[str]** | A list of resources, currently only projects in the form &#x60;projects/&#x60;, that are allowed to be accessed by sources defined in the corresponding EgressFrom. A request matches if it contains a resource in this list. If &#x60;*&#x60; is specified for &#x60;resources&#x60;, then this EgressTo rule will authorize access to all resources outside the perimeter. | [optional] 

## Example

```python
from openapi_client.models.google_identity_accesscontextmanager_v1_egress_to import GoogleIdentityAccesscontextmanagerV1EgressTo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIdentityAccesscontextmanagerV1EgressTo from a JSON string
google_identity_accesscontextmanager_v1_egress_to_instance = GoogleIdentityAccesscontextmanagerV1EgressTo.from_json(json)
# print the JSON string representation of the object
print(GoogleIdentityAccesscontextmanagerV1EgressTo.to_json())

# convert the object into a dict
google_identity_accesscontextmanager_v1_egress_to_dict = google_identity_accesscontextmanager_v1_egress_to_instance.to_dict()
# create an instance of GoogleIdentityAccesscontextmanagerV1EgressTo from a dict
google_identity_accesscontextmanager_v1_egress_to_from_dict = GoogleIdentityAccesscontextmanagerV1EgressTo.from_dict(google_identity_accesscontextmanager_v1_egress_to_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleIdentityStsV1betaAccessBoundary

An access boundary defines the upper bound of what a principal may access. It includes a list of access boundary rules that each defines the resource that may be allowed as well as permissions that may be used on those resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_boundary_rules** | [**List[GoogleIdentityStsV1betaAccessBoundaryRule]**](GoogleIdentityStsV1betaAccessBoundaryRule.md) | A list of access boundary rules which defines the upper bound of the permission a principal may carry. If multiple rules are specified, the effective access boundary is the union of all the access boundary rules attached. One access boundary can contain at most 10 rules. | [optional] 

## Example

```python
from openapi_client.models.google_identity_sts_v1beta_access_boundary import GoogleIdentityStsV1betaAccessBoundary

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIdentityStsV1betaAccessBoundary from a JSON string
google_identity_sts_v1beta_access_boundary_instance = GoogleIdentityStsV1betaAccessBoundary.from_json(json)
# print the JSON string representation of the object
print(GoogleIdentityStsV1betaAccessBoundary.to_json())

# convert the object into a dict
google_identity_sts_v1beta_access_boundary_dict = google_identity_sts_v1beta_access_boundary_instance.to_dict()
# create an instance of GoogleIdentityStsV1betaAccessBoundary from a dict
google_identity_sts_v1beta_access_boundary_from_dict = GoogleIdentityStsV1betaAccessBoundary.from_dict(google_identity_sts_v1beta_access_boundary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



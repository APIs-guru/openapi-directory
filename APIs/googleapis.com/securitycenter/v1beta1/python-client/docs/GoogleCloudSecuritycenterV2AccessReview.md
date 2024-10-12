# GoogleCloudSecuritycenterV2AccessReview

Conveys information about a Kubernetes access review (such as one returned by a [`kubectl auth can-i`](https://kubernetes.io/docs/reference/access-authn-authz/authorization/#checking-api-access) command) that was involved in a finding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group** | **str** | The API group of the resource. \&quot;*\&quot; means all. | [optional] 
**name** | **str** | The name of the resource being requested. Empty means all. | [optional] 
**ns** | **str** | Namespace of the action being requested. Currently, there is no distinction between no namespace and all namespaces. Both are represented by \&quot;\&quot; (empty). | [optional] 
**resource** | **str** | The optional resource type requested. \&quot;*\&quot; means all. | [optional] 
**subresource** | **str** | The optional subresource type. | [optional] 
**verb** | **str** | A Kubernetes resource API verb, like get, list, watch, create, update, delete, proxy. \&quot;*\&quot; means all. | [optional] 
**version** | **str** | The API version of the resource. \&quot;*\&quot; means all. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_access_review import GoogleCloudSecuritycenterV2AccessReview

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2AccessReview from a JSON string
google_cloud_securitycenter_v2_access_review_instance = GoogleCloudSecuritycenterV2AccessReview.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2AccessReview.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_access_review_dict = google_cloud_securitycenter_v2_access_review_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2AccessReview from a dict
google_cloud_securitycenter_v2_access_review_from_dict = GoogleCloudSecuritycenterV2AccessReview.from_dict(google_cloud_securitycenter_v2_access_review_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



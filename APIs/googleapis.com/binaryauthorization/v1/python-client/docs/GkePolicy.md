# GkePolicy

A Binary Authorization policy for a GKE cluster. This is one type of policy that can occur as a `PlatformPolicy`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_sets** | [**List[CheckSet]**](CheckSet.md) | Optional. The &#x60;CheckSet&#x60; objects to apply, scoped by namespace or namespace and service account. Exactly one &#x60;CheckSet&#x60; will be evaluated for a given Pod (unless the list is empty, in which case the behavior is \&quot;always allow\&quot;). If multiple &#x60;CheckSet&#x60; objects have scopes that match the namespace and service account of the Pod being evaluated, only the &#x60;CheckSet&#x60; with the MOST SPECIFIC scope will match. &#x60;CheckSet&#x60; objects must be listed in order of decreasing specificity, i.e. if a scope matches a given service account (which must include the namespace), it must come before a &#x60;CheckSet&#x60; with a scope matching just that namespace. This property is enforced by server-side validation. The purpose of this restriction is to ensure that if more than one &#x60;CheckSet&#x60; matches a given Pod, the &#x60;CheckSet&#x60; that will be evaluated will always be the first in the list to match (because if any other matches, it must be less specific). If &#x60;check_sets&#x60; is empty, the default behavior is to allow all images. If &#x60;check_sets&#x60; is non-empty, the last &#x60;check_sets&#x60; entry must always be a &#x60;CheckSet&#x60; with no scope set, i.e. a catchall to handle any situation not caught by the preceding &#x60;CheckSet&#x60; objects. | [optional] 
**image_allowlist** | [**ImageAllowlist**](ImageAllowlist.md) |  | [optional] 

## Example

```python
from openapi_client.models.gke_policy import GkePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GkePolicy from a JSON string
gke_policy_instance = GkePolicy.from_json(json)
# print the JSON string representation of the object
print(GkePolicy.to_json())

# convert the object into a dict
gke_policy_dict = gke_policy_instance.to_dict()
# create an instance of GkePolicy from a dict
gke_policy_from_dict = GkePolicy.from_dict(gke_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# UpstreamPolicy

Artifact policy configuration for the repository contents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The user-provided ID of the upstream policy. | [optional] 
**priority** | **int** | Entries with a greater priority value take precedence in the pull order. | [optional] 
**repository** | **str** | A reference to the repository resource, for example: &#x60;projects/p1/locations/us-central1/repositories/repo1&#x60;. | [optional] 

## Example

```python
from openapi_client.models.upstream_policy import UpstreamPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of UpstreamPolicy from a JSON string
upstream_policy_instance = UpstreamPolicy.from_json(json)
# print the JSON string representation of the object
print(UpstreamPolicy.to_json())

# convert the object into a dict
upstream_policy_dict = upstream_policy_instance.to_dict()
# create an instance of UpstreamPolicy from a dict
upstream_policy_from_dict = UpstreamPolicy.from_dict(upstream_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



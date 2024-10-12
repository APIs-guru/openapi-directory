# EdgeConfigstoreBundleBadBundleViolation

A message type used to describe a single bundle validation error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A description of why the bundle is invalid and how to fix it. | [optional] 
**filename** | **str** | The filename (including relative path from the bundle root) in which the error occurred. | [optional] 

## Example

```python
from openapi_client.models.edge_configstore_bundle_bad_bundle_violation import EdgeConfigstoreBundleBadBundleViolation

# TODO update the JSON string below
json = "{}"
# create an instance of EdgeConfigstoreBundleBadBundleViolation from a JSON string
edge_configstore_bundle_bad_bundle_violation_instance = EdgeConfigstoreBundleBadBundleViolation.from_json(json)
# print the JSON string representation of the object
print(EdgeConfigstoreBundleBadBundleViolation.to_json())

# convert the object into a dict
edge_configstore_bundle_bad_bundle_violation_dict = edge_configstore_bundle_bad_bundle_violation_instance.to_dict()
# create an instance of EdgeConfigstoreBundleBadBundleViolation from a dict
edge_configstore_bundle_bad_bundle_violation_from_dict = EdgeConfigstoreBundleBadBundleViolation.from_dict(edge_configstore_bundle_bad_bundle_violation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



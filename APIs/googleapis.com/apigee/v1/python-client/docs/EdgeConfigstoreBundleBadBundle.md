# EdgeConfigstoreBundleBadBundle

Describes why a bundle is invalid. Intended for use in error details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**violations** | [**List[EdgeConfigstoreBundleBadBundleViolation]**](EdgeConfigstoreBundleBadBundleViolation.md) | Describes all precondition violations. | [optional] 

## Example

```python
from openapi_client.models.edge_configstore_bundle_bad_bundle import EdgeConfigstoreBundleBadBundle

# TODO update the JSON string below
json = "{}"
# create an instance of EdgeConfigstoreBundleBadBundle from a JSON string
edge_configstore_bundle_bad_bundle_instance = EdgeConfigstoreBundleBadBundle.from_json(json)
# print the JSON string representation of the object
print(EdgeConfigstoreBundleBadBundle.to_json())

# convert the object into a dict
edge_configstore_bundle_bad_bundle_dict = edge_configstore_bundle_bad_bundle_instance.to_dict()
# create an instance of EdgeConfigstoreBundleBadBundle from a dict
edge_configstore_bundle_bad_bundle_from_dict = EdgeConfigstoreBundleBadBundle.from_dict(edge_configstore_bundle_bad_bundle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



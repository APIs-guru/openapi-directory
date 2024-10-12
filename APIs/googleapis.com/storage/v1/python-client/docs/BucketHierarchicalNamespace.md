# BucketHierarchicalNamespace

The bucket's hierarchical namespace configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | When set to true, hierarchical namespace is enabled for this bucket. | [optional] 

## Example

```python
from openapi_client.models.bucket_hierarchical_namespace import BucketHierarchicalNamespace

# TODO update the JSON string below
json = "{}"
# create an instance of BucketHierarchicalNamespace from a JSON string
bucket_hierarchical_namespace_instance = BucketHierarchicalNamespace.from_json(json)
# print the JSON string representation of the object
print(BucketHierarchicalNamespace.to_json())

# convert the object into a dict
bucket_hierarchical_namespace_dict = bucket_hierarchical_namespace_instance.to_dict()
# create an instance of BucketHierarchicalNamespace from a dict
bucket_hierarchical_namespace_from_dict = BucketHierarchicalNamespace.from_dict(bucket_hierarchical_namespace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



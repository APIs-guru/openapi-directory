# DatasetTagsInner

A global tag managed by Resource Manager. https://cloud.google.com/iam/docs/tags-access-control#definitions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag_key** | **str** | Required. The namespaced friendly name of the tag key, e.g. \&quot;12345/environment\&quot; where 12345 is org id. | [optional] 
**tag_value** | **str** | Required. The friendly short name of the tag value, e.g. \&quot;production\&quot;. | [optional] 

## Example

```python
from openapi_client.models.dataset_tags_inner import DatasetTagsInner

# TODO update the JSON string below
json = "{}"
# create an instance of DatasetTagsInner from a JSON string
dataset_tags_inner_instance = DatasetTagsInner.from_json(json)
# print the JSON string representation of the object
print(DatasetTagsInner.to_json())

# convert the object into a dict
dataset_tags_inner_dict = dataset_tags_inner_instance.to_dict()
# create an instance of DatasetTagsInner from a dict
dataset_tags_inner_from_dict = DatasetTagsInner.from_dict(dataset_tags_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



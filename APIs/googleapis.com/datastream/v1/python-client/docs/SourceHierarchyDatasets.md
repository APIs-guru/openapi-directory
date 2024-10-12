# SourceHierarchyDatasets

Destination datasets are created so that hierarchy of the destination data objects matches the source hierarchy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_template** | [**DatasetTemplate**](DatasetTemplate.md) |  | [optional] 

## Example

```python
from openapi_client.models.source_hierarchy_datasets import SourceHierarchyDatasets

# TODO update the JSON string below
json = "{}"
# create an instance of SourceHierarchyDatasets from a JSON string
source_hierarchy_datasets_instance = SourceHierarchyDatasets.from_json(json)
# print the JSON string representation of the object
print(SourceHierarchyDatasets.to_json())

# convert the object into a dict
source_hierarchy_datasets_dict = source_hierarchy_datasets_instance.to_dict()
# create an instance of SourceHierarchyDatasets from a dict
source_hierarchy_datasets_from_dict = SourceHierarchyDatasets.from_dict(source_hierarchy_datasets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# TaxonomyNodeInsertVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enforce_parent_matching** | **bool** | Enforces parent nodes to match on a content if the current node matches | [optional] 
**name** | **str** | Taxonomy name | 
**nodes** | **List[object]** | The list of sub-nodes associated with the current taxonomy node | [optional] 
**topics** | [**List[TaxonomyTopic]**](TaxonomyTopic.md) | The list of the topics associated with the current taxonomy node | [optional] 

## Example

```python
from openapi_client.models.taxonomy_node_insert_version import TaxonomyNodeInsertVersion

# TODO update the JSON string below
json = "{}"
# create an instance of TaxonomyNodeInsertVersion from a JSON string
taxonomy_node_insert_version_instance = TaxonomyNodeInsertVersion.from_json(json)
# print the JSON string representation of the object
print(TaxonomyNodeInsertVersion.to_json())

# convert the object into a dict
taxonomy_node_insert_version_dict = taxonomy_node_insert_version_instance.to_dict()
# create an instance of TaxonomyNodeInsertVersion from a dict
taxonomy_node_insert_version_from_dict = TaxonomyNodeInsertVersion.from_dict(taxonomy_node_insert_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



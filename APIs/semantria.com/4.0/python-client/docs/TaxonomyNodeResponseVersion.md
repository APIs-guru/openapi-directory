# TaxonomyNodeResponseVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enforce_parent_matching** | **bool** | Enforces parent nodes to match on a content if the current node matches | [optional] 
**id** | **str** | Unique taxonomy node identifier | 
**modified** | **str** | The timestamp of the latest update of the record. Creation date of update didn&#39;t occur | 
**name** | **str** | Taxonomy name | 
**nodes** | **List[object]** | The list of sub-nodes associated with the current taxonomy node | [optional] 
**topics** | [**List[TaxonomyTopic]**](TaxonomyTopic.md) | The list of the topics associated with the current taxonomy node | [optional] 

## Example

```python
from openapi_client.models.taxonomy_node_response_version import TaxonomyNodeResponseVersion

# TODO update the JSON string below
json = "{}"
# create an instance of TaxonomyNodeResponseVersion from a JSON string
taxonomy_node_response_version_instance = TaxonomyNodeResponseVersion.from_json(json)
# print the JSON string representation of the object
print(TaxonomyNodeResponseVersion.to_json())

# convert the object into a dict
taxonomy_node_response_version_dict = taxonomy_node_response_version_instance.to_dict()
# create an instance of TaxonomyNodeResponseVersion from a dict
taxonomy_node_response_version_from_dict = TaxonomyNodeResponseVersion.from_dict(taxonomy_node_response_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



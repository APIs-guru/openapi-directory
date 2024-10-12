# TaxonomyTopic


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique taxonomy topic identifier | [optional] 
**type** | **str** | Type of the topic (category or query) associated with the certain taxonomy node | 

## Example

```python
from openapi_client.models.taxonomy_topic import TaxonomyTopic

# TODO update the JSON string below
json = "{}"
# create an instance of TaxonomyTopic from a JSON string
taxonomy_topic_instance = TaxonomyTopic.from_json(json)
# print the JSON string representation of the object
print(TaxonomyTopic.to_json())

# convert the object into a dict
taxonomy_topic_dict = taxonomy_topic_instance.to_dict()
# create an instance of TaxonomyTopic from a dict
taxonomy_topic_from_dict = TaxonomyTopic.from_dict(taxonomy_topic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



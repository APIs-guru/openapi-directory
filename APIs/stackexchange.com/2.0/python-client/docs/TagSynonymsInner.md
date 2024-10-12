# TagSynonymsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_count** | **int** |  | [optional] 
**creation_date** | **int** |  | [optional] 
**from_tag** | **str** |  | [optional] 
**last_applied_date** | **int** |  | [optional] 
**to_tag** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.tag_synonyms_inner import TagSynonymsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TagSynonymsInner from a JSON string
tag_synonyms_inner_instance = TagSynonymsInner.from_json(json)
# print the JSON string representation of the object
print(TagSynonymsInner.to_json())

# convert the object into a dict
tag_synonyms_inner_dict = tag_synonyms_inner_instance.to_dict()
# create an instance of TagSynonymsInner from a dict
tag_synonyms_inner_from_dict = TagSynonymsInner.from_dict(tag_synonyms_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



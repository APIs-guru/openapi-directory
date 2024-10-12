# TagWikisInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** |  | [optional] 
**body_last_edit_date** | **int** |  | [optional] 
**excerpt** | **str** |  | [optional] 
**excerpt_last_edit_date** | **int** |  | [optional] 
**last_body_editor** | [**AnswersInnerLastEditor**](AnswersInnerLastEditor.md) |  | [optional] 
**last_excerpt_editor** | [**AnswersInnerLastEditor**](AnswersInnerLastEditor.md) |  | [optional] 
**tag_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.tag_wikis_inner import TagWikisInner

# TODO update the JSON string below
json = "{}"
# create an instance of TagWikisInner from a JSON string
tag_wikis_inner_instance = TagWikisInner.from_json(json)
# print the JSON string representation of the object
print(TagWikisInner.to_json())

# convert the object into a dict
tag_wikis_inner_dict = tag_wikis_inner_instance.to_dict()
# create an instance of TagWikisInner from a dict
tag_wikis_inner_from_dict = TagWikisInner.from_dict(tag_wikis_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



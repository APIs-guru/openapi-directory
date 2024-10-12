# WebEntity

Entity deduced from similar images on the Internet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Canonical description of the entity, in English. | [optional] 
**entity_id** | **str** | Opaque entity ID. | [optional] 
**score** | **float** | Overall relevancy score for the entity. Not normalized and not comparable across different image queries. | [optional] 

## Example

```python
from openapi_client.models.web_entity import WebEntity

# TODO update the JSON string below
json = "{}"
# create an instance of WebEntity from a JSON string
web_entity_instance = WebEntity.from_json(json)
# print the JSON string representation of the object
print(WebEntity.to_json())

# convert the object into a dict
web_entity_dict = web_entity_instance.to_dict()
# create an instance of WebEntity from a dict
web_entity_from_dict = WebEntity.from_dict(web_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



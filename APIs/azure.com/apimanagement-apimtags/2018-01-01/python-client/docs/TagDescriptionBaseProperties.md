# TagDescriptionBaseProperties

Parameters supplied to the Create TagDescription operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the Tag. | [optional] 
**external_docs_description** | **str** | Description of the external resources describing the tag. | [optional] 
**external_docs_url** | **str** | Absolute URL of external resources describing the tag. | [optional] 

## Example

```python
from openapi_client.models.tag_description_base_properties import TagDescriptionBaseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TagDescriptionBaseProperties from a JSON string
tag_description_base_properties_instance = TagDescriptionBaseProperties.from_json(json)
# print the JSON string representation of the object
print(TagDescriptionBaseProperties.to_json())

# convert the object into a dict
tag_description_base_properties_dict = tag_description_base_properties_instance.to_dict()
# create an instance of TagDescriptionBaseProperties from a dict
tag_description_base_properties_from_dict = TagDescriptionBaseProperties.from_dict(tag_description_base_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



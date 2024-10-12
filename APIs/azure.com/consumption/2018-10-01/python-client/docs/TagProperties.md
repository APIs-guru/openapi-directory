# TagProperties

The properties of the tag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | [**List[Tag]**](Tag.md) | A list of Tag. | [optional] 

## Example

```python
from openapi_client.models.tag_properties import TagProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TagProperties from a JSON string
tag_properties_instance = TagProperties.from_json(json)
# print the JSON string representation of the object
print(TagProperties.to_json())

# convert the object into a dict
tag_properties_dict = tag_properties_instance.to_dict()
# create an instance of TagProperties from a dict
tag_properties_from_dict = TagProperties.from_dict(tag_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



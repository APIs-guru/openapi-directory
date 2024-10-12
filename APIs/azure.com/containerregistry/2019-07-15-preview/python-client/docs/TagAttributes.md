# TagAttributes

Tag attributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_name** | **str** | Image name | [optional] 
**registry** | **str** | Registry name | [optional] 
**tag** | [**TagAttributesTag**](TagAttributesTag.md) |  | [optional] 

## Example

```python
from openapi_client.models.tag_attributes import TagAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of TagAttributes from a JSON string
tag_attributes_instance = TagAttributes.from_json(json)
# print the JSON string representation of the object
print(TagAttributes.to_json())

# convert the object into a dict
tag_attributes_dict = tag_attributes_instance.to_dict()
# create an instance of TagAttributes from a dict
tag_attributes_from_dict = TagAttributes.from_dict(tag_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



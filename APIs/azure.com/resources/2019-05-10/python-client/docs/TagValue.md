# TagValue

Tag information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | [**TagCount**](TagCount.md) |  | [optional] 
**id** | **str** | The tag ID. | [optional] [readonly] 
**tag_value** | **str** | The tag value. | [optional] 

## Example

```python
from openapi_client.models.tag_value import TagValue

# TODO update the JSON string below
json = "{}"
# create an instance of TagValue from a JSON string
tag_value_instance = TagValue.from_json(json)
# print the JSON string representation of the object
print(TagValue.to_json())

# convert the object into a dict
tag_value_dict = tag_value_instance.to_dict()
# create an instance of TagValue from a dict
tag_value_from_dict = TagValue.from_dict(tag_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



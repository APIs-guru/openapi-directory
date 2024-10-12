# TagList

List of tag details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_name** | **str** | Image name | [optional] 
**registry** | **str** | Registry name | [optional] 
**tags** | [**List[TagAttributesBase]**](TagAttributesBase.md) | List of tag attribute details | [optional] 

## Example

```python
from openapi_client.models.tag_list import TagList

# TODO update the JSON string below
json = "{}"
# create an instance of TagList from a JSON string
tag_list_instance = TagList.from_json(json)
# print the JSON string representation of the object
print(TagList.to_json())

# convert the object into a dict
tag_list_dict = tag_list_instance.to_dict()
# create an instance of TagList from a dict
tag_list_from_dict = TagList.from_dict(tag_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


